import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Github, ExternalLink, GraduationCap, MapPin, Mail, Code2, Send, ArrowUp, CheckCircle2, Sparkles } from 'lucide-react'
import { site, skills, projects, experience, achievements } from '../config'
import { Section, Reveal, Counter } from './Ui'

export const About = () => (
  <Section id="about" eyebrow="About" title="A little about me">
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
      <Reveal className="space-y-4 text-base leading-7 text-slate-300">
        <div className="glass-panel rounded-3xl p-6 md:p-8">
          <p>I'm a Computer Engineering student at Vidyalankar Institute of Technology, Mumbai, aiming to become a software developer. I'm most curious about AI, machine learning, cloud computing, generative AI and cybersecurity.</p>
          <p className="mt-4">I learn by building. My projects cover multilingual document search, cloud-deployed image analysis, a healthcare platform and an ML prediction app, and each one taught me something new about shipping real software.</p>
          <p className="mt-4">I solve problems steadily and work well with others. I use AI tools to write organized code faster, and I make sure I understand every line I keep.</p>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="glass-panel glow rounded-3xl p-6">
          <h3 className="font-display text-xl font-semibold text-white">{site.name}</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><GraduationCap size={16} className="mt-0.5 text-red-400" />Computer Engineering</li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-rose-400" />{site.location}</li>
            <li className="flex gap-2"><Sparkles size={16} className="mt-0.5 text-red-300" />Open to internships and opportunities</li>
          </ul>
        </div>
      </Reveal>
    </div>
  </Section>
)

export const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Technologies I work with">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(([cat, items], i) => (
        <Reveal key={cat} delay={i * 0.06}>
          <motion.div whileHover={{ y: -6, scale: 1.02 }} className="glass-panel glow h-full rounded-3xl p-5 transition-colors">
            <h3 className="font-display mb-4 font-semibold text-white">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => <span key={s} className="feature-badge">{s}</span>)}
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </Section>
)

const cats = ['All', 'AI/ML', 'Cloud', 'Web']

export function Projects() {
  const [f, setF] = useState('All')
  const list = projects.filter((p) => f === 'All' || p.cat === f)
  return (
    <Section id="projects" eyebrow="Projects" title="Featured work">
      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {cats.map((c) => (
          <button key={c} onClick={() => setF(c)} aria-pressed={f === c}
            className={`rounded-full px-4 py-1.5 text-sm transition ${f === c ? 'grad-bg text-white' : 'glass text-slate-300 hover:text-white'}`}>{c}</button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article layout key={p.name} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -8, scale: 1.01, rotate: 0.3 }} className="project-card glow flex flex-col overflow-hidden rounded-[28px] transition-colors">
              <div className="grad-bg relative flex h-40 items-end p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.25),transparent_55%)]" />
                <span className="font-display relative text-2xl font-bold text-white/90 sm:text-3xl">{p.name}</span>
                <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs text-white">{p.cat}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-red-300">{p.sub}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{p.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                  {p.features.slice(0, 5).map((x) => <li key={x} className="flex gap-2"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-red-400" />{x}</li>)}
                  {p.features.length > 5 && (
                    <li><details className="group"><summary className="cursor-pointer text-red-400 hover:text-red-300">+{p.features.length - 5} more features</summary>
                      <ul className="mt-1.5 space-y-1.5">{p.features.slice(5).map((x) => <li key={x} className="flex gap-2"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-red-400" />{x}</li>)}</ul>
                    </details></li>
                  )}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.stack.map((s) => <span key={s} className="rounded-md bg-red-500/10 px-2 py-0.5 text-xs text-red-200">{s}</span>)}</div>
                <div className="mt-auto flex gap-3 pt-6">
                  <a href={p.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white hover:border-red-400/50"><Github size={15} />GitHub</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="grad-bg inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white"><ExternalLink size={15} />Live Demo</a>}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}

export const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Practical, project-based learning">
    <div className="relative space-y-4 border-l border-white/10 pl-6">
      {experience.map(([t, d], i) => (
        <Reveal key={t} delay={i * 0.05}>
          <div className="story-card relative ml-2">
            <span className="grad-bg absolute -left-[31px] top-6 h-3 w-3 rounded-full" />
            <h3 className="font-display font-semibold text-white">{t}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-300">{d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
)

export const Education = () => (
  <Section id="education" eyebrow="Education" title="Academic background">
    <Reveal>
      <div className="glass-panel glow flex gap-4 rounded-[28px] p-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">
          <GraduationCap size={28} />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-white">Vidyalankar Institute of Technology, Mumbai</h3>
          <p className="mt-1 text-slate-300">B.Tech in Computer Engineering · University of Mumbai</p>
          <p className="mt-2 text-sm text-red-300">Currently pursuing undergraduate education</p>
        </div>
      </div>
    </Reveal>
  </Section>
)

export const Achievements = () => (
  <Section id="achievements" eyebrow="Achievements" title="Consistency in numbers">
    <div className="grid gap-5 sm:grid-cols-3">
      {achievements.map((a, i) => (
        <Reveal key={a.label} delay={i * 0.1}>
          <div className="glass-panel glow rounded-[28px] p-6 text-center">
            <div className="font-display grad-text text-5xl font-bold"><Counter to={a.n} suffix={a.suffix} /></div>
            <p className="mt-2 text-sm text-slate-300">{a.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
    <Reveal delay={0.2}><p className="mt-6 text-center text-sm text-slate-400">Plus steady, hands-on practice with programming concepts.</p></Reveal>
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {[[site.github, Github, 'GitHub', 'Source code for all my projects'], [site.leetcode, Code2, 'LeetCode', 'Daily problem-solving practice']].map(([u, I, n, d]) => (
        <Reveal key={n}>
          <motion.a href={u} target="_blank" rel="noreferrer" whileHover={{ y: -4, scale: 1.01 }} className="glass-panel glow flex items-center gap-4 rounded-[24px] p-5 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400"><I size={24} /></div>
            <div className="min-w-0"><h3 className="font-display font-semibold text-white">{n}</h3><p className="text-sm text-slate-300">{d}</p></div>
            <ExternalLink size={16} className="ml-auto text-slate-400" />
          </motion.a>
        </Reveal>
      ))}
    </div>
  </Section>
)

const contactFieldClass = 'contact-field w-full rounded-xl border px-4 py-3 text-sm transition focus:outline-none'

function ContactField({ field, label, value, error, onChange, area = false }) {
  const fieldId = `contact-${field}`

  return (
    <label htmlFor={fieldId} className="block text-sm">
      <span className="mb-1 block text-slate-300">{label}</span>
      {area
        ? <textarea id={fieldId} name={field} rows={5} className={contactFieldClass} value={value} onChange={onChange} aria-invalid={!!error} aria-describedby={error ? `${fieldId}-error` : undefined} />
        : <input id={fieldId} name={field} type={field === 'email' ? 'email' : 'text'} autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'off'} className={contactFieldClass} value={value} onChange={onChange} aria-invalid={!!error} aria-describedby={error ? `${fieldId}-error` : undefined} />}
      {error && <span id={`${fieldId}-error`} className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  )
}

export function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({})
  const [state, setState] = useState('idle')
  const on = (k) => (e) => setV((current) => ({ ...current, [k]: e.target.value }))
  async function submit(e) {
    e.preventDefault()
    const er = {}
    if (!v.name.trim()) er.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Enter a valid email'
    if (!v.subject.trim()) er.subject = 'Please add a subject'
    if (v.message.trim().length < 10) er.message = 'Message should be at least 10 characters'
    setErr(er)
    if (Object.keys(er).length) return
    if (!site.formspreeId) return setState('unconfigured')
    setState('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${site.formspreeId}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error()
      setState('sent'); setV({ name: '', email: '', subject: '', message: '' })
    } catch { setState('error') }
  }
  return (
    <Section id="contact" eyebrow="Contact" title="Have an Interesting Project or Opportunity? Let's Connect.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          <a href={`mailto:${site.email}`} className="glass-panel glow flex items-center gap-3 rounded-[22px] p-4 break-all"><Mail className="shrink-0 text-red-400" />{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer" className="glass-panel glow flex items-center gap-3 rounded-[22px] p-4"><Github className="text-red-400" />GitHub profile</a>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="glass-panel space-y-4 rounded-[28px] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactField field="name" label="Name" value={v.name} error={err.name} onChange={on('name')} />
              <ContactField field="email" label="Email" value={v.email} error={err.email} onChange={on('email')} />
            </div>
            <ContactField field="subject" label="Subject" value={v.subject} error={err.subject} onChange={on('subject')} />
            <ContactField field="message" label="Message" value={v.message} error={err.message} onChange={on('message')} area />
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} disabled={state === 'sending'} className="primary-button inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white disabled:opacity-60">
              <Send size={16} />{state === 'sending' ? 'Sending…' : 'Send message'}
            </motion.button>
            <p role="status" className="text-sm">
              {state === 'sent' && <span className="text-green-400">Thanks! Your message was sent.</span>}
              {state === 'error' && <span className="text-red-400">Something went wrong. Please email me directly.</span>}
              {state === 'unconfigured' && <span className="text-amber-300">The form isn't connected yet. Add VITE_FORMSPREE_ID (see README), or email me directly.</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

export const Footer = () => (
  <footer className="border-t border-white/10 px-5 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <p className="font-display grad-text text-xl font-bold">{site.name}</p>
        <p className="mt-2 text-sm text-slate-400">Building intelligent solutions, one project at a time.</p>
      </div>
      <div className="flex gap-4 text-slate-400">
        <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-2.5 hover:text-white"><Github size={18} /></a>
        <a href={site.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="rounded-full border border-white/10 bg-white/5 p-2.5 hover:text-white"><Code2 size={18} /></a>
      </div>
      <p className="text-xs text-slate-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </div>
    <a href="#home" aria-label="Back to top" className="glass glow fixed bottom-5 right-5 z-40 rounded-full p-3 text-white"><ArrowUp size={18} /></a>
  </footer>
)
