import React from 'react'
import mbm from './mbm.PNG'
export default function Home() {
  return (
    <div className="mt-5 p-5">

    <div>
        <div class="container">
        <div className="row justify-item-center">
        <div className="col-lg-4">
            
            <h3 className="display=5">Selling Digital Services</h3>
            <div className="mb-4">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                <ul className=" list-unstyled ul-check primary">
                    <li>There live the blind text</li>
                    <li>Software Development</li>
                </ul>
            </div>
            <div className="col-lg-7">
                <div classname="d-flex">
                    <div className="text">
                    “Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”
                    </div>
                </div>
            </div>
            
        </div>
        

        
        <div className="col-lg-7">
        <img src={mbm} alt="Image Description" class="img-fluid" />
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}
