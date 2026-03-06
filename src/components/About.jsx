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
            <p>Building reliable systems.</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="400" data-aos-once="false">
            <p>
              I am a DevOps Engineer from Tbilisi, Georgia with a background in
              web development and monitoring engineering. My work focuses on
              automation, observability, and building scalable, dependable
              systems across on-premises infrastructure and AWS.
            </p>
            <p className="mt-4">
              I work across infrastructure automation, containerized
              environments, deployment workflows, and observability systems. I
              am also a Certified Kubernetes Application Developer (CKAD), with
              a strong interest in resilient infrastructure, clean deployments,
              and fast incident response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
