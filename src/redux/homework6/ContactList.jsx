import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "./contactSlice";

export const ContactList2 = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <h4>{name}</h4>
            <p>{phone}</p>
            <button
              onClick={() => {
                return dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
