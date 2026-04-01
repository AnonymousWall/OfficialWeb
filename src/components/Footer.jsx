import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/icon-192.png" alt="Echo Talk" className="w-7 h-7 rounded-lg" />
          <span className="text-white font-bold">Echo Talk</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <span className="cursor-not-allowed opacity-60" title="Coming soon">App Store — Coming Soon</span>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Echo Talk. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
