import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import React from 'react';
import { StateType } from 'components/types';

function App() {
  const [state, setState] = useState<StateType>({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = (option: any): void => {
      setState({ ...state, [option]: state[option] + 1 });
  };

  const countTotalFeedback = (): number => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = (): number => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          addFeedback={addFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            state={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet..." />
        )}
      </Section>
    </>
  );
}

export { App };
