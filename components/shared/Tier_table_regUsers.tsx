import { Columns, Rows } from '@/app/[locale]/(profile)/tier/page'
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from '@nextui-org/react'
import { NextPage } from 'next'

interface Props {
	title?: string
	rows: Rows
	columns: Columns
}
const Tier_table_regUsers: NextPage<Props> = ({ title, rows, columns }) => {
	return (
		<Table
			aria-label='Data tabel for reg Users'
			topContent={
				<h1 className='text-[32px] font-medium w-full text-center flex-shrink-0 whitespace-nowrap'>
					{title}
				</h1>
			}
			classNames={{
				table: 'border-1 border-solid dark:border-white',
				tr: 'bg-transparent !outline-0 !border-0 !shadow-none',
				wrapper: 'dark:bg-[#1E1E1E66] bg-[#fff] px-[20px] pb-[20px] shadow-medium',
				td: 'text-center border-1 border-solid dark:border-white whitespace-nowrap',
				th: 'text-center md:text-[20px] outline-0 border-1 border-solid dark:border-white shadow-none bg-transparent',
				base: '!shadow-none ',
				tbody: '!shadow-none',
			}}
		>
			<TableHeader columns={columns}>
				{column => <TableColumn key={column.key}>{column.label}</TableColumn>}
			</TableHeader>
			<TableBody items={rows}>
				{item => (
					<TableRow key={item.key}>
						{columnKey => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}
export default Tier_table_regUsers
