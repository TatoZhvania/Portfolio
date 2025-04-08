/* eslint-disable react/no-unescaped-entities */
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
          data-aos-delay="200"
          data-aos-once="false"
        >
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00d8ff] text-[#9f38f9]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-1 px-4">
          <div
            className="text-4xl font-bold text-center"
            style={{ letterSpacing: '0.4em' }}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <p>Please take a look around</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="400" data-aos-once="false">
            <p>
            I'm a hardworking and ambitious Engineer from Georgia with a strong foundation in Web Development 
            and DevOps technologies. Passionate about building efficient, scalable, and user-friendly applications, 
            I bring a unique blend of frontend creativity and backend reliability.
            With hands-on experience in Linux, Python and Docker I specialize in monitoring automation, 
            system performance optimization, and operational support. I'm proficient in tools like Grafana, Prometheus and Graylog,
            ensuring early detection of anomalies and maintaining smooth and uninterrupted operations
            As a self-taught Web Developer, I’m driven by a passion for crafting engaging digital experiences. 
            I build responsive and dynamic web applications using React.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
