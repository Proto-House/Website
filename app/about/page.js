import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata = {
  title: "About",
  description:
    "ProtoHouse is a small team of roboticists building custom automation for manufacturers, with hands-on engineering experience from FRC, swerve drives, drones, and custom PCBs.",
};

const beliefs = [
  {
    title: "Real engineering matters",
    body: "We design from first principles instead of reselling off-the-shelf solutions. The hard engineering is the point.",
  },
  {
    title: "Customer success is our success",
    body: "We measure our work in your ROI. Cost per part, throughput, uptime. Not whether some project got marked complete.",
  },
  {
    title: "Great automation shouldn't be only for enterprises",
    body: "Small companies deserve world-class automation too. Making it accessible to them is why we exist.",
  },
  {
    title: "Education is foundational",
    body: "We came up through the robotics community, and we give back to it. Today's students are tomorrow's engineers.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About ProtoHouse"
        title="A small team of roboticists building automation for manufacturers."
        subtitle="We design, install, and support custom robotic solutions. And we understand them deeply, because we've built robots ourselves, right from the mechanics up."
      />

      {/* Our story */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
              Our story
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-zinc-600 dark:text-zinc-400 md:col-span-7">
            <p>
              ProtoHouse started where a lot of good engineers start. In FRC and
              small-scale robotics, mentoring and building next to other people
              who loved making things move.
            </p>
            <p>
              We learned by doing. That meant designing a custom swerve drive
              down to its PCB carrier board, building drones with custom
              electronics, laying out our own boards, and writing the firmware to
              tie it all together. Mechanical, electrical, software, all
              hands-on.
            </p>
            <p>
              Now we're putting that same engineering to work on industrial-scale
              automation. That path is a strength, not a detour. We understand
              how robots actually work because we've built them ourselves, not
              just picked them out of a catalog.
            </p>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            The team
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Two founders, two deliberately different specializations. One owns
            the engineering. The other owns the business.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Founder 1 (Technical Lead) */}
          <article className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Technical Lead
            </p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">
              [Name: to be filled in]
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Engineering, robotics design, technical execution
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              [Bio placeholder. Technical background: mechanical and electrical
              design, PCB layout and embedded firmware, motor control, and the
              hands-on builds (swerve drive, drones, custom boards) behind our
              automation work. To be filled in.]
            </p>
          </article>

          {/* Founder 2 (Business Lead) */}
          <article className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Business Lead
            </p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">
              [Name: to be filled in]
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Business development, customer relationships, operations
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              [Bio placeholder. Background in business development, sales, and
              customer-facing work: understanding what manufacturers need,
              scoping engagements, and running operations so projects actually
              deliver. To be filled in.]
            </p>
          </article>
        </div>
      </Section>

      {/* What we believe */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            What we believe
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {beliefs.map((belief) => (
            <div
              key={belief.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                {belief.title}
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {belief.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
              Let's build something that works.
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              See how we approach automation. Or reach out and tell us about your
              operation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/automation">Explore automation</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
