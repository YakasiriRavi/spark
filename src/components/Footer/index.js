

import React from 'react'


import './index.css'

const Footer = () => {
    return (


        <div className="footer d-flex flex-column justify-content-center " >
            <div className="container">
                <div className="row">

                    <div className="col-6 d-flex flex-column align-items-start text-align-start">
                        <img className="logo1 ms-0" src="https://jasbuzztech.com/wp-content/uploads/2020/04/logo-regular.png" alt="logo" />
                        <p className='mt-4 para'>The passport to the future
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt  ut labore et dolore magna aliqua.
                            Ut enim ad minim.
                        </p>

                        <div className='p-1 mt-5'>
                            <i className="bi bi-twitter  pe-4"></i>
                            <i className="bi bi-facebook  pe-4"></i>
                            <i className="bi bi-pinterest  pe-4"></i>
                            <i className="bi bi-youtube  pe-4"></i>
                        </div>

                    </div>


                    <div className="col-3 mb-3">
                        <h3>Popular Courses</h3>
                        <p className='courses'>LMS Interactive Content <br />
                            Become a PHP Master <br />
                            HTML5/CSS3 Essentials<br />
                            JavaScript Development<br />
                            WordPress Basic Tutorial<br />
                            Introduction to Coding</p>
                    </div>


                    <div className="col-3">
                        <h3>Contact Info</h3>
                        <h4>Address</h4>
                        <p>123 Fifth Avenue, New York, NY 10160</p>
                        <h4>Phone</h4>
                        <p>929-242-6868</p>
                        <h4>Email</h4>
                        <p>contact@info.com</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer