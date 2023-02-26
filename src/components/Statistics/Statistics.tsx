import React from 'react';
import { StatList, StatItem, Name, State } from './Statistics.styled';
import { StatisticsType } from '../types';

export function Statistics({ state, total, positivePercentage }: StatisticsType) {
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
