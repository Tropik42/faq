import React from "react";

function Sidebar () {
    return (
        <div className="vh-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                Home
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                Orders
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                Products
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                Customers
                </a>
            </li>
            </ul>
        </div>
    )
}

export default Sidebar;
