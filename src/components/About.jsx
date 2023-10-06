import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-gray-300 pb-[200px] pt-[200px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-once="false"
        >
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00d8ff] text-[#9f38f9]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            className="sm:text-right text-4xl font-bold "
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-once="false"
          >
            <p>Please take a look around</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="500" data-aos-once="false">
            <p>
              I'm self-taught web developer with a passion for creating engaging
              and user-friendly websites. My skill set includes proficiency in
              HTML, CSS, and JavaScript, along with expertise in React.js and
              Tailwind CSS to build dynamic and responsive web applications. I'm
              well-versed in version control using GIT and have a basic
              understanding of PHP, SQL, and MySQL to handle server-side
              development. I thrive on crafting seamless online experiences and
              staying up-to-date with the latest web development trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
