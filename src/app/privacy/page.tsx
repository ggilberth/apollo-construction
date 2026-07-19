import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { businessDetails } from "@/config/business";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy notice",
  description:
    "How Apollo Construction & Groundworks Ltd collects, uses and protects personal information submitted through this website.",
  path: "/privacy",
});

const sectionClass =
  "rounded-xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8";
const headingClass = "text-xl font-black text-slate-950";
const copyClass = "mt-3 leading-7 text-slate-700";
const listClass = "mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-700";

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionTitle
          as="h1"
          description="This notice explains how we handle personal information when you use this website or contact us about a project."
          eyebrow="Your information"
          title="Privacy notice"
        />

        <p className="mb-8 text-sm font-semibold text-slate-600">
          Last updated: 19 July 2026
        </p>

        <div className="space-y-6">
          <section className={sectionClass}>
            <h2 className={headingClass}>Who is responsible for your data?</h2>
            <p className={copyClass}>
              {businessDetails.name} is the data controller for personal
              information collected through this website and through our
              communications with you.
            </p>
            <p className={copyClass}>
              For privacy questions or requests, email{" "}
              <a
                className="font-bold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                href={`mailto:${businessDetails.email}`}
              >
                {businessDetails.email}
              </a>{" "}
              or call{" "}
              <a
                className="font-bold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                href={`tel:${businessDetails.phone.href}`}
              >
                {businessDetails.phone.display}
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Information we collect</h2>
            <ul className={listClass}>
              <li>
                Information you provide in the enquiry form, including your
                name, email address, optional phone number and project details.
              </li>
              <li>
                Information contained in later emails, calls, quotations and
                other communications with you.
              </li>
              <li>
                Limited technical information processed by our hosting and
                form providers, such as IP address, browser type, access time
                and referring page, where needed to deliver and secure their
                services.
              </li>
            </ul>
            <p className={copyClass}>
              Please do not include sensitive personal information in the
              project-details field.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Why we use your information</h2>
            <ul className={listClass}>
              <li>
                To respond to your enquiry, understand the proposed work and
                prepare or discuss a quotation. We process this information to
                take steps at your request before entering into a contract.
              </li>
              <li>
                To manage our communications with prospective and existing
                customers and to protect the website and enquiry service from
                misuse. We rely on our legitimate interests in operating and
                securing the business, provided those interests do not
                override your rights.
              </li>
              <li>
                To keep records required for contractual, accounting or legal
                purposes if your enquiry leads to work. We process those
                records where necessary to perform a contract or comply with a
                legal obligation.
              </li>
            </ul>
            <p className={copyClass}>
              We do not use enquiry details for unrelated marketing without an
              appropriate lawful basis.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Who processes or receives the data?</h2>
            <p className={copyClass}>
              We only share personal information where needed to operate the
              website, respond to your enquiry, deliver services or meet legal
              requirements. The principal website providers are:
            </p>
            <ul className={listClass}>
              <li>
                <a
                  className="font-bold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                  href="https://formspree.io/legal/privacy-policy/"
                >
                  Formspree
                </a>
                , which processes enquiry-form submissions and delivers them to
                us.
              </li>
              <li>
                <a
                  className="font-bold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                  href="https://vercel.com/legal/privacy-notice"
                >
                  Vercel
                </a>
                , which hosts and delivers the website.
              </li>
            </ul>
            <p className={copyClass}>
              We may also disclose information to professional advisers,
              contractors or public authorities where this is necessary and
              lawful. We do not sell your personal information.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>International processing</h2>
            <p className={copyClass}>
              Formspree and Vercel may process information in the United States
              or other countries outside the UK. Where personal information is
              transferred internationally, we rely on contractual or other
              lawful safeguards made available by those providers and take
              those arrangements into account when using their services. You
              can follow the provider links above for further information.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>How long we keep information</h2>
            <p className={copyClass}>
              Enquiry information is kept only for as long as reasonably
              necessary to respond, follow up and manage the proposed work. If
              an enquiry leads to a quotation, contract or completed project,
              relevant records may be retained for longer where needed for
              contractual, accounting, insurance or legal purposes. We review
              information and delete or anonymise it when it is no longer
              required.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Your data-protection rights</h2>
            <p className={copyClass}>
              Depending on the circumstances, you may have rights to request
              access to your personal information, correct it, ask for it to be
              erased, restrict its use, receive a portable copy or object to
              particular processing. Some rights are subject to legal
              conditions and exemptions.
            </p>
            <div className="mt-5 rounded-lg border-l-4 border-accent-gold bg-amber-50 p-4 text-slate-800">
              <p className="font-bold">Your right to object</p>
              <p className="mt-1 leading-6">
                You can object to processing based on our legitimate interests.
                Tell us why you object and we will consider your request.
              </p>
            </div>
            <p className={copyClass}>
              Contact us using the details above to exercise a right. We may
              need to verify your identity before acting on a request.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Complaints</h2>
            <p className={copyClass}>
              Please contact us first if you have a privacy concern so we can
              try to resolve it. You also have the right to complain to the{" "}
              <a
                className="font-bold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                href="https://ico.org.uk/make-a-complaint/data-protection-complaints/"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>
              , the UK data-protection regulator.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Cookies and analytics</h2>
            <p className={copyClass}>
              We do not currently use analytics or advertising cookies on this
              website. Our hosting and form providers may process limited
              technical data required to deliver, protect and troubleshoot
              their services. If our use of analytics or cookies changes, we
              will update this notice and introduce any controls required at
              that time.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Changes to this notice</h2>
            <p className={copyClass}>
              We may update this notice when our services or data-handling
              practices change. The latest version will always be published on
              this page with its revision date.
            </p>
            <p className={copyClass}>
              <Link
                className="font-bold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-900"
                href="/contact"
              >
                Return to the contact page
              </Link>
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
