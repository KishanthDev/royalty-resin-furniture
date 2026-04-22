import { CTASection } from "@/components/home/CTASection";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import contactData from "./contactData.json";
import { quickContact, studioInfo } from "./contactDetails"; 
import { iconMap } from "./iconMap";

export default function ContactPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-section-px text-center max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
            {contactData.hero.kicker}
          </p>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {contactData.hero.titleLine1}
            <br />
            <span className="text-primary">{contactData.hero.titleLine2}</span>
          </h1>

          <div className="mt-6 flex justify-center gap-2 items-center">
            <div className="h-px w-12 bg-secondary-foreground/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-px w-12 bg-secondary-foreground/30" />
          </div>

          <p className="mt-6 text-base md:text-lg text-secondary-foreground/70 leading-relaxed">
            {contactData.hero.description}
          </p>
        </div>
      </section>

      {/* ── 2. QUICK CONTACT BAND ── */}
      <section className="bg-primary/5 border-y border-border/40">
        <div className="container mx-auto px-section-px py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            {quickContact.map(({ id, label, value, href }) => {
              const Icon = iconMap[id];
              return (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {Icon && <Icon className="h-4 w-4 text-primary" />}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/40 mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <Link
                        href={href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </Link>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. FORM + DETAILS ── */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12 xl:gap-20 items-start">
          {/* ── FORM ── */}
          <div className="lg:col-span-3">
            <p className="uppercase tracking-widest text-xs text-foreground/40 mb-3">
              Drop Us a Line
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-2">
              Send Us a Message
            </h2>
            <div className="h-[2px] w-12 bg-primary rounded-full mb-8" />

            <form action="#" method="POST" className="space-y-5">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest text-foreground/50 mb-2"
                  >
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Kishan M."
                    className="block w-full rounded-lg border border-border bg-input px-4 py-3 text-sm placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-foreground/50 mb-2"
                  >
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="block w-full rounded-lg border border-border bg-input px-4 py-3 text-sm placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs uppercase tracking-widest text-foreground/50 mb-2"
                >
                  Phone Number{" "}
                  <span className="text-foreground/30 normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 99999 99999"
                  className="block w-full rounded-lg border border-border bg-input px-4 py-3 text-sm placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs uppercase tracking-widest text-foreground/50 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="block w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground/80 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                >
                  <option value="">Select a topic…</option>
                  {contactData.form.subjects.map((subject) => (
                    <option key={subject.value} value={subject.value}>
                      {subject.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-foreground/50 mb-2"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, dimensions, preferred resin colours, or anything else…"
                  className="block w-full rounded-lg border border-border bg-input px-4 py-3 text-sm placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                Send Message
              </button>

              <p className="text-center text-xs text-foreground/40">
                We typically respond within 1–2 business days.
              </p>
            </form>
          </div>

          {/* ── STUDIO INFO ── */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="uppercase tracking-widest text-xs text-foreground/40 mb-3">
                Find Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-2">
                Our Studio
              </h2>
              <div className="h-[2px] w-12 bg-primary rounded-full mb-8" />
            </div>

            {/* Info cards */}
            {studioInfo.map(({ id, title, lines, href, cta }) => {
              const Icon = iconMap[id];
              return (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border/40 bg-primary/5 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    {Icon && <Icon className="h-4 w-4 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{title}</h3>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        {lines.map((line, i) => {
                          const splitLine = line.split(":");
                          const lineTitle = splitLine[0];
                          const location = splitLine.slice(1).join(":"); // Re-join if there were multiple colons

                          return (
                            <p key={i} className="text-sm text-foreground/80">
                              {splitLine.length > 1 ? (
                                <>
                                  <span className="font-semibold text-foreground">
                                    {lineTitle}:
                                  </span>{" "}
                                  <span className="text-foreground/60">
                                    {location}
                                  </span>
                                </>
                              ) : (
                                <span className="text-foreground/60">
                                  {line}
                                </span>
                              )}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    {href && cta && (
                      <Link
                        href={href}
                        className="inline-block mt-2 text-xs text-primary font-medium hover:underline"
                      >
                        {cta} →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">
                Follow Our Work
              </p>
              <div className="flex gap-3">
                {contactData.socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-xs px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}