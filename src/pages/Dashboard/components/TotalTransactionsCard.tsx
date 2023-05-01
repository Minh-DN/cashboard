import { Icon, useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";
import { useSelector } from "react-redux";
import { selectRowTwoHeight } from "../../../redux/slices/dashboardSlice";
import { getDayAndDate } from "./helper";
import { formatMoney } from "../../../components/helper";

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const data = {
	date: new Date(),
	transactions: [
		1, 2, 3
	],
	income: 10,
	expense: 300,
}

const TotalTransactionsCard = () => {

	const theme = useTheme();
  const colors = tokens(theme.palette.mode);

	// Why this height is being set this way
	// See notes in dashboardSlice.ts 
	const height = useSelector(selectRowTwoHeight);
	const defaultHeight = '300px';

	return (
		<div 
			className="dashboard__total-transactions-card"
			style={{ 
				backgroundColor: theme.palette.background.default, 
				height: height ? `${height}px` : defaultHeight,
			}}
    >
			<div
			  className="header"
				style={{ 
					backgroundColor: colors.primary[400],
				}}
			>
				<span style={{ color: colors.greenAccent[500], fontWeight: 900, fontSize: '16px' }}>
					Transactions
				</span> 
			</div>
			<div className="transactions">
				<DailyTransactionCard {...data} />
				<DailyTransactionCard {...data} />
				<DailyTransactionCard {...data} />
				<DailyTransactionCard {...data} />
				<DailyTransactionCard {...data} />
				<DailyTransactionCard {...data} />
			</div>
		</div>
	)
}

interface Transaction {
	temp: number
}

interface DailyTransactionCardProps {
	date: Date,
	transactions: number[]
	income: number,
	expense: number
}

const DailyTransactionCard = (props: DailyTransactionCardProps) => {

	const theme = useTheme();
  const colors = tokens(theme.palette.mode);

	const { date, transactions, income, expense } = props;
	
	const [ dayName, dateNum ] = getDayAndDate(date);

	return (
		<div
		  className="dashboard__daily-transaction-card"
			style={{ backgroundColor: colors.primary[400] }}
		>
			<div className="date-container">
				<span className="day">{dayName}</span>
				<span className="date">{dateNum}</span>
			</div>

			<div className="num-transactions">
				{transactions.length} transactions
			</div>

			<div className="amount-overview">
				<div className="income">
					<span>Income: </span> 
					<span>{formatMoney(income)}</span>
				</div>
				<div className="expense">
					<span>Expense: </span> 
					<span>{formatMoney(expense)}</span>
				</div>
			</div>

			<button 
				className="expand-button" 
				style={{ border: `2px solid ${colors.grey[100]}` }}
			>
				View
				<KeyboardArrowDownRoundedIcon />
			</button>
		
		</div>
	)
}

export default TotalTransactionsCard;
