

import React from 'react'

import './index.css'

const Carousel = () => {
    return (
        <div className='carobg'>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className="image" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" alt="..." />

                    </div>
                    <div class="carousel-item">
                        <img className="image" src="https://media.istockphoto.com/id/1435634431/photo/indigenous-navajo-teacher-helping-students-with-their-work.webp?b=1&s=170667a&w=0&k=20&c=s__NudAHPJ7Iydc_hKwgj-2zALN7v6iMilQUkOM1FXQ=" alt="..." />

                    </div>
                    <div class="carousel-item">


                        <img className="image" src="https://media.istockphoto.com/id/1425235236/photo/side-view-of-youthful-african-american-schoolboy-working-in-front-of-laptop.webp?b=1&s=170667a&w=0&k=20&c=kFD3SJkeFa21orHCMEkF1RUcU5VHstLUKKBvx2Xfb4Q=" alt="..." />

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}

export default Carousel