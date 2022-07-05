import { useState } from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles['Feedback__buttons']}>
      {options.map(name => {
        return (
          <button
            className={styles['Feedback__button']}
            type="button"
            key={name}
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
