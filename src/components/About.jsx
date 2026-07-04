import { motion } from 'framer-motion'
import { User, MapPin, GraduationCap, Mail, Phone, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-[1700px] mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent/50" />
            <span className="text-xs text-accent font-mono tracking-widest uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            个人介绍
          </h2>
        </motion.div>

        {/* Main card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          className="card-glass rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Avatar + basic info */}
            <div className="flex flex-col items-center lg:items-start gap-6 lg:min-w-[280px]">
              {/* Avatar placeholder */}
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-dark-700 border border-accent/10 flex items-center justify-center overflow-hidden">
                  <User size={48} className="text-accent/40" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-dark-800" />
              </div>

              {/* Name & school */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  李泊璇
                </h3>
                <p className="text-sm text-text-muted font-mono">
                  全栈开发 · AI 应用
                </p>
              </div>

              {/* Quick info */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <GraduationCap size={16} className="text-accent/60 shrink-0" />
                  <span>郑州科技学院</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <MapPin size={16} className="text-accent/60 shrink-0" />
                  <span>河南 · 郑州</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: Mail, href: 'mailto:3371689784@qq.com' },
                  { icon: Phone, href: 'tel:+8619944783632' },
                  { icon: Globe, href: 'https://github.com/bxbx9371' },
                ].map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />

            {/* Right: Bio */}
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                关于我
              </h4>
              <div className="space-y-4 text-text-secondary leading-relaxed text-[15px]">
                <p>
                  我是李泊璇，郑州科技学院计算机专业的大一学生。我对全栈开发和 AI 应用充满热情，
                  目前正在探索"AI + 编程"的高效工作流。
                </p>
                <p>
                  我不满足于课本知识，正致力于通过独立开发实际产品（如微信小程序）来磨练工程能力，
                  立志成为一名能够驾驭 AI 工具的新一代开发者。
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {['JavaScript', 'HTML/CSS', '微信小程序', 'AI 协作', '云开发', 'Git'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-accent/70 bg-accent/5 border border-accent/10 rounded-lg"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
