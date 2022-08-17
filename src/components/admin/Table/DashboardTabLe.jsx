import React, { useState } from "react";
import { useEffect } from "react";
import TableContainer from "./TableContainer";
import TableData from "./TableData";

const DashboardTabLe = () => {
  const [pageNum, setPageNum] = useState(1);
  const [itemFirst, setFirst] = useState(0);
  const [itemLast, setItemLast] = useState(5);

  const nextpage = () => {
    let currentPage = pageNum;
    let Last = itemLast * pageNum;

    if (TableData.length >= Last) {
      currentPage += 1;
      setPageNum(currentPage);
    }
  };

  const prevpage = () => {
    let page = pageNum;
    let First = itemFirst;
    if (pageNum > 1) {
      page -= 1;
      First -= 1;
    }
    setPageNum(page);
    setFirst(First);
  };

  return (
    <div className="mx-10 py-1">
      <div className="my-2 flex justify-center">
        <p className="text-3xl font-bold dark:text-white">Products</p>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex gap-3 items-center relative">
          <button
            onClick={prevpage}
            type="button"
            className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-200 hover:text-black z-50"
          >
            Prev
          </button>
          <p className="mx-2 inset-0">
            <span className="text-lg absolute inset-0 m-2 z-10">{pageNum}</span>
          </p>
          <button
            onClick={nextpage}
            type="button"
            className="border border-black text-black py-2 px-6 rounded-md hover:bg-gray-200 hover:text-black z-50"
          >
            Next
          </button>
        </div>
        <button
          type="button"
          className="border border-green-400 text-green-400 py-2 px-6 rounded-md hover:bg-green-400 hover:text-white"
        >
          Go to Products
        </button>
      </div>
      <div className="overflow-x-auto relative rounded-md border border-black">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-base text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 text-center">
                Id
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Category
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Quantity
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
            {TableData.slice(itemFirst, itemLast).map((item) => (
              <TableContainer
                id={item.id}
                title={item.title}
                category={item.category}
                quantity={item.quantity}
                status={item.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTabLe;
