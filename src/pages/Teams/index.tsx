import { ResponsivePie } from "@nivo/pie";
import PieChart from "../../components/PieChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const data = [
  {
    "id": "php",
    "label": "php",
    "value": 289,
    "color": "hsl(89, 70%, 50%)",
    "test": 2
  },
  {
    "id": "python",
    "label": "python",
    "value": 364,
    "color": "hsl(36, 70%, 50%)",
    "test": 2
  },
  {
    "id": "make",
    "label": "make",
    "value": 108,
    "color": "hsl(58, 70%, 50%)",
    "test": 2
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 593,
    "color": "hsl(349, 70%, 50%)",
    "test": 2
  },
  {
    "id": "c",
    "label": "c",
    "value": 492,
    "color": "hsl(123, 70%, 50%)",
    "test": 2
  }
]

const TeamsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div style={{ height: '310px', width: '600px' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        cornerRadius={3}
        activeOuterRadiusOffset={15}
        borderWidth={4}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.5
                ]
            ]
        }}
        enableArcLabels={false}
        arcLinkLabel={data => `${data.label}: ${data.formattedValue}`}
        arcLinkLabelsTextColor={colors.greenAccent[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLinkLabelsStraightLength={36}
    />
    </div>
  )
}

export default TeamsPage;