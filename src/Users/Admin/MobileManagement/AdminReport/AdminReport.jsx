import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { exportComponentAsPDF } from "react-component-export-image";
import HeaderNavbar from "../../HeaderNabar/HeaderNavbar"; // Corrected import
import Asidebar from "../../Asidebar/Asidebar"; // Corrected import
import Search from "../../../../components/SearchFilter/Search";

const AdminReport = () => {
  const tableRef = useRef(null);

  const products = [
    {
      appliedBy: "UP_UID_NS_3203",
      aadharCardDetails: { // Fixed object structure
        Name: "Kabutari Devi",
        FatherName: "Ramawatar Yadva",
        DOB: "01/01/1962",
        AadhaarNo: "2323-3434-4545",
        MobileNo: "233445667",
        Email: "Ck812@gmail.com",
        Address: ""
      },
      purpose: "Mobile NO Update",
      adminRemark: "", // Corrected spacing
      createdOn: "11/12/2012",
    },
  ];

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

  const exportToExcel = () => {
    try {
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
                    Applied By
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Aadhar Card Details
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Purpose & Status
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Admin Remark
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
                    className={index % 2 === 0 ? "bg-gray-400" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border ">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border">
                      {product.appliedBy}
                    </td>
                    <td className="px-6 py-4 border">
                      {Object.values(product.aadharCardDetails).join(", ")}
                    </td>
                    <td className="px-6 py-4 border">{product.purpose}</td>
                    <td className="px-6 py-4 border">{product.adminRemark}</td>
                    <td className="px-6 py-4 border">{product.createdOn}</td>
                    <td className="px-6 py-4 border flex items-center justify-between">
                      <Link
                        to="#"
                        className="font-medium text-blue-600 no-underline hover:underline border-1 bg-green-600 px-3 py-3 rounded-md"
                      >
                        <i className="ri-edit-box-line text-white"></i>
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 no-underline hover:underline border-1 bg-green-600 px-3 py-3 rounded-md"
                      >
                        <i className="ri-fingerprint-fill text-white"></i>
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 no-underline hover:underline border-1 bg-green-600 px-3 py-3 rounded-md"
                      >
                        <i className="ri-eye-line text-white"></i>
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 no-underline hover:underline border-1 bg-red-600 px-3 py-3 rounded-md"
                      >
                        <i className="ri-delete-bin-line text-white"></i>
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-white no-underline border-1 bg-green-600 px-6 py-3 rounded-md"
                      >
                        Upload
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

export default AdminReport;

