import React from 'react';
import { useState } from 'react';

export const FeedbackOptionsV1 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countVotes = () => good + neutral + bad;
  const positivePercentage = Math.round((good / countVotes()) * 100);

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
          <ul className="statistics">
            <li className="statistics-values">Good: {good}</li>
            <li className="statistics-values">Neutral: {neutral}</li>
            <li className="statistics-values">Bad: {bad}</li>
            <li className="statistics-values">Total: {countVotes()}</li>
            <li className="statistics-values">
              Positive feedback: {positivePercentage}%
            </li>
          </ul>
        </>
      ) : (
        <h3>There is no feedback</h3>
      )}
    </div>
  );
};