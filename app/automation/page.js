import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";

export const metadata = {
  title: "Automation",
  description:
    "Custom robotic automation for small and mid-size manufacturers, designed, installed, and supported to cut cost per part and lift throughput.",
};

const services = [
  {
    title: "Custom automation design & engineering",
    body: "We start with your parts and your process. From there we design the robotic cell, the custom tooling, and the controls to match. Mechanical, electrical, and software get engineered together, not bolted on after the fact.",
  },
  {
    title: "Installation & commissioning",
    body: "We build, install, and commission the system right on your floor. Robots, tooling, vision, software, all integrated. Then we run it against real production until it's reliable.",
  },
  {
    title: "Long-term maintenance & support",
    body: "Support contracts keep your line dependable. You get preventive maintenance, a fast response when something needs attention, and the institutional knowledge of the team that actually built it.",
  },
  {
    title: "Process upgrades as you evolve",
    body: "Part mixes change. Volumes change. When your requirements shift, we upgrade the system to match, which extends its life and protects your investment instead of forcing you to start over.",
  },
];

// Pain (traditional integration) lined up against ProtoHouse's answer.
// Rendered as a 2-col table below "The problem" so the contrast reads visually.
const contrasts = [
  {
    pain: "Expensive engagements and slow delivery, scoped for enterprise budgets.",
    answer: "Priced realistically for small and mid-size manufacturers, with a faster path to a working line.",
  },
  {
    pain: "One-and-done installs — the integrator vanishes once the system is on the floor.",
    answer: "Long-term support built in. Same team, on call when the line needs them.",
  },
  {
    pain: "A system nobody on your team fully understands when it drifts out of spec.",
    answer: "Engineered transparently by the people who designed and built every part of it.",
  },
];

const XIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-zinc-400 dark:text-zinc-500" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true">
    <path d="m5 12 5 5L20 7" />
  </svg>
);

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

        {/* Visual: traditional integrator vs ProtoHouse, row-by-row pain → answer */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/50 md:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                The usual path
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 md:text-base">
                Traditional integrators
              </p>
            </div>
            <div className="border-b border-zinc-200 bg-blue-50/50 px-5 py-4 dark:border-zinc-800 dark:bg-blue-950/20 md:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Our approach
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 md:text-base">
                ProtoHouse
              </p>
            </div>
          </div>
          {contrasts.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${
                i < contrasts.length - 1
                  ? "border-b border-zinc-200 dark:border-zinc-800"
                  : ""
              }`}
            >
              <div className="flex items-start gap-3 border-r border-zinc-200 px-5 py-5 dark:border-zinc-800 md:px-7 md:py-6">
                {XIcon}
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {row.pain}
                </p>
              </div>
              <div className="flex items-start gap-3 px-5 py-5 md:px-7 md:py-6">
                {CheckIcon}
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                  {row.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Our services */}
      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            Our services
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Everything it takes to move a manual process to a dependable
            automated one, and keep it that way.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title}>
              {service.body}
            </ServiceCard>
          ))}
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
