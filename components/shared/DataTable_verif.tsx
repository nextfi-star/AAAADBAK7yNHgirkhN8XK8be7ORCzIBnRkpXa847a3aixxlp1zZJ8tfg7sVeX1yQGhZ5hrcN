'use client'
import React, { useEffect, useState } from 'react'
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Chip,
	User,
	Pagination,
	Selection,
	SortDescriptor,
} from '@heroui/react'

import { VerticalDotsIcon } from './VerticalDotsIcon'
import { ChevronDownIcon } from './ChevronDownIcon'
import { SearchIcon } from './SearchIcon'
import { capitalize } from './utils'
import { columns, statusOptions, users } from './data'
import { useTranslations } from 'next-intl'
import { getUserBalanceArray } from '@/utils/api'
import { useUserStore } from '@/hooks/useUserData'

// const statusColorMap: Record<string, ChipProps["color"]> = {
//   "+": "success",
//   "-": "danger",
// };

const INITIAL_VISIBLE_COLUMNS = ['name', 'holdings', 'pnl', 'actions']
interface BalanceItem {
	coin: string
	amount: number
	price_usdt: number
	value_usdt: number
	pnl?: string
}
interface UserBalanceTableProps {
	csrf: string
}

export default function DataTable_verif() {
	const t = useTranslations('tablesAssets')
	const [balances, setBalances] = useState<BalanceItem[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const csrf = useUserStore(state => state.user?.csrf)
	useEffect(() => {
		async function fetchData() {
			const data = await getUserBalanceArray(csrf!)
			if (data) {
				setBalances(data)
			}
			setLoading(false)
		}
		fetchData()
	}, [csrf])

	const [filterValue, setFilterValue] = React.useState('')
	const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]))
	const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
		new Set(INITIAL_VISIBLE_COLUMNS)
	)
	const [statusFilter, setStatusFilter] = React.useState<Selection>('all')
	const [rowsPerPage, setRowsPerPage] = React.useState(5)
	const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
		column: 'age',
		direction: 'ascending',
	})

	const [page, setPage] = React.useState(1)

	const hasSearchFilter = Boolean(filterValue)

	const headerColumns = React.useMemo(() => {
		if (visibleColumns === 'all') return columns

		return columns.filter(column =>
			Array.from(visibleColumns).includes(column.uid)
		)
	}, [visibleColumns])

	const filteredItems = React.useMemo(() => {
		let filteredbalances = [...balances]

		if (hasSearchFilter) {
			filteredbalances = filteredbalances.filter(user =>
				user.coin.toLowerCase().includes(filterValue.toLowerCase())
			)
		}
		if (
			statusFilter !== 'all' &&
			Array.from(statusFilter).length !== statusOptions.length
		) {
			filteredbalances = filteredbalances.filter(user =>
				Array.from(statusFilter).includes(user?.pnl || '')
			)
		}

		return filteredbalances
	}, [balances, filterValue, statusFilter])

	const pages = Math.ceil(filteredItems.length / rowsPerPage)

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage
		const end = start + rowsPerPage

		return filteredItems.slice(start, end)
	}, [page, filteredItems, rowsPerPage])

	const sortedItems = React.useMemo(() => {
		return [...items].sort((a: BalanceItem, b: BalanceItem) => {
			const first = a[sortDescriptor.column as keyof BalanceItem] as number
			const second = b[sortDescriptor.column as keyof BalanceItem] as number
			const cmp = first < second ? -1 : first > second ? 1 : 0

			return sortDescriptor.direction === 'descending' ? -cmp : cmp
		})
	}, [sortDescriptor, items])

	const renderCell = React.useCallback(
		(user: BalanceItem, columnKey: React.Key) => {
			const cellValue = user[columnKey as keyof BalanceItem]

			switch (columnKey) {
				case 'name':
					return (
						<User
							avatarProps={{
								radius: 'full',
								src: `/crypto/${user.coin.toLocaleLowerCase()}.svg`,
							}}
							classNames={{
								base: '!bg-transparent flex items-center justify-start',
								name: '!bg-transparent ',
								description: '!bg-transparent ',
								wrapper: '!bg-transparent ',
							}}
							description={user.coin}
							name={cellValue}
						>
							{user.coin}
						</User>
					)
				case 'holdings':
					return (
						<div className='flex flex-col'>
							<p className='text-bold text-small capitalize'>{cellValue}</p>
							<p className='text-bold text-tiny capitalize text-default-400'>
								{user.amount}
							</p>
						</div>
					)
				case 'actions':
					return (
						<div className='relative flex justify-center items-center gap-2'>
							<Dropdown>
								<DropdownTrigger>
									<Button isIconOnly size='sm' variant='light'>
										<VerticalDotsIcon className='text-default-300' />
									</Button>
								</DropdownTrigger>
								<DropdownMenu>
									<DropdownItem key='view'>{t('view')}</DropdownItem>
									<DropdownItem key='edit'>{t('edit')}</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					)
				default:
					return cellValue
			}
		},
		[]
	)

	const onNextPage = React.useCallback(() => {
		if (page < pages) {
			setPage(page + 1)
		}
	}, [page, pages])

	const onPreviousPage = React.useCallback(() => {
		if (page > 1) {
			setPage(page - 1)
		}
	}, [page])

	const onRowsPerPageChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			setRowsPerPage(Number(e.target.value))
			setPage(1)
		},
		[]
	)

	const onSearchChange = React.useCallback((value?: string) => {
		if (value) {
			setFilterValue(value)
			setPage(1)
		} else {
			setFilterValue('')
		}
	}, [])

	const onClear = React.useCallback(() => {
		setFilterValue('')
		setPage(1)
	}, [])

	const topContent = React.useMemo(() => {
		return (
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between gap-3 items-end px-[20px]'>
					<Input
						isClearable
						className='w-full sm:max-w-[44%]'
						placeholder={t('searchName')}
						startContent={<SearchIcon />}
						value={filterValue}
						onClear={() => onClear()}
						onValueChange={onSearchChange}
					/>
					<div className='flex gap-3'>
						<Dropdown>
							<DropdownTrigger className='hidden sm:flex'>
								<Button
									endContent={<ChevronDownIcon className='text-small' />}
									variant='flat'
								>
									{t('status')}
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label='Table Columns'
								closeOnSelect={false}
								selectedKeys={statusFilter}
								selectionMode='multiple'
								onSelectionChange={setStatusFilter}
							>
								{statusOptions.map(status => (
									<DropdownItem key={status.uid} className='capitalize'>
										{capitalize(status.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Dropdown>
							<DropdownTrigger className='flex'>
								<Button
									endContent={<ChevronDownIcon className='text-small' />}
									variant='flat'
								>
									{t('columns')}
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label='Table Columns'
								closeOnSelect={false}
								selectedKeys={visibleColumns}
								selectionMode='multiple'
								onSelectionChange={setVisibleColumns}
							>
								{columns.map(column => (
									<DropdownItem key={column.uid} className='capitalize'>
										{capitalize(t(column.uid))}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</div>
		)
	}, [
		filterValue,
		statusFilter,
		visibleColumns,
		onSearchChange,
		onRowsPerPageChange,
		balances.length,
		hasSearchFilter,
	])

	const bottomContent = React.useMemo(() => {
		return (
			<div className='py-2 px-2 flex justify-center items-center'>
				<Pagination
					isCompact
					showControls
					showShadow
					color='primary'
					page={page}
					total={pages}
					onChange={setPage}
				/>
			</div>
		)
	}, [items.length, page, pages, hasSearchFilter])

	return (
		<Table
			isHeaderSticky
			aria-label='-Datatable for NextFi-'
			bottomContent={bottomContent}
			bottomContentPlacement='outside'
			classNames={{
				table: '!bg-transparent',
				tbody: '!shadow-none',
				wrapper: 'max-h-[382px] !bg-transparent shadow-none',
				td: 'text-center',
				th: 'text-center',
			}}
			// selectedKeys={selectedKeys} //! Отвечает за создание checkbox inputs
			// selectionMode='multiple' //! Отвечает за создание checkbox inputs
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement='outside'
			onSelectionChange={setSelectedKeys}
			onSortChange={setSortDescriptor}
		>
			<TableHeader columns={headerColumns}>
				{column => (
					<TableColumn
						key={column.uid}
						align={column.uid === 'actions' ? 'center' : 'start'}
						allowsSorting={column.sortable}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={'No balances found'} items={sortedItems}>
				{item => (
					<TableRow key={item.coin}>
						{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}
