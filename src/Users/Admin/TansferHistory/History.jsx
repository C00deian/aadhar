import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { exportComponentAsPDF } from "react-component-export-image";

const History = () => {
  const tableRef = useRef(null); // Define tableRef

  const products = [ // Move 'products' array declaration to the top level
    {
      name: 'Admin"',
      color: "500",
      category: "Rajesh",
      price: "Transfer",
      date: "08/01/2024",
    },
    // Other product objects...
  ];

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = products.map(product => Object.values(product).join('\t')).join('\n');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <>
      <div className="p-4 sm:ml-64 bg-gray-200">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg bg-white mt-14">
          <div className="flex justify-between mb-4">
            <div>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 mr-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Copy
              </button>
              <button
                onClick={() =>
                  tableRef.current.table.download("xlsx", "history.xlsx")
                }
                className="px-4 py-2 mr-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
              >
                Excel
              </button>
              <CSVLink
                data={products}
                filename={"history.csv"}
                className="px-4 py-2 mr-2 text-sm font-medium text-white bg-yellow-600 rounded hover:bg-yellow-700"
              >
                CSV
              </CSVLink>
              <button
                onClick={() => exportComponentAsPDF(tableRef)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700"
              >
                PDF
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg" ref={tableRef}>
            <table className="w-full text-sm text-left rtl:text-right text-black shadow-sm">
              <thead className="text-xs text-black  bg-white  ">
                <tr>
                  <th scope="col" className="px-2 py-3 border">
                    Serial No.
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Debited From
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Transferred Point
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Credited To
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Created On
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-300" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border ">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 border">{product.color}</td>
                    <td className="px-6 py-4 border">{product.category}</td>
                    <td className="px-6 py-4 border">{product.price}</td>
                    <td className="px-6 py-4 border">{product.date}</td>
                    <td className="px-6 py-4 border">
                      <Link
                        to="#"
                        className="font-medium text-black hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
