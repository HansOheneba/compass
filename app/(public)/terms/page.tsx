export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-14">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow space-y-6">
        <header>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: 2026
          </p>
        </header>

        <section className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <p>
            These Terms of Service govern your use of Compass. By accessing or
            using the platform, you agree to these terms.
          </p>

          <h2 className="font-semibold text-gray-900">Use of the Platform</h2>
          <p>
            Compass provides tools and insights intended to support career
            exploration and decision-making. The platform does not guarantee
            specific outcomes, employment, or results.
          </p>

          <h2 className="font-semibold text-gray-900">User Responsibilities</h2>
          <p>
            You agree to use the platform responsibly and to provide information
            that is accurate to the best of your knowledge. You are responsible
            for how you interpret and apply insights provided by the platform.
          </p>

          <h2 className="font-semibold text-gray-900">Intellectual Property</h2>
          <p>
            All content, features, and functionality on Compass are owned by or
            licensed to us and may not be copied, modified, or redistributed
            without permission.
          </p>

          <h2 className="font-semibold text-gray-900">Service Availability</h2>
          <p>
            We aim to keep Compass available and reliable but do not guarantee
            uninterrupted access. Features may change, evolve, or be
            discontinued at any time.
          </p>

          <h2 className="font-semibold text-gray-900">
            Limitation of Liability
          </h2>
          <p>
            Compass is provided “as is.” We are not liable for decisions,
            actions, or outcomes resulting from the use of the platform.
          </p>

          <h2 className="font-semibold text-gray-900">
            Changes to These Terms
          </h2>
          <p>
            These terms may be updated periodically. Continued use of the
            platform indicates acceptance of any updated terms.
          </p>

          <p className="text-gray-500">
            If you do not agree to these terms, you should discontinue use of
            the platform.
          </p>
        </section>
      </div>
    </main>
  );
}
