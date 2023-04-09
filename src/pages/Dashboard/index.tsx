import { tokens } from '../../theme/theme';
import { useTheme } from '@mui/material';
import './../../assets/scss/pages/Dashboard.scss';
import IncomeCard from './components/IncomeCard';
import BlankCell from './components/BlankCell';

import * as mockData from '../../assets/mockData/mockData';
import ExpenseCard from './components/ExpenseCard';
import SavingsContributionCard from './components/SavingsContributionCard';
import NetAmountCard from './components/NetAmountCard';
import ExpenseBreakdownCard from './components/ExpenseBreakdownCard';

const DashboardPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const {
    mockIncomeData, 
    mockExpenseData,
    mockSavingsContributionData,
    mockNetData,
    mockExpenseBreakdownData
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
          <NetAmountCard {...mockNetData} />
        </div>

        {/* ROW 2 */}
        <div className='dashboard__row-two'>
          <ExpenseBreakdownCard data={mockExpenseBreakdownData} />
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

