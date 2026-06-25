// Client-side persistence for the Courses experience: per-course step progress,
// a global daily streak, and user-created custom courses. Everything lives in
// localStorage so the site stays a static export with no backend. To sync
// across devices later, swap these helpers for calls to a route handler.

export const PROGRESS_KEY = "ph_course_progress";
export const STREAK_KEY = "ph_course_streak";
export const CUSTOM_KEY = "ph_custom_courses";

// Local YYYY-MM-DD so streak days line up with the user's calendar, not UTC.
export function todayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

export function dayDiff(a, b) {
  const da = new Date(`${a}T00:00:00`);
  const db = new Date(`${b}T00:00:00`);
  return Math.round((db - da) / 86400000);
}

export function readJSON(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJSON(key, value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or blocked — progress just won't persist */
  }
}

// Stable key for a step within a course, so progress survives content edits as
// long as day/step indices hold.
export function stepKey(dayIndex, stepIndex) {
  return `d${dayIndex}-s${stepIndex}`;
}

export function countSteps(course) {
  return course.days.reduce((sum, day) => sum + day.steps.length, 0);
}

// --- Streak -----------------------------------------------------------------

export function readStreak() {
  return readJSON(STREAK_KEY, { count: 0, lastActive: null });
}

// Advance the streak for "activity today". Consecutive days build it up; a
// missed day resets to 1. Same-day repeats are no-ops.
export function bumpStreak() {
  const prev = readStreak();
  const today = todayKey();
  if (prev.lastActive === today) return prev;
  const diff = prev.lastActive ? dayDiff(prev.lastActive, today) : null;
  const count = diff === 1 ? prev.count + 1 : 1;
  const next = { count, lastActive: today };
  writeJSON(STREAK_KEY, next);
  return next;
}

// --- Custom courses ---------------------------------------------------------

export function readCustomCourses() {
  return readJSON(CUSTOM_KEY, []);
}

export function getCustomCourse(id) {
  return readCustomCourses().find((c) => c.id === id) ?? null;
}

export function saveCustomCourse(course) {
  const all = readCustomCourses();
  const next = [course, ...all.filter((c) => c.id !== course.id)];
  writeJSON(CUSTOM_KEY, next);
  return course;
}

export function deleteCustomCourse(id) {
  writeJSON(
    CUSTOM_KEY,
    readCustomCourses().filter((c) => c.id !== id)
  );
}
