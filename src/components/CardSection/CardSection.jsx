import React from "react";
import "./Card.css";

const CardSection = () => {
  return (
    <div className="w-[1400] h-full flex flex-row  place-content-center  flex-wrap mt-2 ">
      <div className="w-full text-2xl lg:text-5xl flex justify-center font-bold colaContentH2 ">
        Card Section
      </div>
      <div className="w-full flex justify-center gap-24 flex-wrap">
        {/* card3 */}
        <div className="flex  justify-center items-center mt-10  ">
          <div className="card3">
            <div className="imageBoxCard3 ">
              <img
                className="imgCard3"
                src="https://img5.pic.in.th/file/secure-sv1/headephone.png"
              />
            </div>

            <div className="contentboxCard3 just">
              <h2 className="contentCard3H2">Head phone</h2>

              <div className="card3Color">
                <h3 className="card3ColorH3">color :</h3>

                <span
                  className="card3Span card3ColorSpan"
                  style={{ "--clr3": "#ff0" }}
                ></span>

                <span
                  className="card3Span card3ColorSpan"
                  style={{ "--clr3": "#98dc28" }}
                ></span>

                <span
                  className="card3Span card3ColorSpan"
                  style={{ "--clr3": "#03a9f4" }}
                ></span>
              </div>
              <div className="card3Price">
                <h3 className="card3PriceH3">price :</h3>
                <span className="card3Span card3PriceSpan">$</span>
                <span className="card3Span card3PriceSpan">2</span>

                <span className="card3Span card3PriceSpan">0</span>

                <span className="card3Span card3PriceSpan">0</span>
              </div>

              <a className="card3A" href="#">
                Buy Now
              </a>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="flex justify-center items-center mt-10 ">
          <div className="colaCard ">
            <div className="colaCircle" style={{ "--clr": "#f40103" }}>
              <img
                src="https://img5.pic.in.th/file/secure-sv1/cocacola_logo.png"
                alt=""
                className="colaLogo"
              />
            </div>
            <div className="colaContent">
              <h2 className="colaContentH2">cocacola</h2>
              <p className="colaContentP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                possimus cumque magnam consequatur illum blanditiis nihil.
              </p>
              <a className="colaContentA" href="#">
                Export more
              </a>
            </div>
            <img
              src="https://img2.pic.in.th/pic/cocacola.png"
              alt=""
              className="colaProductImg"
            />
          </div>
        </div>
      </div>
      {/* card1 */}
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center my-24 flex-wrap ">
        <div
          className="card1 flex justify-center align-bottom mt-24 "
          style={{
            "--cardImg":
              'url("https://img2.pic.in.th/pic/pop2360d92a2a6325b70.png")',
          }}
        >
          <div
            className="hoverImage flex justify-center mt-22"
            style={{
              "--hoverImg":
                'url("https://img5.pic.in.th/file/secure-sv1/pop1.png")',
            }}
          >
            {" "}
            <h1 className="h1 text-white ">AI Robot</h1>
          </div>
        </div>

        <div
          className="card1 flex justify-center align-bottom mt-24"
          style={{
            "--cardImg":
              'url("https://img5.pic.in.th/file/secure-sv1/pop3.png")',
          }}
        >
          <div
            className="hoverImage flex justify-center mt-22"
            style={{
              "--hoverImg": 'url("https://img2.pic.in.th/pic/pop4.png")',
            }}
          >
            {" "}
            <h1 className="h1 text-white ">Pumpkins Halloween</h1>
          </div>
        </div>

        <div
          className="card1 flex justify-center align-bottom mt-24"
          style={{
            "--cardImg":
              'url("https://img5.pic.in.th/file/secure-sv1/pop5.png")',
          }}
        >
          <div
            className="hoverImage flex justify-center mt-22"
            style={{
              "--hoverImg": 'url("https://img2.pic.in.th/pic/pop6.png")',
            }}
          >
            {" "}
            <h1 className="h1 text-white  ">Happy Halloween</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
