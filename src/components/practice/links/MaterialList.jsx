export const MaterialList = ({ items, onDelete, isDellitting, onUpdate }) => {
  return (
    <ul>
      {items.map((el) => {
        return (
          <li key={el.id}>
            <h2>Title: {el.title}</h2>
            <p>Link: @{el.link}</p>
            <button
              type="button"
              disabled={isDellitting}
              onClick={() => {
                onDelete(el.id);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                onUpdate({...el, title: Date.now()});
              }}
            >
              Update
            </button>
            <hr />
          </li>
        );
      })}
    </ul>
  );
};
