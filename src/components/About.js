import React from "react";
import right from "../assets/images/right.png";
import mainImg from '../assets/images/mainImg.png'
export default function About() {
  const rightTexts = [
    { id: 1, text: "No hiring headaches" },
    { id: 2, text: "Weekly turnaround times" },
    { id: 3, text: "One flat monthly rate" },
  ];
  return (
    <div className="about-container">

   
    <div className="container ">
      <div className="text-center">
        <h1 className="aboutText">
          Digital transformation is our{" "}
          <span className="aboutHedaing">Motto</span> <br></br>Let’s Create a
          Milestone <span className="aboutHedaing">Together</span>{" "}
        </h1>
        <div className="row row-cols-3 rightRow">
          <>
          {rightTexts.map((item) => (
            <div key={item.id} className="col d-flex">
              <img src={right} alt="Right Icon" className="rightImg img-fluid" />
              <p className="rightText">{item.text}</p>
            </div>
          ))}
          <button className="startBtn">START YOUR RISK FREE TRIAL</button>
          </>
        </div>
          <img src={mainImg} alt="Right Icon" className="mainImg img-fluid" />
        
      </div>
    </div>
    </div>
  );
}
