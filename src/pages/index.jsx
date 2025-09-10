import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./not-found";
import MainLayout from "./layout/index";
import Users from "./users";
import Products from "./products";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

{
  /* <Route path="posts" element={<Users />} /> */
}
