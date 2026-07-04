import { motion } from 'framer-motion'
import { Mail, Phone, Globe, MapPin, Send, ArrowUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const contactMethods = [
  {
    icon: Mail,
    label: '邮箱',
    value: '3371689784@qq.com',
    href: 'mailto:3371689784@qq.com',
  },
  {
    icon: Phone,
    label: '电话',
    value: '199-4478-3632',
    href: 'tel:+8619944783632',
  },
  {
    icon: Globe,
    label: 'GitHub',
    value: 'github.com/bxbx9371',
    href: 'https://github.com/bxbx9371',
  },
  {
    icon: MapPin,
    label: '位置',
    value: '河南 · 郑州',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center py-32 px-6">
      {/* Background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 60%, rgba(0, 212, 255, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1700px] mx-auto w-full relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent/50" />
            <span className="text-xs text-accent font-mono tracking-widest uppercase">
              Contact
            </span>
            <div className="w-8 h-[1px] bg-accent/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-4">
            联系我
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto leading-relaxed">
            期待与你的交流，无论是项目合作还是技术探讨
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card-glass rounded-2xl p-6 flex flex-col items-center gap-4 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                <method.icon size={20} className="text-accent/70" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-mono mb-1">{method.label}</p>
                <p className="text-sm text-text-primary group-hover:text-accent transition-colors duration-300">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="text-center"
        >
          <motion.a
            href="mailto:3371689784@qq.com"
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(0, 212, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent/10 border border-accent/30 text-accent rounded-2xl text-base font-medium hover:bg-accent/15 transition-colors duration-300"
          >
            <Send size={18} />
            发送邮件
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="glow-line mt-24 mb-8" />

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">
            © 2024 Portfolio. Built with React & Tailwind CSS.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors duration-300"
          >
            回到顶部
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
