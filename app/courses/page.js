import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CoursesHub from "@/components/CoursesHub";
import { courses } from "@/data/education";

export const metadata = {
  title: "Courses",
  description:
    "Start a guided robotics build or create your own custom project. Each course walks you through the full engineering process — design in Onshape, electronics, and code — over about a week, with progress tracking and daily streaks.",
};

// Guided courses are the public, structured builds. Custom projects are created
// and stored client-side, so they're loaded inside <CoursesHub />.
export default function CoursesPage() {
  return (
    <>
      <Hero
        eyebrow="Courses & projects"
        title="Pick a build. We'll walk you through it."
        subtitle="Every course takes you through the real engineering process — designing in Onshape with our material ecosystem, wiring the electronics, and writing the code — one day at a time. Or spin up a custom project for whatever you're building."
      />

      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <CoursesHub guided={courses} />
      </Section>
    </>
  );
}
