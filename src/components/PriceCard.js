import React from "react";

export default function PriceCard() {
  return (
    <div className="container py-5">
      <ul className="nav justify-content-center tabSection">
        <li className="nav-item">
          <a className="nav-link activeTab" href="#Active">
            SILVER
          </a>
        </li>
        <div className="d-flex twoTabs">
          <li className="nav-item">
            {/* <p>SAVE 10%</p> */}
            <a className="nav-link twoTabstext" href="#Active">
              GOLD
            </a>
          </li>
          <li className="nav-item">
            {/* <p>SAVE 15%</p> */}
            <a className="nav-link twoTabstext" href="#Active">
              PREMIUM
            </a>
          </li>
        </div>
      </ul>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card twoCard h-100 d-flex flex-column justify-content-between py-5">
            <div className="card-body">
             <div className="text-center">
             <h5 className="title">Silver</h5>
              <p className="cardText">Great for basic UI/UX design needs</p>
              <h2 className="priceText">$2,600</h2>
              <h3 className="month">PER MONTH</h3>
              <div className="horizontal-line-div-colorfull"></div>
             </div>

              <div className="py-5 p-3">
                <h3 className="whatsText"> What’s included:</h3>
                <ul style={{ listStyleType: "none" }} className="ulSilver">
                  <li>UI execution</li>
                  <li>Connect on Slack</li>
                  <li>One 30 minute meeting a week</li>
                </ul>
              </div>

              <div className="py-5 p-3">
                <h3 className="whatsText">Design Team:</h3>
                <ul style={{ listStyleType: "none" }} className="ulSilver">
                  <li>
                    1 designer working with 4-5 other customers at the same time
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-grid mb-4 ">
              <button className="btn btn-silver mt-auto " type="button">
                TRY FREE &#8594;
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card goldencard h-100 d-flex flex-column justify-content-between py-5">
            <div className="card-body">
            <div className="text-center">
            <h5 className="title2">Gold</h5>
              <p className="card-text">Great for end-to-end product design</p>
              <h2 className="priceTextGold">$3,595</h2>
              <h3 className="monthGOld">PER MONTH</h3>
              <div className="horizontal-line-div"></div>
            </div>
              

              <div className="py-5 p-3">
                <h3 className="whatsGOldText"> What’s included:</h3>
                <ul style={{ listStyleType: "none" }} className="ulGold">
                  <li>Everything in Essential</li>
                  <li>Full UI/UX design and research</li>
                  <li>Dev ready Figma files</li>
                  <li>One 1 hour meeting a week</li>
                </ul>
              </div>

              <div className="py-5 p-3">
                <h3 className="whatsGOldText">Design Team:</h3>
                <ul style={{ listStyleType: "none" }} className="ulGold">
                  <li>1 design lead</li>
                  <li>
                    1 designer working on 2-3 other customers at the same time
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-grid mb-4">
              <button className="btn btn-gold mt-auto" type="button">
                TRY FREE &#8594;
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card twoCard h-100 d-flex flex-column justify-content-between py-5">
            <div className="card-body">
              <div className="text-center">
              <h5 className="title">Premium</h5>
              <p className="cardText">
                Great for products that require more <br></br> design horsepower and tight
                timelines
              </p>
              <h2 className="priceText">$5,200</h2>
              <h3 className="month">PER MONTH</h3>
              <div className="horizontal-line-div-colorfull"></div>
              </div>

              <div className="py-5 p-3">
                <h3 className="whatsText"> What’s included:</h3>
                <ul style={{ listStyleType: "none" }} className="ulSilver">
                  <li>Everything in Essential and Pro</li>
                  <li>User Testing</li>
                  <li>One 30 minute meeting a week</li>
                  <li>Flexible meetings</li>
                  <li>Custom workflows to speed up delivery</li>
                </ul>
              </div>

              <div className="py-5 p-3">
                <h3 className="whatsText">Design Team:</h3>
                <ul style={{ listStyleType: "none" }} className="ulSilver">
                  <li>1 design lead</li>
                  <li>
                    1 designer working on 2-3 other customers at the same time
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-grid mb-4">
              <button className="btn btn-silver mt-auto" type="button">
                TRY FREE &#8594;
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
