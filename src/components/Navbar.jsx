import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import {
  AiOutlineHome,
  AiFillProject,
  AiOutlineMail,
  AiOutlineAppstore,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import Icon from '../assets/icon.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => setNav(!nav);

  const onNavScroll = () => {
    window.scrollY > 30 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);

  return (
    <div
      className={`
    fixed w-full h-[80px] flex justify-between items-center z-[99]
    px-4 bg-[#0c090a7e] transition-all duration-300 ease-in-out ${
      scroll
        ? `backdrop-blur-md text-gray-300 shadow-md shadow-[#00d9ff75] top-0`
        : `fixed top-5`
    }  `}
    >
      <div data-aos="fade-down" data-aos-delay="200">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img src={Icon} alt="icon" />
        </Link>
      </div>
      {/* M E N U */}
      <ul className="hidden md:flex">
        <li className="nav-links" data-aos="fade-down" data-aos-delay="300">
          <Link to="home" smooth={true} duration={500}>
            <p className="cursor-pointer">Home</p>
          </Link>
        </li>
        <li className="nav-links " data-aos="fade-down" data-aos-delay="400">
          <Link to="about" smooth={true} duration={500}>
            <p className="cursor-pointer">About</p>
          </Link>
        </li>
        <li className="nav-links " data-aos="fade-down" data-aos-delay="500">
          <Link to="skills" smooth={true} duration={500}>
            <p className="cursor-pointer">Skills</p>
          </Link>
        </li>
        <li className="nav-links " data-aos="fade-down" data-aos-delay="500">
          <Link to="experience" smooth={true} duration={500}>
            <p className="cursor-pointer">Experience</p>
          </Link>
        </li>
        <li className="nav-links" data-aos="fade-down" data-aos-delay="600">
          <Link to="works" smooth={true} duration={500}>
            <p className="cursor-pointer">Works</p>
          </Link>
        </li>
        <li className="nav-links " data-aos="fade-down" data-aos-delay="700">
          <Link to="contact" smooth={true} duration={500}>
            <p className="cursor-pointer">Contact</p>
          </Link>
        </li>
      </ul>

      {/* H A M B U R G E R */}
      <div
        onClick={handleClick}
        className="text-second md:hidden z-90  cursor-pointer transition-all duration-500 ease-in-out active:scale-110 hover:scale-125 "
      >
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      <div
        className={`${
          nav ? 'left-0' : 'left-[-100%]'
        } fixed top-0 w-[70%] h-screen text-[#fff] bg-[rgba(0,0,0,0.96)] flex flex-col justify-center items-center transition-all duration-500 ease-in-out`}
      >
        <ul className="flex flex-col justify-center items-center gap-y-[50px] w-full h-full">
          <li className="text-3xl border-b-4 border-[#9f38f9]">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={500}
              className="flex"
            >
              <AiOutlineHome size={30} className="mr-3" /> <p>Home</p>
            </Link>
          </li>
          <li className="text-3xl border-b-4 border-[#9f38f9] text-white">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={500}
              className="flex"
            >
              <BsPerson size={30} className="mr-3" />
              <p>About</p>
            </Link>
          </li>
          <li className="text-3xl border-b-4 border-[#9f38f9]">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
              className="flex"
            >
              <AiOutlineAppstore size={30} className="mr-3" />
              <p>Skills</p>
            </Link>
          </li>
          <li className="text-3xl border-b-4 border-[#9f38f9]">
            <Link
              onClick={handleClick}
              to="works"
              smooth={true}
              duration={500}
              className="flex"
            >
              <AiFillProject size={30} className="mr-3" />
              <p>Works</p>
            </Link>
          </li>
          <li className="text-3xl border-b-4 border-[#9f38f9]">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
              className="flex"
            >
              <AiOutlineMail size={30} className="mr-3" />
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
