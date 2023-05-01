import BarChart from "../../../components/BarChart";
import { BarChartType } from "../../../datamodel/charts.d";
import { mockAccountsBreakdownData } from "../../../assets/mockData/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";

const AccountsBreakdownCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { keys, data } = mockAccountsBreakdownData;

  return (
    <div
      className="dashboard__accounts-breakdown-card"
      style={{ background: colors.primary[400] }} 
    >
      <div className="title" style={{ color: colors.greenAccent[500] }}>
        Accounts Breakdown
      </div>
      <div className="chart">
        <BarChart 
          // @ts-ignore
          data={data}
          keys={keys}
          type={BarChartType.DASHBOARD_ACCOUNTS_BREAKDOWN}
        />
      </div>

    </div>
  )
}

export default AccountsBreakdownCard