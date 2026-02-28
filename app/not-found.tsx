// app/not-found.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-secondary text-secondary-foreground min-h-screen flex items-center justify-center relative overflow-hidden px-6">

      {/* Blur glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-primary/20 rounded-tl-lg hidden md:block" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-primary/20 rounded-br-lg hidden md:block" />

      <div className="relative z-10 text-center max-w-lg mx-auto">

        {/* Wood grain bars */}
        <div className="flex justify-center gap-1.5 mb-6">
          {[12, 20, 28, 20, 12].map((h, i) => (
            <div key={i} className="w-1 rounded-full bg-primary/40" style={{ height: `${h}px` }} />
          ))}
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-6 bg-primary" />
          <p className="uppercase tracking-[0.35em] text-xs text-secondary-foreground/50">
            404 · Not Found
          </p>
          <div className="h-px w-6 bg-primary" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
          This Page Has
          <br />
          <span className="text-primary">Drifted Away</span>
        </h1>

        {/* Divider */}
        <div className="mt-5 flex justify-center gap-2 items-center">
          <div className="h-px w-10 bg-secondary-foreground/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <div className="h-px w-10 bg-secondary-foreground/20" />
        </div>

        <p className="mt-5 text-sm md:text-base text-secondary-foreground/60 leading-relaxed">
          The page you're looking for no longer exists.
          <br />
          Let's get you back to something beautiful.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-8 font-semibold rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/collections/all"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-secondary-foreground/25 text-secondary-foreground py-3 px-8 font-semibold rounded-lg hover:bg-secondary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm"
          >
            Browse Collections
          </Link>
        </div>

        {/* Back button */}
        <button
          onClick={() => history.back()}
          className="mt-6 inline-flex items-center gap-1.5 text-xs text-secondary-foreground/35 hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-3 w-3" />
          Go back to previous page
        </button>

      </div>
    </main>
  );
}
