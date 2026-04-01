import { projects } from '../data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Works = () => {
  return (
    <section name="works" className="w-full pt-24 sm:pt-28 lg:pt-32">
      <div className="content-shell">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="mx-auto mb-3 inline-block border-b-4 border-[#00d8ff] text-3xl font-bold text-[#9f38f9] sm:text-4xl">
              Works
            </p>
            <p className="text-sm text-slate-300 sm:text-base">
              {'//'} Check out some of my recent projects
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const { image, title, github, url, delay, fade } = project;
              return (
                <Card
                  key={title}
                  data-aos={fade}
                  data-aos-delay={delay}
                  data-aos-once="false"
                  className="overflow-hidden border border-cyan-400/20 bg-white/5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                >
                  <img src={image} alt={title} className="h-44 w-full object-cover object-top" />
                  <CardHeader className="pb-1">
                    <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                  </CardHeader>
                  {/* <CardContent className="pt-0 text-sm text-slate-300">
                    Responsive frontend project with polished UI and production deployment.
                  </CardContent> */}
                  <CardFooter className="grid grid-cols-2 gap-2 border-t border-white/10 bg-transparent">
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/25 bg-transparent text-white hover:bg-white/10"
                    >
                      <a href={github} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    </Button>
                    <Button asChild className="bg-[#7838f9] text-white hover:bg-[#6530d4]">
                      <a href={url} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
