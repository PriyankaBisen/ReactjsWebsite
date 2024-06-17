import React from 'react'
import userProfile from '../assets/images/userProfile.png'
export default function Slider() {
  return (
    <div className='container py-5'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <h1 className='sliderText'><span className='upArrow'>&#8220;</span> 1.TDP helped identify the main pain points<br></br> and designed a new UX that is accessible <br></br>and easy to understand. The redesign <br></br> pushed us forward on our mission to be <br></br>able to verify 100% of IDs in real-time, and<br></br> we raised over $100M in funding.<span className='upArrow mt-5'>&#8221;</span></h1>
        <div className='d-flex justify-content-center py-3'>
            <div>
                <img src={userProfile} alt='userProfile' className='img-fluid'/>
            </div>     
            <div className='text-white ms-3'>
                <h3 className='userName'>Erick Desoto</h3>
                <p className='userProfile'>VP of Product at Socure</p>
            </div>       
        </div>
        <div className='text-center'>
            <button className='caseStudyBtn'>see our case studies</button>
        </div>
    </div>
    <div className="carousel-item">
    <h1 className='sliderText'><span className='upArrow'>&#8220;</span> 2.TDP helped identify the main pain points<br></br> and designed a new UX that is accessible <br></br>and easy to understand. The redesign <br></br> pushed us forward on our mission to be <br></br>able to verify 100% of IDs in real-time, and<br></br> we raised over $100M in funding.<span className='upArrow mt-5'>&#8221;</span></h1>
    <div className='d-flex justify-content-center py-3'>
            <div>
                <img src={userProfile} alt='userProfile' className='img-fluid'/>
            </div>     
            <div className='text-white ms-3'>
                <h3 className='userName'>Pari Desoto</h3>
                <p className='userProfile'>VP of Product at Socure</p>
            </div>       
        </div>
        <div className='text-center'>
            <button className='caseStudyBtn'>see our case studies</button>
        </div>
    </div>
    <div className="carousel-item">
    <h1 className='sliderText'><span className='upArrow'>&#8220;</span> 3.TDP helped identify the main pain points<br></br> and designed a new UX that is accessible <br></br>and easy to understand. The redesign <br></br> pushed us forward on our mission to be <br></br>able to verify 100% of IDs in real-time, and<br></br> we raised over $100M in funding.<span className='upArrow mt-5'>&#8221;</span></h1>
    <div className='d-flex justify-content-center py-3'>
            <div>
                <img src={userProfile} alt='userProfile' className='img-fluid'/>
            </div>     
            <div className='text-white ms-3'>
                <h3 className='userName'>John Deo</h3>
                <p className='userProfile'>VP of Product at Socure</p>
            </div>       
        </div>
        <div className='text-center'>
            <button className='caseStudyBtn'>see our case studies</button>
        </div>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span clasNames="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
