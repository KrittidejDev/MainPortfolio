import React from "react";
import "./Card.css";

const CardSection = () => {
  return (
    <div className=" w-[1400] h-[100vh] flex flex-row justify-around  place-content-center  flex-wrap  ">
      {/* card1 */}
      <div className="flex gap-5 justify-center items-center ">
        <div
          className="card1 flex justify-center align-bottom "
          style={{
            "--cardImg":
              'url("https://img2.pic.in.th/pic/pop2360d92a2a6325b70.png")',
          }}
        >
          <div
            className="hoverImage flex justify-center"
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
          className="card1 flex justify-center align-bottom "
          style={{
            "--cardImg":
              'url("https://img5.pic.in.th/file/secure-sv1/pop3.png")',
          }}
        >
          <div
            className="hoverImage flex justify-center"
            style={{
              "--hoverImg": 'url("https://img2.pic.in.th/pic/pop4.png")',
            }}
          >
            {" "}
            <h1 className="h1 text-white ">Pumpkins Halloween</h1>
          </div>
        </div>

        <div
          className="card1 flex justify-center align-bottom "
          style={{
            "--cardImg":
              'url("https://img5.pic.in.th/file/secure-sv1/pop5.png")',
          }}
        >
          <div
            className="hoverImage flex justify-center "
            style={{
              "--hoverImg": 'url("https://img2.pic.in.th/pic/pop6.png")',
            }}
          >
            {" "}
            <h1 className="h1 text-white  ">Happy Halloween</h1>
          </div>
        </div>
      </div>
      {/* card2 */}
      <div className="flex">
        <div className="colaCard">
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
  );
};

export default CardSection;
