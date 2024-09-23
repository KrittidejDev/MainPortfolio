import React from "react";
import "./buttonNeon.css"; // นำเข้าไฟล์ CSS

const ButtonNeon = () => {
  return (
    <div className="flex flex-col justify-center gap-12 items-center pt-10">
      <div className="p-10">
        <a href="#" className="btn1">
          <span>BUTTON GLOWING</span>{" "}
        </a>
      </div>
      <div className=" grid py-10">
        <a href="#" className="btn2 flex text-center items-center">
          <span>BUTTON GLOWING</span>
        </a>
      </div>
    </div>
  );
};

export default ButtonNeon;
