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
}
const Tier_table_regUsers: NextPage<Props> = ({ title }) => {

	const rows = [
		{
			key: '1',
			tier: 'Beginner',
			total: '0 experience',
			assets: '10 points',
			maker: 'No bonuses',
			taker: '10% of referral experience',
			withdrawal: 'None',
		},
		{
			key: '2',
			tier: 'Investor',
			total: '10 experience',
			assets: '10 points',
			maker: '+1% to profitability',
			taker: '10% of referral experience',
			withdrawal: 'None',
		},
		{
			key: '3',
			tier: 'Advanced Investor',
			total: '30 experience',
			assets: '10 points',
			maker: '+1% to profitability',
			taker: '10% of referral experience',
			withdrawal: '-1% fee for early withdrawal',
		},
		{
			key: '4',
			tier: 'Experienced Investor',
			total: '60 experience',
			assets: '10 points',
			maker: '+1.5% to profitability',
			taker: '10% of referral experience',
			withdrawal: 'Partial withdrawal (up to 20%)',
		},
		{
			key: '5',
			tier: 'Expert',
			total: '100 experience',
			assets: '10 points',
			maker: '+2% to profitability',
			taker: '10% of referral experience',
			withdrawal:
				'-2% fee for early withdrawal, -20% investment term for specific asset types',
		},
		{
			key: '6',
			tier: 'VIP',
			total: '150 experience',
			assets: '10 points',
			maker: '+2% to profitability',
			taker: '10% of referral experience',
			withdrawal:
				'No fee for early withdrawal, -30% investment term for any assets',
		},
	]
	const columns = [
		{
			key: 'tier',
			label: 'Tier',
		},
		{
			key: 'total',
			label: 'Required experience',
		},
		{
			key: 'assets',
			label: 'Points for successful investment',
		},
		{
			key: 'maker',
			label: 'Bonuses',
		},
		{
			key: 'taker',
			label: 'Referral bonuses',
		},
		{
			key: 'withdrawal',
			label: 'Withdrawal features',
		},
	]
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
				wrapper:
					'dark:bg-[#1E1E1E66] bg-[#fff] px-[20px] pb-[20px] shadow-medium dark:shadow-none py-[40px]',
				td: 'text-center border-1 border-solid dark:border-white whitespace-nowrap',
				th: 'text-center md:text-[20px] outline-0 border-1 border-solid dark:border-white shadow-none bg-transparent',
				base: '!shadow-none',
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
