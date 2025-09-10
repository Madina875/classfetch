import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[40px] bg-gray-600">
      <div className="container flex place-items-center justify-between">
        <p className="text-white text-3xl">LOGOO</p>
        <ul className="flex text-white gap-5">
          <NavLink
            className={({ isActive }) =>
              `uppercase text-2xl ${isActive ? "text-black underline" : ""}`
            }
            to={"/"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase text-2xl ${isActive ? "text-black underline" : ""}`
            }
            to={"/products"}
          >
            Products
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
