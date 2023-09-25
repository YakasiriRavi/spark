import React from 'react'

import './index.css'

const DetailsPage = () => {
  return (
    <div className="container-fluid bg-container">
    <div className="row d-flex">
        <img className="col-lg-3 girl_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxLHVQ9ef2tBrSvyWHoIiMkPRHScT-NVFnotMV0u5mw&s" alt='education_girl' />
        <div className="col-6">
            <h3>UX Design: From Concept <br /> to Wireframe</h3>
            <span>by MichiganX</span>
            <p>
                User interface (UI) design refers to the aesthetic elements by which people interact with a product,
                such as buttons, icons, menu bars, typography, colors, and more. User experience (UX) design.
            </p>
            <img className="rating"
                src="https://t3.ftcdn.net/jpg/04/20/03/48/360_F_420034841_AKpgqQGkkUyeD7oWc9y8vGTMwT4GmbHm.jpg" alt='rating' />
            <span className="ms-4">18 Reviews</span>
        </div>
        <div className="col-3 text-center">
            <h6>March 21, 2017</h6>
            <h6>Self-Placed</h6>
            <button className="text-center text-white bg-success rounded-pill p-2 border-0 mt-3"> ENROLL</button>
            <div className="d-flex p-1">
                <input type="checkbox" id="t&c" name="conditions" />
                <label htmlFor="t&c" className="mt-5 ms-1">By using this website/application, you agree to abide by these
                    terms
                    and
                    conditions. If
                    you do not agree.</label>
            </div>
        </div>
    </div>
    <div className="row d-flex mt-3">
        <div className="card1 col-7 p-4 white-bg">
            <h3>About this Course</h3>
            <p>By following these steps, you establish a connection between the label and input elements, which
                makes it easier for users to interact with your form, especially for screen readers and assistive
                technologies.
            </p>
            <div className="pt-5">
                <h3>What you'll learn</h3>
                <ul>
                    <li>Prioritize the needs and preferences of your target users.</li>
                    <li>Keep the interface clean and easy to understand.</li>
                    <li>Arrange elements to guide users' attention effectively.</li>
                    <li>Ensure the design works well on all devices and is inclusive.</li>
                    <li>Prioritize the needs and preferences of your target users.</li>
                </ul>
            </div>
        </div>
        <div className="col-4">
            <div className="related mb-3 p-3 white-bg h-50 ms-3">
                <ul>
                    <li>146 learners</li>
                    <li> $120</li>
                    <li>3 weeks</li>
                    <li>3-4 hours per week</li>
                    <li>Intermediate</li>
                    <li>Indonesia</li>
                </ul>
            </div>
            <div className="p-3  h-50 ms-3">
                <h4>Related Courses</h4>
                <ul className='anchor_ele'>
                   
                        <li>Prioritize the needs and preferences of your target users.</li>
                   
                        <li>Prioritize the needs and preferences of your target users.</li>
                    
                        <li>Prioritize the needs and preferences of your target users.</li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>

  )
}

export default DetailsPage