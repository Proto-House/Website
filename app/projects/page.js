import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "A portfolio of ProtoHouse engineering work: custom swerve drive, drones, FRC robots, and software, showing the depth behind our automation services.",
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
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-500">
          {/* Placeholder note: remove once writeups and links are in. */}
          Detailed technical writeups, photos, GitHub repositories, and CAD
          files are on the way for each project.
        </p>
      </Section>
    </>
  );
}
