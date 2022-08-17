import React, { useState, useEffect } from "react";
import { Link } from "@mui/material";
import categ_data from "./categ_data";
import CategTableContianer from "./CategTableContianer";
import axios from "axios";
import swal from "sweetalert";

const CategoryTable = () => {
  const [loading, setLoading] = useState(true);
  const [categorylist, setCategorylist] = useState([]);

  useEffect(() => {
      axios.get(`/api/view-category`).then(res=> {
          // console.log(res.data.category)
          if (res.data.status === 200) {
              setCategorylist(res.data.category)
          }
          setLoading(false);
      })

  }, [])

  const deleteCategory = (e, id) => {
      e.preventDefault();

      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleting";

      axios.delete(`/api/delete-category/${id}`).then(res => {
          if (res.data.status === 200) {
              swal("Success", res.data.message, "message")
              thisClicked.closest("tr").remove();
          }

          else if(res.data.status === 404) {
              swal("Success", res.data.message, "message");
              thisClicked.innerText = "Delete";
          }
      })
  }

  var viewcategory_HTMLTABLE = "";

  if (loading) {
      return <h4>Loading Category...</h4>
  }
  else {
      viewcategory_HTMLTABLE =
      categorylist.map((item) => {
          return(
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 container my-auto">
        <td className="py-4 px-6 text-center">{item.id}</td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white tex"
        >
          {item.name}
        </th>
        <td className="py-4 px-6 text-center">{item.slug}</td>
        <td className="py-4 px-6 text-green-600 text-center">{item.status}</td>
        <td className="py-4 px-6 space-x-4 text-center">
          <button
            type="button"
            className="border border-blue-400 text-blue-400 py-2 px-6 rounded-md hover:bg-blue-400 hover:text-white"
          >
            Update
          </button>

          {item.status ? (
            <button
              type="button"
              className="border border-red-400 text-red-400 py-2 px-6 rounded-md hover:bg-red-400 hover:text-white"
            >
              Deactive
            </button>
          ) : (
            <button
              type="button"
              className="border border-green-600 text-green-600 py-2 px-6 rounded-md hover:bg-green-400 hover:text-white"
            >
              Active
            </button>
          )}
          <button onClick={ (e) => deleteCategory(e, item.id)}
              type="button"
              className="border border-red-400 text-red-400 py-2 px-6 rounded-md hover:bg-red-400 hover:text-white"
            >
              Delete
            </button>
          
        </td>
      </tr>
          )
      })
  }





  // const [pageNum, setPageNum] = useState(1);
  // const [itemFirst, setFirst] = useState(0);
  // const [itemLast, setItemLast] = useState(5);

  // const nextpage = () => {
  //   let currentPage = pageNum;
  //   let Last = itemLast * pageNum;

  //   if (categ_data.length >= Last) {
  //     currentPage += 1;
  //     setPageNum(currentPage);
  //   }
  // };

  // const prevpage = () => {
  //   let page = pageNum;
  //   let First = itemFirst;
  //   if (pageNum > 1) {
  //     page -= 1;
  //     First -= 1;
  //   }
  //   setPageNum(page);
  //   setFirst(First);
  // };

  return (
    <div className="m-10 py-1">
      <div className="my-2 flex justify-start">
        <p className="text-3xl font-bold uppercase mb-16 dark:text-white">
          Category
        </p>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex gap-3 items-center relative">
          <button
            // onClick={prevpage}
            type="button"
            className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-200 hover:text-black z-50"
          >
            Prev
          </button>
          <p className="mx-2 inset-0">
            <span className="text-lg absolute inset-0 m-2 z-10">1</span>
          </p>
          <button
            // onClick={nextpage}
            type="button"
            className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-200 hover:text-black z-50"
          >
            Next
          </button>
        </div>
        <Link to='/addcategory'>
        <button
          type="button"
          className="border border-green-600 text-green-600 py-2 px-6 rounded-md hover:bg-green-400 hover:text-white"
        >
          Add New Category
        </button>
        </Link>
      </div>
      <div className="overflow-x-auto relative rounded-md border border-black">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-base text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-center">
                Id
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Category
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Product Type
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Status
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {categ_data.slice(itemFirst, itemLast).map((item) => ( */}
              {viewcategory_HTMLTABLE}
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
