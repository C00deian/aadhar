import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { exportComponentAsPDF } from "react-component-export-image";
import Asidebar from "../Asidebar/Asidebar";
import HeaderNavbar from "../HeaderNabar/HeaderNavbar";
import Search from "../../../components/SearchFilter/Search";
import Breadcrumb from "../BreadCrumb/Breadcrumb";

const History = () => {
  const title = "View Balance Transfer History";
  const links = [
    { title: "Home", href: "/dashboard" },
    { title: "View Balance Transfer History", href: "" },
     
  ];
 
  // Define and initialize the tableRef
  const tableRef = useRef(null);

  // Define products array
  const products = [
    {
      debitedFrom: "Admin",
      tranferPoint: "500",
      creditedTo: "Rajesh",
      status: "Transfer",
      date: "08/01/2024",
    },
    {
      debitedFrom: "Admin",
      tranferPoint: "800",
      creditedTo: "Jitendar",
      status: "Transfer",
      date: "03/01/2024",
    },
    {
      debitedFrom: "Admin",
      tranferPoint: "5000",
      creditedTo: " Mukesh",
      status: "Transfer",
      date: "08/02/2024",
    },
    {
      debitedFrom: "Admin",
      tranferPoint: "300",
      creditedTo: "Divakar",
      status: "Transfer",
      date: "31/01/2024",
    },
    {
      debitedFrom: "Admin",
      tranferPoint: "200",
      creditedTo: "Priyanka",
      status: "Transfer",
      date: "22/01/2023",
    },
    // Other product objects...
  ];

  // Function to copy data to clipboard
  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = products
      .map((product) => Object.values(product).join("\t"))
      .join("\n");
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  // Function to export table data to Excel
  const exportToExcel = () => {
    try {
      // Check if tableRef and tableRef.current exist before calling the download method
      if (tableRef.current && tableRef.current.table) {
        console.log("Exporting to Excel...");
        tableRef.current.table.download("xlsx", "history.xlsx");
      } else {
        console.error("Table or table ref is not defined");
      }
    } catch (error) {
      console.error("Error exporting to Excel:", error);
    }
  };

  return (
    <>
      <HeaderNavbar />
      <Asidebar />
      <Breadcrumb title={title} links={links} />
      <div className="p-4 sm:ml-72 bg-gray-200">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg bg-white  ">
          <div className="flex items-center justify-between mb-4">
            <div>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 mr-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-blue-700"
              >
                Copy
              </button>
              <button
                onClick={exportToExcel}
                className="px-4 py-2 mr-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-green-700"
              >
                Excel
              </button>
              <button className="px-4 py-2 mr-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-yellow-700">
                <CSVLink
                  data={products}
                  filename={"history.csv"}
                  className=" no-underline text-white"
                >
                  CSV
                </CSVLink>
              </button>
              <button
                onClick={() => exportComponentAsPDF(tableRef)}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-red-700 "
              >
                PDF
              </button>
            </div>
            <Search />
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              className="w-full text-sm text-left rtl:text-right text-black shadow-sm"
              ref={tableRef}
            >
              <thead className="text-base text-black  bg-white  ">
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
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-400" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border ">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border">
                      {product.debitedFrom}
                    </td>
                    <td className="px-6 py-4 border">{product.tranferPoint}</td>
                    <td className="px-6 py-4 border">{product.creditedTo}</td>
                    <td className="px-6 py-4 border">{product.status}</td>
                    <td className="px-6 py-4 border">{product.date}</td>
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
