import React, { memo } from "react";
import AppRouter from "./pages";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default memo(App);
