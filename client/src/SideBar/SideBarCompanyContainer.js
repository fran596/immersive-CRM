import React from 'react'
import { Link } from 'react-router-dom'

const SideBarCompanyContainer = () => {
    return (
        <div className="sidebar-content">
            <h6 className="sidebar-heading">
                Companies 
            </h6>
            <ul className="sideBar-list">
                <li><Link to="/Company/newCompany">Add new company</Link></li>
            </ul>
        </div>
    );
}

export default SideBarCompanyContainer