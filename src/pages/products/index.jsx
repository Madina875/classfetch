import React, { Component, memo, useState } from "react";
import ProductsView from "../products-view";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      price: "",
      data: [],
      editingItem: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { data, title, price, editingItem } = this.state;
    // if (Number(age) < 0) {
    //   return alert("xato");
    // }

    if (editingItem) {
      const editedData = data.map((product) =>
        product.id === editingItem.id
          ? { id: editingItem.id, title, price }
          : product
      );
      this.setState({
        data: editedData,
        title: "",
        price: "",
        editingItem: null,
      });
    } else {
      const product = {
        id: Date.now(),
        title,
        price: Number(price),
      };
      this.setState({ data: [...data, product], title: "", price: "" });
    }
  };

  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter((product) => product.id !== id),
    });
  };

  handleUpdate = (product) => {
    console.log(product);
    this.setState({
      title: product.title,
      price: product.price,
      editingItem: product,
    });
  };

  render() {
    const { title, price, data, editingItem } = this.state;
    return (
      <div className="flex justify-between relative">
        <form
          onSubmit={this.handleSubmit}
          className="flex-col w-[25%] h-[400px] flex place-items-center justify-center bg-gray-200 rounded-2xl gap-[20px]"
        >
          <input
            className="w-[80%] h-[10%] bg-white rounded-[5px] indent-4  hover:outline-gray-200 focus:outline-gray-200"
            type="text"
            placeholder="title..."
            onChange={(e) => this.setState({ title: e.target.value })}
            value={title}
          />
          <input
            type="number"
            placeholder="age..."
            value={price}
            onChange={(e) => this.setState({ price: e.target.value })}
            className="w-[80%] h-[10%] bg-white rounded-[5px] indent-4  hover:outline-gray-200 focus:outline-gray-200"
          />
          <button className="w-[80%] h-[10%] bg-white rounded-[5px] hover:bg-gray-300 italic">
            submit
          </button>
        </form>
        <ProductsView
          data={data}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
