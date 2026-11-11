import { useEffect, useState } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { Orbs } from './components/Ui'
import { About, Skills, Projects, Experience, Education, Achievements, Contact, Footer } from './components/Sections'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })
  const { scrollYProgress } = useScroll()
  const visualX = useTransform(scrollYProgress, [0, 1], [0, -100])
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const visualRotation = useTransform(scrollYProgress, [0, 1], [0, 180])
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#fff7f7' : '#090909')
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Theme selection still works when browser storage is unavailable.
    }
  }, [theme])

  return (
    <>
      <Orbs />
      <motion.img
        src="/scroll-visual.svg"
        alt=""
        aria-hidden="true"
        draggable="false"
        style={{ x: visualX, y: visualY, rotate: visualRotation, scale: visualScale }}
        className="pointer-events-none fixed right-[-8vw] top-[12vh] z-0 w-[min(100vw,900px)] max-w-none opacity-25 mix-blend-screen"
      />
      <motion.div style={{ scaleX: scrollYProgress }} className="grad-bg fixed inset-x-0 top-0 z-[60] h-0.5 origin-left" />
      <Nav theme={theme} onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main className="relative z-10">
        <Hero /><About /><Skills /><Projects /><Experience /><Education /><Achievements /><Contact />
      </main>
      <div className="relative z-10"><Footer /></div>
    </>
  )
}
