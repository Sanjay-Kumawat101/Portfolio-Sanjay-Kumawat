import { useEffect, useState } from 'react'
import { Menu, X, Download, Moon, Sun } from 'lucide-react'
import { site, nav } from '../config'

export default function Nav({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid || open ? 'nav-shell border-b border-white/10' : 'bg-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="font-display grad-text text-lg font-bold">{site.name}</a>
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">{n}</a></li>)}
          <li><button type="button" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="theme-toggle"><span className="sr-only">Switch theme</span>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button></li>
          <li><a href={site.resume} download className="secondary-button inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white hover:border-red-400/50"><Download size={14} />Resume</a></li>
        </ul>
        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className="theme-toggle"><span className="sr-only">Switch theme</span>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-white" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </nav>
      {open && (
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-4 lg:hidden">
          {nav.map((n) => <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5">{n}</a></li>)}
          <li><a href={site.resume} download className="secondary-button block rounded-xl px-3 py-2 text-red-200">Download Resume</a></li>
        </ul>
      )}
    </header>
  )
}
