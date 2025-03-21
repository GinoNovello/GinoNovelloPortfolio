import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SkillsCard } from "@/components/skills-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { EDUCATION_DATA } from "@/constants/education";
import { PROJECT_DATA } from "@/constants/projects";
import { WORK_DATA } from "@/constants/work";
import { DATA } from "@/data/resume";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const t = useTranslations("HomePage");
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${t("presentation")} ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={t("description")}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{t("about")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {t("summary")}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t("workExperience")}</h2>
          </BlurFade>
          {WORK_DATA.map((work, index) => (
        <BlurFade
          key={work.company}
          delay={BLUR_FADE_DELAY * 6 + index * 0.05}
        >
          <ResumeCard
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={t(`work.${work.id}.title`)}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={t(`work.${work.id}.description`)}
          />
        </BlurFade>
      ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t("education.title")}</h2>
          </BlurFade>
          {EDUCATION_DATA.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                 logoUrl={education.logoUrl}
                 altText={education.school}
                 title={education.school}
                 subtitle={t(`education.${education.id}.degree`)}
                 period={`${education.start} - ${education.end ?? "Present"}`}
                 description={t(`education.${education.id}.description`)}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t("skills.title")}</h2>
          </BlurFade>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <SkillsCard key={id} cardInfo={skill} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-9 w-full py-9">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {t("projects.title")}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("projects.description")}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("projects.summary")}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
            {PROJECT_DATA.map((project, index) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + index * 0.05}
              >
                <ProjectCard
                  id={project.id}
                  active={project.active}
                  href={project.href}
                  title={project.title}
                  description={t(`projects.${project.id}.description`)}
                  dates={project.dates}
                  technologies={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {t("contact.title")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t("contact.description")}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("contact.summary")}
                <Link className="font-bold underline" href={DATA.contact.social.LinkedIn.url}>Linkedln</Link>.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
