

import React from 'react'

import './index.css'

const Navbar = () => {
    return (
           
 
     <nav className="navbar navbar-expand-sm bg-success   navbar-light">
                <div className="container-fluid content">
                    <a className="navbar-brand" href="#Image">
                        <img className="logo" src="https://jasbuzztech.com/wp-content/uploads/2020/02/logo-regular-free-img.png" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto pe-3 items">
                            <li className="nav-item">
                                <a className="nav-link tags " href="#H">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tags" href="#A">All Courses</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link tags" href="#I">Instructors</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link tags" href="#A">About Us</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link tags" href="#C">Contact Us</a>
                            </li>
                            <button className="btn">Star Learning</button>

                        </ul>

                    </div>
                </div>
            </nav>


           

        
    )
}

export default Navbar