import { ExpenseBreakdownData } from "../../../assets/mockData/mockData";
import { formatMoney } from "../../../components/helper";
import { PieChartData } from "../../../datamodel/charts";

/* Dashboard Expense Breakdown helper */
export const formExpenseBreakdownPieChartData = (data: ExpenseBreakdownData[]): PieChartData[] => {
  return data.map((datum) => {
    return {
      id: datum.category,
      label: `${capitaliseFirstLetter(datum.category)}`,
      value: datum.amount,
      formattedAmount: formatMoney(datum.amount),
    }
  })
}

export const capitaliseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}