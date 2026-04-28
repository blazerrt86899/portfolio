import { Mail, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './Icons'

type ContactItem = {
  label: string
  value: string
  href: string
  external: boolean
  icon: 'mail' | 'phone' | 'github' | 'linkedin'
}

const contacts: ContactItem[] = [
  { icon: 'mail',     label: 'Email',    value: 'tromu98@gmail.com',          href: 'mailto:tromu98@gmail.com',                             external: false },
  { icon: 'phone',    label: 'Phone',    value: '+91 79061 46618',             href: 'tel:+917906146618',                                    external: false },
  { icon: 'linkedin', label: 'LinkedIn', value: 'romu-tiwari-919a73133',       href: 'https://www.linkedin.com/in/romu-tiwari-919a73133/',   external: true  },
  { icon: 'github',   label: 'GitHub',   value: 'blazerrt86899',               href: 'https://github.com/blazerrt86899',                     external: true  },
]

function ContactIcon({ type }: { type: ContactItem['icon'] }) {
  const cls = "text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors"
  const s = 18
  if (type === 'mail')     return <Mail     size={s} className={cls} />
  if (type === 'phone')    return <Phone    size={s} className={cls} />
  if (type === 'github')   return <GitHubIcon   style={{ width: s, height: s }} className={cls} />
  if (type === 'linkedin') return <LinkedInIcon style={{ width: s, height: s }} className={cls} />
  return null
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ ping romu.tiwari
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: 'var(--text-1)' }}>
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: copy */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              I&apos;m actively looking for my next challenge. Whether you&apos;re building AI products,
              need infrastructure expertise, or want to discuss agentic systems — I&apos;d love to connect.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              I respond within 24 hours. Let&apos;s build something impressive together.
            </p>

            <a
              href="mailto:tromu98@gmail.com"
              style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Send me an email
            </a>
          </div>

          {/* Right: contact cards */}
          <div className="space-y-3">
            {contacts.map(({ icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:border-[var(--accent)]"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                >
                  <ContactIcon type={icon} />
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'var(--text-3)' }}>{label}</div>
                  <div
                    className="text-sm font-medium group-hover:text-[var(--accent)] transition-colors"
                    style={{ color: 'var(--text-1)' }}
                  >
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}