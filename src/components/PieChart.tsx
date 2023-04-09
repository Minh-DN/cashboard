import { ResponsivePie } from "@nivo/pie";
import { PieChartData, PieChartProps, PieChartType } from "../datamodel/charts.d";
import { getPieChartTypeSpecificProps } from "./helper";
import { useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const PieChart = (props: PieChartProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const { data, type } = props;

  const typeSpecificProps = getPieChartTypeSpecificProps(type, colors);

  return (
    <ResponsivePie 
      {...typeSpecificProps}
      data={data}
      theme={{
        tooltip: {
          container: {
            background: colors.grey[900]
          },
        },
      }}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.7
          ]
        ]
      }}
      tooltip={({ datum: { data, color } }) => (
        <div 
          style={{
            color,
            background: colors.grey[900], 
            whiteSpace: 'nowrap',
            padding: 12,
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',  
            borderRadius: '5px',
          }}
        >
          {(() => {
            switch (type) {
              case PieChartType.DASHBOARD_KEY_STAT:
                return <DashboardKeyStatTooltip {...data} />;
              case PieChartType.DASHBOARD_BREAKDOWN:
                return <DashboardExpenseBreakdownTooltip {...data}/>
              default:
                return null;
            }
          })()}
        </div>
      )}
    />
  )
}

const DashboardKeyStatTooltip = (props: PieChartData) => {
  return (
    <div>
      <b>{props.label}</b>
      <span>{props.formattedAmount}</span>
    </div>
  )
}

const DashboardExpenseBreakdownTooltip = (props: PieChartData) => {
  return (
    <div>
      <b>{props.label}: </b>
      <span>{props.formattedAmount}</span>
    </div>
  )
}

export default PieChart
