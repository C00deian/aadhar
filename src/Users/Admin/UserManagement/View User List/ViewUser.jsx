import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { exportComponentAsPDF } from "react-component-export-image";
import Asidebar from "../../Asidebar/Asidebar";
import HeaderNavbar from "../../HeaderNabar/HeaderNavbar";
import Search from "../../../../components/SearchFilter/Search";
import Breadcrumb from "../../BreadCrumb/Breadcrumb";

const ViewUser = () => {
  const title = "View User Data";
  const links = [
    { title: "Home", href: "/dashboard" },
    { title: "View User Data ", href: "" },
     
  ];
  const mylinks = [
    {
      to: "/adduser",
      text: "Create New ",
      icon: "ri-add-line text-white text-2xl ",
    },
  ];
  // Define and initialize the tableRef
  const tableRef = useRef(null);

  // Define products array
  const products = [
    {
      "name": "Ashok Singh",
      "mobile": "2223765698",
      "username": "UP_UID_NS_3545",
      "password": "Ashok@889#",
      "createdBy": "Admin",
      "balance": "500",
      "childPoint": "50",
      "mobilePoint": "20",
      "status": "Active"
    },
    {
      "name": "John Doe",
      "mobile": "1234567890",
      "username": "JD_123",
      "password": "Password123!",
      "createdBy": "Admin",
      "balance": "1000",
      "childPoint": "75",
      "mobilePoint": "30",
      "status": "Active"
    },
    {
      "name": "Emma Smith",
      "mobile": "9876543210",
      "username": "ES_456",
      "password": "Emma@Smith456",
      "createdBy": "Admin",
      "balance": "750",
      "childPoint": "60",
      "mobilePoint": "25",
      "status": "Active"
    },
    {
      "name": "Lisa Johnson",
      "mobile": "5551234567",
      "username": "LJ_789",
      "password": "LisaPassword789",
      "createdBy": "Admin",
      "balance": "300",
      "childPoint": "40",
      "mobilePoint": "15",
      "status": "Active"
    },
    {
      "name": "Michael Brown",
      "mobile": "4447891234",
      "username": "MB_987",
      "password": "Brown@Password987",
      "createdBy": "Admin",
      "balance": "900",
      "childPoint": "80",
      "mobilePoint": "35",
      "status": "Active"
    },
    {
      "name": "Sarah Lee",
      "mobile": "3336549872",
      "username": "SL_654",
      "password": "SarahLee!654",
      "createdBy": "Admin",
      "balance": "600",
      "childPoint": "55",
      "mobilePoint": "22",
      "status": "Active"
    },
    {
      "name": "David Wilson",
      "mobile": "7774567890",
      "username": "DW_111",
      "password": "DavidWilson111!",
      "createdBy": "Admin",
      "balance": "400",
      "childPoint": "45",
      "mobilePoint": "18",
      "status": "Active"
    },
    {
      "name": "Emily Taylor",
      "mobile": "8889876543",
      "username": "ET_222",
      "password": "Taylor@222",
      "createdBy": "Admin",
      "balance": "850",
      "childPoint": "70",
      "mobilePoint": "28",
      "status": "Active"
    },
    {
      "name": "James Anderson",
      "mobile": "6667891234",
      "username": "JA_333",
      "password": "Anderson333!",
      "createdBy": "Admin",
      "balance": "700",
      "childPoint": "65",
      "mobilePoint": "26",
      "status": "Active"
    },
    {
      "name": "Sophia Martinez",
      "mobile": "9996549872",
      "username": "SM_999",
      "password": "Sophia@999",
      "createdBy": "Admin",
      "balance": "950",
      "childPoint": "90",
      "mobilePoint": "40",
      "status": "Active"
    }
  ]
  ;

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
      <Breadcrumb title={title} links={links} mylinks={mylinks} />
      <div className="p-4 sm:ml-72 bg-gray-200">
        <div className="p-4 border-2 border-gray-200 border-solid rounded-lg bg-white ">
        <h3 className="text-2xl font-bold">View User Data-ADMIN</h3> 
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
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Mobile Number
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Created By
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Balance
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Child Point
                  </th>
                  <th scope="col" className="px-6 py-3 border">
                    Mobile Point
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
                      {product.name}
                    </td>
                    <td className="px-6 py-4 border">{product.mobile}</td>
                    <td className="px-6 py-4 border">{product.username}</td>
                    <td className="px-6 py-4 border">{product.password}</td>
                    <td className="px-6 py-4 border">{product.createdBy}</td>
                    <td className="px-6 py-4 border">{product.balance}</td>
                    <td className="px-6 py-4 border">{product.childPoint}</td>
                    <td className="px-6 py-4 border">{product.mobilePoint}</td>
                    <td className="px-6 py-4 border">{product.status}</td>
                    <td className="px-6 py-4 gap-2 flex items-center justify-between">
                      <Link
                        to="#"
                        className="font-medium text-blue-600 no-underline hover:underline border-1 bg-green-600 px-3 py-3 rounded-md"
                      >
                       <i class="ri-refresh-line text-white"></i>  
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 no-underline  hover:underline border-1 bg-red-600 px-3 py-3 rounded-md"
                      >
                       <i class="ri-delete-bin-line text-white"></i>  
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

export default ViewUser;
