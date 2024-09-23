import ButtonNeon from "./components/ButtonNeon/buttonNeon";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import SocialIcon from "./components/SocialIconHover/SocialIcon";
import "./index.css";

function App() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Hero />
      {/*  <SocialIcon />
      <ButtonNeon /> */}
    </div>
  );
}

export default App;
