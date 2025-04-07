import { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormBtn />
      <InputSearch
        onChange={handleInput}
        name="search"
        required
        value={query}
      />
    </Form>
  );
};
