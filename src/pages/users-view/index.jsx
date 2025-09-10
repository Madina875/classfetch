import React, { memo } from "react";

const UsersView = ({ data, handleDelete }) => {
  console.log(data);
  return (
    <div className="w-[70%] bg-gray-200 rounded-2xl grid grid-cols-3 gap-[30px]">
      {data ? (
        data?.map((e) => (
          <div
            className="border h-[200px] rounded-2xl border-gray-400 flex justify-center items-center flex-col gap-[20px]"
            key={e.id}
          >
            <h2 className="text-4xl italic">name: {e.name}</h2>
            <strong>age: {e.age}</strong>
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
        <div className="w-[100%] m-auto pl-[70px] h-[20%]">
          you dont have any Users ✨
        </div>
      )}
    </div>
  );
};

export default memo(UsersView);
