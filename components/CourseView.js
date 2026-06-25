"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  PROGRESS_KEY,
  bumpStreak,
  countSteps,
  readJSON,
  readStreak,
  stepKey,
  todayKey,
  writeJSON,
} from "@/lib/learning";

const difficultyStyles = {
  Beginner:
    "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",
  Advanced:
    "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300",
};

/**
 * Renders a single course (guided or custom) as a day-by-day, step-by-step
 * build. Step completion persists per course in localStorage, and any activity
 * advances the global daily streak.
 */
export default function CourseView({ course }) {
  const [hydrated, setHydrated] = useState(false);
  // done: Set-like object of completed step keys for THIS course.
  const [done, setDone] = useState({});
  const [streak, setStreak] = useState({ count: 0, lastActive: null });
  const [openDay, setOpenDay] = useState(0);

  const totalSteps = useMemo(() => countSteps(course), [course]);

  useEffect(() => {
    const all = readJSON(PROGRESS_KEY, {});
    setDone(all[course.id] ?? {});
    setStreak(readStreak());
    setHydrated(true);
  }, [course.id]);

  function toggle(dayIndex, stepIndex) {
    const key = stepKey(dayIndex, stepIndex);
    setDone((prev) => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = true;
      const all = readJSON(PROGRESS_KEY, {});
      all[course.id] = next;
      writeJSON(PROGRESS_KEY, all);
      return next;
    });
    setStreak(bumpStreak());
  }

  const doneCount = Object.keys(done).length;
  const pct = totalSteps ? Math.round((doneCount / totalSteps) * 100) : 0;
  const finished = hydrated && doneCount === totalSteps;
  const streakActiveToday = hydrated && streak.lastActive === todayKey();

  return (
    <div>
      <Link
        href="/courses"
        className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
      >
        <span aria-hidden>←</span> All courses
      </Link>

      {/* Header */}
      <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${difficultyStyles[course.difficulty]}`}
              >
                {course.difficulty}
              </span>
              {course.custom && (
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                  Custom
                </span>
              )}
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {course.durationDays}-day build
              </span>
            </div>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-3xl">
              {course.title}
            </h1>
            <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              {course.tagline}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {course.summary}
            </p>
          </div>

          {/* Streak badge */}
          <div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-center dark:border-orange-900/50 dark:bg-orange-950/30">
            <div className="flex items-center justify-center gap-1.5">
              <FlameIcon active={streakActiveToday} />
              <span className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                {hydrated ? streak.count : 0}
              </span>
            </div>
            <p className="mt-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              day streak
            </p>
          </div>
        </div>

        {/* Disciplines + materials */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {course.disciplines.map((d) => (
            <span
              key={d}
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300"
            >
              {d}
            </span>
          ))}
        </div>
        {course.materials?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {course.materials.map((m) => (
              <span
                key={m}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <span>
              {hydrated ? doneCount : 0} / {totalSteps} steps
            </span>
            <span>{hydrated ? pct : 0}%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <div
              className="h-full rounded-full bg-blue-600 transition-all dark:bg-blue-500"
              style={{ width: `${hydrated ? pct : 0}%` }}
            />
          </div>
        </div>

        {finished && (
          <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300">
            🎉 Course complete. You took the {course.title} from idea to working
            build. Time to start your next one.
          </div>
        )}
      </div>

      {/* Days */}
      <div className="mt-6 space-y-4">
        {course.days.map((day, dayIndex) => {
          const dayTotal = day.steps.length;
          const dayDone = day.steps.filter(
            (_, stepIndex) => done[stepKey(dayIndex, stepIndex)]
          ).length;
          const dayComplete = hydrated && dayDone === dayTotal;
          const isOpen = openDay === dayIndex;

          return (
            <div
              key={day.title}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            >
              <button
                type="button"
                onClick={() => setOpenDay(isOpen ? -1 : dayIndex)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      dayComplete
                        ? "bg-green-600 text-white"
                        : "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
                    }`}
                  >
                    {dayComplete ? "✓" : dayIndex + 1}
                  </span>
                  <div>
                    <h2 className="font-semibold text-zinc-950 dark:text-white">
                      {day.title}
                    </h2>
                    <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                      {day.goal}
                    </p>
                  </div>
                </div>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                    {hydrated ? dayDone : 0}/{dayTotal}
                  </span>
                  <span
                    aria-hidden
                    className={`text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </span>
              </button>

              {isOpen && (
                <ol className="space-y-3 px-6 pb-6">
                  {day.steps.map((step, stepIndex) => {
                    const key = stepKey(dayIndex, stepIndex);
                    const isDone = Boolean(done[key]);
                    return (
                      <li
                        key={step.title}
                        className={`rounded-xl border p-4 transition-colors ${
                          isDone
                            ? "border-green-200 bg-green-50/60 dark:border-green-900/50 dark:bg-green-950/20"
                            : "border-zinc-200 dark:border-zinc-800"
                        }`}
                      >
                        <label className="flex cursor-pointer items-start gap-3">
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => toggle(dayIndex, stepIndex)}
                            className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-zinc-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-600"
                          />
                          <div>
                            <h3
                              className={`font-semibold ${
                                isDone
                                  ? "text-zinc-500 line-through dark:text-zinc-500"
                                  : "text-zinc-950 dark:text-white"
                              }`}
                            >
                              {step.title}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                              {step.body}
                            </p>
                          </div>
                        </label>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FlameIcon({ active }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-6 w-6 ${
        active ? "text-orange-500" : "text-zinc-300 dark:text-zinc-600"
      }`}
      fill="currentColor"
    >
      <path d="M12 2c0 3-3 4-3 7 0 1.5 1 2.5 1 2.5s-2-.5-2.5-2.5C6 12 5 13.5 5 15.5 5 19 8 22 12 22s7-3 7-6.5c0-4-3-6-3-9 0-1.2.5-2.5.5-2.5S15 5 14 6c-.5-2-2-4-2-4z" />
    </svg>
  );
}
