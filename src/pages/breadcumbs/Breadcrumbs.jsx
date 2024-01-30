import React from 'react'
import './breadcumbs.css'

import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {
    const location = useLocation();

    return (
        <main>

            <Link to="/home"
                className={location.pathname === "/home" ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
                Home <span><i class="ri-arrow-right-s-line"></i> </span>
            </Link>
            <Link to="/add-customer"
                className={location.pathname.startsWith("/add-customer") ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
                Add Customer<span> <i class="ri-arrow-right-s-line"></i> </span>
            </Link>
            <Link to="/list"
                className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
                List <span>  <i class="ri-arrow-right-s-line"></i> </span>
            </Link>

            {/* <Link to="/update-person/:id"
                className={location.pathname === "/update-person/:id" ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
                update <span><i class="ri-arrow-right-s-line"></i> </span>
            </Link> */}
        </main>
    );
}

export default Breadcrumbs;