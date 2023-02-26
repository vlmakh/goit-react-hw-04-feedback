import React from 'react';
import { StatList, StatItem, Name, State } from './Statistics.styled';

export function Statistics({ state, total, positivePercentage }) {
  return (
    <StatList>
      <StatItem>
        <Name>Good:</Name>
        <State>{state.good}</State>
      </StatItem>
      <StatItem>
        <Name>Neutral:</Name>
        <State>{state.neutral}</State>
      </StatItem>
      <StatItem>
        <Name>Bad:</Name>
        <State>{state.bad}</State>
      </StatItem>
      <StatItem>
        <Name>Total:</Name>
        <State>{total}</State>
      </StatItem>
      <StatItem>
        <Name>Positive feedback:</Name>
        <State>{positivePercentage}%</State>
      </StatItem>
    </StatList>
  );
}

// Statistics.propTypes = {
//   state: PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   }).isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
