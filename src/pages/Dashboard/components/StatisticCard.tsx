import React from 'react';
import { Colors } from '../../../datamodel/theme.d';

import '../../../assets/scss/pages/Dashboard.scss';
import { rowOneTypes } from '../index';

interface StatisticCardProps {
  title?: string, 
  type?: string,
  value?: string,
  colors: Colors,
  outOf?: string
}

const StatisticCard = (props: StatisticCardProps) => {

  const {
    title, 
    type, 
    value,
    colors,
    outOf
  } = props;

  return (
    <div
      className='dashboard__statistic-card'
      style={{ backgroundColor: colors.primary[400] }}
    >
      <div className='dashboard__statistic-card-text'>
        <span className='number'>30 / 150</span>
        <span className='label'>Problems Solved</span>
      </div>
      

      
    </div>
  )
}

export default StatisticCard