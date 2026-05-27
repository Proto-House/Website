import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Tell ProtoHouse about the process you'd like to automate. We'll start with a short call and, if it's a fit, a free on-site assessment.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's talk about automating your operations."
        subtitle="Tell us a bit about your process and we'll take it from there. No pressure, and no pricing pitch up front."
      />

      <Section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 md:col-span-5">
            <div>
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
                What to expect
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                First, we'll set up a 30-minute call to understand your operation
                and what you're hoping to automate. If it looks like a fit, we'll
                follow up with a free on-site assessment. That's a closer look at
                your process, so any proposal we make is grounded in reality
                instead of guesswork.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
                Prefer email?
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                You can also reach us directly at{" "}
                <a
                  href="mailto:info@protohouse.org"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  info@protohouse.org
                </a>
                .
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
