import { tokens } from '../../assets/theme/theme';
import { useTheme } from '@mui/material';

import './../../assets/scss/pages/dashboard.scss';
import * as mockData from '../../assets/mockData/mockData';

import IncomeCard from './components/IncomeCard';
import ExpenseCard from './components/ExpenseCard';
import SavingsContributionCard from './components/SavingsContributionCard';
import NetAmountCard from './components/NetAmountCard';
import ExpenseBreakdownCard from './components/ExpenseBreakdownCard';
import BlankCell from './components/BlankCell';
import TotalTransactionsCard from './components/TotalTransactionsCard';
import AccountsBreakdownCard from './components/AccountsBreakdownCard';

const DashboardPage = () => {

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
          <TotalTransactionsCard />
        </div>

        {/* ROW 3 */}
        <div className='dashboard__row-three'>
          <BlankCell />
          <BlankCell />
          <AccountsBreakdownCard />
        </div>
      </div>

    </div>
  )
}

export default DashboardPage;

