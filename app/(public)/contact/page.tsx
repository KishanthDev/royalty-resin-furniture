import { CTASection } from "@/components/home/CTASection";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";


export default function ContactPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-16 md:py-24 border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-secondary-foreground/70">
            Get in Touch
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-base md:text-lg text-secondary-foreground/80">
            We&apos;re here to answer your questions, discuss custom projects, or
            help with your order. Reach out and let&apos;s create something
            beautiful together.
          </p>
        </div>
      </section>

      {/* 2. Main Content: Form & Details */}
      <section className="py-section-py px-section-px bg-background">
        <div className="container mx-auto grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Send Us a Message
            </h2>
            {/* Note: This is a static form. For production, you'll need to handle state and submission. */}
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/80"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-border bg-input p-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/80"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-border bg-input p-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/80"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="block w-full rounded-md border-border bg-input p-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 bg-primary/5 p-8 lg:p-12 rounded-lg">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Our Studio</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Visit Our Showroom</h3>
                  <p className="text-foreground/80">
                    123 Artisan Lane, Woodwork City, 12345, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <Link
                    href="mailto:contact@royaltyresin.com"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    contact@royaltyresin.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <CTASection />
    </>
  );
}
