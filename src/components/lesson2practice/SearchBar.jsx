export const SearchBar = ({
  filters: { topik, level },
  updateTopik,
  updateLevel,
  resetFilters
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Topic filter"
        value={topik}
        onChange={(event) => {
          return updateTopik(event.target.value);
        }}
      />
      <select
        value={level}
        onChange={(event) => {
          return updateLevel(event.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
};
