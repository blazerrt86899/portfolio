import { ArrowDown } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './Icons'

const stats = [
  { value: '6+',   label: 'Years Experience' },
  { value: '3',    label: 'AI Systems Shipped' },
  { value: '100+', label: 'Concurrent Users' },
  { value: '500+', label: 'Daily Automations' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Radial glow behind the name */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, var(--glow) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-5xl w-full mx-auto pt-20 pb-12">

        {/* Terminal prompt */}
        <div className="flex items-center gap-2 mb-6 font-mono text-sm" style={{ color: 'var(--text-3)' }}>
          <span style={{ color: 'var(--accent)' }}>❯</span>
          <span>whoami</span>
          <span
            className="cursor-blink inline-block w-[2px] h-4 ml-0.5"
            style={{ background: 'var(--accent)' }}
          />
        </div>

        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-mono"
          style={{
            border: '1px solid rgba(34,197,94,0.25)',
            background: 'var(--accent-dim)',
            color: 'var(--accent)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: 'var(--accent)', animation: 'pulse-dot 2s ease-in-out infinite' }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-none mb-5">
          <span style={{ color: 'var(--text-1)' }} className="block">Romu</span>
          <span className="block bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Tiwari
          </span>
        </h1>

        {/* Role */}
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-xl" style={{ color: 'var(--accent)' }}>{'>'}</span>
          <p className="text-lg md:text-xl font-mono" style={{ color: 'var(--text-2)' }}>
            DevOps-turned-{' '}
            <strong style={{ color: 'var(--text-1)' }}>Agentic AI Engineer</strong>
          </p>
        </div>

        {/* Tagline */}
        <p
          className="max-w-xl text-base md:text-lg leading-relaxed mb-10"
          style={{ color: 'var(--text-3)' }}
        >
          I build AI that ships to production — LangGraph orchestration, RAG platforms,
          and multi-agent systems running on AWS at scale.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-2xl">
          {stats.map(s => (
            <div
              key={s.label}
              className="rounded-xl p-4"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                {s.value}
              </div>
              <div className="text-xs mt-1 leading-tight" style={{ color: 'var(--text-3)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href="#projects"
            style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
            className="px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}
            className="px-6 py-3 rounded-xl text-sm hover:text-[var(--text-1)] transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/blazerrt86899"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm hover:text-[var(--text-1)] transition-colors"
          >
            <GitHubIcon style={{ width: 16, height: 16 }} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/romu-tiwari-919a73133/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: '1px solid var(--border)', color: 'var(--text-2)' }}
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm hover:text-[var(--text-1)] transition-colors"
          >
            <LinkedInIcon style={{ width: 16, height: 16 }} />
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
          style={{ color: 'var(--text-3)' }}
        >
          <ArrowDown size={14} style={{ animation: 'fadeUp 1.5s ease-in-out infinite alternate' }} />
          Scroll to explore
        </a>
      </div>
    </section>
  )
}