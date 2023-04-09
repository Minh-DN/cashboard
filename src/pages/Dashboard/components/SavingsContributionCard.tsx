import { useTheme } from "@mui/material";
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import { PieChartData, PieChartType } from "../../../datamodel/charts.d";
import { tokens } from "../../../theme/theme";
import { formatMoney } from "../../../components/helper";
import PieChart from "../../../components/PieChart";

interface SavingsContributionCardProps {
  amount: number,
  target: number
}

const SavingsContributionCard = (props: SavingsContributionCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { amount, target } = props;
  const formattedAmount = formatMoney(amount)
  const diffFromTarget = target - amount; 
  const formattedDiff = formatMoney(diffFromTarget);

  const formPieChartData = (): PieChartData[] => {
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
        label: 'Savings Contributed: ',
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
        <SavingsRoundedIcon 
          className="icon" 
          style={{ color: colors.greenAccent[500] }}
        />
        <div className="amount">{formattedAmount}</div>
        <div 
          className="label" 
          style={{ color: colors.greenAccent[500] }}
        >
          Savings Contribution
        </div>
      </div>

      <div className="dashboard__key-stats-right">
        <PieChart data={formPieChartData()} type={PieChartType.DASHBOARD_KEY_STAT}/>
        <div 
          className="savings-to-go" 
        >
          {formattedDiff} to go!
        </div>
      </div>

    </div>
  )
}

export default SavingsContributionCard;