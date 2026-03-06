import { useEffect } from "react";

export default function TermsOfService() {
  const lastUpdated = "March 5, 2026";

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "use", title: "2. Use of the Website" },
    { id: "ip", title: "3. Intellectual Property" },
    { id: "availability", title: "4. Website Availability" },
    { id: "disclaimer", title: "5. Disclaimer" },
    { id: "liability", title: "6. Limitation of Liability" },
    { id: "law", title: "7. Governing Law" },
    { id: "changes", title: "8. Changes to the Terms" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-black py-18 scroll-pt-7 min-h-screen">
      <div className="max-w-11/12 lg:max-w-8xl gap-5 mx-auto">
        {/* Header Section */}
        <div className="pt-20 pb-16 border-b border-gray-100/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
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

            {/* Terms Content Body */}
            <main className="w-full lg:w-3/4 space-y-12 pb-24">
              <section id="acceptance" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 leading-relaxed text-gray-300">
                  <p>
                    By accessing and using{" "}
                    <a
                      href="https://www.intelliseven.com.ph/"
                      className="text-[#D32F2F] hover:underline"
                    >
                      https://www.intelliseven.com.ph/
                    </a>
                    , you agree to comply with these Terms of Service.
                  </p>
                  <p>
                    If you do not agree, please discontinue use of the website.
                  </p>
                </div>
              </section>

              <section id="use" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  2. Use of the Website
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    You agree to use the website only for lawful purposes. You
                    must not:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Violate applicable Philippine laws</li>
                    <li>Attempt unauthorized access to website systems</li>
                    <li>Interfere with website functionality</li>
                    <li>Upload malicious software or harmful code</li>
                  </ul>
                </div>
              </section>

              <section id="ip" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  3. Intellectual Property
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    All website content including text, graphics, logos,
                    software, and design are owned by
                    <span className="text-white font-semibold">
                      {" "}
                      Intelliseven Technology Solutions, Inc.
                    </span>{" "}
                    and protected under Philippine intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, or modify website content
                    without written permission.
                  </p>
                </div>
              </section>

              <section id="availability" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  4. Website Availability
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We strive to ensure continuous availability of the website
                    but do not guarantee uninterrupted service.
                  </p>
                  <p>
                    We reserve the right to modify or discontinue services at
                    any time.
                  </p>
                </div>
              </section>

              <section id="disclaimer" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  5. Disclaimer
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    The website and its contents are provided{" "}
                    <span className="italic">“as is”</span> without warranties
                    of any kind, express or implied.
                  </p>
                  <p>
                    We do not guarantee that the information provided is always
                    accurate, complete, or up-to-date.
                  </p>
                </div>
              </section>

              <section id="liability" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  6. Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    To the fullest extent permitted by law, Intelliseven shall
                    not be liable for damages resulting from:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Website interruptions</li>
                    <li>Errors or inaccuracies in content</li>
                    <li>Unauthorized access to data</li>
                  </ul>
                </div>
              </section>

              <section id="law" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  7. Governing Law
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    These Terms shall be governed by and interpreted in
                    accordance with the laws of the
                    <span className="text-white font-semibold">
                      {" "}
                      Republic of the Philippines
                    </span>
                    .
                  </p>
                  <p>
                    Any disputes shall be resolved in the appropriate courts
                    within the Philippines.
                  </p>
                </div>
              </section>

              <section id="changes" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  8. Changes to the Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to update these Terms at any time.
                  Continued use of the website constitutes acceptance of the
                  revised Terms.
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
