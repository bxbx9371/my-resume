import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg z-[2]" />

      {/* Particles */}
      <div className="absolute inset-0 z-[3]">
        <ParticleBackground />
      </div>

      {/* Gaussian blur dark mask */}
      <div className="absolute inset-0 z-[4] bg-gradient-to-b from-dark-950/40 via-transparent to-dark-950" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-accent font-mono tracking-wider">
            OPEN TO WORK
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-text-primary">你好，我是</span>
          <br />
          <span
            className="bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}
          >
            一名开发者
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          郑州科技学院在读学生 · 热爱技术与创造
          <br className="hidden sm:block" />
          专注于前端开发与用户体验设计
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3.5 bg-accent/10 border border-accent/30 text-accent rounded-xl text-sm font-medium hover:bg-accent/15 transition-colors duration-300"
          >
            <Mail size={16} />
            联系我
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3.5 border border-border text-text-secondary rounded-xl text-sm font-medium hover:border-white/10 hover:text-text-primary transition-all duration-300"
          >
            了解更多
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
