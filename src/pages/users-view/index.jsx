import React, { memo } from "react";

const UsersView = ({ data }) => {
  return (
    <div className="w-[70%] h-[800px] bg-gray-200 overflow-scroll rounded-2xl grid grid-cols-3 gap-[30px]">
      {data?.map((e) => (
        <div className="border h-[200px]" key={e.id}>
          <h2>{e.name}</h2>
          <strong>{e.age}</strong>
        </div>
      ))}
    </div>
  );
};

export default memo(UsersView);
