"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { disciplines, buildCustomCourse } from "@/data/courseTemplates";
import {
  PROGRESS_KEY,
  countSteps,
  deleteCustomCourse,
  readCustomCourses,
  readJSON,
  readStreak,
  saveCustomCourse,
  todayKey,
} from "@/lib/learning";

const difficultyStyles = {
  Beginner:
    "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",
  Advanced:
    "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
};

function newId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `c-${Date.now()}`;
}

export default function CoursesHub({ guided }) {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [progress, setProgress] = useState({});
  const [streak, setStreak] = useState({ count: 0, lastActive: null });
  const [custom, setCustom] = useState([]);
  const [builderOpen, setBuilderOpen] = useState(false);

  useEffect(() => {
    setProgress(readJSON(PROGRESS_KEY, {}));
    setStreak(readStreak());
    setCustom(readCustomCourses());
    setHydrated(true);
  }, []);

  const streakActiveToday = hydrated && streak.lastActive === todayKey();

  const stats = useMemo(() => {
    const allCourses = [...guided, ...custom];
    let started = 0;
    let finished = 0;
    let steps = 0;
    for (const course of allCourses) {
      const done = Object.keys(progress[course.id] ?? {}).length;
      if (done > 0) started += 1;
      if (done > 0 && done === countSteps(course)) finished += 1;
      steps += done;
    }
    return { started, finished, steps };
  }, [guided, custom, progress]);

  function handleCreate(spec) {
    const course = buildCustomCourse({ id: newId(), ...spec });
    saveCustomCourse(course);
    router.push(`/courses/custom?id=${course.id}`);
  }

  function handleDelete(id) {
    deleteCustomCourse(id);
    setCustom(readCustomCourses());
  }

  return (
    <div>
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-900/50 dark:bg-orange-950/30">
          <div className="flex items-center gap-2">
            <FlameIcon active={streakActiveToday} />
            <span className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {hydrated ? streak.count : 0}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            day streak
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {streakActiveToday
              ? "You've built today. Keep it rolling."
              : "Finish a step today to keep your streak."}
          </p>
        </div>
        <StatCard label="Courses started" value={hydrated ? stats.started : 0} />
        <StatCard label="Courses finished" value={hydrated ? stats.finished : 0} />
        <StatCard label="Steps completed" value={hydrated ? stats.steps : 0} />
      </div>

      {/* Guided courses */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Guided courses
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
          Full builds we walk you through end to end — design, electronics, and
          code — over about a week each. Pick one and start today.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guided.map((course) => {
            const total = countSteps(course);
            const done = Object.keys(progress[course.id] ?? {}).length;
            const pct = total ? Math.round((done / total) * 100) : 0;
            const started = hydrated && done > 0;
            return (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-blue-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-600"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {course.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${difficultyStyles[course.difficulty]}`}
                  >
                    {course.difficulty}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {course.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {course.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <span>
                    <strong className="font-semibold text-zinc-700 dark:text-zinc-300">
                      {course.durationDays}
                    </strong>{" "}
                    days
                  </span>
                  <span>
                    <strong className="font-semibold text-zinc-700 dark:text-zinc-300">
                      {total}
                    </strong>{" "}
                    steps
                  </span>
                  <span>
                    <strong className="font-semibold text-zinc-700 dark:text-zinc-300">
                      {course.disciplines.length}
                    </strong>{" "}
                    disciplines
                  </span>
                </div>
                {started ? (
                  <div className="mt-4">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="mt-2 inline-block text-sm font-semibold text-blue-600 group-hover:text-blue-500 dark:text-blue-400">
                      {pct === 100 ? "Review build →" : "Continue →"}
                    </span>
                  </div>
                ) : (
                  <span className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:text-blue-500 dark:text-blue-400">
                    Start course →
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Custom projects */}
      <div className="mt-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Your projects
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
              Building something of your own? Create a custom project and we&apos;ll
              generate a guided plan for exactly the work it involves — CAD, code,
              PCB design, and more.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setBuilderOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            {builderOpen ? "Close" : "+ New custom project"}
          </button>
        </div>

        {builderOpen && (
          <div className="mt-6">
            <CustomProjectBuilder
              onCreate={handleCreate}
              onCancel={() => setBuilderOpen(false)}
            />
          </div>
        )}

        {hydrated && custom.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {custom.map((course) => {
              const total = countSteps(course);
              const done = Object.keys(progress[course.id] ?? {}).length;
              const pct = total ? Math.round((done / total) * 100) : 0;
              return (
                <div
                  key={course.id}
                  className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                      {course.title}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${difficultyStyles[course.difficulty]}`}
                    >
                      {course.difficulty}
                    </span>
                  </div>
                  {course.summary && (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {course.summary}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {course.disciplines.map((d) => (
                      <span
                        key={d}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={`/courses/custom?id=${course.id}`}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
                    >
                      {done > 0 ? "Continue →" : "Start →"}
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(course.id)}
                      className="text-xs text-zinc-400 hover:text-red-600 dark:hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          hydrated &&
          !builderOpen && (
            <p className="mt-6 rounded-xl border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
              No custom projects yet. Hit{" "}
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                + New custom project
              </span>{" "}
              to plan your own build.
            </p>
          )
        )}
      </div>
    </div>
  );
}

function CustomProjectBuilder({ onCreate, onCancel }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [summary, setSummary] = useState("");
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");

  function toggleDiscipline(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  }

  function submit(event) {
    event.preventDefault();
    if (!title.trim()) {
      setError("Give your project a name.");
      return;
    }
    if (selected.length === 0) {
      setError("Pick at least one thing your project involves.");
      return;
    }
    setError("");
    onCreate({
      title: title.trim(),
      difficulty,
      summary: summary.trim(),
      disciplineIds: selected,
    });
  }

  const inputClasses =
    "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-2 focus:outline-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500";

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8"
    >
      <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
        Plan a custom project
      </h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
        Tell us what you&apos;re building and what it involves. We&apos;ll generate
        a day-by-day plan that walks you through the engineering process.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="cp-title" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Project name
          </label>
          <input
            id="cp-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Plant-watering robot"
            className={`mt-1.5 ${inputClasses}`}
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Difficulty
          </span>
          <div className="mt-1.5 inline-flex rounded-md border border-zinc-300 p-0.5 dark:border-zinc-700">
            {["Beginner", "Advanced"].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setDifficulty(level)}
                className={`rounded px-4 py-1.5 text-sm font-medium transition-colors ${
                  difficulty === level
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cp-summary" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          What does it do? (optional)
        </label>
        <textarea
          id="cp-summary"
          rows={2}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="One or two sentences on what you're building and why."
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      <div className="mt-6">
        <span className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          What does your project involve?
        </span>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          Check everything it needs. We&apos;ll add a guided phase for each, plus
          planning and testing days.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {disciplines.map((d) => {
            const checked = selected.includes(d.id);
            return (
              <label
                key={d.id}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                  checked
                    ? "border-blue-400 bg-blue-50 dark:border-blue-600 dark:bg-blue-950/30"
                    : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleDiscipline(d.id)}
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-600"
                />
                <span>
                  <span className="block text-sm font-semibold text-zinc-950 dark:text-white">
                    {d.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {d.blurb}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Create project & start
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <span className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
        {value}
      </span>
      <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
        {label}
      </p>
    </div>
  );
}

function FlameIcon({ active }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-7 w-7 ${
        active ? "text-orange-500" : "text-zinc-300 dark:text-zinc-600"
      }`}
      fill="currentColor"
    >
      <path d="M12 2c0 3-3 4-3 7 0 1.5 1 2.5 1 2.5s-2-.5-2.5-2.5C6 12 5 13.5 5 15.5 5 19 8 22 12 22s7-3 7-6.5c0-4-3-6-3-9 0-1.2.5-2.5.5-2.5S15 5 14 6c-.5-2-2-4-2-4z" />
    </svg>
  );
}
