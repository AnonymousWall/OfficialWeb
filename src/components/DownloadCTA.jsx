import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function DownloadCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
          <span className="text-purple-400 text-sm font-medium">Free Download</span>
        </div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Ready to find{' '}
          <span className="gradient-text">your people?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          Join thousands of students already on Echo Talk. Download free and start connecting with your campus community today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 text-gray-400 font-bold text-base cursor-not-allowed select-none"
            title="Coming soon"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store — Coming Soon
          </span>
          <a
            href="https://testflight.apple.com/join/4TTTUBFU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-500/20 border border-blue-500/40 text-blue-300 font-bold text-base hover:bg-blue-500/30 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 3L3 10.5l7.5 3L21 3zM21 3l-7.5 10.5L17 21 21 3z"/>
            </svg>
            Try Beta on TestFlight
          </a>
        </div>
      </motion.div>
    </section>
  )
}
