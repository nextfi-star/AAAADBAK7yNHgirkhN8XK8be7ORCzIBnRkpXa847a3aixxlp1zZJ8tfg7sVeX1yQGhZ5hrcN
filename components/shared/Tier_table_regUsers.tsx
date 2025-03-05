import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

interface Props {
	title?: string
}
const Tier_table_regUsers = ({ title }: Props) => {
	const t = useTranslations('tier')
	const rows = useMemo(
		() => [
			{
				key: '1',
				tier: t('userTier'),
				total: '0 ' + t('exp'),
				assets: '10 ' + t('points'),
				maker: t('noBonus'),
				taker: t('refExp'),
				withdrawal: t('none'),
			},
			{
				key: '2',
				tier: t('investor'),
				total: '10 ' + t('exp'),
				assets: '10 ' + t('points'),
				maker: t('profitAb'),
				taker: t('refExp'),
				withdrawal: t('none'),
			},
			{
				key: '3',
				tier: t('advancedInv'),
				total: '30 ' + t('exp'),
				assets: '10 ' + t('points'),
				maker: t('profitAb'),
				taker: t('refExp'),
				withdrawal: t('minusPers'),
			},
			{
				key: '4',
				tier: t('experInv'),
				total: '60 ' + t('exp'),
				assets: '10 ' + t('points'),
				maker: t('profitAb'),
				taker: t('refExp'),
				withdrawal: t('partWith'),
			},
			{
				key: '5',
				tier: t('expert'),
				total: '100 ' + t('exp'),
				assets: '10 ' + t('points'),
				maker: t('profitAb2'),
				taker: t('refExp'),
				withdrawal: t('expertWith'),
			},
			{
				key: '6',
				tier: 'VIP',
				total: '150 ' + t('exp'),
				assets: '10 ' + t('points'),
				maker: t('profitAb2'),
				taker: t('refExp'),
				withdrawal: t('noFee'),
			},
		],
		[]
	)
	const columns = useMemo(
		() => [
			{
				key: 'tier',
				label: t('tier'),
			},
			{
				key: 'total',
				label: t('reqExp'),
			},
			{
				key: 'assets',
				label: t('pointsSucc'),
			},
			{
				key: 'maker',
				label: t('bonus'),
			},
			{
				key: 'taker',
				label: t('refBonus'),
			},
			{
				key: 'withdrawal',
				label: t('withFeat'),
			},
		],
		[]
	)
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
