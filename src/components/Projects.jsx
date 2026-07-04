import { motion } from 'framer-motion'
import { Briefcase, Calendar, BookOpen, Users, Star, ArrowUpRight, Utensils } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const projects = [
  {
    title: '食遇记',
    period: '2025 - Beta',
    icon: Utensils,
    description: '一款基于微信小程序的美食推荐与记录应用，采用 AI 辅助开发模式独立完成。',
    details: [
      '角色：独立开发者（AI 辅助），全程采用"AI 结对编程"模式',
      '技术栈：微信小程序原生开发 + 云开发处理数据',
      '亮点：利用 LLM 辅助完成核心逻辑与 UI 设计，极大提升开发效率',
      '状态：目前项目处于 Beta 测试阶段',
    ],
    tags: ['微信小程序', '云开发', 'AI 结对编程', 'LLM'],
  },
  {
    title: '高中数学家教',
    period: '2024.03 - 至今',
    icon: BookOpen,
    description: '一对一辅导高中学生数学课程，涵盖函数、导数、解析几何等核心知识点。',
    details: [
      '根据学生水平制定个性化教学方案',
      '帮助学生数学成绩平均提升 20+ 分',
      '培养学生的数学思维和解题方法论',
    ],
    tags: ['教学设计', '沟通能力', '耐心细致'],
  },
  {
    title: '初中物理家教',
    period: '2023.09 - 2024.01',
    icon: Users,
    description: '辅导初中生物理课程，注重实验思维培养和基础知识巩固。',
    details: [
      '用生活化案例讲解抽象物理概念',
      '设计趣味实验激发学习兴趣',
      '学生成绩稳步提升，多名学生考入重点高中',
    ],
    tags: ['知识传授', '实验设计', '因材施教'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 70% 50%, rgba(0, 212, 255, 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1700px] mx-auto relative z-10">
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
              Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            精选经历
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i + 1}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card-glass rounded-2xl p-8 h-full flex flex-col group cursor-default"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                      <project.icon size={22} className="text-accent/70" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar size={12} className="text-text-muted" />
                        <span className="text-xs text-text-muted font-mono">
                          {project.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/30 transition-all duration-300"
                  >
                    <ArrowUpRight size={14} />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Details */}
                <ul className="space-y-3 mb-6 flex-1">
                  {project.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                      <Star size={12} className="text-accent/50 mt-1 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-text-muted bg-white/[0.02] border border-border rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
