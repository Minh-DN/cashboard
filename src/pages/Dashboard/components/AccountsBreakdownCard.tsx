
import BarChart from "../../../components/BarChart";
import { BarChartType } from "../../../datamodel/charts.d";
import { mockAccountsBreakdownData } from "../../../assets/mockData/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setRowThreeHeight } from "../../../redux/slices/dashboardSlice";

const AccountsBreakdownCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  // Why this height is being shared this way
  // See notes in dashboardSlice.ts 
  useEffect(() => {
    if (containerRef.current) {
      dispatch(setRowThreeHeight(containerRef.current.clientHeight))
    }
  }, [containerRef]);

  const { keys, data } = mockAccountsBreakdownData;

  return (
    <div
      className="dashboard__accounts-breakdown-card"
      style={{ background: colors.primary[400] }} 
      ref={containerRef}
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