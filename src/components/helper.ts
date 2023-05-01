
import { ComputedDatum } from "@nivo/pie";
import { BarChartType, PieChartData, PieChartType } from "../datamodel/charts.d";
import { Colors } from "../datamodel/theme";

/* Return preset properties for each type of pie charts */
export const getPieChartTypeSpecificProps = (type: PieChartType, colors: Colors) => {
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
    case PieChartType.DASHBOARD_BREAKDOWN:
      return {
        margin: { top: 40, right: 70, bottom: 50, left: 90 },
        cornerRadius: 3,
        activeOuterRadiusOffset: 10,
        borderWidth: 3,
        enableArcLabels: false,
        arcLinkLabel: (datum: ComputedDatum<PieChartData>) => `${datum.label}: ${datum.data.formattedAmount}`,
        arcLinkLabelsTextColor: colors.grey[100],
        arcLinkLabelsThickness: 2,
        arcLinkLabelsColor:{ from: 'color' },
        arcLinkLabelsStraightLength: 12,
        arcLinkLabelsDiagonalLength: 20,
      };
  }
}

/* Return preset properties for each type of bar charts */
export const getBarChartTypeSpecificProps = (type: BarChartType) => {
  switch (type) {
    case BarChartType.DASHBOARD_ACCOUNTS_BREAKDOWN: 
      return {
        margin: { top: 5, right: 140, bottom: 5, left: 20 },
        padding: 0.3,
        layout: <const> 'horizontal',
        axisTop: null,
        axisRight: null,
        axisBottom: null,
        axisLeft: null,
        enableGridY: false,
        labelSkipWidth: 10,
        enableLabel: false,
      }
  }
}

/**
 *  Return formatted money value
 *  e.g 2312.50 => $2,312.50
 *      -1531.4 => -$1,531.40
 */
export function formatMoney(amount: number): string {
  const absAmount = Math.abs(amount);
  const isDecimal = Number.isInteger(absAmount) ? false : true;
  let stringAmount = isDecimal ? absAmount.toFixed(2) : absAmount.toString();
  let chars = stringAmount.split("");
  let numProcessed = 0;

  for (let i = chars.length - 1; i >= 0; i--) {
    if (numProcessed % 3 === 0 && numProcessed !== 0 && chars[i + 1] !== ".") {
      chars.splice(i + 1, 0, ",");
    }
    numProcessed++;
  }

  if (amount < 0) return "-$" + chars.join("");

  return "$" + chars.join("");
}
