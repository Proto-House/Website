import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";

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
        eyebrow="Industrial automation & robotics education"
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
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
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
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
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
              <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

<<<<<<< Updated upstream
      <Section id="why" className="border-t border-zinc-200">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proto-House is Tailored Towards You.</h2>
        <p className="mt-3 text-zinc-700">
          We aim to make products that target YOU no matter which category you fall into.
        </p>
        <ul className="mt-7 grid gap-4 text-zinc-700 md:grid-cols-3">
          <li className="rounded-lg border border-zinc-200 p-5">
            <span className="block text-base font-semibold text-zinc-900">Robotics Teams</span>
            <span className="mt-2 block">Rapid prototyping and iteration cycles for robotics teams</span>
          </li>
          <li className="rounded-lg border border-zinc-200 p-5">
            <span className="block text-base font-semibold text-zinc-900">Students and Learners</span>
            <span className="mt-2 block">Designs for educational hands on learning of all types of engineering</span>
          </li>
          <li className="rounded-lg border border-zinc-200 p-5">
            <span className="block text-base font-semibold text-zinc-900">Hobbyist</span>
            <span className="mt-2 block">Affordable compared to traditional machining for hobbyist</span>
          </li>
        </ul>
=======
      {/* Featured project */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid items-center gap-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-2 md:p-10">
          <div className="flex h-56 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-sm font-medium text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-500 md:h-72">
            Add swerve drive photo
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Featured project
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
              Mini Swerve Drive
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              A 12×12 in. custom swerve drive packed with a purpose-built PCB
              carrier board, an ESP32-S3 master controller, FOC motor control,
              and magnetic encoders. Mechanical, electrical, firmware, all of it.
              That's the full-stack engineering we now bring to factory
              automation.
            </p>
            <div className="mt-6">
              <Link
                href="/projects"
                className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                See the full portfolio →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* About teaser + Education teaser */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Built by people who build robots
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Two roboticists started ProtoHouse, and their strengths line up
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
          <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Where we started
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Still invested in robotics education
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              We learned engineering through FRC and a lot of hands-on building.
              We haven't forgotten that. Alongside the automation work, we're
              putting together modern robotics kits and curriculum for the next
              generation of builders.
            </p>
            <div className="mt-6">
              <Link
                href="/education"
                className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Explore education →
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
>>>>>>> Stashed changes
      </Section>
    </>
  );
}
