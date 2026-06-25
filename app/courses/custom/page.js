"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Section from "@/components/Section";
import CourseView from "@/components/CourseView";
import { getCustomCourse } from "@/lib/learning";

/**
 * Viewer for a user-created custom course. Custom courses live only in this
 * browser's localStorage, so this is a single static page that reads the `id`
 * from the URL on the client and loads the matching course. That keeps custom
 * projects working under a fully static export, where unknown routes can't be
 * prerendered.
 */
export default function CustomCoursePage() {
  const [state, setState] = useState({ status: "loading", course: null });

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");
    const course = id ? getCustomCourse(id) : null;
    setState({ status: course ? "found" : "missing", course });
  }, []);

  return (
    <Section className="pt-12 md:pt-16">
      {state.status === "loading" && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading…</p>
      )}

      {state.status === "missing" && (
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Project not found
          </h1>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            We couldn&apos;t find this custom project in this browser. Custom
            projects are saved locally, so they only show up on the device that
            created them.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Back to courses
          </Link>
        </div>
      )}

      {state.status === "found" && <CourseView course={state.course} />}
    </Section>
  );
}
