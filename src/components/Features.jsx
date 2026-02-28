import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '👤',
    title: 'Anonymous Posts',
    description: 'Share your thoughts, confessions, and opinions without revealing who you are. Be real, be free.',
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    icon: '🛒',
    title: 'Campus Marketplace',
    description: 'Buy and sell textbooks, furniture, and more with students on your campus. No fees, no hassle.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: '💬',
    title: 'Direct Messages',
    description: 'Connect privately with classmates. Start conversations that matter, when you want to.',
    gradient: 'from-indigo-500 to-purple-600',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/8 transition-colors group"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Built for{' '}
          <span className="gradient-text">campus life.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Everything you need to connect with your campus community, all in one place.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}
