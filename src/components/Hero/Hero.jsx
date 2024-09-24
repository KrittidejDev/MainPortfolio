import { motion } from "framer-motion";
import "./HeroCSS.css";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" w-[1400] h-[100vh] flex flex-row  place-content-center  flex-wrap mt-2 ">
      <div className="grid md:grid-cols-2 place-items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Frontend Dev",
              1000,
              "Mobile Dev",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="neonText font-bold  text-xl md:text-5xl italic- mb-4"
            style={{ "--color": "#00ffff" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">KRITTIDEJ</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-gray-200 md:text-2xl text-lg mb-6 md:max-w-[500px] max-w-[300px]"
          >
            Opportunity is the key to unlocking my greatest potential.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-gray-200 md:text-2xl text-lg mb-6 md:max-w-[500px] max-w-[300px]"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>
          </motion.p>
        </motion.div>

        <div className="   flex flex-col  items-center ">
          <h1
            className="mainText neonText text-5xl md:text-7xl my-5 "
            style={{ "--color": "#ff00ff" }}
          >
            MY SKILL
          </h1>
          <div className="box w-[100px] h-[200px] md:w-[150px] md:h-[250px] flex items-center">
            {/* SPINNER ORBITS  */}
            <div className="mainOrbit flex justify-center place-items-center">
              <div className="span flex items-center">
                <div className="spinner-box">
                  <div className="blue-orbit leo"></div>

                  <div className="green-orbit leo"></div>

                  <div className="red-orbit leo"></div>

                  <div className="white-orbit w1 leo"></div>
                  <div className="white-orbit w2 leo"></div>
                  <div className="white-orbit w3 leo"></div>
                </div>
              </div>
            </div>
            {/* End SPINNER ORBITS  */}
            <span
              className="span flex items-center space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 1 }}
            >
              <img
                src="https://img5.pic.in.th/file/secure-sv1/199defbf6688140c2.png"
                alt=""
                className="spanImg"
              />
            </span>
            <span
              className="span flex items-center space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 2 }}
            >
              <img
                src="https://img5.pic.in.th/file/secure-sv1/2149b83dcabe24b08.png"
                alt=""
                className="spanImg"
              />
            </span>
            <span
              className="span flex items-center space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 3 }}
            >
              <img
                src="https://img2.pic.in.th/pic/31628c60e792250de.png"
                alt=""
                className="spanImg"
              />
            </span>
            <span
              className="span flex items-center space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 4 }}
            >
              <img
                src="https://img5.pic.in.th/file/secure-sv1/456093dc8b2a3939f.png"
                alt=""
                className="spanImg"
              />
            </span>
            <span
              className="span flex items-center space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 5 }}
            >
              <img
                src="https://img2.pic.in.th/pic/5aa26baa00276dcac.png"
                alt=""
                className="spanImg"
              />
            </span>
            <span
              className="span flex items-center space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 6 }}
            >
              <img
                src="https://img5.pic.in.th/file/secure-sv1/61705b31da7354e7a.png"
                alt=""
                className="spanImg"
              />
            </span>
            <span
              className="span flex items-center  space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 7 }}
            >
              <img
                src="https://img2.pic.in.th/pic/718e37af836125ee9.png"
                alt=""
                className="spanImg  "
              />
            </span>
            <span
              className="span flex items-center space-span-100 md:space-span-150 lg:space-span-250"
              style={{ "--i": 8 }}
            >
              <img
                src="https://img2.pic.in.th/pic/8f7f5a8dbbdbc2c7a.png"
                alt=""
                className="spanImg"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
