'use client'
import {
	Button,
	Chip,
	ChipProps,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Pagination,
	Selection,
	Snippet,
	SortDescriptor,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	User,
} from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { ChevronDownIcon } from './ChevronDownIcon'
import { columnsDataW, statusOptionsDataW, usersDataW } from './data'
import { capitalize } from './utils'
import { VerticalDotsIcon } from './VerticalDotsIcon'
import { useTranslations } from 'next-intl'
import { getWithdrawHistory } from '@/utils/api'
import { useUserStore } from '@/hooks/useUserData'

const statusColorMap: Record<string, ChipProps['color']> = {
	1: 'success',
	2: 'danger',
	0: 'warning',
}

const INITIAL_VISIBLE_COLUMNS = [
	'time',
	'amount',
	'status',
	'address',
	'crypto',
]

type User = {
	id: number
	time: string
	address: string
	network: string
	coin: string
	amount: number
	status: number
	type: string
}

export default function Withdrawal_table() {
	const t = useTranslations('tablesWithdrawal')
	const [withdraws, setWithdraws] = useState<any[]>([])
	const csrf = useUserStore(state => state.user?.csrf)
	const fetchHistory = async () => {
		if (!csrf) return
		const result = await getWithdrawHistory(csrf)
		if (result.error) {
			setWithdraws([])
		} else {
			setWithdraws(result.data || [])
		}
	}
	useEffect(() => {
		if (csrf) {
			fetchHistory()
			const intervalId = setInterval(() => {
				fetchHistory()
			}, 20000)
			return () => clearInterval(intervalId)
		}
	}, [csrf])
	const [filterValue, setFilterValue] = React.useState('')
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
		if (visibleColumns === 'all') return columnsDataW

		return columnsDataW.filter(column =>
			Array.from(visibleColumns).includes(column.uid)
		)
	}, [visibleColumns])

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...withdraws]

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter(user =>
				user.time.toLowerCase().includes(filterValue.toLowerCase())
			)
		}
		if (
			statusFilter !== 'all' &&
			Array.from(statusFilter).length !== statusOptionsDataW.length
		) {
			filteredUsers = filteredUsers.filter(user =>
				Array.from(statusFilter).includes(user.status)
			)
		}

		return filteredUsers
	}, [withdraws, filterValue, statusFilter])

	const pages = Math.ceil(filteredItems.length / rowsPerPage)

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage
		const end = start + rowsPerPage

		return filteredItems.slice(start, end)
	}, [page, filteredItems, rowsPerPage])

	const sortedItems = React.useMemo(() => {
		return [...items].sort((a: User, b: User) => {
			const first = a[sortDescriptor.column as keyof User] as number
			const second = b[sortDescriptor.column as keyof User] as number
			const cmp = first < second ? -1 : first > second ? 1 : 0

			return sortDescriptor.direction === 'descending' ? -cmp : cmp
		})
	}, [sortDescriptor, items])

	const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
		const cellValue = user[columnKey as keyof User]

		switch (columnKey) {
			case 'time':
				const date = new Date(Number(user.time) * 1000)
				const formattedDate = date.toLocaleDateString('en-GB')
				return <span className='md:text-[20px]'>{formattedDate}</span>
			case 'address':
				return (
					<div className='flex flex-col items-start gap-[5px]'>
						<div className='flex items-center gap-[5px] '>
							<Snippet
								symbol=''
								className='text-bold md:text-[20px] text-small capitalize overflow-ellipsis whitespace-nowrap overflow-hidden bg-transparent px-0'
							>
								{user.address}
							</Snippet>
						</div>
						<span className='md:text-[20px] font-medium text-[#BDBDBD]'>
							{user.network}
						</span>
					</div>
				)
			case 'crypto':
				return <span className='md:text-[20px]'> {user.coin}</span>
			case 'amount':
				return <span className='md:text-[20px]'> {user.amount}</span>
			case 'status':
				return (
					<Chip
						className='capitalize'
						color={statusColorMap[user.status]}
						size='sm'
						variant='flat'
					>
						{t(user.status === 0
							? 'pending'
							: user.status === 1
								? 'sent'
								: 'denied')}
					</Chip>
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
	}, [])

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

	const topContent = React.useMemo(() => {
		return (
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between gap-3 items-end p-[25px_20px_0px]'>
					<h1 className='text-[20px] xl:text-[32px]'>{t('allwithdrawals')}</h1>
					<div className='flex gap-3'>
						<Dropdown>
							<DropdownTrigger className='hidden sm:flex'>
								<Button
									endContent={<ChevronDownIcon className='md:!text-[20px]' />}
									variant='flat'
								>
									{t('statusLow')}
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
								{statusOptionsDataW.map(status => (
									<DropdownItem
										key={status.uid}
										className='capitalize md:!text-[20px]'
									>
										{capitalize(t(status.uid))}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Dropdown>
							<DropdownTrigger className='flex'>
								<Button
									endContent={<ChevronDownIcon className='md:!text-[20px]' />}
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
								{columnsDataW.map(column => (
									<DropdownItem
										key={column.uid}
										className='capitalize md:text-[20px] '
									>
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
		withdraws.length,
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
				base: 'dark:!bg-[#1e1e1e66] shadow-medium dark:!shadow-none !bg-[#FFFFFF66] rounded-[30px] px-[25px]',
				tbody: '!shadow-none',
				wrapper: 'max-h-[503px] !bg-transparent shadow-none',
				td: 'text-center',
				th: 'text-center md:text-[20px]',
			}}
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement='outside'
			onSortChange={setSortDescriptor}
		>
			<TableHeader columns={headerColumns}>
				{column => (
					<TableColumn
						key={column.uid}
						align={column.uid === 'actions' ? 'center' : 'start'}
						allowsSorting={column.sortable}
					>
						{t(column.uid)}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={t('notFound')} items={sortedItems}>
				{item => (
					<TableRow key={item.id}>
						{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}