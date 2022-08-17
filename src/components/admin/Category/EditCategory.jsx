import React from "react";
import Footer from "../Footer/Footer";

const AddCategory = () => {
  return (
    <div className="m-10 py-1">
      <div className="my-2 flex justify-between items-start">
        <p className="text-3xl font-bold uppercase mb-10 dark:text-white">
          Edit Category
        </p>
        <button
          type="button"
          className="border border-black text-black py-2 px-6 rounded-md hover:bg-green-400 hover:border-black"
        >
          View Category List
        </button>
      </div>
      <div className="p-4 container mx-auto">
        <form className="flex flex-col gap-4 pb-4 ">
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Slug
            </label>
            <input
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="slug"
              type="text"
              required
            />
          </div>
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
              for="name"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Name
            </label>
            <input
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
              for="description"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Description
            </label>
            <input
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="description"
              type="text"
              required
            />
          </div>
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
              for="meta_title"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Meta Title
            </label>
            <input
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_title"
              type="text"
              required
            />
          </div>
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
              for="meta_keywords"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Meta Keywords
            </label>
            <input
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_keywords"
              type="text"
              required
            />
          </div>
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
              for="meta_description"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Meta Description
            </label>
            <input
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_description"
              type="text"
              required
            />
          </div>
          <div className="py-3 mx-auto items-center flex justify-end gap-4 w-7/12">
            <button
              type="submit"
              className="border w-4/12 bg-gray-100 text-black border-black py-2 px-12 rounded-md hover:bg-green-400 hover:border-black"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <span className="py-10">
        <Footer classStyle="mt-6"></Footer>
      </span>
    </div>
  );
};

export default AddCategory;
