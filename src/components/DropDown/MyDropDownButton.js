import React, { useRef, useEffect, useCallback } from 'react';

const MyDropdownButton = ({ isOpen, onClose }) => {
    const dropdownRef = useRef(null);

    const closeDropdown = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeDropdown]);

    return (
        <div className="dropdown-container">
            {/* Drop-down button (conditionally rendered) */}
            {!isOpen && (
                <button className="dropdown-btn" onClick={closeDropdown}>
                 
                </button>
            )}

            {/* Drop-down content */}
            {isOpen && (
                <div className="dropdown-content" ref={dropdownRef}>
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                    {/* Add other content here */}
                    {/* Hide button */}
                  
                </div>
            )}
        </div>
    );
};

export default MyDropdownButton;
