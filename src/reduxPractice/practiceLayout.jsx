import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./practiceStore";

export const practiceLayout = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.myValue);

  return (
    <div>
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(100))}>Decrement</button>
    </div>
  );
};
