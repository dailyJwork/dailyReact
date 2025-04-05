import { useDispatch } from "react-redux";
import { actionFilter } from "./filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = (event) => {
    dispatch(actionFilter(event.target.value));
  };

  return (
    <div>
      <Form />
      <input
        type="text"
        id="search"
        placeholder="Search something"
        onChange={onFilter}
      />
    </div>
  );
};
