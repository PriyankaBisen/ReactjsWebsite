import React, { useState } from 'react';
import downArrow from '../assets/images/downArrow.png';
import lastImg from '../assets/images/lastImg.png'
// Static data for each accordion item
const accordionData = [
  {
    id: 'item1',
    question: 'Do I really get unlimited design services?',
    answer: 'Yes, you have unlimited access to our design services as part of your subscription.',
  },
  {
    id: 'item2',
    question: 'What is a realistic turnaround time?',
    answer: 'Our typical turnaround time is 2-3 business days, but it can vary based on the complexity of the project.',
  },
  {
    id: 'item3',
    question: 'I need my designs ASAP—can you help?',
    answer: 'Yes, we offer expedited services for urgent design needs. Please contact our support team for more details.',
  },
  {
    id: 'item4',
    question: 'What types of projects do you work on?',
    answer: 'We work on a wide range of projects including web design, branding, print materials, and more.',
  },
  {
    id: 'item5',
    question: 'What if I want to cancel my service?',
    answer: 'You can cancel your service at any time. Please review our cancellation policy for details.',
  },
];

export default function Questions() {
  const [accordionState, setAccordionState] = useState(accordionData.map(item => ({
    ...item,
    isOpen: false, // Add isOpen state for each accordion item
  })));

  const toggleAccordion = (itemId) => {
    setAccordionState(prevState =>
      prevState.map(item =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className='container py-5'>
      <div>
        <h1 className='queheading'>Our Most <span className='queSpan'>Frequently</span> Asked Questions</h1>
        <div className="accordion py-5">
          {accordionState.map(item => (
            <div key={item.id} className={`accordion-item ${item.isOpen ? 'open' : ''}`}>
              <div className="accordion-title" onClick={() => toggleAccordion(item.id)}>
                {item.question}
                <img src={downArrow} alt="arrowimg" />
              </div>
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-5 text-center'>
        <h1 className='getStartedText'>Let’s <span className='queSpan'>Build</span> something <br></br> <span className='queSpan'>Awesome</span> together!</h1>
          <p className='getStartedPText'>Try us risk free for 7 days, if you don’t love us, get your money back.</p>
          <button className='contactBtn'>GET STARTED</button>
        </div>
      <div className='text-center'>
      <img src={lastImg} alt='lastImg' className='img-fluid'/>
      </div>
    </div>
  );
}
