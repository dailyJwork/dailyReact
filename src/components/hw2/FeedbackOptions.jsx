export const FeedbackButtons = ({ onGood, onBad, onNeutral }) => {
  return (
    <>
    <h1>Please leave your feedback</h1>
    <ul>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
    </ul>
    </>
  );
};
