import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import Products from '../../data';
import Breadcrumbs from '../../pages/breadcumbs/Breadcrumbs';
import './list.css';

function List() {
    return (
        <>

            <div className='first-half'>
                <div className='title-section'>

                    <p style={{ fontSize: '17px' }}>Dashboard</p>
                    <div className='breadcrumb'>
                        <Breadcrumbs></Breadcrumbs>
                    </div>
                </div>

                <div className='button-section'>
                    <i class="ri-add-fill plus"></i>
                    <button>Create New</button>
                </div>

            </div>
            {

                Products ? (

                    
                    
                        <section>
                            <div className='hero-section'>
                        <Table striped bordered hover  className="custom-table">
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


                                {


                                    Products.length > 0 ? Products.map((item, index) =>
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.aadhar}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.email}</td>

                                        </tr>
                                    )

                                        : <h1 className='list-record'> Record Not Found😞</h1>
                                }

                            </tbody>

                                </Table>
                            </div>
                        </section>
              
                ) : (
                    <p>Please Wait...</p>
                )
            }
        </>
    )
}

export default List