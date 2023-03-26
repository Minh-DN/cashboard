import React from 'react';

import '../../../assets/scss/pages/Dashboard.scss';
import { rowOneTypes } from '../index';

const StatisticCard = (props) => {

  const {
    title, 
    type, 
    value,
    colors
  } = props;

  let outOf = '';

  if (type === rowOneTypes.OUT_OF) {
    outOf = props.outOf;
  }

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