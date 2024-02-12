import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
// import axios from "axios";
import Breadcrumb from "../../../Users/Admin/BreadCrumb/Breadcrumb";
import "./EntryList.css";
import CSVDownloadButton from "../../../pages/Download/CSVDownloadButton";
import PDFDownloadButton from "../../../pages/Download/PDFDownloadButton";
import ExcelDownloadButton from "../../../pages/Download/ExcelDownloadButton";
import CopyButton from "../../../pages/Download/CopyButton";
import HeaderNavbar from "../../../Users/Admin/HeaderNabar/HeaderNavbar";
import Asidebar from "../../../Users/Admin/Asidebar/Asidebar";
import Products from "../../../pages/Products";
import Search from "../../SearchFilter/Search";
import FingerData from "./Authentication/FingerData";
import ViewFingerAndUpdate from "./View/ViewFingerAndUpdate";
import DeleteData from "./Delete/DeleteData";
import Upload from "./Upload/Upload";
import Action from "./Action/Action";

function ChildEntryList() {
  const title = "View Child Data";
  const links = [
    { title: "Home", href: "/dashboard" },
    { title: "View Child Data", href: "" },
  ];
  //api data fetch
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  // useEffect(() => {
  //     // Define the API endpoint URL
  //     const apiUrl = 'http://localhost:4001/Products';

  //     // Make a GET request using Axios
  //     axios.get(apiUrl)
  //         .then(response => {
  //             setData(response.data);
  //         })
  //         .catch(err => {
  //             console.log('Something Went Wrong');
  //             setError(err);
  //         });
  // }, []);

  const handleIconClick = (index) => {
    setSelectedRow(selectedRow === index ? null : index);
  };

  return (
    <>
      <HeaderNavbar />
      <Asidebar />
      <Breadcrumb title={title} links={links} />

      {/* data */}
      {Products ? (
        <div className="p-12 sm:ml-72  mb-48 bg-gray-200">
          <div className="p-4 border-2 rounded-lg  shadow-xl bg-white">
            <div className="Download-Button">
              <CopyButton />
              <ExcelDownloadButton fileName="myExcel" jsonData={Products} />
              <CSVDownloadButton />
              <PDFDownloadButton />
              <Search />
            </div>
            <Table striped bordered hover className="custom-table">
              <thead>
                <tr>
                  <th>S.NO.</th>
                  <th>Applied By</th>
                </tr>
              </thead>

              <tbody>
                {Products.length > 0 ? (
                  Products.map((item, index) => (
                    <React.Fragment key={item._id}>
                      <tr>
                        <td>
                          <div
                            className="DropDown"
                            onClick={() => handleIconClick(index)}
                          >
                            <i
                              className={
                                selectedRow === index
                                  ? "ri-close-fill child"
                                  : "ri-add-fill child"
                              }
                              style={{
                                backgroundColor:
                                  selectedRow === index ? "red" : "blue",
                              }}
                            ></i>{" "}
                            {index + 1}
                          </div>
                        </td>
                        <td>{item.name}</td>
                      </tr>
                      {selectedRow === index && (
                        <tr>
                          <td colSpan="6" style={{ backgroundColor: "white" }}>
                            {/* Dropdown content */}
                            <div className="dropdown-content">
                              <div className="dropdown-title">
                                <h3 className="status">
                                  {" "}
                                  Aadhaar Card Details :{" "}
                                </h3>

                                <span className="span">Name : {item.name}</span>
                                <span className="span">
                                  Father Name : {item.dateofbirth}
                                </span>
                                <span className="span">
                                  Aadhaar No : {item.aadhaar}
                                </span>
                                <span className="span">
                                  {" "}
                                  Mobile No : {item.mobile}
                                </span>
                                <span className="span">
                                  {" "}
                                  E-mail : {item.email}
                                </span>
                                <span className="span">
                                  {" "}
                                  Address : {item.address}
                                </span>
                                <h3 className="status"> Purpose & Status</h3>
                                <h3 className="status"> Admin Remark</h3>
                                <h3 className="status">
                                  Created On :{" "}
                                  <span
                                    style={{ color: "blue", fontSize: "15px" }}
                                  >
                                    {item.createdOn}
                                  </span>
                                </h3>
                                <div className="Action-container">
                                  <Action />
                                  <FingerData />
                                  <ViewFingerAndUpdate />
                                  <DeleteData />
                                  <Upload />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">
                      <h1 className="list-record">Record Not Found😞</h1>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <p>Please Wait...</p>
      )}
    </>
  );
}

export default ChildEntryList;
