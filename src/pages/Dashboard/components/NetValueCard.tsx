import { useTheme } from "@mui/material";
import { GiCash } from "react-icons/gi";
import { tokens } from "../../../theme/theme";
import { formatMoney } from "../helper";

interface NetValueCardProps {
  value: number,
}

const NetValueCard = (props: NetValueCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const negative = props.value < 0;
  const formattedValue = formatMoney(props.value);

  return (
    <div className="net-income-card" style={{ background: colors.primary[400] }}>
      <GiCash style={{ color: colors.greenAccent[500] }}/>
      <div 
        className="value" 
        style={{ color: negative ? theme.palette.error.main : ''}}
      >
        {formattedValue}
      </div>
      <div style={{ color: colors.greenAccent[500] }}>Net</div>
    </div>
  )
}

export default NetValueCard;