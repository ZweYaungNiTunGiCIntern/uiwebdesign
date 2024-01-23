import React from 'react'

export default function FeedBack() {
  return (
    <div className="container mt-5 mb-5">
        <div classNames="row ">
            <div className="col-md-4">
                <div className="mb-4 text-center">
                    <span className="caption">Testimonials</span>

                    <h2 className="heading">Our Customers Feedbck</h2>
                </div>
                <div>
                <a href="#" class="js-custom-prev-v2 cusotm-slider-nav custom-prev">
                    <span>
                        <svg class="bi bi-arrow-left" style={{ width: '100px',height: '100px' }} xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"></path>
                            <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" ></path>
                        </svg>
                    </span>
                </a>
                </div>
            </div>
            <div className="col-md-4">
                <p class="font-italic">Italic text.</p>
            </div>
        
        </div>
    </div>
  )
}
