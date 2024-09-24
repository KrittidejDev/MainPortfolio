import {
  FaGithub,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import "./SocialEffect.css";

const SocialIcon = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4  p-44  ">
      <div className="wrapper w-fit rounded-2xl ">
        <a
          href=""
          className="icons"
          style={{
            "--color":
              "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          }}
        >
          <FaInstagram />
        </a>
        <a href="" className="icons" style={{ "--color": "#0A66C2" }}>
          <FaLinkedinIn />
        </a>
        <a href="" className="icons" style={{ "--color": "#ff0000" }}>
          <FaYoutube />
        </a>
        <a href="" className="icons" style={{ "--color": "#1DA1F2" }}>
          <FaXTwitter />
        </a>
        <a href="" className="icons" style={{ "--color": "black" }}>
          <FaGithub />
        </a>
      </div>
      {/* 2 */}
      {/*       <div className="wrapper w-fit rounded-2xl">
        <a href="" className="icons">
          <FaInstagram />
        </a>
        <a href="" className="icons">
          <FaLinkedinIn />
        </a>
        <a href="" className="icons">
          <FaYoutube />
        </a>
        <a href="" className="icons">
          <FaXTwitter />
        </a>
        <a href="" className="icons">
          <FaGithub />
        </a>
      </div>
      <div className="wrapper w-fit rounded-2xl">
        <a href="" className="icons">
          <FaInstagram />
        </a>
        <a href="" className="icons">
          <FaLinkedinIn />
        </a>
        <a href="" className="icons">
          <FaYoutube />
        </a>
        <a href="" className="icons">
          <FaXTwitter />
        </a>
        <a href="" className="icons">
          <FaGithub />
        </a>
      </div> */}
      <div>
        <h1 className="text-xl text-white mt-28">
          ยังไม่เสร็จจะทำเพิ่มเรื่อยๆนะครับ
        </h1>
      </div>
    </div>
  );
};

export default SocialIcon;
