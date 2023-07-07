import { useTheme } from "@mui/material";
import { tokens } from "../../../assets/theme/theme";
import { AgGridReact } from "ag-grid-react";
import { mockUpcomingSubscriptionsData } from "../../../assets/mockData/mockData";
import { useSelector } from "react-redux";
import { selectRowThreeHeight } from "../../../redux/slices/dashboardSlice";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const UpcomingSubscriptionsCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Why this height is being set this way
	// See notes in dashboardSlice.ts 
	const height = useSelector(selectRowThreeHeight);
	const defaultHeight = '200px';

  const columns = [
    { headerName: "ID", field: 'id', maxWidth: 20 },
    { headerName: "Product", field: 'product', maxWidth: 200 },
    { headerName: "Date", field: 'date', maxWidth: 100 },
    { headerName: "Amount", field: 'amount', maxWidth: 50 },
  ]

  return (
    <div 
      className="dashboard__upcoming-subscriptions-card"
      style={{ 
        background: colors.primary[400],
        height: height ? height : defaultHeight
      }}
    >
      <div className="title" style={{ color: colors.greenAccent[500] }}>
        Accounts Breakdown
      </div>
      <AgGridReact
        rowData={mockUpcomingSubscriptionsData}
        // @ts-ignore
        columnDefs={columns}
      >
      </AgGridReact>
    </div>
  )
}

export default UpcomingSubscriptionsCard