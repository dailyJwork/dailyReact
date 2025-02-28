import css from "./QuizList.module.css";
import { Component } from "react";
import Modal from "react-modal";

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

export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  onModalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  onModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const {
      quiz: { id, topic, time, questions, level },
      onDelete,
    } = this.props;
    const { isModalOpen } = this.state;

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
        <button className={css.quizItemBtn} onClick={this.onModalOpen}>
          Open Modal
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.onModalClose}
          style={customModalStyles}
          contentLabel="Quiz Modal"
        >
          <h2>{topic}</h2>
          <p>{level}</p>
          <button onClick={this.onModalClose}>X</button>
        </Modal>
      </div>
    );
  }
}
