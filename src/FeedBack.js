import React from 'react'
import image from './person_2.jpg.webp'
export default function FeedBack() {
  return (
    <div className="container mt-5 mb-5">
    <div className="row">
        {/* First Section */}
        <div className="col-md-4">
            <div className="mb-4">
                <span className="caption">Testimonials</span>
                <h2 className="heading">Our Customers Feedback</h2>
            </div>
            <div className="d-flex">
                <a href="#" className="js-custom-prev-v2 cusotm-slider-nav custom-prev">
                    <span>
                        <svg className="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"></path>
                            <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                        </svg>
                    </span>
                </a>
                <a href="#" className="js-custom-next-v2 cusotm-slider-nav custom-next">
                    <span>
                        <svg className="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"></path>
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"></path>
                        </svg>
                    </span>
                </a>
            </div>
        </div>

        {/* Second Section */}
        <div className="col-md-8">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="row">
            <div class="col-md-6">
                <div class="text">
                    <blockquote>
                    “Separated they <span class="highlight">live in Bookmarksgrove right at the coast of the Semantics</span>, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                    </blockquote>
                <div class="author d-flex">
                    <div class="pic mr-3">
                        <img src={image} alt="Image" class="img-fluid rounded-circle" width={50} height={50}/>
                    </div>
                    <div>
                        <strong class="d-block">James Anderson</strong><span class="d-block">Facebook, Product Lead</span>
                    </div>
                </div>
                </div>
            </div> 
            <div class="col-md-6">
                <div class="text">
                    <blockquote>
                    “Separated they <span class="highlight">live in Bookmarksgrove right at the coast of the Semantics</span>, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                    </blockquote>
                <div class="author d-flex">
                    <div class="pic mr-3">
                        <img src={image} alt="Image" class="img-fluid rounded-circle" width={50} height={50}/>
                    </div>
                    <div>
                        <strong class="d-block">James Anderson</strong><span class="d-block">Facebook, Product Lead</span>
                    </div>
                </div>
                </div>
            </div> 
            </div></div>
            <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
                <div class="text">
                    <blockquote>
                    “Separated they <span class="highlight">live in Bookmarksgrove right at the coast of the Semantics</span>, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                    </blockquote>
                <div class="author d-flex">
                    <div class="pic mr-3">
                        <img src={image} alt="Image" class="img-fluid rounded-circle" width={50} height={50}/>
                    </div>
                    <div>
                        <strong class="d-block">James Anderson</strong><span class="d-block">Facebook, Product Lead</span>
                    </div>
                </div>
                </div>
            </div> 
            <div class="col-md-6">
                <div class="text">
                    <blockquote>
                    “Separated they <span class="highlight">live in Bookmarksgrove right at the coast of the Semantics</span>, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                    </blockquote>
                <div class="author d-flex">
                    <div class="pic mr-3">
                        <img src={image} alt="Image" class="img-fluid rounded-circle" width={50} height={50}/>
                    </div>
                    <div>
                        <strong class="d-block">James Anderson</strong><span class="d-block">Facebook, Product Lead</span>
                    </div>
                </div>
                </div>
            </div> 
            </div></div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
</div>
        </div>
    </div>
</div>

  )
}
