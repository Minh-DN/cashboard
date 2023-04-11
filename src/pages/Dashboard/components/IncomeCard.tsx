import { useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";
import PieChart from "../../../components/PieChart";

import { GiReceiveMoney } from "react-icons/gi";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";

import { formatMoney } from "../../../components/helper";
import { PieChartData, PieChartType } from "../../../datamodel/charts.d";

interface IncomeCardProps {
  amount: number,
  change: number,
  target: number
}

const IncomeCard = (props: IncomeCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { amount, change, target } = props;
  const formattedAmount = formatMoney(amount)
  const negative = change < 0;

  const formPieChartData = (): PieChartData[] => {
    const diffFromTarget = target - amount; 

    const data = [
      {
        id: 'target',
        value: diffFromTarget,
        color: `${colors.grey[500]}`,
        label: 'Until Target: ',
        formattedAmount: formatMoney(diffFromTarget),
      },
      {
        id: 'income',
        value: amount,
        color: `${colors.greenAccent[500]}`,
        label: 'Total Income: ',
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
        <GiReceiveMoney 
          className="icon" 
          style={{ color: colors.greenAccent[500] }}
        />
        <div className="amount">{formattedAmount}</div>
        <div 
          className="label" 
          style={{ color: colors.greenAccent[500] }}
        >
          Income
        </div>
      </div>

      <div className="dashboard__key-stats-right">
        <PieChart data={formPieChartData()} type={PieChartType.DASHBOARD_KEY_STAT}/>
        <div 
          className="change-value" 
          style={{ color: negative ? theme.palette.error.main : theme.palette.success.main }}
        >
          {negative ? <HiArrowNarrowDown/> : <HiArrowNarrowUp/>}
          {change}%
        </div>
      </div>

    </div>
  )
}

export default IncomeCard;