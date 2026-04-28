'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { label: 'About',      href: '#about',      id: 'about' },
  { label: 'Projects',   href: '#projects',   id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills',     href: '#skills',     id: 'skills' },
  { label: 'Blogs',      href: '#blogs',      id: 'blogs' },
  { label: 'Contact',    href: '#contact',    id: 'contact' },
]

export default function Navbar() {
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [mounted,       setMounted]       = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const observers: IntersectionObserver[] = []

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const isDark = resolvedTheme === 'dark'

  const pillStyle = {
    background: 'var(--nav-bg)',
    border: '1px solid var(--border)',
  } as const

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 py-5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Left: theme toggle */}
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-[12px] transition-colors duration-300 hover:text-[var(--accent)]"
          style={{ color: 'var(--text-2)', ...pillStyle }}
        >
          {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="w-4 h-4" />}
        </button>

        {/* Center: floating pill nav — desktop only */}
        <div
          className="hidden md:flex items-center gap-0.5 rounded-full h-14 px-8 shadow-xl shadow-black/10 backdrop-blur-[12px]"
          style={pillStyle}
        >
          {navLinks.map(link => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                data-active={isActive}
                className="relative group flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300"
                style={{ color: isActive ? 'var(--text-1)' : 'var(--text-2)' }}
              >
                {/*
                  Accent bar above the label.
                  - scale-x-0   = hidden by default
                  - group-hover:scale-x-100 = appears on mouse hover
                  - group-data-[active=true]:scale-x-100 = stays visible when section is active
                */}
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-7 rounded-full origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-data-[active=true]:scale-x-100"
                  style={{ background: 'var(--accent)' }}
                />
                <span className="relative group-hover:text-[var(--text-1)] transition-colors duration-300">
                  {link.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Right: Hire Me (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:tromu98@gmail.com"
            className="hidden md:inline-flex items-center h-10 px-5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
          >
            Hire Me
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-[12px] transition-colors duration-300 hover:text-[var(--text-1)]"
            style={{ color: 'var(--text-2)', ...pillStyle }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden mt-3 mx-auto max-w-xs rounded-2xl px-5 py-4 shadow-xl backdrop-blur-[12px]"
          style={pillStyle}
        >
          <ul className="flex flex-col gap-0.5 mb-4">
            {navLinks.map(link => {
              const isActive = activeSection === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-[var(--bg-elevated)]"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--text-2)' }}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href="mailto:tromu98@gmail.com"
            className="inline-flex h-9 px-5 rounded-full text-sm font-semibold items-center"
            style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}