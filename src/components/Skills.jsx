import { motion } from 'framer-motion'
import {
  Code2,
  Cpu,
  Lightbulb,
  Smartphone,
  Zap,
  Target,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const skills = [
  {
    icon: Code2,
    title: '前端开发',
    description:
      '掌握 HTML/CSS/JavaScript 基础，能够独立完成页面开发与交互实现。',
    level: 75,
  },
  {
    icon: Cpu,
    title: 'AI 协作开发',
    description:
      '熟练使用 Prompt Engineering 辅助代码生成与调试，善于利用 LLM 加速开发流程。',
    level: 85,
  },
  {
    icon: Smartphone,
    title: '微信小程序开发',
    description:
      '了解小程序生命周期与组件化开发，具备原生小程序 + 云开发实战经验。',
    level: 70,
  },
  {
    icon: Lightbulb,
    title: '快速学习',
    description:
      '具备极强的新技术上手能力，对新技术充满好奇心，能够快速掌握新工具和框架。',
    level: 92,
  },
  {
    icon: Zap,
    title: '问题解决',
    description:
      '面对技术难题时冷静分析、系统排查，善于利用文档和社区资源找到最优解。',
    level: 80,
  },
  {
    icon: Target,
    title: '目标驱动',
    description:
      '设定清晰的学习目标并坚持执行，善于规划时间，保证高质量交付。',
    level: 88,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
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
              Strengths
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            个人优势
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i * 0.5}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="card-glass rounded-2xl p-8 h-full flex flex-col group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                  <skill.icon size={22} className="text-accent/70" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                  {skill.description}
                </p>

                {/* Skill bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-text-muted font-mono">熟练度</span>
                    <span className="text-xs text-accent/60 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-dark-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
