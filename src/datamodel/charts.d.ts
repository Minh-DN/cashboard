/* PIE CHARTS */
export interface PieChartProps {
  data: PieChartData[],
  type: PieChartType,
}

export interface PieChartData {
  id: string,
  value: number,
  color: string,
  label: string,
  formattedValue: string,
}

export enum PieChartType {
  DASHBOARD_KEY_STAT,
}

