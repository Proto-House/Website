import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import FeaturedSlideshow from "@/components/FeaturedSlideshow";
import { projects } from "@/data/projects";

// Inline icons keep the home page self-contained and dependency-free.
const DesignIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);
const InstallIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);
const SupportIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    <path d="M7.5 7.5 6 6M18 18l-1.5-1.5M16.5 7.5 18 6M6 18l1.5-1.5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const approach = [
  {
    title: "We engineer from first principles",
    body: "Most integrators grab an off-the-shelf solution and hope it fits. We don't work that way. We design for your process, building the tooling, controls, and mechanics around the actual problem in front of us.",
  },
  {
    title: "We measure success in ROI",
    body: "A finished install isn't the goal. What matters is lower cost per part, higher throughput, and a clear payback window. That's how we judge our own work.",
  },
  {
    title: "We provide long-term support",
    body: "Automation that drifts out of spec stops paying off. So we stay on after commissioning, handling maintenance and upgrades as your needs shift.",
  },
  {
    title: "We're small enough to care",
    body: "You work straight with the people designing and building your system. Not an account manager sitting three layers away from the shop floor.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        decorative
        image="/images/Misc Images/cool-arm.png"
        imageAlt="Industrial robotic arm"
        eyebrow="Industrial Automation & Robotics Education"
        title="Industrial automation, engineered from the ground up."
        subtitle="We design, build, and support custom robotic automation for small and mid-size manufacturers. It's the same hands-on engineering we learned in the robotics community, which we still give back to today."
        actions={
          <>
            <Button href="/contact">Request a free assessment</Button>
            <Button href="/projects" variant="secondary">
              See our work
            </Button>
          </>
        }
      />

      {/* What we do */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            What we do
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Automation from end to end. We take it from the first sketch all the
            way to the system that's still running years later.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ServiceCard icon={DesignIcon} title="Custom automation design">
            We design robotic cells and custom tooling around your actual parts
            and process. Every solution gets engineered for the job. No forcing a
            stock product to fit where it doesn't belong.
          </ServiceCard>
          <ServiceCard icon={InstallIcon} title="Installation & integration">
            We handle the build, integration, and commissioning right on your
            floor. Robots, tooling, vision, and software, all wired into one
            system. It works on day one.
          </ServiceCard>
          <ServiceCard icon={SupportIcon} title="Maintenance & upgrades">
            Launch isn't goodbye. We stick around for maintenance and process
            upgrades, keeping your line dependable as your volumes and
            requirements change.
          </ServiceCard>
        </div>
      </Section>

      {/* Our approach */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Our approach
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Here's what sets us apart from a traditional integration firm.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {approach.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-300">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured projects — cycles through every flagship build every 4s. */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Projects
          </h2>
        </div>
        <FeaturedSlideshow items={projects} />
      </Section>

      {/* About teaser + Education teaser */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Built by people who build robots
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
              Two engineers started ProtoHouse, and their strengths line up
              nicely. One leads engineering and robotics design. The other runs
              business development and customer relationships. We get how
              automation works because we've designed and built the hardware
              ourselves.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Read our story →
              </Link>
            </div>
          </div>
          {/* Education teaser */}
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Where we started
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Still invested in robotics education
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
              We learned engineering through FRC and a lot of hands-on building.
              We haven't forgotten that. Our interactive courses guide you through
              building a real robot — from CAD and design to code — and we make
              modern kits and curriculum for schools and teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/courses"
                className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Browse courses →
              </Link>
              <Link
                href="/education"
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                About our education →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-zinc-200 bg-zinc-900 text-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to automate? Let's talk.
            </h2>
            <p className="mt-3 text-zinc-300">
              Tell us about the process you're thinking of automating. We'll
              start with a short call. If it looks like a fit, we'll come out for
              a free on-site assessment.
            </p>
          </div>
          <Button href="/contact">Request a free assessment</Button>
        </div>
      </Section>
    </>
  );
}
