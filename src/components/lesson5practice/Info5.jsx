import { useParams } from "react-router-dom";

export default function Info5() {
  const { element } = useParams();
  return (
    <div>
      <p>Info: {element}</p>
    </div>
  );
}