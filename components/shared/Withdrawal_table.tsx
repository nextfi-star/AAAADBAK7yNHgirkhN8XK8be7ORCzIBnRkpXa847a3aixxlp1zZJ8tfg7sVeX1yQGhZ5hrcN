'use client'
import React from 'react'
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Button,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	User,
	Pagination,
	Selection,
	ChipProps,
	SortDescriptor,
	Snippet,
} from '@nextui-org/react'
import { VerticalDotsIcon } from './VerticalDotsIcon'
import { ChevronDownIcon } from './ChevronDownIcon'
import { capitalize } from './utils'
import { columnsDataW, statusOptionsDataW, usersDataW } from './data'

const statusColorMap: Record<string, ChipProps['color']> = {
	sent: 'success',
	denied: 'danger',
	pending: 'warning',
}

const INITIAL_VISIBLE_COLUMNS = [
	'time',
	'address',
	'crypto',
	'amount',
	'fee',
	'status',
]

type User = (typeof usersDataW)[0]

export default function Withdrawal_table() {
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
		let filteredUsers = [...usersDataW]

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
	}, [usersDataW, filterValue, statusFilter])

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
				return <span>{user.time}</span>
			case 'address':
				return (
					<div className='flex flex-col items-start gap-[5px]'>
						<div className='flex items-center gap-[5px] '>
							<Snippet
								symbol=''
								className='text-bold text-small capitalize overflow-ellipsis whitespace-nowrap overflow-hidden bg-transparent px-0'
							>
								{user.address}
							</Snippet>
						</div>
						<span>{user.subaddress}</span>
					</div>
				)
			case 'crypto':
				return <span> {user.crypto}</span>
			case 'amount':
				return <span> {user.amount}</span>
			case 'fee':
				return <span> {user.fee}</span>
			case 'status':
				return (
					// <Chip
					// 	className='capitalize'
					// 	color={statusColorMap[user.status]}
					// 	size='sm'
					// 	variant='flat'
					// >
					// 	{user.status}
					// </Chip>
					<span className='capitalize'>{user.status}</span>
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
								<DropdownItem>View</DropdownItem>
								<DropdownItem>Edit</DropdownItem>
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
				<div className='flex justify-between gap-3 items-end'>
					<h1 className='text-[20px] xl:text-[32px]'>All withdrawals</h1>
					<div className='flex gap-3'>
						<Dropdown>
							<DropdownTrigger className='hidden sm:flex'>
								<Button
									endContent={<ChevronDownIcon className='text-small' />}
									variant='flat'
								>
									Status
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
									<DropdownItem key={status.uid} className='capitalize'>
										{capitalize(status.name)}
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
		usersDataW.length,
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
				wrapper: 'min-h-[503px] max-h-[503px]',
				td: 'text-center',
				th: 'text-center',
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
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={'No users found'} items={sortedItems}>
				{item => (
					<TableRow key={item.id}>
						{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}
