'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { label: 'About',       href: '#about' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Blogs',       href: '#blogs' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [mounted,     setMounted]     = useState(false)
  const { resolvedTheme, setTheme }   = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = resolvedTheme === 'dark'

  return (
    <header
      style={{
        background: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center shrink-0">
            <span className="font-mono font-bold text-[var(--accent-fg)] text-sm leading-none">RT</span>
          </div>
          <span
            style={{ color: 'var(--text-2)' }}
            className="font-mono text-sm hidden sm:block group-hover:text-[var(--accent)] transition-colors"
          >
            romu.dev
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{ color: 'var(--text-2)' }}
                className="text-sm hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            style={{ color: 'var(--text-2)', border: '1px solid var(--border)' }}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:text-[var(--accent)] transition-colors"
          >
            {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="w-4 h-4" />}
          </button>

          {/* Hire Me */}
          <a
            href="mailto:tromu98@gmail.com"
            style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
            className="hidden md:inline-flex items-center h-9 px-4 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            style={{ color: 'var(--text-2)' }}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:text-[var(--text-1)] transition-colors"
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}
          className="md:hidden px-6 py-5"
        >
          <ul className="flex flex-col gap-5 mb-5">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ color: 'var(--text-2)' }}
                  className="text-sm hover:text-[var(--accent)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:tromu98@gmail.com"
            style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
            className="inline-flex h-9 px-4 rounded-lg text-sm font-semibold items-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}