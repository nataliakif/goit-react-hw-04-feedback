import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { useState } from 'react';

export default function Feedback() {
  const [good, setGood] = useState();
  const [neutral, setNeutral] = useState();
  const [bad, setBad] = useState();

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
  };
  const totalFeedback = () => {
    return good + neutral + bad;
  };
  const positivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return (good / total) * 100;
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {!this.countTotalFeedback() ? (
        <Section title="Statistics">
          <p>There is no feedback</p>
        </Section>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}

class OldFeedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {!this.countTotalFeedback() ? (
          <Section title="Statistics">
            <p>There is no feedback</p>
          </Section>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
