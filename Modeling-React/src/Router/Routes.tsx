import { Route, Routes } from "react-router-dom";
import PostContainer from "../Features/component/PostContainer";
import React from "react";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PostContainer />} />
    </Routes>
  );
};

export default Router;
