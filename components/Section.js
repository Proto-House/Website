export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}
