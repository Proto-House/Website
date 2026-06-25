"use client";

import { useRef, useState } from "react";
import {
  acceptedPrintTypes,
  printColors,
  printInfills,
  printMaterials,
} from "@/data/store";

const ORDER_EMAIL = "info@protohouse.org";
const MAX_FILES = 10;

const inputClasses =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-2 focus:outline-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500";
const labelClasses =
  "block text-sm font-medium text-zinc-800 dark:text-zinc-200";

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const ACCEPTED_EXTS = acceptedPrintTypes
  .split(",")
  .map((t) => t.trim().toLowerCase());

function isAccepted(file) {
  const name = file.name.toLowerCase();
  return ACCEPTED_EXTS.some((ext) => name.endsWith(ext));
}

/**
 * 3D print-on-demand order form. A customer drops in print files, picks a
 * material, color, infill, and quantity, and submits. Files are validated and
 * summarized client-side; on submit we open a prefilled email to ProtoHouse so
 * the order arrives without any backend.
 *
 * Email can't carry attachments programmatically, so the confirmation tells the
 * customer to attach their files to the drafted message. To accept uploads
 * directly later, POST `files` + `spec` to a route handler (app/api/print).
 */
export default function PrintUploadForm() {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [spec, setSpec] = useState({
    material: printMaterials[1].id, // PETG default
    color: printColors[0],
    infill: printInfills[1].id, // 30%
    quantity: 1,
    notes: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addFiles(fileList) {
    const incoming = Array.from(fileList);
    const accepted = incoming.filter(isAccepted);
    const rejected = incoming.filter((f) => !isAccepted(f));

    setFiles((prev) => {
      const byKey = new Map(prev.map((f) => [`${f.name}-${f.size}`, f]));
      for (const f of accepted) byKey.set(`${f.name}-${f.size}`, f);
      return Array.from(byKey.values()).slice(0, MAX_FILES);
    });

    if (rejected.length) {
      setError(
        `Skipped ${rejected.length} file(s) we can't print. Accepted: STL, 3MF, OBJ, STEP.`
      );
    } else {
      setError("");
    }
  }

  function removeFile(key) {
    setFiles((prev) => prev.filter((f) => `${f.name}-${f.size}` !== key));
  }

  function handleDrop(event) {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files?.length) addFiles(event.dataTransfer.files);
  }

  function updateSpec(field, value) {
    setSpec((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!files.length) {
      setError("Add at least one print file to get a quote.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(spec.email.trim())) {
      setError("Enter a valid email so we can send your quote.");
      return;
    }
    setError("");

    const material = printMaterials.find((m) => m.id === spec.material);
    const infill = printInfills.find((i) => i.id === spec.infill);
    const subject = `3D print order — ${files.length} file(s)`;
    const body = [
      "I'd like a quote for the following 3D print order:",
      "",
      "Files (attached to this email):",
      ...files.map((f) => `  • ${f.name} (${formatSize(f.size)})`),
      "",
      `Material: ${material.label}`,
      `Color: ${spec.color}`,
      `Infill: ${infill.label}`,
      `Quantity (per file): ${spec.quantity}`,
      "",
      "Notes:",
      spec.notes.trim() || "None",
      "",
      `Reply to: ${spec.email.trim()}`,
    ].join("\n");

    window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Drop zone */}
      <div>
        <label className={labelClasses}>Print files</label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
          }}
          className={`mt-1.5 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
            dragging
              ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30"
              : "border-zinc-300 hover:border-blue-400 dark:border-zinc-700 dark:hover:border-blue-600"
          }`}
        >
          <UploadIcon />
          <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Drag & drop your models here, or click to browse
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            STL, 3MF, OBJ, or STEP · up to {MAX_FILES} files
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={acceptedPrintTypes}
            onChange={(e) => addFiles(e.target.files)}
            className="hidden"
          />
        </div>

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f) => {
              const key = `${f.name}-${f.size}`;
              return (
                <li
                  key={key}
                  className="flex items-center justify-between gap-3 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <span className="truncate text-zinc-800 dark:text-zinc-200">
                    {f.name}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
                      {formatSize(f.size)}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(key);
                      }}
                      aria-label={`Remove ${f.name}`}
                      className="text-zinc-400 hover:text-red-600 dark:hover:text-red-400"
                    >
                      ✕
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Spec grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="material" className={labelClasses}>
            Material
          </label>
          <select
            id="material"
            value={spec.material}
            onChange={(e) => updateSpec("material", e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          >
            {printMaterials.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label} — {m.note}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="color" className={labelClasses}>
            Color
          </label>
          <select
            id="color"
            value={spec.color}
            onChange={(e) => updateSpec("color", e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          >
            {printColors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="infill" className={labelClasses}>
            Infill / strength
          </label>
          <select
            id="infill"
            value={spec.infill}
            onChange={(e) => updateSpec("infill", e.target.value)}
            className={`mt-1.5 ${inputClasses}`}
          >
            {printInfills.map((i) => (
              <option key={i.id} value={i.id}>
                {i.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className={labelClasses}>
            Quantity (per file)
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={500}
            value={spec.quantity}
            onChange={(e) =>
              updateSpec(
                "quantity",
                Math.max(1, Math.min(500, Number(e.target.value) || 1))
              )
            }
            className={`mt-1.5 ${inputClasses}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Your email
        </label>
        <input
          id="email"
          type="email"
          value={spec.email}
          onChange={(e) => updateSpec("email", e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="notes" className={labelClasses}>
          Notes (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={spec.notes}
          onChange={(e) => updateSpec("notes", e.target.value)}
          placeholder="Orientation preferences, tolerances, deadlines, where to ship — anything we should know."
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Submit print order
        </button>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          We&apos;ll review your files and email a quote before anything prints.
        </p>
      </div>

      {submitted && (
        <div
          className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300"
          role="status"
        >
          Your order email is drafted. <strong>Attach your print files</strong>{" "}
          ({files.map((f) => f.name).join(", ")}) to that message and send it. If
          it didn&apos;t open, email us at{" "}
          <a
            href={`mailto:${ORDER_EMAIL}`}
            className="font-medium underline"
          >
            {ORDER_EMAIL}
          </a>
          .
        </div>
      )}
    </form>
  );
}

function UploadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-10 w-10 text-blue-600 dark:text-blue-400"
    >
      <path d="M12 16V4M8 8l4-4 4 4" />
      <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}
