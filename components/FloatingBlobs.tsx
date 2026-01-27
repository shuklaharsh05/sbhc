'use client'

import { motion } from 'framer-motion'

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 pattern-dots">
      {/* Primary gradient blob */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/25 via-primary-500/20 to-primary-600/15 rounded-full blur-3xl"
      />
      {/* Healthcare gradient blob */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.95, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-healthcare-400/25 via-healthcare-500/20 to-healthcare-600/15 rounded-full blur-3xl"
      />
      {/* Center accent blob */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-primary-300/20 via-healthcare-300/20 to-primary-400/15 rounded-full blur-3xl"
      />
      {/* Additional accent blobs for depth */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary-200/15 to-transparent rounded-full blur-2xl"
      />
    </div>
  )
}
