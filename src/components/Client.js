import React from "react";
import client1 from "../assets/images/combinator.svg.png";
import client2 from "../assets/images/sequioi.svg.png";
import client3 from "../assets/images/accel.svg.png";
import client4 from "../assets/images/a16z.svg.png";
export default function Client() {
  return (
    <div className="clientConteinr">
    
      <div className="container py-5">
         <h1 className="cllientHeding"> We helped our customers raise <span className="dollerText">$1B+</span> </h1>
        <div className="row row-cols-4">
          
        <div className="col client-col">
        <img src={client1} className="img-fluid" alt="client" />
      </div>
      <div className="col client-col">
        <img src={client2} className="img-fluid" alt="client" />
      </div>
      <div className="col client-col">
        <img src={client3} className="img-fluid" alt="client" />
      </div>
          <div className="col client-col" >
            <img src={client4} className="img-fluid" alt="client"/>
          </div>
        </div>
      </div>
    </div>
  );
}
