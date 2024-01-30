import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './UpdatePerson.css';
import { Input } from '../../components/PersonEntry/PersonEntry'; // Reusing Input component
import Breadcrumbs from '../../pages/breadcumbs/Breadcrumbs';

const UpdatePerson = ({ match }) => {
    // const imageUrl = require('../FingerPrint/finger.jpg');
    const [formData, setFormData] = useState({
        name: '',
        dateofbirth: '',
        email: '',
        mobile: '',
        purpose: '',
        aadhaar: '',
        address: '',
        fathern: '',
    });

    useEffect(() => {
        // Fetch data based on the route parameter (id)
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4001/Products/${match.params.id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching data for update:', error);
            }
        };

        fetchData();
    }, [match.params.id]);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.purpose || !formData.email || !formData.mobile) {
            return alert('Please fill the blank fields first');
        }

        try {
            const updateUrl = `http://localhost:4001/Products/${match.params.id}`;
            const response = await axios.put(updateUrl, formData);
            console.log('Data updated successfully:', response.data);
            alert('Data updated successfully');
        } catch (error) {
            console.error('Error updating data:', error.message);
        }
    };

    return (
        <>
            <div className="first-half">
                <div className="title-section">
                    <p style={{ fontSize: '17px' }}>Dashboard</p>
                    <div className="breadcrumb">
                        <Breadcrumbs></Breadcrumbs>
                    </div>
                </div>
            </div>

            <section>
                <div className="hero-section">
                    <div className="formContainer">
                        <div className="PurposeGrid ">
                            <Input
                                onChange={handleInputChange}
                                label="Purpose"
                                type="text"
                                name="purpose"
                                value={formData.purpose}
                                placeholder="Enter Purpose"
                                required
                            />
                        </div>
                        <div className="formGrid">
                            <Input
                                onChange={handleInputChange}
                                label="Full Name"
                                type="text"
                                value={formData.name}
                                name="name"
                                placeholder="Enter Name"
                            />
                            {/* Other Input components for the remaining fields */}
                        </div>
                        <div className="PurposeGrid Address ">
                            <Input
                                onChange={handleInputChange}
                                label="Address"
                                type="text"
                                name="address"
                                placeholder="House No, Village, City Name, District, State"
                                value={formData.address}
                            />
                        </div>

                        <div className="container">
                            {/* Box components for fingerprints */}
                        </div>

                        <div id="Reciept">
                            <span id="Original" onClick={handleSubmit}>
                                <i className="ri-save-fill"> </i>Update
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UpdatePerson;
