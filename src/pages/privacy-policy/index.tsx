import { useEffect } from "react";

export default function PrivacyPolicy() {
  const lastUpdated = "March 5, 2026";

  const sections = [
    { id: "intro", title: "1. Introduction" },
    { id: "collect", title: "2. Personal Information We Collect" },
    { id: "purpose", title: "3. Purpose of Data Collection" },
    { id: "legal", title: "4. Legal Basis for Processing" },
    { id: "sharing", title: "5. Data Sharing" },
    { id: "retention", title: "6. Data Retention" },
    { id: "rights", title: "7. Your Rights as a Data Subject" },
    { id: "security", title: "8. Data Security" },
    { id: "links", title: "9. Third-Party Links" },
    { id: "updates", title: "10. Updates to this Policy" },
    { id: "contact", title: "11. Contact Information" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-black py-18 scroll-pt-7 min-h-screen">
      <div className="max-w-11/12 lg:max-w-8xl gap-5 mx-auto">
        <div className="pt-20 pb-16 border-b border-gray-100/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 font-medium">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 text-white">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block w-1/4 sticky top-32 h-fit">
              <nav className="space-y-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-400 hover:text-[#D32F2F] transition-colors font-medium"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Policy Content Body */}
            <main className="w-full lg:w-3/4 space-y-12 pb-24">
              <section id="intro" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  1. Introduction
                </h2>
                <div className="space-y-4 leading-relaxed text-gray-300">
                  <p>
                    Intelliseven Technology Solutions, Inc. (“Intelliseven”,
                    “we”, “us”, or “our”) respects your privacy and is committed
                    to protecting your personal information in compliance with
                    the Data Privacy Act of 2012 (RA 10173) and its Implementing
                    Rules and Regulations.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, store, and
                    protect personal information when you visit{" "}
                    <a
                      href="https://www.intelliseven.com.ph/"
                      className="text-[#D32F2F] hover:underline"
                    >
                      https://www.intelliseven.com.ph/
                    </a>
                    .
                  </p>
                  <p>
                    By accessing this website, you agree to the terms of this
                    Privacy Policy.
                  </p>
                </div>
              </section>

              <section id="collect" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  2. Personal Information We Collect
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    We may collect the following personal data when you interact
                    with our website:
                  </p>
                  <div>
                    <h3 className="font-bold text-white mb-3">
                      Information You Provide
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Company name</li>
                      <li>Messages submitted through contact forms</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-3">
                      Automatically Collected Information
                    </h3>
                    <p className="mb-3">
                      When you access our website, we may automatically collect:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Website pages visited</li>
                      <li>Time and date of visit</li>
                    </ul>
                    <p className="mt-4">
                      This information helps us improve our services and website
                      functionality.
                    </p>
                  </div>
                </div>
              </section>

              <section id="purpose" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  3. Purpose of Data Collection
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We collect and process personal information for the
                    following purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Responding to inquiries and service requests</li>
                    <li>
                      Providing information about our products and services
                    </li>
                    <li>Improving our website and customer experience</li>
                    <li>Ensuring website security</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                  <p>
                    We only process personal data for legitimate and lawful
                    purposes.
                  </p>
                </div>
              </section>

              <section id="legal" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  4. Legal Basis for Processing
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Your personal data is processed based on:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Your consent</li>
                    <li>Legitimate business interests</li>
                    <li>
                      Compliance with legal obligations under Philippine law
                    </li>
                  </ul>
                </div>
              </section>

              <section id="sharing" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  5. Data Sharing
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>We do not sell personal data.</p>
                  <p>Your information may be shared only with:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Authorized employees or representatives</li>
                    <li>
                      Service providers supporting our website or IT
                      infrastructure
                    </li>
                    <li>Government authorities when required by law</li>
                  </ul>
                  <p>
                    All partners handling personal data are required to maintain
                    confidentiality and security.
                  </p>
                </div>
              </section>

              <section id="retention" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  6. Data Retention
                </h2>
                <p className="text-gray-300">
                  Personal information is retained only for as long as necessary
                  to fulfill the purpose for which it was collected, unless a
                  longer retention period is required by law.
                </p>
              </section>

              <section id="rights" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  7. Your Rights as a Data Subject
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Under the{" "}
                    <span className="font-bold">
                      Data Privacy Act of 2012 (RA 10173)
                    </span>
                    , you have the following rights:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Right to be informed",
                      "Right to access your personal data",
                      "Right to correct inaccurate data",
                      "Right to object to processing",
                      "Right to erasure or blocking",
                      "Right to data portability",
                      "Right to file a complaint with the National Privacy Commission",
                    ].map((right) => (
                      <div
                        key={right}
                        className="bg-zinc-900/40 p-4 rounded-lg border-l-4 border-[#D32F2F] text-sm font-semibold text-white"
                      >
                        {right}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="security" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  8. Data Security
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We implement reasonable organizational, physical, and
                    technical security measures to protect personal data from
                    unauthorized access, disclosure, or misuse.
                  </p>
                  <p>However, no online transmission is completely secure.</p>
                </div>
              </section>

              <section id="links" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  9. Third-Party Links
                </h2>
                <p className="text-gray-300">
                  Our website may contain links to external websites. We are not
                  responsible for their privacy practices or content.
                </p>
              </section>

              <section id="updates" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  10. Updates to this Policy
                </h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. Updates
                  will be posted on this page with a revised “Last Updated”
                  date.
                </p>
              </section>

              <section
                id="contact"
                className="bg-zinc-900/40 p-8 md:p-12 rounded-3xl scroll-mt-32 border border-white/5"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  11. Contact Information
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>For privacy-related inquiries, you may contact:</p>
                  <div className="space-y-1">
                    <p className="font-bold text-white text-lg">
                      Intelliseven Technology Solutions, Inc.
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:i7@intelliseven.com.ph"
                        className="text-[#D32F2F] hover:underline"
                      >
                        i7@intelliseven.com.ph
                      </a>
                    </p>
                    <p>Mobile Number: 0917 309 2317</p>
                    <p>
                      Website:{" "}
                      <a
                        href="https://www.intelliseven.com.ph/"
                        className="text-[#D32F2F] hover:underline"
                      >
                        https://www.intelliseven.com.ph/
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
