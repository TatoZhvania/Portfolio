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
            className="text-4xl font-bold sm:text-center text-left"
            style={{ letterSpacing: '0.5em' }}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <p>Please take a look around!</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="400" data-aos-once="false">
            <p>
            I am a highly motivated and disciplined DevOps Engineer from Georgia with a 
            comprehensive skill set that spans full-stack development and specialized Monitoring 
            Engineering. Passionate about building efficient and scalable
            web applications, implementing, and maintaining deployment pipelines.
            I possess strong hands-on experience with a modern technology stack including Linux, 
            Python, Docker, Kubernetes, Grafana, Prometheus and so on. I specialize in building end-to-end 
            monitoring solutions, automating alerting systems, and optimizing system performance to 
            ensure maximum reliability and uptime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
