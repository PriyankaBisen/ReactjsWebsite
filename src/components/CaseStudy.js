import React from 'react'
import caseStudy1 from '../assets/images/caseStudy1.png'
import caseStudy2 from '../assets/images/caseStudy2.png'
import caseStudy3 from '../assets/images/caseStudy3.png'
import Slider from './Slider'
export default function CaseStudy() {
  return (
    <div className='caseStudyConatiner'>
        <div className='container py-5'>
        <h1 className='caseHeading'>How <span className='spancaseStudy'>Accessible</span> UX Design Is Changing The <br></br> <span className='spancaseStudy'>Businesses</span> For The Better</h1>
    
        <img src={caseStudy1} alt='caseImg' className='imgCaseStudy'/>
        <img src={caseStudy2} alt='caseImg'  className='imgCaseStudy'/>
        <img src={caseStudy3} alt='caseImg'  className='imgCaseStudy'/>
        <Slider />
    </div>
    </div>
  )
}
