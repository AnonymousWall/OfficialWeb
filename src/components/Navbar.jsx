import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
          <span className="text-white font-black text-sm">ET</span>
        </div>
        <span className="font-bold text-white text-lg">Echo Talk</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm hidden sm:block">
          Privacy
        </Link>
        <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm hidden sm:block">
          Terms
        </Link>
        <a
          href="#"
          className="px-4 py-2 rounded-full gradient-bg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Download
        </a>
      </div>
    </nav>
  )
}
