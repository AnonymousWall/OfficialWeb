import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Now available on App Store</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white mb-6">
            Your campus,{' '}
            <span className="gradient-text">your voice.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            Echo Talk is the anonymous campus social app where students connect, share, and vibe — no filters, no judgment.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-purple-600/30 to-pink-500/30 blur-3xl scale-110" />
            <div className="relative w-[260px] h-[530px] rounded-[3rem] border-[8px] border-white/10 bg-white/5 backdrop-blur overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-black text-xl">ET</span>
                </div>
                <p className="text-white font-bold text-lg mb-1">Echo Talk</p>
                <p className="text-gray-400 text-sm">Your campus, your voice.</p>
                <div className="mt-6 space-y-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-10 rounded-xl bg-white/5 border border-white/10 flex items-center px-3 gap-2">
                      <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0" />
                      <div className="flex-1">
                        <div className="h-1.5 bg-white/20 rounded w-3/4 mb-1" />
                        <div className="h-1.5 bg-white/10 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
