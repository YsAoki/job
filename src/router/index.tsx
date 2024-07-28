import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import SearchResult from "../components/Xpages/SearchResult";
import Top from "../components/Xpages/Top";

const ReactRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="jobs/search-result" element={<SearchResult />} />
    </Routes>
  );
};

export default ReactRouter;
