// ! Datatable for verified
const columns = [
	{ name: 'NAME', uid: 'name', sortable: true },
	{ name: 'HOLDINGS', uid: 'holdings', sortable: true },
]
const statusOptions = [
	{ name: '+', uid: '+' },
	{ name: '-', uid: '-' },
]
const users = [
	{
		id: 1,
		name: 'ZRO', //! crypto name group-1
		avatar: '/payment_table/zro.svg', //! icon for crypto name group-1
		crypto: 'LayerZero', //! sub-crypto group-1
		holdings: '0.00068', //! holding independent element
		pnl: '+', //! PnL independent element
		percent: '+<$0.1',
	},
	{
		id: 2,
		name: 'USDT', //! crypto name group-1
		avatar: '/payment_table/teater.svg', //! icon for crypto name group-1
		crypto: 'Teather', //! sub-crypto group-1
		holdings: '0.00078', //! holding independent element
		pnl: '+', //! PnL independent element
		percent: '+<$0.3',
	},
	{
		id: 3,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '+', //! PnL independent element
		percent: '+<$0.5',
	},
	{
		id: 4,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '+', //! PnL independent element
		percent: '+<$0.5',
	},
	{
		id: 5,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '-', //! PnL independent element
		percent: '-<$0.5',
	},
	{
		id: 6,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '-', //! PnL independent element
		percent: '-<$0.5',
	},
	{
		id: 7,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '-', //! PnL independent element
		percent: '-<$0.5',
	},
	{
		id: 8,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '-', //! PnL independent element
		percent: '-<$0.5',
	},
	{
		id: 9,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '-', //! PnL independent element
		percent: '-<$0.5',
	},
	{
		id: 10,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '-', //! PnL independent element
		percent: '-<$0.5',
	},
	{
		id: 11,
		name: 'TRX', //! crypto name group-1
		avatar: '/payment_table/trx.svg', //! icon for crypto name group-1
		crypto: 'TRON', //! sub-crypto group-1
		holdings: '0.00098', //! holding independent element
		pnl: '-', //! PnL independent element
		percent: '-<$0.5',
	},
]

export { columns, users, statusOptions }

// ! Datatable for not-verified

// ? CURRENT DATA TABLE
const columnsData = [
	{ name: 'DESTINATION', uid: 'destination', sortable: true },
	{ name: 'THE AMOUNT', uid: 'amount', sortable: true },
	// { name: 'PNL', uid: 'pnl', sortable: true },
	{ name: 'PERCENT', uid: 'percent', sortable: true },
	{ name: 'SUM TOTAL', uid: 'total', sortable: true },
	{ name: 'Report', uid: 'report' },
	{ name: 'ACTIONS', uid: 'actions' },
]
const statusOptionsData = [
	{ name: '+', uid: '+' },
	{ name: '-', uid: '-' },
]
const usersData: any[] = [
	// {
	// 	id: 1,
	// 	destination: '', 
	// 	avatar: '',
	// 	amount: '',
	// 	pnl: '',
	// 	total: '',
	// 	report: '',
	// 	percent: '',
	// },
]

export { columnsData, usersData, statusOptionsData }

// ! Datatable for Withdrawal_table

const columnsDataW = [
	{ name: 'TIME', uid: 'time', sortable: true },
	{ name: 'ADDRESS', uid: 'address' },
	{ name: 'CRYPTO', uid: 'crypto', sortable: true },
	{ name: 'AMOUNT', uid: 'amount', sortable: true },
	{ name: 'STATUS', uid: 'status', sortable: true },
]
const statusOptionsDataW = [
	{ name: 'Sent', uid: 'sent' },
	{ name: 'Denied', uid: 'denied' },
	{ name: 'Pending', uid: 'pending' },
]
const usersDataW = [
	{
		id: 1,
		time: '19/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		network: 'Tron(TRC 20)',
		coin: 'TRX', //! sub-subaddress group-1
		amount: 0.25,
		status: 0, //! status independent element
		type: 'test',
	},
]

export { columnsDataW, usersDataW, statusOptionsDataW }

// ! Datatable for Invest_table

const columnsDataI = [
	{ name: 'INDUSTRY', uid: 'industry', sortable: true },
	{ name: 'AMOUNT', uid: 'amount', sortable: true },
	{ name: 'PERIOD', uid: 'period', sortable: true },
	{ name: 'Current amount', uid: 'current amount', sortable: true },
	{ name: 'STATUS', uid: 'status', sortable: true },
]
const statusOptionsDataI = [
	{ name: 'IN PROCESS', uid: 'in process' },
	{ name: 'SUCCESS', uid: 'Succsess' },
	{ name: 'WITHDRAWN', uid: 'Withdrawn' },
]
const usersDataI: any[] = [
	// {
	// 	id: 1,
	// 	industry: '',
	// 	amount: '',
	// 	period: '',
	// 	currentAmount: '',
	// 	status: '',
	// },
	
]

export { columnsDataI, statusOptionsDataI, usersDataI }

// ! Datatable for Withdrawal_table

const columnsDataD = [
	{ name: 'TIME', uid: 'time', sortable: true },
	{ name: 'ADDRESS', uid: 'address' },
	{ name: 'CRYPTO', uid: 'crypto', sortable: true },
	{ name: 'AMOUNT', uid: 'amount', sortable: true },
	{ name: 'STATUS', uid: 'status', sortable: true },
]
const statusOptionsDataD = [
	{ name: 'Completed', uid: 'completed' },
	{ name: 'Canceled', uid: 'canceled' },
	{ name: 'In process', uid: 'process' },
]
const usersDataD = [
	{
		id: 1,
		time: '19/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'TRX', //! sub-subaddress group-1
		amount: '112.720',
		status: 'completed', //! status independent element
		percent: '+<$0.1',
	},
]

export { columnsDataD, usersDataD, statusOptionsDataD }
