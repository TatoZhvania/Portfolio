import { web_skills, devops_skills } from '../data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SkillGrid = ({ items }) => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
    {items.map((skill) => (
      <Card
        key={skill.name}
        data-aos={skill.fade}
        data-aos-delay={skill.delay}
        data-aos-once="false"
        className={`border border-white/10 bg-white/5 text-white transition-transform duration-200 hover:-translate-y-1 ${skill.shadow}`}
      >
        <CardContent className="flex min-h-[104px] flex-col items-center justify-center gap-2 p-3 text-center">
          <img src={skill.src} alt={skill.alt} className="h-9 w-9 object-contain" />
          <p className="text-sm font-medium leading-tight">{skill.name}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section name="skills" className="w-full pt-24 sm:pt-28 lg:pt-32">
      <div className="content-shell">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="mx-auto mb-3 inline-block border-b-4 border-[#00d8ff] text-3xl font-bold text-[#9f38f9] sm:text-4xl">
              My Skills
            </p>
            <p className="text-sm text-slate-300 sm:text-base">
              {'//'} Tools and technologies I work with
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full flex-col">
            <TabsList className="mx-auto grid w-full max-w-xl grid-cols-2 rounded-2xl border border-white/20 bg-[#11101a]/90 p-1.5 shadow-[0_0_24px_rgba(0,216,255,0.08)]">
              <TabsTrigger
                value="web"
                className="h-11 cursor-pointer rounded-xl border border-transparent text-sm font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white data-[state=active]:border-cyan-300/40 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00b8d9] data-[state=active]:to-[#7b3ff3] data-[state=active]:text-white data-[state=active]:shadow-[0_6px_20px_rgba(123,63,243,0.45)]"
              >
                Web Development
              </TabsTrigger>
              <TabsTrigger
                value="devops"
                className="h-11 cursor-pointer rounded-xl border border-transparent text-sm font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white data-[state=active]:border-cyan-300/40 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00b8d9] data-[state=active]:to-[#7b3ff3] data-[state=active]:text-white data-[state=active]:shadow-[0_6px_20px_rgba(123,63,243,0.45)]"
              >
                DevOps
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web" className="mt-6">
              <div className="mb-3">
                <Badge variant="outline" className="border-[#00d8ff]/70 text-[#00d8ff]">
                  Frontend & Backend
                </Badge>
              </div>
              <SkillGrid items={web_skills} />
            </TabsContent>

            <TabsContent value="devops" className="mt-6">
              <div className="mb-3">
                <Badge variant="outline" className="border-[#c087f2]/70 text-[#c087f2]">
                  Cloud & Infrastructure
                </Badge>
              </div>
              <SkillGrid items={devops_skills} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
