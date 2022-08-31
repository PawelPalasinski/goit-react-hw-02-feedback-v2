import React from 'react';
import { useState } from 'react';

export const FeedbackOptionsV2 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countVotes = () => good + neutral + bad;
  const positivePercentage = Math.round((good / countVotes()) * 100);

  const statsValues = [["Good", good], ["Neutral", neutral], ["Bad", bad], ["Total: ", good+neutral+bad], ["Positive feedback", `${positivePercentage}%`]]

  return (
    <div className="vote-container">
      <h3 className="vote-container__title">Please leave feedback</h3>
      <button
        className="vote-container__grade-btn"
        onClick={() => {
          setGood(good + 1);
        }}
      >
        Good
      </button>
      <button
        className="vote-container__grade-btn"
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        Neutral
      </button>
      <button
        className="vote-container__grade-btn"
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        Bad
      </button>

      {countVotes() !== 0 ? (
        <>
          <h3>Statistics</h3>
          <p>test</p>
          <ul className="statistics">

            {statsValues.map(([name, value]) => <li className="statistics-values">{name}: {value}</li>)}

          </ul>
        </>
      ) : (
        <h3>There is no feedback</h3>
      )}
    </div>
  );
};