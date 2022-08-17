import React from "react";

const CategTableContianer = (props) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 container my-auto">
        <td className="py-4 px-6 text-center">{props.id}</td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white tex"
        >
          {props.title}
        </th>
        <td className="py-4 px-6 text-center">{props.product_type}</td>
        <td className="py-4 px-6 text-green-600 text-center">{props.status}</td>
        <td className="py-4 px-6 space-x-4 text-center">
          <button
            type="button"
            className="border border-blue-400 text-blue-400 py-2 px-6 rounded-md hover:bg-blue-400 hover:text-white"
          >
            Update
          </button>

          {props.status ? (
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
        </td>
      </tr>
    </>
  );
};

export default CategTableContianer;
