import React, { memo, useState } from "react";
import UsersView from "../users-view";

const Users = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name,
      age,
    };
    setData((prev) => [...prev, user]);
    setAge("");
    setName("");
    console.log(user);
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
          placeholder="name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="age..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-[80%] h-[10%] bg-white rounded-[5px] indent-4  hover:outline-gray-200 focus:outline-gray-200"
        />
        <button className="w-[80%] h-[10%] bg-white rounded-[5px] hover:bg-gray-300 italic">
          submit
        </button>
      </form>
      <UsersView data={data} />
    </div>
  );
};

export default memo(Users);
