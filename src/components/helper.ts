import { PieChartData, PieChartType } from "../datamodel/charts.d";

// Return preset properties for each type of pie charts
export const getPieChartTypeSpecificProps = (type: PieChartType) => {
  switch (type) {
    case PieChartType.DASHBOARD_KEY_STAT:
      return {
        colors: { datum: 'data.color' },
        innerRadius: 0.5,
        enableArcLabels: false,
        enableArcLinkLabels: false,
        margin: { top: 2, right: 2, bottom: 2, left: 2 },
        activeInnerRadiusOffset: 2,
        activeOuterRadiusOffset: 2
      }
  }
}

