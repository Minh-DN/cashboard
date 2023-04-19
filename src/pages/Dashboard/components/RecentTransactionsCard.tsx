import { useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";

const data = ['hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello','hello']

const RecentTransactionsCard = () => {

	const theme = useTheme();
  const colors = tokens(theme.palette.mode);

	return (
		<div 
			className="dashboard__recent-transactions-card"
			style={{ backgroundColor: colors.primary[400] }}
    >
			{data.map((title) => {
				return <TransactionItem title={title} />
			})}
		</div>
	)
}

interface TransactionItemProps {
	title: string,
}

const TransactionItem = (props: TransactionItemProps) => {
	
	return (
		<div className="dashboard__transaction-item">
			{props.title}
		</div>
	)
}

export default RecentTransactionsCard;
