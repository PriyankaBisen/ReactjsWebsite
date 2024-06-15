import React from 'react'

export default function Contact() {
  return (
    <div className='container py-5'>
        <div className='text-center'>
            <div className='contact-hr'></div>
            <h1 className='conatctText'>Hey! Need a custom plan? <span className='contactSpan'>Contact us!</span></h1>
            <p className='contactPText'>Try us risk free for 7 days, if you don’t love us, get your money back.</p>
            <button className='contactBtn'>GET STARTED</button>
        </div>
        <div className='py-5 mt-5'>
            <h1 className='ttstext'>How to know if <span className='contactSpan'>TTS</span> is right for your <span className='contactSpan'>Business</span></h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 w-75 mx-auto py-5">
                <div className='col'>
                    <div className='contactCard'>
                        <p className='contactCardText'>You want a new, innovative, and user- <br></br>centered UX strategy for an existing <br></br>product</p>
                    </div>
                </div>
                <div className='col'>
                <div className='contactCard2'>
                    <p className='contactCardText'>You want to understand where users struggle when using your product</p>
                </div>
                </div>
                <div className='col'>
                <div className='contactCard'>
                    <p className='contactCardText'>You want to translate complex data into an easy-to-understand dashboard</p>
                </div>
                </div>
                <div className='col'>
                <div className='contactCard3'>
                    <p className='contactCardText'>You need additional design resources that synergize with your (already) amazing design team</p>
                </div>
                </div>
                <div className='col'>
                <div className='contactCard'>
                    <p className='contactCardText'>You‘re researching how UX can impact you business growth</p>
                </div>
                </div>
                <div className='col'>
                <div className='contactCard3'>
                    <p className='contactCardText'>You want to understand your users and design products that meet their needs</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
