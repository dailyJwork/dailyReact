import { useParams } from "react-router-dom";

export default function Gallery5() {
  const { element } = useParams();
  return (
    <div>
      <p>Gallery: {element}</p>
    </div>
  );
}
