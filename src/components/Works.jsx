import React from 'react';
import { projects } from '../data';

const Works = () => {
  return (
    <div name="works" className="w-full md:screen text-gray-300 pt-[200px] ">
      <div className="md:max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mx-auto">
          <p
            className="font-bold text-[#9f38f9] text-4xl border-b-4 border-[#00d8ff] max-w-[120px] mt-8 mx-auto"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-once="false"
          >
            Works
          </p>

          <p className="py-5" data-aos="fade-right" data-aos-delay="500">
            {'//'} Check out some of my recent works
          </p>
        </div>

        <div className="grid gap-2 sm:gap-3 md:grid-cols-2 xl:grid-cols-3 ">
          {projects.map((project, index) => {
            const { image, title, github, url, delay, fade } = project;
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '300px',
                  height: '200px',
                }}
                className="shadow-lg shadow-[#343434] group container rounded-md flex justify-center items-center mx-auto content-div"
                data-aos={fade}
                data-aos-delay={delay}
                data-aos-once="false"
              >
                <div className="hidden group-hover:block text-center group-hover:pt-[50px] backdrop-blur-sm  bg-[#0c090aa5] h-full w-full">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {title}
                  </span>
                  <div>
                    <a href={github} rel="noreferrer" target="_blank">
                      <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    <a href={url} rel="noreferrer" target="_blank">
                      <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
