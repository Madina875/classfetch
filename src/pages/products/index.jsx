import React, { memo } from "react";
import ProductsView from "../products-view";

const Products = () => {
  return (
    <div>
      <ProductsView />
    </div>
  );
};

export default memo(Products);
