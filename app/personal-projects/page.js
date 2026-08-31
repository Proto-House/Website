import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects, sideProjects } from "@/data/projects";
import { owner, contactLinks } from "@/data/portfolio";

export const metadata = {
  // Overrides the "%s | ProtoHouse" template from the root layout so the page
  // carries no company branding.
  title: {
    absolute: `Personal Projects — ${owner.name}`,
  },
  description:
    "A personal portfolio of engineering work: a custom swerve drivetrain, a vision-driven robot arm, competition robots, drones, custom PCBs, and software.",
};

export default function PersonalProjectsPage() {
  return (
    <div id="top">
      <Hero
        eyebrow="Personal Projects"
        title="Things I've designed and built."
        subtitle={`${owner.role}. Every project here is real hardware or shipped software, taken from CAD and schematic through firmware to something that actually runs.`}
        decorative
      />

      <Section
        id="work"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
            Selected work
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            The bigger builds, with full writeups, photos, and demo footage.
          </p>
        </div>
        <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="side-projects"
        className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
              Side projects
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">
              Smaller things built along the way.
            </p>
          </div>
          <div className="mt-8 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Happy to talk through any of these builds, or about new work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-blue-600 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
