type Job = {
  company: string
  role: string
  location: string
  period: string
  current: boolean
  description: string
  tech: string[]
}

const experience: Job[] = [
  {
    company: 'CloudKeeper',
    role: 'Senior DevOps Engineer',
    location: 'Noida, Uttar Pradesh',
    period: 'Mar 2025 – Present',
    current: true,
    description:
      'Building and deploying production-grade agentic AI systems. Architected and shipped three AI automation products end-to-end using LangGraph, CrewAI, RAG pipelines, and AWS infrastructure — all serving live users.',
    tech: ['LangGraph', 'CrewAI', 'FastAPI', 'AWS ECS', 'Docker', 'Python', 'OpenAI'],
  },
  {
    company: 'Publicis Sapient',
    role: 'Associate Infrastructure L2',
    location: 'Noida, Uttar Pradesh',
    period: 'Feb 2022 – Mar 2025',
    current: false,
    description:
      'Managed cloud infrastructure and CI/CD pipelines for enterprise-scale clients. Deep hands-on work in AWS, Kubernetes, Terraform, and DevOps automation across multiple large-scale delivery programs.',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Helm', 'Git'],
  },
  {
    company: 'Torry Harris Business Solutions',
    role: 'Software Engineer – DevOps',
    location: 'Gurgaon, Haryana',
    period: 'Sept 2021 – Feb 2022',
    current: false,
    description:
      'Built DevOps tooling and automation for software delivery pipelines. Worked on container orchestration and CI/CD standardization across projects.',
    tech: ['Docker', 'CI/CD', 'Git', 'Linux', 'Python'],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst',
    location: 'Chennai, Tamil Nadu',
    period: 'Dec 2019 – Jun 2021',
    current: false,
    description:
      'Software development and infrastructure support for enterprise clients. Gained foundational experience in cloud platforms, scripting, and production support.',
    tech: ['Python', 'AWS', 'Git', 'Jenkins', 'Linux'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ git log --experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: 'var(--text-1)' }}>
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experience.map((job, idx) => (
            <div key={idx} className="flex gap-5 md:gap-8">

              {/* Left: dot + connector */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center mt-6 z-10"
                  style={{
                    borderColor: job.current ? 'var(--accent)' : 'var(--border)',
                    background: job.current ? 'var(--accent-dim)' : 'var(--bg)',
                  }}
                >
                  {job.current && (
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: 'var(--accent)', animation: 'pulse-dot 2s ease-in-out infinite' }}
                    />
                  )}
                </div>
                {idx < experience.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2 mb-0"
                    style={{ background: 'var(--border)', minHeight: '2rem' }}
                  />
                )}
              </div>

              {/* Right: card */}
              <div className="flex-1 pb-8">
                <div
                  className="rounded-2xl p-6 hover:border-[var(--accent)] transition-colors duration-300"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  {/* Role + period */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-semibold" style={{ color: 'var(--text-1)' }}>
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                        <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                          {job.company}
                        </span>
                        <span style={{ color: 'var(--text-3)' }}>·</span>
                        <span className="text-sm" style={{ color: 'var(--text-3)' }}>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {job.current && (
                        <span
                          className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{
                            border: '1px solid rgba(34,197,94,0.3)',
                            background: 'var(--accent-dim)',
                            color: 'var(--accent)',
                          }}
                        >
                          Current
                        </span>
                      )}
                      <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md"
                        style={{
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-2)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}