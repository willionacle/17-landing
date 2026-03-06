import { useEffect } from "react";

export default function CookiePolicy() {
  const lastUpdated = "March 5, 2026";

  const sections = [
    { id: "what", title: "1. What Are Cookies" },
    { id: "how", title: "2. How We Use Cookies" },
    { id: "types", title: "3. Types of Cookies Used" },
    { id: "thirdparty", title: "4. Third-Party Cookies" },
    { id: "managing", title: "5. Managing Cookies" },
    { id: "changes", title: "6. Changes to this Policy" },
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
              Cookie Policy
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

            {/* Cookie Policy Content Body */}
            <main className="w-full lg:w-3/4 space-y-12 pb-24">
              <section id="what" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  1. What Are Cookies
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files stored on your device when you
                  visit a website. They help websites function properly and
                  improve user experience.
                </p>
              </section>

              <section id="how" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  2. How We Use Cookies
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use cookies to:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Ensure website functionality",
                      "Analyze website traffic",
                      "Improve user experience",
                      "Remember user preferences",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 bg-zinc-900/40 p-4 rounded-xl border border-white/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="types" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  3. Types of Cookies Used
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#D32F2F] mb-2">
                      Essential Cookies
                    </h3>
                    <p className="text-gray-300">
                      Necessary for the website to function properly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#D32F2F] mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-300">
                      Used to collect anonymous usage statistics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#D32F2F] mb-2">
                      Functional Cookies
                    </h3>
                    <p className="text-gray-300">
                      Remember user settings and preferences.
                    </p>
                  </div>
                </div>
              </section>

              <section id="thirdparty" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  4. Third-Party Cookies
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Some cookies may be placed by third-party services such as
                  analytics providers to help us understand website usage.
                </p>
              </section>

              <section id="managing" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  5. Managing Cookies
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  You may control or delete cookies through your browser
                  settings. However, disabling cookies may affect website
                  functionality.
                </p>
              </section>

              <section id="changes" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6">
                  6. Changes to this Policy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Cookie Policy from time to time. Updates
                  will be posted on this page.
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
