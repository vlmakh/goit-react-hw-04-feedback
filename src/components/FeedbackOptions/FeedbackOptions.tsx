import React from 'react';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, addFeedback }) {
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

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   addFeedback: PropTypes.func.isRequired,
// };
