import { useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";
import PieChart from "../../../components/PieChart";
import { ExpenseBreakdownData } from "../../../assets/mockData/mockData";
import { formExpenseBreakdownPieChartData } from "./helper";
import { PieChartType } from "../../../datamodel/charts.d";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setRowTwoHeight } from "../../../redux/slices/dashboardSlice";

interface ExpenseBreakdownCardProps {
  data: ExpenseBreakdownData[],
}

const ExpenseBreakdownCard = (props: ExpenseBreakdownCardProps) => {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  
  const colors = tokens(theme.palette.mode);
  const data = formExpenseBreakdownPieChartData(props.data);

  // Why this height is being shared this way
  // See notes in dashboardSlice.ts 
  useEffect(() => {
    if (containerRef.current) {
      dispatch(setRowTwoHeight(containerRef.current.clientHeight))
    }
  }, [containerRef]);

  return (
    <div 
      className="dashboard__expense-breakdown-card" 
      style={{ background: colors.primary[400] }}
      ref={containerRef}
    >
      <div className="title" style={{ color: colors.greenAccent[500] }}>
        Expense Breakdown
      </div>
      <div className="chart">
        <PieChart 
          data={data}
          type={PieChartType.DASHBOARD_BREAKDOWN}
        />
      </div>
    </div>
  )
}

export default ExpenseBreakdownCard;

