import { useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";

import { GiPayMoney } from "react-icons/gi";
import { formatMoney } from "../../../components/helper";
import PieChart from "../../../components/PieChart";
import { PieChartData, PieChartType } from "../../../datamodel/charts.d";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";

interface ExpenseCardProps {
  amount: number,
  change: number,
  budget: number
}

const ExpenseCard = (props: ExpenseCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { amount, change, budget } = props;
  const formattedAmount = formatMoney(amount);
  const negative = change < 0;

  const formPieChartData = (): PieChartData[] => {
    const remainingOnBudget = budget - amount; 

    const data = [
      {
        id: 'remaining',
        value: remainingOnBudget,
        color: `${colors.grey[500]}`,
        label: 'Remaning on buget: ',
        formattedAmount: formatMoney(remainingOnBudget),
      },
      {
        id: 'expense',
        value: amount,
        color: `${colors.greenAccent[500]}`,
        label: 'Total Expense: ',
        formattedAmount: formatMoney(amount),
      },
    ]
    return data;
  }

  return (
    <div
      className="dashboard__key-stats-card"
      style={{ backgroundColor: colors.primary[400] }
      }>

      <div className="dashboard__key-stats-left">
        <GiPayMoney 
          className="icon" 
          style={{ color: colors.greenAccent[500] }}
        />
        <div className="amount">{formattedAmount}</div>
        <div 
          className="label" 
          style={{ color: colors.greenAccent[500] }}
        >
          Expense
        </div>
      </div>

      <div className="dashboard__key-stats-right">
        <PieChart data={formPieChartData()} type={PieChartType.DASHBOARD_KEY_STAT}/>
        <div 
          className="change-value" 
          style={{ color: negative ? theme.palette.success.main : theme.palette.error.main }}
        >
          {negative ? <HiArrowNarrowDown/> : <HiArrowNarrowUp/>}
          {Math.abs(change)}%
        </div>
      </div>

    </div>
  )
}

export default ExpenseCard;