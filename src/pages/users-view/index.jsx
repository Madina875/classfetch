import React, { memo } from "react";

const UsersView = ({ data }) => {
  return (
    <div className="w-[70%] h-[800px] bg-gray-200 overflow-scroll rounded-2xl grid grid-cols-3 gap-[30px]">
      {data?.map((e) => (
        <div
          className="border h-[200px] rounded-2xl border-gray-400 flex justify-center items-center flex-col gap-[20px]"
          key={e.id}
        >
          <h2 className="text-4xl italic">name: {e.name}</h2>
          <strong>age: {e.age}</strong>
        </div>
      ))}
    </div>
  );
};

export default memo(UsersView);
