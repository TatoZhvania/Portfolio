const About = () => {
  return (
    <section
      name="about"
      className="w-full py-24 text-gray-300 sm:py-28 lg:py-32"
    >
      <div className="content-shell">
        <div
          className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="false"
        >
          <div className="pb-8 sm:text-right">
            <p className="inline border-b-4 border-[#00d8ff] text-3xl font-bold text-[#9f38f9] sm:text-4xl">
              About
            </p>
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2">
          <div
            className="text-left text-3xl font-bold sm:text-center sm:text-4xl"
            style={{ letterSpacing: '0.04em' }}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <p>Building reliable systems.</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="400" data-aos-once="false">
            <p className="text-base leading-8 text-slate-300">
              I am a DevOps Engineer from Tbilisi, Georgia with a background in
              web development and monitoring engineering. My work focuses on
              automation, observability, and building scalable, dependable
              systems across on-premises infrastructure and AWS.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              I work across infrastructure automation, containerized
              environments, deployment workflows, and observability systems. I
              am also a Certified Kubernetes Application Developer (CKAD), with
              a strong interest in resilient infrastructure, clean deployments,
              and fast incident response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
