import css from "./feedback.module.css"

export const FeedbackResults = ({ results: { good, neutral, bad }}) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>Good: {good}</li>
        <li className={css.feedbackItem}>Neutral: {neutral}</li>
        <li className={css.feedbackItem}>Bad: {bad}</li>
        <li className={css.feedbackItem}>Total: {good + neutral + bad}</li>
        <li className={css.feedbackItem}>Positive feedback: {Math.round((100 * good) / (good + neutral + bad))}%</li>
      </ul>
    </>
  );
};
