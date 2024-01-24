import React from 'react'
import market from './market-launch-pana.svg'
export default function ImageTextSection() {
  return (

    <div className="mt-5 mb-5 p-5">
    <div class="container">
    <div className="row align-items-center">
    <div className="col-lg-4">
        <h1 class="display-8">Promote Your Products by Colorlib</h1>
        <p>
        Another cool free html css template by Colorlib Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast
        </p>
        <div className="justify-content-between">
          <button class="btn rounded-5  btn-primary">See Features</button>
            
        
          <button class="btn rounded-5 btn-outline-primary">Pricing</button>
        </div>
        
    </div>
    

    
    <div className="col-lg-7">
        <img src={market} alt="Image Description" class="img-fluid" />
    </div>
    </div>
    </div>
</div>

   
   



  )
}
