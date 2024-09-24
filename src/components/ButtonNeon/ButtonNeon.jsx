import React from "react";
import "./buttonNeon.css"; // นำเข้าไฟล์ CSS

const ButtonNeon = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-12 items-center pt-10">
      <div>
        <div className="p-10">
          <a href="#" className="btn1">
            <span>BUTTON GLOWING</span>{" "}
          </a>
        </div>
        {/* Animation Delete */}
        <div></div>
      </div>
      <div>
        <div className=" grid py-10">
          <a href="#" className="btn2 flex text-center items-center">
            <span>BUTTON GLOWING</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ButtonNeon;
