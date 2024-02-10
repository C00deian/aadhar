import React from "react";

 
import { Link } from "react-router-dom";
const History = () => {
  // Array of product data
  const products = [
    {
      name: 'Admin"',
      color: "500",
      category: "Rajesh",
      price: "Transfer",
      date: "08/01/2024",
    },
    {
      name: 'Admin"',
      color: "500",
      category: "Rajesh",
      price: "Transfer",
      date: "08/01/2024",
    },
    {
      name: 'Admin"',
      color: "500",
      category: "Rajesh",
      price: "Transfer",
      date: "08/01/2024",
    },
    {
      name: 'Admin"',
      color: "500",
      category: "Rajesh",
      price: "Transfer",
      date: "08/01/2024",
    },
    {
      name: 'Admin"',
      color: "500",
      category: "Rajesh",
      price: "Transfer",
      date: "08/01/2024",
    },
    {
      name: 'Admin"',
      color: "500",
      category: "Rajesh",
      price: "Transfer",
      date: "08/01/2024",
    },
    
  ];

  return (
    <>
       
      <div className="p-4 sm:ml-64 bg-gray-200">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg bg-white mt-14">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        href="#"
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
