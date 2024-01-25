import React from 'react'
import Image3 from './person_1.jpg.webp'
import Image4 from './person_2.jpg.webp'
import Image5 from './person_3.jpg.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Pricing3() {
  return (
    <>
      {/* FeedBack */}
        <div className="container-fluid col-md-10 mx-auto m-5 p-5">
          <div className="row">
            <div className="col-md-4" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
              <p className="text-primary">TESTIMONIALS</p>
              <h1>Our Customers</h1>
              <h1>Feedback</h1>
              <div className="row mt-3">
                <div className="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2 me-1" style={{ height: 50 }} data-bs-target="#demo" data-bs-slide="prev">
                 <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <div className="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2 ms-0" style={{ height: 50 }} data-bs-target="#demo" data-bs-slide="next">
                <FontAwesomeIcon icon={faArrowRight}/>
                </div>

              </div>
            </div>
            {/* <!-- Carousel --> */}
            <div id="demo" className="carousel slide col-md-8" data-bs-ride="carousel">

              {/* <!-- Indicators/dots --> */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active bg-primary"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="bg-primary"></button>
              </div>

              {/* <!-- The slideshow/carousel --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image3} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image4} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image5} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                      <div className="row">
                        <div className="col-2">
                          <img className="rounded-pill" src={Image3} alt="Person Image" style={{ height: 40, width: 40 }} />
                        </div>
                        <div className="col-10">
                          <span className="text-dark">James Anderson</span><br />
                          <span className="text-secondary">Facebook, Product Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="mt-5">
                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>

              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}