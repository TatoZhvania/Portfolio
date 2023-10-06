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
            <p>Hi, and nice to meet you: {')'} PLease take a look around</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="500" data-aos-once="false">
            <p>
              I'm learning at Business and Technology University in the IT
              field. I'm a self-taught programmer, very motivated, active, and
              responsible person. I'm a hardworking and ambitious front end (
              React ) developer from Georgia, who wants to learn as much as
              possible to enhance his skills as an individual and also as a team
              worker. I wish I had spent this enthusiasm of mine in the right
              company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
