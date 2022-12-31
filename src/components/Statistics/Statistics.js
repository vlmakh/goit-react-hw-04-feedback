import PropTypes from 'prop-types';
import { StatList, StatItem, Name, State } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatList>
      <StatItem>
        <Name>Good:</Name>
        <State>{good}</State>
      </StatItem>
      <StatItem>
        <Name>Neutral:</Name>
        <State>{neutral}</State>
      </StatItem>
      <StatItem>
        <Name>Bad:</Name>
        <State>{bad}</State>
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
