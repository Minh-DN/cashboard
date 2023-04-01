import React from 'react'
import { tokens } from '../../theme/theme';
import { useTheme } from '@mui/material';
import './../../assets/scss/pages/Dashboard.scss';
import StatisticCard from './components/StatisticCard';

const DashboardPage = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className='dashboard-container'>

      <div className='page-header'>
        <h1>Dashboard</h1>
      </div>

      {/* ROW 1 */}
      <div className='dashboard__row-one'>
        <StatisticCard colors={colors}/>
        <StatisticCard colors={colors}/>
        <StatisticCard colors={colors}/>
        <StatisticCard colors={colors}/>
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