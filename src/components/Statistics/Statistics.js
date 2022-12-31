import PropTypes from 'prop-types';
import { StatList, StatListItem, Name, State } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatList>
      <StatListItem>
        <Name>Good:</Name>
        <State>{good}</State>
      </StatListItem>
      <StatListItem>
        <Name>Neutral:</Name>
        <State>{neutral}</State>
      </StatListItem>
      <StatListItem>
        <Name>Bad:</Name>
        <State>{bad}</State>
      </StatListItem>
      <StatListItem>
        <Name>Total:</Name>
        <State>{total}</State>
      </StatListItem>
      <StatListItem>
        <Name>Positive feedback:</Name>
        <State>{positivePercentage}%</State>
      </StatListItem>
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
