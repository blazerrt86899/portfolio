export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: 'var(--accent)' }}
          >
            <span className="font-mono font-bold text-xs" style={{ color: 'var(--accent-fg)' }}>
              RT
            </span>
          </div>
          <span className="text-sm font-medium" style={{ color: 'var(--text-2)' }}>
            Romu Tiwari
          </span>
        </div>

        <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
          Built with Next.js + Tailwind CSS · © 2025
        </p>
      </div>
    </footer>
  )
}