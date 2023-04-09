
import { ComputedDatum } from "@nivo/pie";
import { PieChartData, PieChartType } from "../datamodel/charts.d";
import { Colors } from "../datamodel/theme";

// Return preset properties for each type of pie charts
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
        margin: { top: 40, right: 80, bottom: 50, left: 100 },
        cornerRadius: 3,
        activeOuterRadiusOffset: 15,
        borderWidth: 3,
        enableArcLabels: false,
        arcLinkLabel: (datum: ComputedDatum<PieChartData>) => `${datum.label}: ${datum.data.formattedAmount}`,
        arcLinkLabelsTextColor: colors.greenAccent[100],
        arcLinkLabelsThickness: 2,
        arcLinkLabelsColor:{ from: 'color' },
        arcLinkLabelsStraightLength: 12,
        arcLinkLabelsDiagonalLength: 20,
      };
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
    if (chars[i] === '.') {
      break;
    }
    if (numProcessed % 3 === 0 && numProcessed !== 0) {
      chars.splice(i + 1, 0, ",");
    }
    numProcessed++;
  }

  if (amount < 0) return '-$' + chars.join("");

  return '$' + chars.join("");
}
