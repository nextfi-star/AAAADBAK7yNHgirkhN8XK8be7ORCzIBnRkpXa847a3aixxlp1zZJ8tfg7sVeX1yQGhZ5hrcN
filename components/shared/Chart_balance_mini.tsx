'use client'
import * as React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'
import { useThemeStore } from '@/store/useChatStore'

const chartData = [
	{
		date: '2024-04-01',
		deposit: 222,
		withdraw: 150,
		swap: 320,
		investment: 564654,
	},
	{
		date: '2024-04-02',
		deposit: 97,
		withdraw: 180,
		swap: 121,
		investment: 564654,
	},
	{
		date: '2024-04-03',
		deposit: 167,
		withdraw: 120,
		swap: 367,
		investment: 564654,
	},
	{
		date: '2024-04-04',
		deposit: 242,
		withdraw: 260,
		swap: 272,
		investment: 564654,
	},
	{
		date: '2024-04-05',
		deposit: 373,
		withdraw: 290,
		swap: 410,
		investment: 564654,
	},
	{
		date: '2024-04-06',
		deposit: 301,
		withdraw: 340,
		swap: 97,
		investment: 564654,
	},
	{
		date: '2024-04-07',
		deposit: 245,
		withdraw: 180,
		swap: 155,
		investment: 564654,
	},
	{
		date: '2024-04-08',
		deposit: 409,
		withdraw: 320,
		swap: 445,
		investment: 564654,
	},
	{
		date: '2024-04-09',
		deposit: 59,
		withdraw: 110,
		swap: 80,
		investment: 564654,
	},
	{
		date: '2024-04-10',
		deposit: 261,
		withdraw: 190,
		swap: 210,
		investment: 564654,
	},
	{
		date: '2024-04-11',
		deposit: 327,
		withdraw: 350,
		swap: 301,
		investment: 564654,
	},
	{
		date: '2024-04-12',
		deposit: 292,
		withdraw: 210,
		swap: 381,
		investment: 564654,
	},
	{
		date: '2024-04-13',
		deposit: 342,
		withdraw: 380,
		swap: 134,
		investment: 564654,
	},
	{
		date: '2024-04-14',
		deposit: 137,
		withdraw: 220,
		swap: 203,
		investment: 564654,
	},
	{
		date: '2024-04-15',
		deposit: 120,
		withdraw: 170,
		swap: 399,
		investment: 564654,
	},
	{
		date: '2024-04-16',
		deposit: 138,
		withdraw: 190,
		swap: 109,
		investment: 564654,
	},
	{
		date: '2024-04-17',
		deposit: 446,
		withdraw: 360,
		swap: 423,
		investment: 564654,
	},
	{
		date: '2024-04-18',
		deposit: 364,
		withdraw: 410,
		swap: 285,
		investment: 564654,
	},
	{
		date: '2024-04-19',
		deposit: 243,
		withdraw: 180,
		swap: 193,
		investment: 564654,
	},
	{
		date: '2024-04-20',
		deposit: 89,
		withdraw: 150,
		swap: 121,
		investment: 564654,
	},
	{
		date: '2024-04-21',
		deposit: 137,
		withdraw: 200,
		swap: 275,
		investment: 564654,
	},
	{
		date: '2024-04-22',
		deposit: 224,
		withdraw: 170,
		swap: 365,
		investment: 564654,
	},
	{
		date: '2024-04-23',
		deposit: 138,
		withdraw: 230,
		swap: 91,
		investment: 564654,
	},
	{
		date: '2024-04-24',
		deposit: 387,
		withdraw: 290,
		swap: 323,
		investment: 564654,
	},
	{
		date: '2024-04-25',
		deposit: 215,
		withdraw: 250,
		swap: 183,
		investment: 564654,
	},
	{
		date: '2024-04-26',
		deposit: 75,
		withdraw: 130,
		swap: 402,
		investment: 564654,
	},
	{
		date: '2024-04-27',
		deposit: 383,
		withdraw: 420,
		swap: 95,
		investment: 564654,
	},
	{
		date: '2024-04-28',
		deposit: 122,
		withdraw: 180,
		swap: 307,
		investment: 564654,
	},
	{
		date: '2024-04-29',
		deposit: 315,
		withdraw: 240,
		swap: 217,
		investment: 564654,
	},
	{
		date: '2024-04-30',
		deposit: 454,
		withdraw: 380,
		swap: 111,
		investment: 564654,
	},
]

const chartConfig = {
	deposit: {
		label: 'Deposit',
		color: 'hsl(220 70% 50%)',
	},
	withdraw: {
		label: 'Withdraw',
		color: 'hsl(220 70% 50%)',
	},
	swap: {
		label: 'Swap',
		color: 'hsl(220 70% 50%)',
	},
	investment: {
		label: 'Investment',
		color: 'hsl(220 70% 50%)',
	},
}

type ChartKey = keyof typeof chartConfig

export default function Chart_balance_mini() {
	const { verifyState } = useThemeStore()
	const [activeChart, setActiveChart] = React.useState<ChartKey>('deposit')
	const getRandomInvestment = () =>
		Math.floor(Math.random() * (450 - 50 + 1)) + 50
	const updatedChartData = chartData.map(item => ({
		...item,
		investment: getRandomInvestment(),
	}))

	const total = React.useMemo(
		() => ({
			deposit: updatedChartData.reduce((acc, curr) => acc + curr.deposit, 0),
			withdraw: updatedChartData.reduce((acc, curr) => acc + curr.withdraw, 0),
			swap: updatedChartData.reduce((acc, curr) => acc + curr.swap, 0),
			investment: updatedChartData.reduce(
				(acc, curr) => acc + curr.investment,
				0
			),
		}),
		[]
	)

	return (
		<Card>
			<CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'></CardHeader>
			<CardContent className='px-2 sm:p-6'>
				<ChartContainer
					className='aspect-auto h-[250px] w-full'
					config={chartConfig}
				>
					<BarChart
						data={updatedChartData}
						margin={{
							left: 12,
							right: 12,
						}}
						className='chart__mini'
					>
						<CartesianGrid vertical={false} />
						<XAxis
							axisLine={false}
							dataKey='date'
							minTickGap={32}
							tickFormatter={value => {
								const date = new Date(value)
								return date.toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
								})
							}}
							tickLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className='w-[150px]'
									labelFormatter={value => {
										return new Date(value).toLocaleDateString('en-US', {
											month: 'short',
											day: 'numeric',
											year: 'numeric',
										})
									}}
								/>
							}
						/>
						<Bar dataKey={activeChart} fill={chartConfig[activeChart].color} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
