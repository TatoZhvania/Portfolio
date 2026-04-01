import { experienceData } from '../data.js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Experience = () => {
  return (
    <section name="experience" className="w-full pt-24 sm:pt-28 lg:pt-32">
      <div className="content-shell">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="mx-auto mb-3 inline-block border-b-4 border-[#00d8ff] text-3xl font-bold text-[#9f38f9] sm:text-4xl">
              Work Experience
            </p>
          </div>

          <div className="space-y-4">
            {experienceData.map((item, index) => (
              <Card
                key={`${item.title}-${item.company}`}
                data-aos={item.fade}
                data-aos-delay={item.delay}
                data-aos-once="false"
                className="border border-white/10 bg-white/5 text-white"
              >
                <CardHeader className="space-y-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <CardTitle className="text-xl sm:text-2xl">
                      {item.title} <span className="text-[#c087f2]">• {item.company}</span>
                    </CardTitle>
                    <Badge variant="outline" className="w-fit border-cyan-400/70 text-cyan-300">
                      {item.date}
                    </Badge>
                  </div>
                  <Separator className="bg-white/10" />
                </CardHeader>
                <CardContent className="text-sm leading-7 text-slate-200 sm:text-base">
                  {item.description.replace(/\s+/g, ' ').trim()}
                </CardContent>
                {index !== experienceData.length - 1 && <Separator className="bg-white/10" />}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
