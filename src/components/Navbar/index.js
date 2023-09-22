

import React from 'react'

import './index.css'

const Navbar = () => {
    return (
        <div className='navbarbg'>

            <nav class="navbar navbar-expand-sm bg-container navbar-light">
                <div class="container-fluid content">
                    <a class="navbar-brand" href="#Image">
                        <img class="logo" src="https://jasbuzztech.com/wp-content/uploads/2020/02/logo-regular-free-img.png" alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ms-auto pe-3 items">
                            <li class="nav-item">
                                <a class="nav-link tags " href="#H">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link tags" href="#A">All Courses</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link tags" href="#I">Instructors</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link tags" href="#A">About Us</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link tags" href="#C">Contact Us</a>
                            </li>
                            <button class="btn">Star Learning</button>

                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar