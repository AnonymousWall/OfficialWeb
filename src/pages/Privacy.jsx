import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 pt-32 pb-24 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Echo Talk ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect information about you in a variety of ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Account Information:</strong> When you register, we collect your campus email address and profile information.</li>
              <li><strong className="text-white">Usage Data:</strong> We automatically collect information about how you interact with our app, including posts, messages, and marketplace activity.</li>
              <li><strong className="text-white">Device Information:</strong> We collect device identifiers, operating system information, and app version data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the Echo Talk platform</li>
              <li>Verify your campus affiliation</li>
              <li>Enable anonymous posting while preventing abuse</li>
              <li>Facilitate the campus marketplace</li>
              <li>Send you important notifications about your account</li>
              <li>Improve our services and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Anonymity</h2>
            <p>
              Echo Talk is designed to protect your anonymity when posting. Your posts are not publicly linked to your identity. However, in cases of serious violations of our Terms of Service or legal requirements, we may be required to disclose account information to appropriate authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to provide you with the Echo Talk services and as described in this Privacy Policy. You may request deletion of your account and associated data at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@echotalkai.com" className="gradient-text hover:opacity-80">privacy@echotalkai.com</a>.
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
