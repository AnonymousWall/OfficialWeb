import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 pt-32 pb-24 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, accessing, or using Echo Talk ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Eligibility</h2>
            <p>
              Echo Talk is intended for use by currently enrolled college and university students. You must be at least 17 years of age and have a valid campus email address to create an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. Community Guidelines</h2>
            <p className="mb-3">While Echo Talk supports anonymous expression, all users must agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not post content that is hateful, threatening, or harassing</li>
              <li>Not share personal information of others without their consent</li>
              <li>Not engage in spam, fraud, or deceptive practices</li>
              <li>Not post illegal content of any kind</li>
              <li>Respect other users and maintain a constructive campus community</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Campus Marketplace</h2>
            <p>
              The campus marketplace feature allows users to buy and sell goods with fellow students. Echo Talk is not responsible for transactions, disputes, or the condition of items sold. Use good judgment and meet in safe, public locations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. Intellectual Property</h2>
            <p>
              You retain ownership of content you post on Echo Talk. By posting content, you grant Echo Talk a non-exclusive, royalty-free license to use, display, and distribute your content within the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations of these Terms of Service, without prior notice. You may also delete your account at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">7. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@echotalkai.com" className="gradient-text hover:opacity-80">legal@echotalkai.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
