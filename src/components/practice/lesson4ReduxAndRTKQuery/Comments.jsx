import { useSelector } from "react-redux";
import { selectFilter } from "./filterSlice";

export const Comments = () => {
  const selectFilter = useSelector(selectFilter);
  const visibleComments = () => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(selectFilter.toLowerCase())
    );
  };
  return (
    <div>
      {comments &&
        visibleComments().map((el) => {
          return <Comment key={el.id} {...el} />;
        })}
    </div>
  );
};
