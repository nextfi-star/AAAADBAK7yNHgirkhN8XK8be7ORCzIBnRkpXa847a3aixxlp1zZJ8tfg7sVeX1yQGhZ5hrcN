// ! Datatable for verified
const columns = [
	{ name: 'NAME', uid: 'name', sortable: true },
	{ name: 'HOLDINGS', uid: 'holdings', sortable: true },
	// {name: "ROLE", uid: "role", sortable: true},
	// {name: "PERCENT", uid: "percent"},
	// {name: "CRYPTO", uid: "crypto"},
	{ name: 'PNL', uid: 'pnl', sortable: true },
	{ name: 'ACTIONS', uid: 'actions' },
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
const usersData = [
	{
		id: 1,
		destination: 'Company Stocks', //! crypto name group-1
		avatar: '/payment_table/company.svg', //! icon for crypto name group-1
		amount: '$543', //! holding independent element
		pnl: '+', //! PnL independent element
		total: '$1233.000',
		report: 'View Report',
		percent: '+0.5%',
	},
	{
		id: 2,
		destination: 'Precious Metals', //! crypto name group-1
		avatar: '/payment_table/metals.svg', //! icon for crypto name group-1
		amount: '$123', //! holding independent element
		pnl: '-', //! PnL independent element
		total: '$2231.000',
		report: 'View Report',
		percent: '-0.5%',
	},
	{
		id: 3,
		destination: 'Corporate Bonds', //! crypto name group-1
		avatar: '/payment_table/bonds.svg', //! icon for crypto name group-1
		amount: '$1233', //! holding independent element
		pnl: '-', //! PnL independent element
		total: '$3321.000',
		report: 'View Report',
		percent: '-0.5%',
	},
	{
		id: 4,
		destination: 'Oil Sector', //! crypto name group-1
		avatar: '/payment_table/oil.svg', //! icon for crypto name group-1
		amount: '$321', //! holding independent element
		pnl: '+', //! PnL independent element
		total: '$4421.000',
		report: 'View Report',
		percent: '+0.5%',
	},
	{
		id: 5,
		destination: 'Innovative Startups', //! crypto name group-1
		avatar: '/payment_table/startup.svg', //! icon for crypto name group-1
		amount: '$123', //! holding independent element
		pnl: '+', //! PnL independent element
		total: '$3123.000',
		report: 'View Report',
		percent: '+0.5%',
	},
	{
		id: 6,
		destination: 'Innovative Startups', //! crypto name group-1
		avatar: '/payment_table/startup.svg', //! icon for crypto name group-1
		amount: '$123', //! holding independent element
		pnl: '+', //! PnL independent element
		total: '$3123.000',
		report: 'View Report',
		percent: '+0.5%',
	},
]

export { columnsData, usersData, statusOptionsData }

// ! Datatable for Withdrawal_table

const columnsDataW = [
	{ name: 'TIME', uid: 'time', sortable: true },
	{ name: 'ADDRESS', uid: 'address' },
	{ name: 'CRYPTO', uid: 'crypto', sortable: true },
	{ name: 'AMOUNT', uid: 'amount', sortable: true },
	{ name: 'FEE', uid: 'fee' },
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
		subaddress: 'Tron(TRC 20)',
		crypto: 'TRX', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'sent', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 2,
		time: '25/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'ZRO', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'denied', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 4,
		time: '14/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'USDT', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'pending', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 6,
		time: '14/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'TRX', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'pending', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 7,
		time: '14/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'USDT', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'pending', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 8,
		time: '14/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'ZRO', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'pending', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 9,
		time: '14/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'ZRO', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'pending', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 10,
		time: '14/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'USDT', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'pending', //! status independent element
		percent: '+<$0.1',
	},
	{
		id: 11,
		time: '14/04/2024, 23:19:21', //! time name group-1
		address: 'QnC4NssoQ3Mn34SlrY1Nk2bb3l0Iue1Own',
		subaddress: 'Tron(TRC 20)',
		crypto: 'USDT', //! sub-subaddress group-1
		amount: '112.720',
		fee: '1',
		status: 'pending', //! status independent element
		percent: '+<$0.1',
	},
]

export { columnsDataW, usersDataW, statusOptionsDataW }