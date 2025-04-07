import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { SearchForm } from "./SearchForm";

export const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (text) => {
    const todo = {
      id: nanoid(),
      text,
    };
    setTodos([...todos, todo]);
  };

  const handleSubmit = (data) => {
    addTodos(data);
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return (
    <div>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />
          {todos.length === 0 && <Text>There is no list</Text>}
          {todos.length > 0 &&
            todos.map((el, i) => {
              <li key={el.id}>
                <Todo
                  id={el.id}
                  text={el.text}
                  counter={el.i + 1}
                  onClick={deleteTodos}
                />
              </li>;
            })}
        </Container>
      </Section>
    </div>
  );
};
