import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './csv.css'
import products from '../../Products';

const CSVDownloadButton = () => {
    const [data, setData] = useState([]);

    // const fetchDataFromBackend = async () => {
    //     try {
    //         const response = await fetch('http://localhost:4001/Products');
    //         const fetchedData = await response.json();
    //         setData(fetchedData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchDataFromBackend();
    // }, []);

    const handleDownload = () => {
        const csv = Papa.unparse(products);
        const blob = new Blob([csv], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Customer.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='Csv'>
            <button onClick={handleDownload}>
                CSV
            </button>
        </div>
    );
};

export default CSVDownloadButton;
