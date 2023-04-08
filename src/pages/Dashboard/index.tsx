import { tokens } from '../../theme/theme';
import { useTheme } from '@mui/material';
import './../../assets/scss/pages/Dashboard.scss';
import IncomeCard from './components/IncomeCard';
import BlankCell from './components/BlankCell';

import * as mockData from '../../assets/mockData/mockData';
import ExpenseCard from './components/ExpenseCard';
import SavingsContributionCard from './components/SavingsContributionCard';
import NetValueCard from './components/NetValueCard';

const DashboardPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const {
    mockIncomeData, 
    mockExpenseData,
    mockSavingsContributionData,
    mockNetData,
  } = mockData;

  return (
    <div className='dashboard-container'>

      <div className='page-header'>
        <h1>Your April</h1>
      </div>

      <div className='dashboard-rows-container'>
        {/* ROW 1 */}
        <div className='dashboard__row-one'>
          <IncomeCard {...mockIncomeData} />
          <ExpenseCard {...mockExpenseData} />
          <SavingsContributionCard {...mockSavingsContributionData} />
          <NetValueCard {...mockNetData} />
        </div>

        {/* ROW 2 */}
        <div className='dashboard__row-two'>
          <BlankCell />
          <BlankCell />
        </div>

        {/* ROW 3 */}
        <div className='dashboard__row-three'>
          <BlankCell />
          <BlankCell />
          <BlankCell />
        </div>
      </div>

    </div>
  )
}

export default DashboardPage;

export const rowOneTypes = {
  OUT_OF: 'OUT_OF',
  PERCENTAGE: 'PERCENTAGE',
  NUMBER: 'NUMBER'
}

const mockRow1Data = [
  {
    title: 'Problems Solved',
    type: rowOneTypes.OUT_OF,
    value: 32,
    outOf: 150,
  },
  {
    title: 'Problems Solved',
    type: rowOneTypes.OUT_OF,
    value: 32,
    outOf: 150,
  },
  {
    title: 'Problems Solved',
    type: rowOneTypes.OUT_OF,
    value: 32,
    outOf: 150,
  },
  {
    title: 'Problems Solved',
    type: rowOneTypes.OUT_OF,
    value: 32,
    outOf: 150,
  },
]