import React from "react";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";
import Navbar from "../../../components/admin/Navbar/Navbar";
import CategoryTable from "../../../components/admin/Category/CategoryTable";
import AddCategory from "../../../components/admin/Category/AddCategory";

const Category = () => {
  return (
    <>
      <div className="flex flex-row bg-gray-50 dark:bg-neutral-900 relative h-[98vh]">
        <div className="order-2 w-full">
          <Navbar />
          <div className="mr-2 my-2 p-3 bg-inherit rounded-md text-center border border-black dark:border-white h-full">
            {/* <CategoryTable /> */}
            <AddCategory />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Category;
