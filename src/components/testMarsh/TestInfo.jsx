import { useParams } from "react-router-dom";

export default function TestInfo() {
  const { element } = useParams();
  return <div>Info about {element}</div>;
}
