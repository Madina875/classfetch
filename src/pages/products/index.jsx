import React, { memo, useState } from "react";
import ProductsView from "../products-view";

const Products = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      title,
      price,
    };
    setData((prev) => [...prev, product]);
    setPrice("");
    setTitle("");
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="flex justify-between relative">
      <form
        onSubmit={handleSubmit}
        className="flex-col w-[25%] h-[400px] flex place-items-center justify-center bg-gray-200 rounded-2xl gap-[20px]"
      >
        <input
          className="w-[80%] h-[10%] bg-white rounded-[5px] indent-4  hover:outline-gray-200 focus:outline-gray-200"
          type="text"
          placeholder="title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="number"
          placeholder="age..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-[80%] h-[10%] bg-white rounded-[5px] indent-4  hover:outline-gray-200 focus:outline-gray-200"
        />
        <button className="w-[80%] h-[10%] bg-white rounded-[5px] hover:bg-gray-300 italic">
          submit
        </button>
      </form>
      <ProductsView data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default memo(Products);
