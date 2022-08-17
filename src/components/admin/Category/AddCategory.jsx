import React from "react";

const AddCategory = () => {
  return (
    <div className="m-10 py-1">
      <div className="my-2 flex justify-start">
        <p className="text-3xl font-bold uppercase mb-16 dark:text-white">
          Add New Category
        </p>
      </div>
      <div className="p-4 container mx-auto">
        <form className="flex flex-col gap-4 pb-4 ">
          <div className="py-3 border flex items-center border-black">
            <label
              for="slug"
              class="m-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-lec"
            >
              Your email
            </label>
            <input
              className="h-12 border-0 text-black bg-gray-400 rounded-md bg-opacity-20 focus:ring-0 focus:border focus:border-white placeholder:text-black"
              name="slug"
              type="text"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
