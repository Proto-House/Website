import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ProcessStep from "@/components/ProcessStep";

export const metadata = {
  title: "Automation",
  description:
    "Custom robotic automation for small and mid-size manufacturers, designed, installed, and supported to cut cost per part and lift throughput.",
};

// Applications grouped by the business outcome they deliver. Framed softly
// ("applications we focus on") to avoid implying a track record we haven't
// built yet.
const capabilities = [
  {
    outcome: "Reduce repetitive labor",
    items: [
      {
        name: "Pick-and-place",
        body: "Moving parts off a conveyor, into a box, or between workstations. One of the highest-ROI automation tasks.",
      },
      {
        name: "Palletizing & depalletizing",
        body: "Stacking and unstacking cases or products onto pallets. Eliminates heavy repetitive lifting that's hard to staff.",
      },
      {
        name: "Packaging & case packing",
        body: "Placing finished products into trays, boxes, or cases in consistent patterns.",
      },
    ],
  },
  {
    outcome: "Run machines longer with fewer operators",
    items: [
      {
        name: "Machine tending",
        body: "Loading and unloading CNC machines, injection molding presses, and other equipment. Keeps a single machine running without an operator standing by.",
      },
      {
        name: "Part removal & sorting",
        body: "Pulling finished parts from molds or equipment and sorting by type, size, or destination.",
      },
      {
        name: "Material handling & transfer",
        body: "Moving materials and work-in-progress between stations and storage so production keeps flowing.",
      },
    ],
  },
  {
    outcome: "Improve quality and consistency",
    items: [
      {
        name: "Vision-guided inspection",
        body: "Cameras check parts for defects, verify dimensions, or confirm assembly — flagging anything that doesn't meet spec.",
      },
      {
        name: "Labeling & marking",
        body: "Applying labels, stamps, or markings to products in consistent positions.",
      },
      {
        name: "End-of-line integration",
        body: "Combining the above into one cell — parts come off a machine, get inspected, packed, and palletized in a single flow.",
      },
    ],
  },
];

const steps = [
  {
    step: "1",
    title: "Discovery",
    body: "We get to know your operation. The process, your throughput goals, the constraints, and what success actually looks like in dollars.",
  },
  {
    step: "2",
    title: "Design",
    body: "We engineer a solution and lay out the plan. Scope, components, expected ROI, and timeline, all on the table before any build starts.",
  },
  {
    step: "3",
    title: "Build & install",
    body: "We build the cell and tooling. Then we integrate it on your floor and commission it against real production.",
  },
  {
    step: "4",
    title: "Support",
    body: "We stay on with maintenance and upgrades. The system keeps paying off long after launch.",
  },
];

export default function AutomationPage() {
  return (
    <>
      <Hero
        eyebrow="Industrial automation"
        title="Custom robotics that pay for themselves."
        subtitle="We help manufacturers cut cost per part, push throughput up, and keep their lines running. The automation is designed for the job and supported for the long haul."
        actions={<Button href="/contact">Request a free assessment</Button>}
      />

      {/* The problem */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
              The problem with the industry
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-zinc-600 dark:text-zinc-300 md:col-span-7">
            <p>
              Labor costs keep climbing. Skilled operators are hard to hire and
              even harder to keep, and manual processes put a ceiling on what you
              can produce. Automation is the obvious answer.
            </p>
            <p>
              But the usual path is frustrating. Traditional integration firms
              are expensive and slow to deliver. Worse, a lot of them vanish once
              the install is done, leaving you with a system nobody fully
              understands and no one to call when it drifts.
            </p>
            <p>
              We built ProtoHouse to do this differently for small and mid-size
              manufacturers. Engineered properly, priced realistically, supported
              for the long term.
            </p>
          </div>
        </div>
      </Section>

      {/* Applications we focus on */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Applications we focus on
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            The manual tasks that respond best to automation in small and
            mid-size manufacturing, grouped by the outcome they deliver.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {capabilities.map((group) => (
            <article
              key={group.outcome}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                {group.outcome}
              </h3>
              <ul className="mt-5 space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-200">
            <span className="font-semibold text-zinc-950 dark:text-white">
              Not sure where to start?
            </span>{" "}
            Most facilities have one or two manual tasks that deliver the
            fastest return on automation. We'll help you identify them in a
            free on-site assessment.
          </p>
        </div>
      </Section>

      {/* Our process */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Our process
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A clear path from the first conversation to a system that keeps
            delivering.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <ProcessStep key={s.step} step={s.step} title={s.title}>
              {s.body}
            </ProcessStep>
          ))}
        </div>
      </Section>

      {/* What we work with */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
              What we work with
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-zinc-600 dark:text-zinc-300 md:col-span-7">
            <p>
              We build on proven industrial hardware. That means collaborative
              and industrial robots from manufacturers like Universal Robots and
              Fanuc, so your system sits on platforms with global support and a
              long service life.
            </p>
            <p>
              Around that foundation, we add the parts that make it yours. Custom
              tooling and end-effectors, machine vision, and the software that
              ties everything together. Reliable components, engineered into a
              solution built for your floor.
            </p>
          </div>
        </div>
      </Section>

      {/* Currently in development */}
      <Section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid items-center gap-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-2 md:p-10">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
              Currently in development
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
              Vision Driven Autonomous Arm
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
              We're building a miniature autonomous arm to show our integration
              capabilities end to end. Mechanics, controls, vision, and software,
              all working as one system. It's a build in progress, and we expect
              it to be demo-ready in 4 to 6 weeks.
            </p>
          </div>
          {/* Same source as the AI Vision-Driven Robot Arm title image on /projects. */}
          <div className="relative h-56 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/60 md:h-72">
            <Image
              src="/images/Misc Images/cool-arm.png"
              alt="AI vision-driven robot arm"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-zinc-900 p-8 text-white md:flex-row md:items-center md:p-10 dark:bg-zinc-900">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Find out what automation could do for your line.
            </h2>
            <p className="mt-3 text-zinc-300">
              Start with a short call and a free on-site assessment. No
              commitment, no pressure.
            </p>
          </div>
          <Button href="/contact">Request a free assessment</Button>
        </div>
      </Section>
    </>
  );
}
