import React from "react";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import Navbar from "../../../components/admin/Navbar/Navbar";

import EditCategory from "../../../components/admin/Category/EditCategory";

const EdittoCategory = () => {
  return (
    <>
      <div className="flex flex-row bg-gray-50 dark:bg-neutral-900 relative">
        <div className="order-2 w-full">
          <Navbar />
          <div className="mr-2 my-2 p-3 bg-inherit rounded-md text-center border border-black dark:border-white h-[88vh]">
            <EditCategory />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default EdittoCategory;
