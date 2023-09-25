

import React from 'react'

import './index.css'

const Carousel = () => {
    return (
        <div className='carobg'>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img" src='https://media.istockphoto.com/id/1351416161/photo/female-teachers-teaching-students-in-library-at-school.jpg?s=612x612&w=0&k=20&c=cmZ2jwuFmd7FbS7MeXBUusWlMNgNCTgt2tpWVbP_Fyk=' alt='....'/>
                    </div>
                    <div className="carousel-item">
                        <img className="img" src="https://media.istockphoto.com/id/1435634431/photo/indigenous-navajo-teacher-helping-students-with-their-work.webp?b=1&s=170667a&w=0&k=20&c=s__NudAHPJ7Iydc_hKwgj-2zALN7v6iMilQUkOM1FXQ=" alt="..." />

                    </div>
                    <div className="carousel-item">


                        <img className="img" src="https://media.istockphoto.com/id/1425235236/photo/side-view-of-youthful-african-american-schoolboy-working-in-front-of-laptop.webp?b=1&s=170667a&w=0&k=20&c=kFD3SJkeFa21orHCMEkF1RUcU5VHstLUKKBvx2Xfb4Q=" alt="..." />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}

export default Carousel