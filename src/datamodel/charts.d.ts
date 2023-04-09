/* PIE CHARTS */
export interface PieChartProps {
  data: PieChartData[],
  type: PieChartType,
}

export interface PieChartData {
  id: string,
  value: number,
  label: string,
  color?: string,
  formattedAmount?: string,
}

export enum PieChartType {
  DASHBOARD_KEY_STAT,
  DASHBOARD_BREAKDOWN
}

  