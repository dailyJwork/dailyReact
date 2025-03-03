export const ImagesForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="imgSearch"
          placeholder="Write to search image"
        />
        <button type="submit">Submit</button>
      </label>
    </form>
  );
};
