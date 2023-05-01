import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material";
import { tokens } from "../../assets/theme/theme";
import { BarChartType } from "../../datamodel/charts.d";
import { getBarChartTypeSpecificProps } from "../../components/helper";

const data = [
  {
    chartName: 'Accounts Breakdown',
    cash: 85,
    debitStGeorge: 150,
    debitCommBank: 50,
    hecsSaving: 2000,
    japanSaving: 1200,
    generalSaving: 7000,
  }
];

const TeamsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const typeSpecificProps = getBarChartTypeSpecificProps(BarChartType.DASHBOARD_ACCOUNTS_BREAKDOWN);

  return (
    <div style={{ width: 500, height: 200 }}>
      <ResponsiveBar
        {...typeSpecificProps}
        data={data}
        keys={[
          'cash',
          'debitStGeorge',
          'debitCommBank',
          'hecsSaving',
          'japanSaving',
          'generalSaving'
        ]}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.8,
            symbolSize: 10,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default TeamsPage;