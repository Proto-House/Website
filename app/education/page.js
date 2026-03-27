import Section from "@/components/Section";

export const metadata = {
  title: "Education | Proto-House",
  description: "How Proto-House supports engineering education through hands-on iteration.",
};

export default function EducationPage() {
  return (
    <>
      <Section className="bg-zinc-900 text-white">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Education Mission</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Learning engineering by building, testing, and improving
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Proto-House empowers students with real-world engineering workflows through accessible parts and faster iteration cycles.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-4">
          <article className="rounded-xl border border-zinc-200 p-6">
            <h2 className="text-xl font-semibold">Iteration drives learning</h2>
            <p className="mt-3 text-zinc-600">
              Students learn faster when they can prototype, test, and refine mechanical ideas in short cycles.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 p-6">
            <h2 className="text-xl font-semibold">Accessible for school budgets</h2>
            <p className="mt-3 text-zinc-600">
              Affordable materials make high-quality engineering experiences possible for schools with limited budgets.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 p-6">
            <h2 className="text-xl font-semibold">Real-world applications</h2>
            <p className="mt-3 text-zinc-600">
              From FRC mechanisms to classroom projects, students build practical skills they can use in industry and research.
            </p>
          </article>
          <article className="rounded-xl border border-zinc-200 p-6">
            <h2 className="text-xl font-semibold">What Makes Us Special</h2>
            <p className="mt-3 text-zinc-600">
              We aim to make engineering learning hands on and interactive allowing students to practice all forms of engineering from mechnical, to electrical, to computer engineering.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
