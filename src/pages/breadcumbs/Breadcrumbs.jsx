import React from 'react'
import './breadcumbs.css'

import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {
    const location = useLocation();

    return (
        <main>

            <Link to="/"
                className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
                Home <span><i class="ri-arrow-right-s-line"></i> </span>
            </Link>
            <Link to="/products"
                className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
                Dashboard<span> <i class="ri-arrow-right-s-line"></i> </span>
            </Link>
            <Link to="/products/1"
                className={location.pathname === "/products/1" ? "breadcrumb-active" : "breadcrumb-not-active"}
            >
                Admin <span>  <i class="ri-arrow-right-s-line"></i> </span>
            </Link>
        </main>
    );
}

export default Breadcrumbs;