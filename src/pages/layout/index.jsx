import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="border border-gray-300 min-h-[900px] m-[30px] rounded-2xl p-[2%]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
