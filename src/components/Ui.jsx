import { useEffect, useState } from 'react'
import { motion, useInView, animate } from 'motion/react'
import { useRef } from 'react'

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 32, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)

export const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
    <Reveal>
      <p className="font-display text-sm uppercase tracking-[0.2em] text-red-400">{eyebrow}</p>
      <h2 className="font-display mt-2 mb-10 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </Reveal>
    {children}
  </section>
)

export const Counter = ({ to, suffix }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}{suffix}</span>
}

export const Orbs = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="grid-bg absolute inset-0" />
    {[['bg-red-700/20', '-left-24 top-10', 18], ['bg-red-500/15', 'right-0 top-1/3', 22], ['bg-rose-900/20', 'left-1/3 bottom-0', 26]].map(([c, p, d], i) => (
      <motion.div key={i} className={`absolute h-96 w-96 rounded-full blur-3xl ${c} ${p}`}
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 30, 0] }} transition={{ duration: d, repeat: Infinity, ease: 'easeInOut' }} />
    ))}
  </div>
)

export const Btn = ({ href, children, variant = 'primary', ...p }) => (
  <motion.a href={href} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} {...p}
    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-shadow ${
      variant === 'primary' ? 'primary-button text-white' : 'secondary-button text-slate-200 hover:border-red-400/50'}`}>
    {children}
  </motion.a>
)
