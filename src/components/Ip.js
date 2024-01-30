import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IPAddressDisplay = () => {
    const [ipAddress, setIpAddress] = useState(null);

    useEffect(() => {
        const fetchIpAddress = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                setIpAddress(response.data.ip);
                console.log(response);
            } catch (error) {
                console.error('Error fetching IP address:', error.message);
            }
        };

        fetchIpAddress();
    }, []);

    return (
        <div>
        
            {ipAddress ? (
                <p>{ipAddress}</p>
            ) : (
                <p>Loading IP address...</p>
            )}
        </div>
    );
};

export default IPAddressDisplay;
