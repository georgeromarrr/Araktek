import React from "react";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import Navbar from "../../../components/admin/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="order-2 w-full">
          <Navbar />
          <>body</>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
