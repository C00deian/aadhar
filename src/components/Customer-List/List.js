import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
// import axios from "axios";
//import Breadcrumbs from "../common/breadcumbs/Breadcrumbs";
import "./list.css";
import CSVDownloadButton from "../../pages/Download/CSVDownloadButton";
import PDFDownloadButton from "../../pages/Download/PDFDownloadButton";
import ExcelDownloadButton from "../../pages/Download/ExcelDownloadButton";
import CopyButton from "../../pages/Download/CopyButton";
import Slip from "../../components/Slip/Slip";
import HeaderNavbar from "../../Users/Admin/HeaderNabar/HeaderNavbar";
import Asidebar from "../../Users/Admin/Asidebar/Asidebar";
import Products from "../../pages/Products";
import Search from "../SearchFilter/Search";
import Header from "../../components/common/Header/Header";
function List() {
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
      {/* <div className="first-half">
        <div className="title-section">
          <p className="dashboard">List</p>
          <div className="breadcrumb">
            <Breadcrumbs />
          </div>
        </div>

        <div className="button-section">
          <i class="ri-add-fill plus"></i>
          <Link to="/add-customer">
            <button className="custom-button">Create New</button>
          </Link>
        </div>
      </div> */}

      {/* data */}
      {Products ? (
        <div className="p-12 sm:ml-72  mb-48 bg-gray-200">
          <div className="p-4 border-2 rounded-lg mt-5 bg-white">
            <Header />
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
                  <th>S.N.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Aadhaar No.</th>
                  <th>Mobile No.</th>
                  <th>E-mail ID</th>
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
                                  ? "ri-close-fill"
                                  : "ri-add-fill"
                              }
                              style={{
                                backgroundColor:
                                  selectedRow === index ? "red" : "blue",
                              }}
                            ></i>
                          </div>
                          {index + 1}
                        </td>
                        <td>{item.name}</td>
                        <td>{item.dateofbirth}</td>
                        <td>{item.aadhaar}</td>
                        <td>{item.mobile}</td>
                        <td>{item.email}</td>
                      </tr>
                      {selectedRow === index && (
                        <tr>
                          <td colSpan="6" style={{ backgroundColor: "white" }}>
                            {/* Dropdown content */}
                            <div className="dropdown-content">
                              <div className="dropdown-title">
                                <h3 className="status">
                                  Created On :{" "}
                                  <span
                                    style={{ color: "blue", fontSize: "15px" }}
                                  >
                                    {item.createdOn}
                                  </span>
                                </h3>

                                <h3 className="status">Status</h3>
                              </div>

                              <Slip />
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

export default List;
