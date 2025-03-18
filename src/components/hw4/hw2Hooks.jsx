import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const StatisticsHooks = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neuthral, setNeuthral] = useState(0);
  const [openResults, setOpenResults] = useState(false);

  const updateGood = () => {
    setGood((prevState) => {
      return (prevState += 1);
    });
    setOpenResults(true);
  };

  const updateBad = () => {
    setBad((prevState) => {
      return (prevState += 1);
    });
    setOpenResults(true);
  };

  const updateNeutral = () => {
    setNeuthral((prevState) => {
      return (prevState += 1);
    });
    setOpenResults(true);
  };

  return (
    <div>
      <h2>Please Leave your feedback</h2>
      <ul>
        <li>
          <button onClick={updateGood}>Good: {good}</button>
        </li>
        <li>
          <button onClick={updateNeutral}>Neuthral: {neuthral}</button>
        </li>
        <li>
          <button onClick={updateBad}>Bad: {bad}</button>
        </li>
      </ul>
      {openResults || <p>No results</p>}
      {openResults && <div>
      <p>Total: {good + bad + neuthral}</p>
      <p> Positive feedback: {Math.round((100 * good) / (good + neuthral + bad))}%</p>
      </div>}
    </div>
  );
};


