import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Github, Linkedin, ArrowDown, Download, Code2, Sparkles, Cpu, CloudCog } from 'lucide-react'
import { site } from '../config'
import { Btn } from './Ui'

function useTyping(words) {
  const [t, setT] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const id = setTimeout(() => {
      if (!del && t === w) return setDel(true)
      if (del && t === '') { setDel(false); return setI((i + 1) % words.length) }
      setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1))
    }, !del && t === w ? 1400 : del ? 35 : 70)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return t
}

const chips = [['Python', 'top-2 -left-4', 0], ['Azure', 'top-1/3 -right-4', 1], ['RAG', 'bottom-10 -left-6', 2], ['React', 'bottom-0 right-6', 3]]

export default function Hero() {
  const role = useTyping(site.roles)
  const social = [[site.github, Github, 'GitHub'], [site.linkedin, Linkedin, 'LinkedIn'], [site.leetcode, Code2, 'LeetCode']].filter(([u]) => u)

  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1.5 text-xs font-medium tracking-[0.18em] text-red-200 uppercase">
          <Sparkles size={12} className="animate-pulse" />
          Available for internships & projects
        </motion.div>
        <p className="font-display text-lg text-slate-300">Hi, I'm</p>
        <h1 className="font-display mt-2 text-4xl font-bold tracking-[-0.06em] text-white sm:text-6xl">{site.name}</h1>
        <p className="font-display grad-text mt-3 text-2xl font-semibold sm:text-4xl">Building intelligent digital experiences.</p>
        <p className="mt-5 h-8 font-mono text-base text-red-300 sm:text-lg" aria-live="off">&gt; {role}<span className="animate-pulse">|</span></p>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
          I'm a Computer Engineering student passionate about software development, AI, cloud, and turning ambitious ideas into useful products.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Btn href="#projects">Explore My Work</Btn>
          <Btn href={site.resume} download variant="ghost"><Download size={16} />Download Resume</Btn>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {['AI/ML', 'Cloud', 'Web Apps', 'Problem Solving'].map((item) => (
            <span key={item} className="feature-badge">{item}</span>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          {social.map(([u, I, l]) => <a key={l} href={u} target="_blank" rel="noreferrer" aria-label={l} className="glass glow rounded-xl p-3 text-slate-300 transition hover:text-white"><I size={20} /></a>)}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative mx-auto w-full max-w-xl">
        <motion.div whileHover={{ rotate: 1.5, scale: 1.01 }} className="hero-surface glow rounded-[28px] p-4 sm:p-5 shimmer">
          <div className="relative z-10 rounded-[22px] border border-white/10 bg-slate-950/60 p-4 font-mono text-xs sm:text-sm">
            <div className="mb-4 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-red-500" /><i className="h-3 w-3 rounded-full bg-red-950" /><i className="h-3 w-3 rounded-full bg-red-800" /></div>
            <pre className="overflow-x-auto leading-7 text-slate-300"><code>{`class Developer:
  name = "${site.name}"
  college = "VIT Mumbai"
  focus = ["AI/ML", "Cloud", "Web"]
  languages = ["Java", "Python", "SQL"]

  def build(self, idea):
    return solve(idea).ship()`}</code></pre>
          </div>

          <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
            <motion.div whileHover={{ y: -6, scale: 1.02 }} className="hero-metric rounded-2xl p-4">
              <div className="mb-2 inline-flex rounded-full bg-red-500/10 p-2 text-red-300"><Cpu size={18} /></div>
              <div className="text-2xl font-semibold text-white">4+</div>
              <div className="mt-1 text-sm text-slate-300">Projects built</div>
            </motion.div>
            <motion.div whileHover={{ y: -6, scale: 1.02 }} className="hero-metric rounded-2xl p-4">
              <div className="mb-2 inline-flex rounded-full bg-red-900/30 p-2 text-red-300"><CloudCog size={18} /></div>
              <div className="text-2xl font-semibold text-white">110+</div>
              <div className="mt-1 text-sm text-slate-300">LeetCode wins</div>
            </motion.div>
          </div>
        </motion.div>
        {chips.map(([l, p, i]) => (
          <motion.span key={l} className={`floating-pill float-slow absolute ${p} rounded-full px-3 py-1 text-xs font-medium text-red-100`}
            animate={{ y: [0, -10, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}>{l}</motion.span>
        ))}
      </motion.div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 lg:block">
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="block"><ArrowDown /></motion.span>
      </a>
    </section>
  )
}
