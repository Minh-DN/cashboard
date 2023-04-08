import { useTheme } from "@mui/material";
import { tokens } from "../../../theme/theme";

import { GiPayMoney } from "react-icons/gi";
import { formatMoney } from "../helper";
import PieChart from "../../../components/PieChart";
import { PieChartData, PieChartType } from "../../../datamodel/charts.d";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";

interface ExpenseCardProps {
  value: number,
  change: number,
  budget: number
}

const ExpenseCard = (props: ExpenseCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { value, change, budget } = props;
  const formattedValue = formatMoney(value);
  const negative = change < 0;

  const formPieChartData = (): PieChartData[] => {
    const remainingOnBudget = budget - value; 

    const data = [
      {
        id: 'remaining',
        value: remainingOnBudget,
        color: `${colors.grey[500]}`,
        label: 'Remaning on buget: ',
        formattedValue: formatMoney(remainingOnBudget),
      },
      {
        id: 'expense',
        value: value,
        color: `${colors.greenAccent[500]}`,
        label: 'Total Expense: ',
        formattedValue: formatMoney(value),
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
        <div className="value">{formattedValue}</div>
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