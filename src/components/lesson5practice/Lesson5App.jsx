import { Route, Routes } from "react-router-dom";
import Collection from "../../pages/Collection";
import ElmenentDetails from "../../pages/ElementDetails";
import HomePage from "../../pages/Homepage";
import Gallery5 from "./Gallery5";
import Info5 from "./Info5";
import Layout5 from "./Layout5";

export const Practice5App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout5 />}>
        <Route index element={<HomePage />} />
        <Route path="collection" element={<Collection />} />
        <Route path="collection/:element" element={<ElmenentDetails />}>
          <Route path="gallery" element={<Gallery5 />} />
          <Route path="info" element={<Info5 />} />
        </Route>
      </Route>
    </Routes>
  );
};
