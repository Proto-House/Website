import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects, sideProjects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "A portfolio of ProtoHouse engineering work: custom swerve drive, AI-driven robot arms, FRC robots, and software, showing the depth behind our automation services.",
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio"
        title="What we've built."
        subtitle="These are the projects that taught us how robots really work. Mechanical, electrical, software, all on real hardware. It's the same depth we bring to factory automation."
      />

      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid items-start gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Side projects: a single box containing the smaller things we've made. */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
              Side projects
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Other cool things we&apos;ve built along the way.
            </p>
          </div>
          <div className="mt-8 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
