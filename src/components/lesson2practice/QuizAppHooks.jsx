import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import { QuizForm } from "./QuizForm";
import { QuizList } from "./QuizList";
import { SearchBar } from "./SearchBar";
import { fetchQuizzez, addNewQuizz, deleteQuizById } from "./api";

const localStorageQuizInterfaceKey = "quizFilters";

export const QuizAppHooks = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem(localStorageQuizInterfaceKey);
    if (savedFilters !== null) {
      return JSON.parse(savedFilters);
    }
    return {
      topic: "",
      level: "all",
    };
  });

  useEffect(() => {
    async function ayncFetchQuizzes() {
      try {
        setIsLoading(true);
        const initialQuizzez = await fetchQuizzez();
        setQuizItems(initialQuizzez);
      } catch (error) {
        toast.error("Error with loading elements");
      } finally {
        setIsLoading(false);
      }
    }
    ayncFetchQuizzes();
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageQuizInterfaceKey, JSON.stringify(filters));
  }, [filters]);

  const onUpdateTopikFilter = (newTopic) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        topic: newTopic,
      };
    });
  };

  const onUpdateLevelFilter = (newLevel) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        level: newLevel,
      };
    });
  };

  const resetFilters = () => {
    setFilters({
      topic: "",
      level: "all",
    });
  };

  const addQuiz = async (newQuiz) => {
    try {
      setIsLoading(true);
      const addedQuiz = await addNewQuizz(newQuiz);
      setQuizItems((prevState) => [prevState, addedQuiz]);
      toast.success("Element added");
    } catch (error) {
      toast.error("Error with adding element");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteQuiz = async (id) => {
    try {
      setIsLoading(true);
      const deletedEl = await deleteQuizById(id);
      setQuizItems((prevState) =>
        prevState.filter((el) => {
          return el.id !== deletedEl.id;
        })
      );
      toast.success("Element deleted");
    } catch (error) {
      toast.error("Error with deleting element");
    } finally {
      setIsLoading(false);
    }
  };

  const visibleQuizItems = quizItems.filter((el) => {
    const hasTopic = el.topic
      .toLowerCase()
      .includes(filters.topic.toLowerCase());

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
        updateTopik={onUpdateTopikFilter}
        updateLevel={onUpdateLevelFilter}
        resetFilters={resetFilters}
      />
      {isLoading && (
        <p>
          <b>Loading...</b>{" "}
        </p>
      )}
      {visibleQuizItems.length > 0 && (
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
      <QuizForm onAdd={addQuiz} />
      <Toaster />
    </div>
  );
};
