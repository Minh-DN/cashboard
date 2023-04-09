import { useTheme } from "@mui/material";
import { GiCash } from "react-icons/gi";
import { tokens } from "../../../theme/theme";
import { formatMoney } from "../../../components/helper";
interface NetAmountCardProps {
  amount: number,
}

const NetAmountCard = (props: NetAmountCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const negative = props.amount < 0;
  const formattedAmount = formatMoney(props.amount);

  return (
    <div className="net-income-card" style={{ background: colors.primary[400] }}>
      <GiCash style={{ color: colors.greenAccent[500] }}/>
      <div 
        className="amount" 
        style={{ color: negative ? theme.palette.error.main : ''}}
      >
        {formattedAmount}
      </div>
      <div style={{ color: colors.greenAccent[500] }}>Net</div>
    </div>
  )
}

export default NetAmountCard;