'use client'
import {
	Button,
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
} from "@heroui/react"
import React from 'react'
import { ChevronDownIcon } from './ChevronDownIcon'
import { columnsDataD, statusOptionsDataD, usersDataD } from './data'
import { capitalize } from './utils'
import { VerticalDotsIcon } from './VerticalDotsIcon'
const statusColorMap: Record<string, ChipProps['color']> = {
	sent: 'success',
	denied: 'danger',
	pending: 'warning',
}
const INITIAL_VISIBLE_COLUMNS = [
	'time',
	'amount',
	'status',
]
type User = (typeof usersDataD)[0]
export default function Deposit_table_mobile() {
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
		if (visibleColumns === 'all') return columnsDataD
		return columnsDataD.filter(column =>
			Array.from(visibleColumns).includes(column.uid)
		)
	}, [visibleColumns])

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...usersDataD]

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter(user =>
				user.time.toLowerCase().includes(filterValue.toLowerCase())
			)
		}
		if (
			statusFilter !== 'all' &&
			Array.from(statusFilter).length !== statusOptionsDataD.length
		) {
			filteredUsers = filteredUsers.filter(user =>
				Array.from(statusFilter).includes(user.status)
			)
		}

		return filteredUsers
	}, [usersDataD, filterValue, statusFilter])

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
				return <span className='md:text-[20px]'>{user.time}</span>
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
							{user.subaddress}
						</span>
					</div>
				)
			case 'crypto':
				return <span className='md:text-[20px]'> {user.crypto}</span>
			case 'amount':
				return <span className='md:text-[20px]'> {user.amount}</span>
		
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
                    (<span className='capitalize md:text-[20px]'>{user.status}</span>)
                );
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
								<DropdownItem key="view">View</DropdownItem>
								<DropdownItem key="edit">Edit</DropdownItem>
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
					<h1 className='text-[20px] xl:text-[32px]'>All deposits</h1>
					<div className='flex gap-3'>
						<Dropdown>
							<DropdownTrigger className='hidden sm:flex'>
								<Button
									endContent={<ChevronDownIcon className='md:!text-[20px]' />}
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
								{statusOptionsDataD.map(status => (
									<DropdownItem
										key={status.uid}
										className='capitalize md:!text-[20px]'
									>
										{capitalize(status.name)}
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
									Columns
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
								{columnsDataD.map(column => (
									<DropdownItem
										key={column.uid}
										className='capitalize md:text-[20px] '
									>
										{capitalize(column.name)}
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
		columnsDataD.length,
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
				base: 'dark:!bg-[#1e1e1e66] !bg-[#FFFFFF66] shadow-medium dark:!shadow-none rounded-[30px] px-[20px]',
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
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={'Not found'} items={sortedItems}>
				{item => (
					<TableRow key={item.id}>
						{columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}
