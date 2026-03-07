/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
    <div
      id="home"
      name="home"
      className="w-full min-h-screen flex relative overflow-hidden"
    >
      <div className="content-shell relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBg />
        </div>
        <motion.div
          className="hidden md:block bg-[#770fd2] shadow-md shadow-[#770fd2] rounded-sm w-full h-[4px] absolute top-[80px] left-0 z-20"
          style={{ scaleX: scrollYProgress }}
        >
          {'.'}
        </motion.div>
        <div className="relative z-10 min-h-screen grid items-center gap-10 lg:grid-cols-[minmax(0,720px)_300px] lg:justify-between">
          <div className="max-w-[720px] pt-24 md:pt-0">
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
              <h1 className="text-4xl sm:text-5xl font-bold text-[#fff]">
                Tato Zhvania.
              </h1>
            </div>
            <div data-aos="fade-right" data-aos-delay="700" data-aos-once="false">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#fff]">
                I&apos;m a DevOps Engineer | Full-Stack Engineer
              </h1>
            </div>
            <div data-aos="fade-right" data-aos-delay="700" data-aos-once="false">
              <p className="text-[#c087f2] py-4 max-w-[600px] text-base sm:text-lg">
                Self-taught. {'</>'}
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
            className="w-[240px] h-[240px] lg:w-[300px] lg:h-[300px] justify-self-center hidden md:block"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-once="false"
          >
            <Lottie animationData={animationData} />
          </div>
        </div>
        <div
          className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 flex-col text-white z-30"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <ul className="flex flex-col gap-1">
            <li className="w-[180px] h-[44px] px-0 flex items-center -translate-x-[136px] hover:translate-x-0 duration-300 bg-[#171515]">
              <a
                href="https://github.com/TatoZhvania"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full h-full px-4"
              >
                <span className="whitespace-nowrap">Github</span>
                <FaGithub size={25} />
              </a>
            </li>

            <li className="w-[180px] h-[44px] px-0 flex items-center -translate-x-[136px] hover:translate-x-0 duration-300 bg-[#0A66C2]">
              <a
                href="https://www.linkedin.com/in/tato-zhvania/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full h-full px-4"
              >
                <span className="whitespace-nowrap">Linkedin</span>
                <FaLinkedin size={25} />
              </a>
            </li>

            <li className="w-[180px] h-[44px] px-0 flex items-center -translate-x-[136px] hover:translate-x-0 duration-300 bg-[#DC143C]">
              <a
                target="_blank"
                rel="noreferrer"
                href={CV}
                className="flex justify-between items-center w-full h-full px-4"
              >
                <span className="whitespace-nowrap">Resume</span>
                <BsFillPersonLinesFill size={25} />
              </a>
            </li>

            <li className="w-[300px] h-[44px] px-0 flex items-center -translate-x-[256px] hover:translate-x-0 duration-300 bg-[#EB8F00]">
              <a
                href="mailto:tato.zhvania.1@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full h-full px-4"
              >
                <span className="whitespace-nowrap">tato.zhvania.1@gmail.com</span>
                <HiOutlineMail size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
