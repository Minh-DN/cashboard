/* PIE CHARTS */
export enum PieChartType {
  DASHBOARD_KEY_STAT,
  DASHBOARD_BREAKDOWN
}
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

/* BAR CHARTS */
export enum BarChartType {
  DASHBOARD_ACCOUNTS_BREAKDOWN
}
export interface BarChartProps {
  data: BarChartData[],
  keys: string[],
  type: BarChartType,
}
export interface BarChartData {
  [key: string]: string | number,
  cash: number,
  debitStGeorge: number,
  debitCommBank: number,
  hecsSaving: number,
  japanSaving: number,
  generalSaving: number,
}