export const ContactList = ({ items, onDelete }) => {
  return (
    <>
      <ul>
        {items.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button
                onClick={() => {
                  return onDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
