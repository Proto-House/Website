import { notFound } from "next/navigation";
import Section from "@/components/Section";
import CourseView from "@/components/CourseView";
import { courses } from "@/data/education";

// One static page per guided course (required for the static export).
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.summary,
  };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);
  if (!course) notFound();

  return (
    <Section className="pt-12 md:pt-16">
      <CourseView course={course} />
    </Section>
  );
}
