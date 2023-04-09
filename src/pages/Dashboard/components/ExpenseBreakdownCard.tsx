import { useTheme } from "@mui/material";
import { tokens } from "../../../theme/theme";
import PieChart from "../../../components/PieChart";
import { ExpenseBreakdownData } from "../../../assets/mockData/mockData";
import { formExpenseBreakdownPieChartData } from "./helper";
import { PieChartType } from "../../../datamodel/charts.d";

interface ExpenseBreakdownCardProps {
  data: ExpenseBreakdownData[],
}

const ExpenseBreakdownCard = (props: ExpenseBreakdownCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = formExpenseBreakdownPieChartData(props.data);

  return (
    <div 
      className="dashboard__expense-breakdown-card" 
      style={{ background: colors.primary[400] }}
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

