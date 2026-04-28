const miniStats = [
  { value: '3',    label: 'AI Systems in Production' },
  { value: '6+',  label: 'Years Engineering' },
  { value: '85%+',label: 'RAG Relevancy Score' },
  { value: '99.9%',label: 'Platform Uptime' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ cat about.json
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: 'var(--text-1)' }}>
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Terminal window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot" style={{ background: '#ef4444' }} />
              <div className="terminal-dot" style={{ background: '#f59e0b' }} />
              <div className="terminal-dot" style={{ background: '#22c55e' }} />
              <span className="ml-3 text-xs font-mono" style={{ color: 'var(--text-3)' }}>
                romu@portfolio ~ $
              </span>
            </div>
            <div className="terminal-body">
              {/* Line: const romu = { */}
              <div>
                <span style={{ color: '#7c6af7' }}>const</span>
                <span style={{ color: 'var(--text-1)' }}> romu </span>
                <span style={{ color: 'var(--text-3)' }}>= {'{'}</span>
              </div>
              <div className="pl-5 space-y-0.5">
                <TermLine k="name"        v='"Romu Tiwari"'         vc="#fbbf24" />
                <TermLine k="role"        v='"Agentic AI Engineer"' vc="#fbbf24" />
                <TermLine k="experience"  v='"6+ years"'            vc="#f97316" />
                <TermLine k="location"    v='"Noida, India"'        vc="#fbbf24" />
                <TermLine k="company"     v='"CloudKeeper"'         vc="#fbbf24" />
                <div>
                  <span style={{ color: '#60a5fa' }}>focus</span>
                  <span style={{ color: 'var(--text-3)' }}>: [</span>
                </div>
                <div className="pl-5 space-y-0.5">
                  <TermStr v='"LangGraph"' />
                  <TermStr v='"RAG Pipelines"' />
                  <TermStr v='"AWS Infrastructure"' />
                  <TermStr v='"Production AI"' last />
                </div>
                <div><span style={{ color: 'var(--text-3)' }}>],</span></div>
                <div>
                  <span style={{ color: '#60a5fa' }}>status</span>
                  <span style={{ color: 'var(--text-3)' }}>: </span>
                  <span style={{ color: '#34d399' }}>&quot;open_to_opportunities&quot;</span>
                </div>
              </div>
              <div><span style={{ color: 'var(--text-3)' }}>{'}'}</span></div>
            </div>
          </div>

          {/* About text + stats */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              I&apos;m a <strong style={{ color: 'var(--text-1)' }}>DevOps-turned-Agentic AI Engineer</strong> with
              6+ years of engineering experience. My journey started deep in infrastructure — Docker, Kubernetes,
              AWS, CI/CD — and evolved into building production AI systems that actually ship.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              I&apos;ve built and deployed{' '}
              <strong style={{ color: 'var(--text-1)' }}>three AI systems end-to-end</strong> at CloudKeeper:
              a full-stack RAG platform (<span style={{ color: 'var(--accent)' }}>opentrace.online</span>),
              an intelligent Zendesk ticket classifier using LangGraph, and a multi-agent first-response
              automation system using CrewAI.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              What sets me apart is the combination: I don&apos;t just prototype AI — I ship it. With deep
              infrastructure fluency across{' '}
              <strong style={{ color: 'var(--text-1)' }}>AWS ECS, Docker, CI/CD</strong>, I take an AI system
              from idea to production with 99.9% uptime.
            </p>

            {/* Mini stat grid */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              {miniStats.map(s => (
                <div
                  key={s.label}
                  className="rounded-xl p-4"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-3)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TermLine({ k, v, vc }: { k: string; v: string; vc: string }) {
  return (
    <div>
      <span style={{ color: '#60a5fa' }}>{k}</span>
      <span style={{ color: '#a1a1aa' }}>: </span>
      <span style={{ color: vc }}>{v}</span>
      <span style={{ color: '#a1a1aa' }}>,</span>
    </div>
  )
}

function TermStr({ v, last }: { v: string; last?: boolean }) {
  return (
    <div>
      <span style={{ color: '#fbbf24' }}>{v}</span>
      {!last && <span style={{ color: '#a1a1aa' }}>,</span>}
    </div>
  )
}