
import market from './market-launch-pana.svg'
import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function ImageTextSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      offset: 200,    // Offset (in pixels) from the top of the document
    });
  }, []);
  return (
    

    <div className="mt-5 mb-5 p-5">
        <div class="container">
            <div className="row align-items-center">
              <div className="col-lg-7 ml-auto order-lg-2 aos-init aos-animate" data-aos="fade-right" data-aos-delay="400">
                  <img src={market} alt="Image Description" class="img-fluid" />
              </div>
              <div className="col-lg-5">
                  <h1 className="aos-init aos-animate" data-aos="fade-up" display="8" data-aos-delay="0">Promote Your Products by Colorlib</h1>
                  <div className="excerpt aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <p>Another cool free html css template by <a href="#" target="_blank" class="highlight">Colorlib</a> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                  </div> 
                  <div className="justify-content-between">
                    <button class="btn rounded-5  btn-primary">See Features</button>
                      
                  
                    <button class="btn rounded-5 btn-outline-primary">Pricing</button>
                  </div>
                  
              </div>  
          </div>
        </div>
    </div>

   
   



  )
}
