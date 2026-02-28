import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const screens = [
  { label: 'Feed', bg: 'from-purple-900/50 to-indigo-900/50' },
  { label: 'Post', bg: 'from-pink-900/50 to-purple-900/50' },
  { label: 'Market', bg: 'from-indigo-900/50 to-blue-900/50' },
  { label: 'Messages', bg: 'from-rose-900/50 to-pink-900/50' },
  { label: 'Profile', bg: 'from-violet-900/50 to-purple-900/50' },
]

export default function Screenshots() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            See it in{' '}
            <span className="gradient-text">action.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A glimpse of what's waiting for you on campus.
          </p>
        </motion.div>
      </div>
      <div className="flex gap-4 px-6 overflow-x-auto scrollbar-hide pb-4">
        {screens.map((screen, i) => (
          <motion.div
            key={screen.label}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0"
          >
            <div className={`w-[200px] h-[400px] rounded-[2.5rem] border-[6px] border-white/10 bg-gradient-to-br ${screen.bg} backdrop-blur flex flex-col items-center justify-center gap-3 p-4`}>
              <div className="w-1/3 h-1 bg-white/20 rounded-full mb-2" />
              <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-white font-black text-xs">ET</span>
              </div>
              <p className="text-white font-semibold text-sm">{screen.label}</p>
              <div className="w-full space-y-2 mt-2">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-8 rounded-lg bg-white/5 border border-white/10" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
