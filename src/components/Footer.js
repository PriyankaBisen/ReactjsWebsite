import React from 'react'
import logo from '../assets/images/companyLogo.png'
export default function Footer() {
  return (
    <div className='footerContaimer '>
        <div className='container py-5'>
            <div className='row row-cols-1 row-cols-md-2 g-4  '>
                <div className='col'>
                    <img src={logo} className='img-fluid logiImg' alt='logo'/>
                    <div className='row row-cols-1 row-cols-md-3 g-4 d-flex '>
                        <div className='col'>
                            <p className=' socialtext'><i className="bi bi-envelope"></i> triontechsolution@gmail.com</p>
                        </div>
                  
                        <div className='col'>
                            <p className='socialtext'> <i className="bi bi-instagram"></i> triontechsolution</p>
                        </div>
                        <div className='col'>
                            <p className='socialtext'><i className="bi bi-linkedin"></i>  trion tech solution</p>
                        </div>
                        </div>
                </div> 
                <div className='col d-flex justify-content-end'>
                    <ul className='footerText' style={{ listStyleType: 'none' }}>
                        <li>HOW IT WORK</li>
                        <li>ABOUT</li>
                        <li>OUR WORK</li>
                        <li>BLOG</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
