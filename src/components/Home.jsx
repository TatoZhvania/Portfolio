/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useScroll, motion } from 'framer-motion';
import CV from '../assets/Tato-Zhvania.pdf';
import Lottie from 'lottie-react';
import animationData from '../assets/svg/animation_lnangngs.json';
import ParticleBg from './particle/ParticleBg';

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div id="home" name="home" className=" w-full h-screen flex relative">
      <div className="w-full h-screen absolute top-0 left-0">
        <ParticleBg />
      </div>
      <div className="w-[800px] mx-auto h-full pl-2 flex flex-col justify-center lg:pl-[170px] md:pl-[100px]">
      <motion.div
          className="hidden md:block bg-[#770fd2] shadow-md shadow-[#770fd2] rounded-sm w-full h-[4px] fixed top-[80px] left-0"
          style={{ scaleX: scrollYProgress }}
        >
          {'.'}
        </motion.div>
        <div>
          <p
            className="text-[#c087f2] text-lg border-b-4 border-[#00d8ff] max-w-[130px] mb-2"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-once="false"
          >
            Hi, My name is-
          </p>
        </div>
        <div data-aos="fade-down" data-aos-delay="600" data-aos-once="false">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#fff]">
            Tato Zhvania.
          </h1>
        </div>
        <div data-aos="fade-right" data-aos-delay="700" data-aos-once="false">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#fff]">
            I'm a Web Developer
          </h1>
        </div>
        <div data-aos="fade-right" data-aos-delay="700" data-aos-once="false">
          <p className="text-[#c087f2] py-4 max-w-[600px] text-lg">
            Self-taught programmer. {'</>'}
          </p>
        </div>
        <div data-aos="fade-right" data-aos-delay="800" data-aos-once="false">
          <Link to="works" smooth={true} duration={500}>
            <button className="max-w-[170px] group text-[#fff] cursor-pointer border-2 px-7 py-3 my-2 flex items-center transition duration-250 ease-in-out hover:bg-[#7838f9] hover:border-[#7838f9]">
              <p className="cursor-pointer">View Works</p>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div
        className="w-[300px] h-[300px] m-auto hidden md:block"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-once="false"
      >
        <Lottie animationData={animationData} />
      </div>

      <div
        className="hidden lg:flex fixed flex-col top-[35%] lef-0 text-white"
        data-aos="fade-right"
        data-aos-delay="800"
      >
        <ul className="flex flex-col gap-1 z-[-99] ml-[-110px]">
          <li className="w-[160px] h-[40px] flex justify-between items-center  hover:ml-[100px] duration-300 bg-[#4267B2]">
            <a
              href="https://www.facebook.com/profile.php?id=100009092394563"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Facebook <FaFacebook size={25} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center hover:ml-[100px] duration-300 bg-[#171515]">
            <a
              href="https://github.com/TatoZhvania"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Github <FaGithub size={25} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center hover:ml-[100px]  duration-300 bg-[#d62976]">
            <a
              href="https://www.instagram.com/tato_zhvaniaa/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Instagram <FaInstagram size={25} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center hover:ml-[100px] duration-300 bg-[#0A66C2]">
            <a
              href="https://www.linkedin.com/in/tato-zhvania/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Linkeding <FaLinkedin size={25} />
            </a>
          </li>

          <li className="w-[160px] h-[40px] flex justify-between items-center hover:ml-[100px] duration-300 bg-[#DC143C]">
            <a
              target="_blank"
              rel="noreferrer"
              href={CV}
              className="flex justify-between items-center w-full text-fray-300"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>

          <li className="w-[260px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[100px] duration-300 bg-[#EB8F00]">
            <a
              href="mailto:tato.zhvania.1@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300 ml-5"
            >
              <div className="flex gap-4">
                <p className="ml-[-15px]"> tato.zhvania.1@gmail.com </p>
                <span>
                  <HiOutlineMail size={25} />
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
