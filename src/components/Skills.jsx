import React from 'react';

import { skills } from '../data';

const Skills = () => {
  return (
    <div name="skills" className="text-gray-300 pt-[200px] w-full h-full">
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className="font-bold text-[#9f38f9] text-4xl border-b-4 border-[#00d8ff] max-w-[195px] mb-2"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-once="false"
          >
            Experience
          </p>
          <p
            className="py-2"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-once="false"
          >
            {'//'} These are technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center py-8">
          {skills.map((skills, index) => (
            <div
              key={index}
              className={`shadow-lg ${skills.shadow} hover:scale-110 duration-500`}
              data-aos={skills.fade}
              data-aos-delay={skills.delay}
              data-aos-once="false"
            >
              <img
                src={skills.src}
                alt={skills.alt}
                className="w-[20%] mx-auto"
              />
              <p className="my-4">{skills.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
