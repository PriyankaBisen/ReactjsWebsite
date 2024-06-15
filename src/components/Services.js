import React from "react";
import services1 from "../assets/images/const.png";
import services2 from "../assets/images/scalable.png";
import services3 from "../assets/images/fast.png";
import img1 from "../assets/images/man1.png";
import img2 from "../assets/images/man2.png";
import img3 from "../assets/images/man3.png";
export default function Services() {
  const servicesData = [
    {
      id: 1,
      img: services1,
      heading: "Costs 70% less",
      text: "We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you",
    },
    {
      id: 2,
      img: services2,
      heading: "Adaptable and scalable",
      text: "High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters",
    },
    {
      id: 3,
      img: services3,
      heading: "Fast turnaround times",
      text: "TDP was built for flexibility—we quickly adapt and grow as you grow",
    },
  ];
  return (
    <div className="serviceContainer">
      <div className="container py-5">
        <h1 className="serviceHeding">
          A Diverse Team Of <span className="servicesspan">Passionate</span>{" "}
          Tech Nerds Who Are <br></br> Here To Help Your{" "}
          <span className="servicesspan">Startup Succeed</span>
        </h1>
        <p className="servicespText">
          From ideation to expansion, TDP understands the unique demands of your
          startup—providing you with <br></br>optimized design strategies and
          fast turnarounds for an affordable monthly subscription.
        </p>

        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
          {servicesData.map((service) => (
            <div key={service.id} className="col text-center">
              <img
                src={service.img}
                alt="servicesImg"
                className="img-fluid imgServices"
              />
              <h2 className="servicesHeading">{service.heading}</h2>
              <p className="servicesText">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="py-5">
          <h1 className="serviceHeding">
            How <span className="servicesspan">Signing up</span> with The Design
            Project <span className="servicesspan">works</span>!?
          </h1>
          <p className="servicespText">
            Take a minute to imagine how you’d feel watching your user count
            grow, and retention rates stay consistently high. When you <br></br>
            prioritize effective UX, better retention and growth are natural
            consequences. Backed by countless hours of research and<br></br>{" "}
            testing, TDP blends UX, UI, and Product design into a deliciously
            smooth process that fuels productivity and success.
          </p>

         <div className="conatiner">
         <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
            <div className="col">
              <div className="cardServices text-center">
                <h1 className="numbers">01</h1>
                <h2 className="servicespTextBold">Sign up for one of<br></br> our services</h2>
                <img src={img1} alt="servicesImg" className="img-fluid withWhiteBorder" />
                <p className="spText">Sign up for one of our affordable <br></br> subscription play which offer a variety of <br></br> options to fit your unique needs.</p>
              </div>
            </div>
            <div className="col">
              <div className="cardServices text-center">
                <h1 className="numbers">02</h1>
                <h2 className="servicespTextBold">Meet your perfect <br></br>match</h2>
                <img src={img2} alt="servicesImg" className="img-fluid withWhiteBorder" />
                <p className="spText">We match you with the best TDP design <br></br> expert for your needs. Then we schedule <br></br> a call to learn about your startup.</p>
              </div>
              </div>
              <div className="col">
              <div className="cardServices text-center">
                <h1 className="numbers">03</h1>
                <h2 className="servicespTextBold">The first sprint begins<br></br> (hold on tight)</h2>
                <img src={img3} alt="servicesImg" className="img-fluid withWhiteBorder" />
                <p className="spText">TDP manages the project, learns the <br></br>intimate details of what your users <br></br> want, and delivers impactful design <br></br>iterations.</p>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}
