import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { offerings, audiences } from "@/data/education";

export const metadata = {
  title: "Education",
  description:
    "How ProtoHouse teaches robotics: interactive, project-based courses that guide you through designing a real robot in Onshape with our material ecosystem, plus modern kits and curriculum for schools and teams.",
};

const approach = [
  "Kinematics and drivetrain design",
  "Custom CAD design",
  "PCB design",
  "Embedded programming",
  "Computer vision",
];

export default function EducationPage() {
  return (
    <>
      <Hero
        eyebrow="Robotics education"
        title="We teach robotics by building real robots."
        subtitle="ProtoHouse education is hands-on and project-based. We guide you through designing your own robot in Onshape with our ecosystem of materials, wiring its electronics, and writing its code — the same way real engineering actually works."
        actions={
          <>
            <Button href="/courses">Browse courses</Button>
            <Button href="#offerings" variant="secondary">
              For schools & teams
            </Button>
          </>
        }
      />

      {/* Interactive courses callout — points to the separate Courses hub */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900/60 dark:bg-blue-950/30 md:p-12">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Interactive, project-based
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
                Start a build today
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                Our courses take you through a full robot — from CAD and design to
                electronics and code — one day at a time over about a week. Follow
                a guided build, or spin up a custom project for whatever
                you&apos;re making and we&apos;ll generate a plan for exactly the
                work it involves. Track your progress and keep a daily streak as
                you go.
              </p>
              <div className="mt-6">
                <Button href="/courses">Go to courses</Button>
              </div>
            </div>
            <div className="md:col-span-4">
              <ul className="space-y-3">
                {[
                  "Guided beginner & advanced builds",
                  "Design in Onshape with our materials",
                  "Create your own custom projects",
                  "Progress tracking & daily streaks",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-200"
                  >
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
          Need parts for a build? Everything our courses call for is in the{" "}
          <a
            href="/store"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            ProtoHouse store
          </a>
          .
        </p>
      </Section>

      {/* The problem */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
              The problem with robotics education today
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-zinc-600 dark:text-zinc-300 md:col-span-7">
            <p>
              A lot of engineering classrooms have run on the same materials for
              10 to 15 years. The kits haven't changed. Neither has the
              curriculum around them.
            </p>
            <p>
              Meanwhile, real robotics has moved way ahead. Field-oriented motor
              control, custom electronics, computer vision, modern embedded
              development: it's everywhere in industry and almost nowhere in the
              classroom.
            </p>
            <p>
              Students deserve to learn the technologies they'll actually use. We
              know we can do better.
            </p>
          </div>
        </div>
      </Section>

      {/* Our approach */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Our approach
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A modern robotics curriculum built on real engineering. These are the
            same skills we used to build everything in our portfolio.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {approach.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </Section>

      {/* What we offer */}
      <Section
        id="offerings"
        className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            What we offer
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Robotics kits and curriculum, plus the ongoing partnership to keep
            both current with where the industry actually is.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {offerings.map((offering) => (
            <article
              key={offering.id}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {offering.title}
                </h3>
                <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                  {offering.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {offering.description}
              </p>
            </article>
          ))}
        </div>

        {/* Continuous-updates callout — explains the ongoing-contract model. */}
        <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/60 dark:bg-blue-950/30 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            Built into the contract
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-2xl">
            Continuous curriculum updates, shipped to schools under contract
          </h3>
          <div className="mt-4 space-y-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              Robotics moves quick. Five years ago, shops ran on hardware the
              industry has already retired. The gap between what&apos;s running
              on factory floors and what&apos;s sitting in school labs is wider
              still. So a school contract with us isn&apos;t a one-time sale.
              It&apos;s an ongoing relationship.
            </p>
            <p>
              Standards shift; we keep up. As modern robotics and industry
              practice evolve, we rewrite the curriculum to match, then ship
              the updated kit: new components, new electronics, new lesson
              materials. Every school under contract gets it the moment
              it&apos;s ready. You stay current. We do the chasing.
            </p>
          </div>
        </div>
      </Section>

      {/* Audiences */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Who it's for
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.id}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
            Get notified when our education products launch
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Our kits and curriculum are still in the works. Reach out and we'll
            let you know the moment they're ready. And if you just want to talk
            curriculum in the meantime, we're up for that too.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Contact us</Button>
            <Button href="mailto:info@protohouse.org" variant="secondary">
              info@protohouse.org
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
