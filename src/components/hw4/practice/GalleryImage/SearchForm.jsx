import { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    setQuery(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery("");
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Write something to search"
          name="search"
          onChange={handleInput}
          value={query}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
