import { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { QuizForm } from "./QuizForm";
import { QuizList } from "./QuizList";
import { SearchBar } from "./SearchBar";
import { fetchQuizzez, addNewQuizz, deleteQuizById } from "./api";

const localStorageQuizInterfaceKey = "quizFilters";

export class QuizApp extends Component {
  state = {
    quizItems: [],
    filters: {
      topik: "",
      level: "all",
    },
    isLoading: false
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem(
        localStorageQuizInterfaceKey,
        JSON.stringify(this.state.filters)
      );
    }
  }

  async componentDidMount() {
    const savedFilters = localStorage.getItem(localStorageQuizInterfaceKey);

    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }

    try {
      this.setState({
        isLoading: true,
      });
      const initialQuizzez = await fetchQuizzez();
      this.setState({
        quizItems: initialQuizzez,
      });
    } catch (error) {
      toast.error("Error with loading elements")
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  onUpdateTopikFilter = (newTopik) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          topik: newTopik,
        },
      };
    });
  };

  onUpdateLevelFilter = (newLevel) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  };

  onDeleteBtn = async (quizId) => {
    try {
      this.setState({
        isLoading: true,
      });
      const deletedEl = await deleteQuizById(quizId);
      this.setState((prevState) => {
        return {
          quizItems: prevState.quizItems.filter((el) => {
            return el.id !== deletedEl.id;
          }),
        };
      });
      toast.success("Element deleted")
    } catch (error) {
      toast.error("Error with deleting element")
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  resetFilters = () => {
    this.setState({
      filters: {
        topik: "",
        level: "all",
      },
    });
  };

  addElement = async (newItem) => {
    try {
      this.setState({
        isLoading: true,
      });
      const addedQuiz = await addNewQuizz(newItem);
      this.setState((prevState) => {
        return {
          quizItems: [...prevState.quizItems, addedQuiz],
        };
      });
      toast.success("Element added")
    } catch (error) {
      toast.error("Error with adding element")
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { quizItems, filters, isLoading } = this.state;

    const visibleQuizItems = quizItems.filter((el) => {
      const hasTopic = el.topic
        .toLowerCase()
        .includes(filters.topik.toLowerCase());

      if (filters.level === "all") {
        return hasTopic;
      }

      const matchesLevel = el.level === filters.level;
      return hasTopic && matchesLevel;
    });

    return (
      <div>
        <SearchBar
          filters={filters}
          updateTopik={this.onUpdateTopikFilter}
          updateLevel={this.onUpdateLevelFilter}
          resetFilters={this.resetFilters}
        />
        {isLoading && (
          <p>
            <b>Loading...</b>{" "}
          </p>
        )}
        {visibleQuizItems.length > 0 && (
          <QuizList items={visibleQuizItems} onDelete={this.onDeleteBtn} />
        )}
        <QuizForm onAdd={this.addElement} />
        <Toaster />
      </div>
    );
  }
}
