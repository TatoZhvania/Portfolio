import { HiArrowNarrowRight } from 'react-icons/hi';
import { scroller } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useScroll, motion } from 'framer-motion';
import CV from '../assets/Tato-Zhvania.pdf';
import Lottie from 'lottie-react';
import animationData from '../assets/svg/animation_lnangngs.json';
import ParticleBg from './particle/ParticleBg';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scrollToWorks = () => {
    scroller.scrollTo('works', {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div
      id="home"
      name="home"
      className="relative flex w-full overflow-hidden"
    >
      <div className="content-shell relative min-h-screen pt-24 md:pt-0">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticleBg />
        </div>
        <motion.div
          className="hidden md:block bg-[#770fd2] shadow-md shadow-[#770fd2] rounded-sm w-full h-[4px] absolute top-[80px] left-0 z-20"
          style={{ scaleX: scrollYProgress }}
        >
          {'.'}
        </motion.div>
        <div className="relative z-10 grid min-h-screen items-center gap-10 lg:grid-cols-[minmax(0,720px)_300px] lg:justify-between">
          <div className="max-w-[720px] xl:pl-14">
            <div>
              <p
                className="mb-3 max-w-[132px] border-b-4 border-[#00d8ff] text-base text-[#c087f2] sm:text-lg"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-once="false"
              >
                Hi, My name is-
              </p>
            </div>
            <div data-aos="fade-down" data-aos-delay="600" data-aos-once="false">
              <h1 className="text-5xl font-bold leading-tight text-[#fff] sm:text-6xl">
                Tato Zhvania.
              </h1>
            </div>
            <div data-aos="fade-right" data-aos-delay="700" data-aos-once="false">
              <h2 className="text-2xl font-semibold leading-tight text-[#fff] sm:text-3xl">
                I&apos;m a DevOps Engineer | Full-Stack Engineer
              </h2>
            </div>
            <div data-aos="fade-right" data-aos-delay="700" data-aos-once="false">
              <p className="max-w-[600px] py-4 text-base text-[#c087f2] sm:text-lg">
                Self-taught. {'</>'}
              </p>
            </div>
            <div className="mb-2 flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="760">
              <Badge variant="outline" className="border-cyan-400/70 text-cyan-300">
                Kubernetes
              </Badge>
              <Badge variant="outline" className="border-[#c087f2]/70 text-[#c087f2]">
                Python
              </Badge>
              <Badge variant="outline" className="border-slate-300/40 text-slate-300">
                Full-Stack
              </Badge>
            </div>
            <div data-aos="fade-right" data-aos-delay="800" data-aos-once="false">
              <Button
                onClick={scrollToWorks}
                className="group relative z-40 mt-2 h-11 w-[170px] border border-[#9f38f9] bg-transparent text-white hover:bg-[#7838f9]"
              >
                <span>View Works</span>
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-1" />
                </span>
              </Button>
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
          className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col text-white xl:flex"
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
