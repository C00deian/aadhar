import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from '../../pages/breadcumbs/Breadcrumbs';
import './list.css';
import CSVDownloadButton from '../../pages/Download/CSV/CSVDownloadButton';
import PDFDownloadButton from '../../pages/Download/PDF/PDFDownloadButton';
import ExcelDownloadButton from '../../pages/Download/ExcelDownloadButton';
import CopyButton from '../../pages/Download/CopyButton';
import Slip from '../../components/Slip/Slip'
import Navbar from '../Navbar/Navbar';
import Menubar from '../../pages/MenuSidebar/Menubar';

function List() {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://localhost:4001/Products';

        // Make a GET request using Axios
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                console.log('Something Went Wrong');
                setError(err);
            });
    }, []);

    const handleIconClick = (index) => {
        setSelectedRow(selectedRow === index ? null : index);
    };

    return (
        <>
            <Menubar />
            <Navbar/>
            <div className='first-half'>
                <div className='title-section'>
                    <p style={{ fontSize: '17px' }}>Dashboard</p>
                    <div className='breadcrumb'>
                        <Breadcrumbs></Breadcrumbs>
                    </div>
                </div>

                <div className='button-section'>
                    <i class="ri-add-fill plus"></i>
                    <Link to='/add-customer'>
                        <button>Create New</button>
                    </Link>
                </div>
            </div>

            {data ? (
                <section>
                    <div className='hero-section'>
                        <div className='Download-Button'>
                            <CopyButton />
                            <ExcelDownloadButton />
                            <CSVDownloadButton />
                            <PDFDownloadButton />
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
                                {data.length > 0 ? data.map((item, index) => (
                                    <React.Fragment key={item._id}>
                                        <tr>
                                            <td>
                                                <div className='DropDown' onClick={() => handleIconClick(index)}>
                                                    <i className={selectedRow === index ? 'ri-close-fill' : 'ri-add-fill'}
                                                        style={{
                                                            backgroundColor: selectedRow === index ? 'red' : 'blue'
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
                                                <td colSpan="6">
                                                    {/* Dropdown content */}
                                                    <div className="dropdown-content">

                                                        <div className='title'>
                                                            <h3>Created On :    {item.createdOn} </h3>
                                                            <div className='status'>

                                                                <h3 >Status</h3>
                                                            </div>

                                                        </div>

                                                        <Slip />

                                                    </div>

                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                )) : (
                                    <tr>
                                        <td colSpan="6">
                                            <h1 className='list-record'>Record Not Found😞</h1>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </section>
            ) : (
                <p>Please Wait...</p>
            )}
        </>
    );
}

export default List;