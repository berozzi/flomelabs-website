import { Link } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Seo } from '../components/Seo'
import { SectionLabel } from '../components/ui/SectionLabel'
import { SITE } from '../config/site'

const LAST_UPDATED = 'November 16, 2026'

function PolicySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-muted sm:text-base">
        {children}
      </div>
    </section>
  )
}

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title={`Privacy Policy — Vitelo | ${SITE.name}`}
        description="Privacy Policy for the Vitelo mobile application by FlomeLabs. Learn how we collect, use, and protect your information."
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="bg-paper text-ink focus:outline-none">
        <div className="mx-auto max-w-[760px] px-6 pb-24 pt-32 md:pb-32 md:pt-40">
          <SectionLabel index="PP" tone="light">
            Legal
          </SectionLabel>
          <h1 className="mt-8 font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.045em]">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Vitelo mobile application
          </p>
          <p className="mt-6 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-10 rounded-card border border-ink/10 bg-ink/[0.02] p-6 text-[15px] leading-[1.8] text-muted sm:p-8">
            <p>
              This Privacy Policy explains how <strong className="font-medium text-ink">FlomeLabs</strong>{' '}
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects
              information when you use the <strong className="font-medium text-ink">Vitelo</strong> mobile
              application (&quot;App&quot;). Vitelo is designed to help you manage loyalty cards and
              receipts in one place. We are committed to handling your data responsibly and transparently.
            </p>
            <p className="mt-4">
              By using Vitelo, you agree to the practices described in this Privacy Policy. If you do not
              agree, please do not use the App.
            </p>
          </div>

          <PolicySection title="1. Information we collect">
            <p>Depending on how you use Vitelo, we may collect the following categories of information:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-medium text-ink">Account information:</strong> information you
                provide when creating or using an account, such as an email address or display name (if
                account features are available).
              </li>
              <li>
                <strong className="font-medium text-ink">Content you add to the App:</strong> loyalty card
                details, barcodes or membership numbers, receipt images, purchase details, notes, and other
                information you choose to store in Vitelo.
              </li>
              <li>
                <strong className="font-medium text-ink">Device and usage information:</strong> basic
                technical data such as device model, operating system version, app version, language,
                approximate diagnostics, and interactions with the App, used to keep the App secure and
                improve performance.
              </li>
              <li>
                <strong className="font-medium text-ink">Camera and photo library access:</strong> if you
                grant permission, we access your camera or photos only to scan barcodes or add receipt
                images that you explicitly choose.
              </li>
              <li>
                <strong className="font-medium text-ink">Support communications:</strong> information you
                include when you contact us for help or feedback.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="2. How we use your information">
            <p>We use information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>provide, operate, and maintain Vitelo’s core features;</li>
              <li>store and display the loyalty cards and receipts you choose to save;</li>
              <li>improve the App’s reliability, usability, and security;</li>
              <li>respond to your requests and provide customer support;</li>
              <li>comply with legal obligations and enforce our terms where applicable.</li>
            </ul>
            <p>
              We do <strong className="font-medium text-ink">not</strong> sell your personal information.
            </p>
          </PolicySection>

          <PolicySection title="3. Legal bases for processing (EEA/UK)">
            <p>
              If you are located in the European Economic Area or the United Kingdom, we process personal
              data only when we have a valid legal basis, including:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-medium text-ink">Performance of a contract:</strong> to provide the
                App and its requested features.
              </li>
              <li>
                <strong className="font-medium text-ink">Legitimate interests:</strong> to maintain,
                secure, and improve Vitelo, balanced against your rights.
              </li>
              <li>
                <strong className="font-medium text-ink">Consent:</strong> where required, such as for
                optional device permissions (camera or photos). You can withdraw consent at any time through
                your device settings.
              </li>
              <li>
                <strong className="font-medium text-ink">Legal obligation:</strong> when we must comply with
                applicable law.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Data storage and security">
            <p>
              We take reasonable technical and organizational measures to protect your information against
              unauthorized access, loss, misuse, or alteration. Depending on the features you use, some data
              may be stored locally on your device and/or securely processed by service providers that help
              us operate the App.
            </p>
            <p>
              No method of transmission or storage is completely secure. While we work to protect your data,
              we cannot guarantee absolute security.
            </p>
          </PolicySection>

          <PolicySection title="5. Sharing of information">
            <p>We may share information only in limited circumstances:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-medium text-ink">Service providers:</strong> trusted vendors who
                assist with hosting, analytics, diagnostics, or customer support, under appropriate
                confidentiality and data protection obligations.
              </li>
              <li>
                <strong className="font-medium text-ink">Legal requirements:</strong> when disclosure is
                required by law, regulation, legal process, or to protect the rights, safety, and security
                of users or others.
              </li>
              <li>
                <strong className="font-medium text-ink">Business transfers:</strong> in connection with a
                merger, acquisition, or sale of assets, subject to continued protection of your information.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Data retention">
            <p>
              We retain personal information only for as long as necessary to provide Vitelo, fulfill the
              purposes described in this Policy, resolve disputes, and comply with legal obligations. You
              may delete content stored in the App at any time within available features. If you request
              deletion of your account or data, we will process it in accordance with applicable law.
            </p>
          </PolicySection>

          <PolicySection title="7. Your rights and choices">
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict the
              processing of your personal data, to object to certain processing, and to receive a portable
              copy of your data. You may also have the right to lodge a complaint with your local data
              protection authority.
            </p>
            <p>
              You can manage device permissions (such as camera or photo access) at any time in your device
              settings. Disabling permissions may limit certain features of Vitelo.
            </p>
          </PolicySection>

          <PolicySection title="8. Children’s privacy">
            <p>
              Vitelo is not directed to children under the age of 13, and we do not knowingly collect
              personal information from children under 13. If you believe a child has provided us with
              personal information, please contact us so we can take appropriate action.
            </p>
          </PolicySection>

          <PolicySection title="9. International transfers">
            <p>
              Your information may be processed in countries other than your own, where data protection laws
              may differ. When we transfer data internationally, we take steps to ensure it is protected in
              accordance with applicable law and this Privacy Policy.
            </p>
          </PolicySection>

          <PolicySection title="10. Changes to this Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in Vitelo, our
              practices, or legal requirements. When we do, we will update the &quot;Last updated&quot; date at
              the top of this page. We encourage you to review this Policy periodically.
            </p>
          </PolicySection>

          <PolicySection title="11. Contact us">
            <p>
              If you have questions, requests, or concerns about this Privacy Policy or Vitelo’s data
              practices, please contact us:
            </p>
            <div className="mt-2 rounded-xl border border-ink/10 bg-ink/[0.02] p-5">
              <p className="font-medium text-ink">{SITE.name}</p>
              <p className="mt-1">
                Email:{' '}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="mt-1">Location: {SITE.location}</p>
            </div>
          </PolicySection>

          <div className="mt-16 border-t border-ink/10 pt-8">
            <Link
              to="/"
              className="inline-flex items-center rounded-lg border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
