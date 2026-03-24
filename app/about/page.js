import Section from "@/components/Section";

export const metadata = {
  title: "About | Proto-House",
  description: "Learn the story and mission behind Proto-House.",
};

export default function AboutPage() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-12">
        <h1 className="text-4xl font-bold tracking-tight md:col-span-5 md:text-5xl">About Proto-House</h1>
        <div className="md:col-span-7 space-y-6 leading-8 text-zinc-700">
          <p>
            Proto-House was founded by students who wanted a faster, more affordable way to build and test ideas.
          </p>
          <p>
            We built this company for robotics teams and hobbyists who need dependable parts without long lead times or high costs.
          </p>
          <p>
            Our mission is simple: support innovation through rapid iteration and expand access to hands-on engineering education.
          </p>
        </div>
      </div>
    </Section>
  );
}
