import React from 'react';
import { Button } from './FeedbackOptions.styled';
import { FeedBackOptType } from '../types';

export function FeedbackOptions({ options, addFeedback }: FeedBackOptType) {
  return (
    <div>
      {options.map(option => (
        <Button onClick={() => addFeedback(option)} key={option}>
          {option}
        </Button>
      ))}
    </div>
  );
}
