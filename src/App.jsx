import React, { useState } from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";
import { Notification } from "./components/Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (e) => {
    const feedback = e.target.textContent.toLowerCase();
    switch (feedback) {
      case "good":
        setGood((prev) => prev + 1);
      case "bad":
        setBad((prev) => prev + 1);
      case "neutral":
        setNeutral((prev) => prev + 1);
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const hasFeedback = () => (totalFeedback() ? true : false);

  const countPositiveFeedback = () =>
    Math.round((good / totalFeedback()) * 100);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={handleFeedback}
      />

      <h2>Statistics</h2>

      {hasFeedback() && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positivePercentage={countPositiveFeedback()}
        />
      )}

      {!hasFeedback() && <Notification message="There is no feedback" />}
    </Section>
  );
};

export default App;
