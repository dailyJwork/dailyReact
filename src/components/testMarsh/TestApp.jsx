import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import TestLayout from "./TestLayout";
const TestCollection = lazy(() => import("../../testPages/TestCollection"));
const TestElementPage = lazy(() => import("../../testPages/TestElementPage"));
const TestHomepage = lazy(() => import("../../testPages/TestHomepage"));
const TestGallery = lazy(() => import("./TestGallery"));
const TestInfo = lazy(() => import("./TestInfo"));

export const TestApp = () => {
  return (
    <Routes>
      <Route path="/" element={<TestLayout />}>
        <Route index element={<TestHomepage />} />
        <Route path="collection" element={<TestCollection />} />
        <Route path="collection/:element" element={<TestElementPage />}>
          <Route path="gallery" element={<TestGallery />}></Route>
          <Route path="info" element={<TestInfo />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
