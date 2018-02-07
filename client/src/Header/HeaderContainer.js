import React from 'react'
import { Link } from 'react-router-dom'

const HeaderContainer = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-nav " id="mainNav">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand nav-link"><span><Link to="/" className="navbar-brand">CRM</Link></span></div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link to="/Company">Companies</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Contact">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default HeaderContainer