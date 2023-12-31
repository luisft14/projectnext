"use client";
import React, { useEffect, useState } from "react";

function Table({ title, data, columns, actions, add, show, deleteI, reload,orderByColum }) {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    setDataTable(data);
  });

  function addItem() {
    add(true);
  }
  function showDetails(id) {
    show(id);
  }
  function deleteItem(id) {
    deleteI(id);
  }
  function reloadData() {
    reload();
  }
  function orderBy(colum) {
    orderByColum(colum);

  }

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h2 className="font-semibold text-base text-blueGray-700">
                  {title}
                </h2>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => addItem()}
                >
                  Add {title}
                </button>
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => reloadData()}
                >
                  Reload {title}
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  {columns?.map((colum) => (
                    <th
                      key={colum.value}
                      className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      {colum.name}
                      {colum?.filter ? (
                        <button onClick={()=>orderBy(colum.value)}>
                          <svg
                            className="submit block w-3 h-3 bg-blueGray-50 text-gray-800 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 12 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10.335 6.514 6.91 1.464a1.122 1.122 0 0 0-1.818 0l-3.426 5.05a.988.988 0 0 0 .91 1.511h6.851a.988.988 0 0 0 .91-1.511Zm-8.67 6.972 3.426 5.05a1.121 1.121 0 0 0 1.818 0l3.426-5.05a.988.988 0 0 0-.909-1.511H2.574a.987.987 0 0 0-.909 1.511Z"
                            />
                          </svg>
                        </button>
                      ) : (
                        ""
                      )}
                    </th>
                  ))}
                  {actions.length > 0 ? (
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Actions
                    </th>
                  ) : (
                    ""
                  )}
                </tr>
              </thead>

              <tbody>
                {dataTable?.map((element, index) => (
                  <tr key={index}>
                    {columns.map((item, index) => (
                      <td
                        key={index}
                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 "
                      >
                        {element[item.value]}
                      </td>
                    ))}
                    <td>
                      <div
                        className="inline-flex rounded-md shadow-sm"
                        role="group"
                      >
                        <button
                          type="button"
                          className="px-1 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={() => showDetails(element.id)}
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          className="ml-2 px-1 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          onClick={() => deleteItem(element.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
