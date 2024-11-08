/* eslint-disable react/no-unescaped-entities */
import { experienceData } from '../data.js';

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full md:screen text-gray-300 pt-[200px] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className="font-bold text-[#9f38f9] text-5xl border-b-4 border-[#00d8ff] max-w-[400px] mb-2"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-once="false"
          >
            Work Experience
          </p>
        </div>
        <div className="flex flex-col gap-5 py-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              data-aos={item.fade}
              data-aos-delay={item.delay}
              data-aos-once="false"
            >
              <div>
                <h1 className="font-bold italic text-3xl border-b-4 max-w-[990px] mb-2">
                  {item.title} -{' '}
                  <span className="text-[#9f38f9]">{item.company}</span>
                </h1>
                <h1 className="text-[#a1a1aa]">{item.date}</h1>
              </div>
              <div className="py-4">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
