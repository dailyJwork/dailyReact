import { QuizCardHook } from "./QuizCardHooks";
import css from "./QuizList.module.css";

export const QuizList = ({ items, onDelete }) => {
  return (
    <ul className={css.quizList}>
      {items.map((el) => {
        return (
          <li key={el.id} className={css.quizItems}>
            <QuizCardHook quiz={el} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
