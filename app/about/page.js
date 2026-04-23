import Section from "@/components/Section";

export const metadata = {
  title: "About | ProtoHouse",
  description: "Learn the story and mission behind ProtoHouse.",
};

export default function AboutPage() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-12">
        <h1 className="text-4xl font-bold tracking-tight md:col-span-5 md:text-5xl">About ProtoHouse</h1>
        <div className="md:col-span-7 space-y-6 leading-8 text-zinc-700">
          <p>
            ProtoHouse was founded by Rishi Mishra and Yash Patel who wanted a faster, more affordable way to build and test ideas.
          </p>
          <p>
            We built this company for robotics teams and enthusiasts who need dependable parts without long lead times or high costs.
          </p>
          <p>
            Our goal is to support innovation through rapid iteration and expand access to hands-on engineering education.
          </p>
        </div>
      </div>
      <div className="mt-12 rounded-xl bg-zinc-900 px-6 py-10 text-white md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Education First</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Building future engineers through hands-on iteration
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-zinc-300">
            <p>
              We support FRC teams and classrooms with practical materials that let students move from CAD to testing quickly.
            </p>
            <p>
              Our long-term goal is to help make cutting edge robotics more accesible to students.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/15 bg-white/5 p-4">⚙️ Real build experience</div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-4">🏫 Classroom ready</div>
              <div className="rounded-lg border border-white/15 bg-white/5 p-4">🚀 Fast iteration cycles</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Rishi Mishra (Co-Founder)</h2>
          <p className="mt-3 text-zinc-700">{""}</p>
        </article>
        <article className="rounded-xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Yash Patel (Co-Founder)</h2>
          <p className="mt-3 text-zinc-700">{""}</p>
        </article>
      </div>
    </Section>
  );
}
