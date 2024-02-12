import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { exportComponentAsPDF } from "react-component-export-image";
import Asidebar from "../../HeaderNabar/HeaderNavbar";
import HeaderNavbar from "../../Asidebar/Asidebar";
import Search from "../../../../components/SearchFilter/Search";
import Breadcrumb from "../../BreadCrumb/Breadcrumb";

const  MobileData = () => {
  const title = "Mobile Data";
  const links = [
    { title: "Home", href: "/dashboard" },
    { title: "Mobile Data", href: "" },
     
  ];
  // Define and initialize the tableRef
  const tableRef = useRef(null);

  // Define products array
  const products = [
    {
      childName: "Gaurav",
      DOB: "01/01/2022",
      aadhaar: "3433-34343-3435",
      mobile: "4554678876",
      email: "raju@gmail.com",
      createdOn: "08/01/2024",
      status: "Success",

    },
    
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
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg bg-white mt-14">
        <h3 className="text-2xl font-bold">ADMIN</h3> 
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
                     Child Name
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                     DOB
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Aadhaar No.
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                     Mobile No.
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                     Email ID
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                      Created On
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                       Status
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
                    className={index % 2 === 0 ? "bg-gray-400" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border ">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border">
                      {product.childName}
                    </td>
                    <td className="px-6 py-4 border">{product.DOB}</td>
                    <td className="px-6 py-4 border">{product.aadhaar}</td>
                    <td className="px-6 py-4 border">{product.mobile}</td>
                    <td className="px-6 py-4 border">{product.email}</td>
                    <td className="px-6 py-4 border">{product.createdOn}</td>
                    <td className="px-6 py-4 border">{product.status}</td>
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

export default  MobileData;
