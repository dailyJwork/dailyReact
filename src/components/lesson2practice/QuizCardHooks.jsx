import Modal from "react-modal";
import { useState } from "react";
import css from "./QuizList.module.css";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement(".works");

export const QuizCardHook = ({
  quiz: { id, topic, time, questions, level },
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    return setIsModalOpen(true);
  };

  const closeModal = () => {
    return setIsModalOpen(false);
  };

  return (
    <div className={css.quizItemsContainer}>
      <h2>{topic}</h2>
      <p>{time}</p>
      <p>{questions}</p>
      <p>{level}</p>
      <button
        className={css.quizItemBtn}
        onClick={() => {
          return onDelete(id);
        }}
      >
        Delete
      </button>
      <button className={css.quizItemBtn} onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Quiz Modal"
      >
        <h2>{topic}</h2>
        <p>{level}</p>
        <button onClick={closeModal}>X</button>
      </Modal>
    </div>
  );
};
