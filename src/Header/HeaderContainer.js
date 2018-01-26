import React from 'react'

const HeaderContainer = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-nav " id="mainNav">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand nav-link" href="#home">Me</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Technical Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#lang">Languagues</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#other">Other</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default HeaderContainer