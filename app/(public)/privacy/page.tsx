export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-14">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow space-y-6">
        <header>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: 2026
          </p>
        </header>

        <section className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <p>
            Compass respects your privacy and is committed to protecting your
            personal information. This Privacy Policy explains, at a high level,
            how information is collected, used, and handled when you use our
            platform.
          </p>

          <h2 className="font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p>
            We may collect information you choose to provide, such as profile
            details, preferences, and responses during onboarding or use of our
            features. Some information may be stored locally in your browser to
            improve your experience.
          </p>

          <h2 className="font-semibold text-gray-900">
            How We Use Information
          </h2>
          <p>
            Information is used to personalize your experience, improve our
            tools, understand usage patterns, and develop new features. We do
            not use your information for purposes unrelated to the platform’s
            functionality.
          </p>

          <h2 className="font-semibold text-gray-900">Data Storage</h2>
          <p>
            Some data may be stored locally on your device. As Compass evolves,
            information may also be securely stored or processed through
            external services where appropriate.
          </p>

          <h2 className="font-semibold text-gray-900">Data Sharing</h2>
          <p>
            We do not sell personal information. Data may be shared with trusted
            service providers only when necessary to operate or improve the
            platform.
          </p>

          <h2 className="font-semibold text-gray-900">Your Choices</h2>
          <p>
            You may update or clear your information through available settings.
            Using the platform implies consent to this policy.
          </p>

          <h2 className="font-semibold text-gray-900">
            Changes to This Policy
          </h2>
          <p>
            This policy may be updated from time to time. Continued use of the
            platform after changes indicates acceptance of the updated policy.
          </p>

          <p className="text-gray-500">
            If you have questions about this policy, you may contact us through
            the channels provided on the platform.
          </p>
        </section>
      </div>
    </main>
  );
}
