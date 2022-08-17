import Footer from "../Footer/Footer";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import { Link } from "@mui/material";
const AddCategory = () => {
  
  const [categoryInput, setCategory] = useState({
    slug: '',
    name: '',
    description: '',
    status: '',
    meta_title: '',
    meta_keyword: '',
    meta_description: '',
    error_list: [],
})


const handleInput= (e) => {
    e.persist();
    setCategory({...categoryInput, [e.target.name]: e.target.value })
}

const submitCategory = (e) => {
    e.preventDefault();

    const data = {
        slug: categoryInput.slug,
        name: categoryInput.name,
        description: categoryInput.description,
        status: categoryInput.status,
        meta_title: categoryInput.meta_title,
        meta_keyword: categoryInput.meta_keyword,
        meta_description: categoryInput.meta_description,

    }

    axios.post(`/api/store-category`, data).then(res => {
        if (res.data.status === 200) {
            swal("Success",res.data.message, "success");
            document.getElementById(`CATEGORY_FORM`).reset();
        }
        else if (res.data.status === 400) {
            setCategory({...categoryInput, error_list:res.data.errors});
        }
    })
}
  return (
    <div className="m-10 py-1">
      <div className="my-2 flex justify-between items-start">
        <p className="text-3xl font-bold uppercase mb-10 dark:text-white">
          Add New Category
        </p>
          <Link to='/viewcategory'> 
        <button
          type="button"
          className="border border-black text-black py-2 px-6 rounded-md hover:bg-green-400 hover:border-black"
        >
          View Category List
        </button>
          </Link>
      </div>
      <div className="p-4 container mx-auto">
        <form onSubmit={submitCategory} className="flex flex-col gap-4 pb-4">
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
              for="slug"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Slug
            </label>
            <input
              onChange={handleInput}
              value={categoryInput.slug}
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
            onChange={handleInput}
            value={categoryInput.name}
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
            onChange={handleInput}
            value={categoryInput.description}
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
            onChange={handleInput}
            value={categoryInput.meta_title}
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
            onChange={handleInput}
            value={categoryInput.meta_keyword}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_keyword"
              type="text"
              required
            />
          </div>
          <div className="py-3 mx-auto items-center flex justify-center gap-4 w-7/12">
            <label
            onChange={handleInput}
              for="meta_description"
              class="m-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300 w-3/12 text-end"
            >
              Meta Description
            </label>
            <input
            onChange={handleInput}
            value={categoryInput.meta_description}
              className="border text-black bg-inherit border-black rounded-sm bg-opacity-20 focus:ring-0 focus:border-black grow"
              name="meta_description"
              type="text"
              required
            />
          </div>
          <div className="hidden">
          <label>Status</label>
          <input type="checkbox" name='status' onChange={handleInput} value={categoryInput.status} /> Status 0= shown/1=hidden
          </div>
          

          <div className="py-3 mx-auto items-center flex justify-end gap-4 w-7/12">
            <button
              type="submit"
              className="border w-4/12 bg-gray-100 text-black border-black py-2 px-12 rounded-md hover:bg-green-400 hover:border-black"
            >
              Submit
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
