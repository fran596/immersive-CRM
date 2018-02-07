import React from 'react'
import { Link } from 'react-router-dom'

const SideBarContactContainer = () => {
    return (
        <div className="sidebar-content">
            <h6 className="sidebar-heading">
                Contacts
            </h6>
            <ul className="sideBar-list">
            <li><Link to="/Contact/newContact">Add new contact</Link></li>
            </ul>

        </div>
    );
}

export default SideBarContactContainer