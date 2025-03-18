import { useParams } from "react-router-dom";

export default function TestGallery() {
  const { element } = useParams();
  return <div>Gallery of {element}</div>;
}
