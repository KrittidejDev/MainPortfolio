/* import ButtonNeon from "./components/ButtonNeon/buttonNeon"; */
import CardSection from "./components/CardSection/CardSection";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
/* import SocialIcon from "./components/SocialIconHover/SocialIcon"; */
import "./index.css";

function App() {
  return (
    <div className="bg-black h-full">
      <Navbar />
      <Hero />
      <CardSection />
      {/*  <SocialIcon />
      <ButtonNeon /> */}
    </div>
  );
}

export default App;
