import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cader Rahmathulla",
  description:
    "Learn how Cader Rahmathulla and SITC Group collect, use, and protect your information across this site and associated services.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: `We collect the details you share through the contact form, including your name, email, and message content. We may also gather basic analytics such as page views, device type, and rough geographic information through privacy-friendly analytics tools to understand how the site is used.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `Contact form submissions are forwarded directly to the SITC Group head office inbox (info@sitc.lk) so we can respond to partnership inquiries, speaking requests, or other business questions. Analytics data is reviewed in aggregate to improve site performance, accessibility, and content relevance.`,
  },
  {
    title: "3. Data Sharing & Storage",
    body: `We do not sell or rent your personal information. Messages are stored within our secure email infrastructure and accessible only to authorized personnel supporting Cader Rahmathulla. If we collaborate with technology or advisory partners, they access information strictly under confidentiality agreements and only when necessary.`,
  },
  {
    title: "4. Your Rights",
    body: `You can request a copy of the information we hold about you, ask us to correct inaccurate details, or request deletion of your contact record unless we are required to keep it for legal compliance. To make a request, email info@sitc.lk and we will respond promptly.`,
  },
  {
    title: "5. Policy Updates",
    body: `We may revise this policy to reflect new services, legal requirements, or best practices. The “Last updated” date below indicates the latest revision. Significant changes will be highlighted on this page.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-[#0f172a]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-0 py-16 sm:py-20">
        <header className="mb-10 text-left">
          <p className="font-poppins text-sm uppercase tracking-wide text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <h1 className="font-playball text-4xl sm:text-5xl text-[#03045E] mb-4">
            Privacy Policy
          </h1>
          <p className="font-poppins text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparency matters. This statement explains how information is
            collected, stored, and used when you explore Cader Rahmathulla’s
            site or reach out through the contact form.
          </p>
        </header>

        <section className="space-y-8 font-poppins">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#03045E]">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-[#03045E] px-6 py-8 text-white font-poppins">
          <h2 className="text-2xl font-semibold mb-2">Questions?</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Reach the SITC Group head office. We’re happy to clarify how your
            data is handled or process any requests regarding this policy.
          </p>
          <div className="space-y-1 text-sm sm:text-base">
            <p>SITC Group Head Office</p>
            <a
              href="mailto:info@sitc.lk"
              className="underline-offset-2 hover:underline"
            >
              info@sitc.lk
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
