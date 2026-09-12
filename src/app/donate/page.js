/*
DanaMojo widget intentionally disabled.

<Script
  src="https://danamojo.org/dm/js/widget.js"
  strategy="afterInteractive"
/>
<Script id="dm-fallback" strategy="afterInteractive">
  {fallbackScript}
</Script>
*/

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShieldCheck } from "lucide-react";

export default function Donate() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-background-800 via-background-900 to-background-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-white blur-xl mix-blend-overlay animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary-300 blur-xl mix-blend-overlay animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container-custom relative z-10 py-20 text-center lg:py-24">
          <h1 className="mb-4 text-4xl font-bold text-white font-heading lg:text-6xl">
            Support Our Mission
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-100 font-paragraph lg:text-xl">
            Scan the code below to donate securely and help us continue work in
            education, women empowerment, and community development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50 py-16 lg:py-20">
        <div className="container-custom max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Donate securely
            </p>
            <h2 className="text-2xl font-bold text-secondary-700 lg:text-3xl">
              Scan with any UPI app
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-secondary-600 lg:text-lg">
              Your contribution goes directly toward grassroots projects that
              create meaningful, measurable impact.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
            <div className="space-y-4">
              {[
                {
                  icon: Heart,
                  title: "Community driven",
                  text: "Support programs built around real local needs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure payment",
                  text: "Use your preferred UPI app with a trusted scan flow.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-secondary-700">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-secondary-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}

              <div className="rounded-3xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold">Why donate here</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-green-100">
                  The QR code below is the payment poster you uploaded. Scan it
                  with Google Pay, PhonePe, Paytm, or any other UPI app.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-green-50">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-green-200" />
                    Fast transfer
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-green-200" />
                    Any UPI app
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-green-200" />
                    Direct support
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[380px] lg:max-w-[420px]">
              <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-[0_24px_80px_rgba(13,31,84,0.18)] ring-1 ring-slate-200/80">
                <div className="relative h-[72vh] min-h-[520px] max-h-[760px] w-full">
                  <Image
                    src="/QrCode.jpeg"
                    alt="Donation QR code for ChangeSpark Foundation"
                    priority
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="rounded-2xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Ready to help us create impact?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-green-100 lg:text-lg">
            Every contribution helps us keep programs running and expand our
            reach across the communities we serve.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="btn-secondary inline-flex min-w-48 items-center justify-center text-base sm:text-lg"
            >
              See Our Impact
            </Link>
            <Link
              href="/contact-us"
              className="btn-outline inline-flex min-w-48 items-center justify-center text-base sm:text-lg"
            >
              <span>Get Involved</span>
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
