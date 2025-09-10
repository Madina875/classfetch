import React, { memo } from "react";

const ProductsView = ({ data, handleDelete }) => {
  return (
    <div className="w-[70%]  bg-gray-200 rounded-2xl grid grid-cols-3 gap-[20px]">
      {data ? (
        data?.map((e) => (
          <div
            className="border h-[200px] rounded-2xl border-gray-400 flex justify-center items-center flex-col gap-[15px]"
            key={e.id}
          >
            <h2 className="text-4xl italic">title: {e.title}</h2>
            <strong>price: {e.price}</strong>
            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(e.id)}
                className="text-black rounded-[10px] hover:bg-gray-300 w-[100px] h-[30px] border"
              >
                delete
              </button>
              <button className="text-black rounded-[10px] hover:bg-gray-300 w-[100px] h-[30px] border">
                update
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-[100%] m-auto h-[20%] pl-[70px]">
          you dont have any Products ✨
        </div>
      )}
    </div>
  );
};

export default memo(ProductsView);
