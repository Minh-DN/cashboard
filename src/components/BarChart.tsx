
import { formatMoney, getBarChartTypeSpecificProps } from './helper';
import { ResponsiveBar } from '@nivo/bar';
import { BarChartProps } from '../datamodel/charts.d';
import { useTheme } from "@mui/material";
import { tokens } from '../assets/theme/theme';

const BarChart = (props: BarChartProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { keys, data, type } = props;
  const typeSpecificProps = getBarChartTypeSpecificProps(type);

  return (
    <ResponsiveBar
      {...typeSpecificProps}
      data={data}
      keys={keys}
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
          anchor: 'right' ,
          direction: 'column',
          toggleSerie: true,
          translateX: 110,
          translateY: 0,
          itemsSpacing: 5,
          itemWidth: 92,
          itemHeight: 10,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 9,
          itemTextColor: colors.grey[100],
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ],
        }
      ]}
      tooltip={({id, value, color}) => (
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
          <b>{id}: </b>
          {formatMoney(value)}
        </div>
      )}
    />

  )
}

export default BarChart