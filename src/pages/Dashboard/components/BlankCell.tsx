import { useTheme } from "@mui/material";
import { tokens } from "../../../theme/theme";

import { GiPayMoney } from 'react-icons/gi'

const BlankCell = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      className="dashboard__key-stats-card"
      style={{ backgroundColor:colors.primary[400] }
    }>

      <div className="stats-text">
        
      </div>

      <div className="stats-chart">

      </div>

    </div>
  )
}

export default BlankCell;