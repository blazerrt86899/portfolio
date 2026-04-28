import { ExternalLink, Lock } from 'lucide-react'

type Project = {
  id: number
  name: string
  tagline: string
  org: string
  live: string | null
  status: 'live' | 'internal'
  description: string
  highlights: string[]
  tech: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Opentrace',
    tagline: 'Full Stack AI Document Intelligence Platform',
    org: 'CloudKeeper',
    live: 'https://opentrace.online',
    status: 'live',
    description:
      'Production multi-tenant RAG platform enabling teams to retrieve document-grounded answers in under 2 minutes. Serves 100+ concurrent users with 95% reduction in manual search time.',
    highlights: [
      '9-stage async document processing pipeline (Celery + Redis)',
      'LangGraph multi-agent orchestration with supervisor routing',
      'Hybrid retrieval: Vector + Keyword with Cohere reranking',
      '85%+ retrieval relevancy via RAGAS evaluation framework',
    ],
    tech: ['Next.js', 'FastAPI', 'LangGraph', 'GPT-4o', 'Supabase', 'pgvector', 'Celery', 'Redis', 'AWS ECS', 'Docker', 'Clerk'],
  },
  {
    id: 2,
    name: 'APN Ticket Classifier',
    tagline: 'AWS APN Support Ticket Classifier — Agentic AI Automation',
    org: 'CloudKeeper (Internal)',
    live: null,
    status: 'internal',
    description:
      'Event-driven AI system that auto-categorizes AWS APN support tickets into 12+ categories — eliminating 100% of manual triaging and reducing routing time from 4 hours to under 30 seconds.',
    highlights: [
      '500+ daily tickets, 1,200+ at peak with Lambda + SQS',
      'NLP preprocessing improved LLM accuracy from 72% to 91%',
      '85% reduction in misrouted tickets via intent classifier',
      '60% lower infra cost vs always-on compute',
    ],
    tech: ['LangGraph', 'FastAPI', 'Python', 'Claude 4.5', 'AWS Bedrock', 'Zendesk APIs', 'AWS Lambda', 'SQS'],
  },
  {
    id: 3,
    name: 'Zendesk First Response Agent',
    tagline: 'Multi-Agent AI Automation for Tier-1 Support',
    org: 'CloudKeeper (Internal)',
    live: null,
    status: 'internal',
    description:
      'Multi-agent CrewAI system that eliminates 80% of manual first-response effort by auto-summarizing tickets, researching AWS docs, and generating engineer-ready internal notes.',
    highlights: [
      'Ticket triage time reduced from 45 mins → 6 mins',
      '200+ tickets/day with conditional LLM-based flow routing',
      '1,500+ resolutions in searchable knowledge base (3 months)',
      '3 specialized agents: Summarizer, Analyst, Drafter',
    ],
    tech: ['CrewAI', 'Python', 'OpenAI API', 'SerperDevTool', 'Zendesk APIs'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ ls -la ./projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: 'var(--text-1)' }}>
            Featured Projects
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-3)' }}>
            AI systems I&apos;ve architected and shipped to production
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              className="rounded-2xl p-6 lg:p-8 hover:border-[var(--accent)] transition-colors duration-300 group"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
                      0{idx + 1}
                    </span>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{ border: '1px solid var(--border)', color: 'var(--text-3)' }}
                    >
                      {p.org}
                    </span>
                    {p.status === 'live' ? (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          border: '1px solid rgba(34,197,94,0.3)',
                          background: 'var(--accent-dim)',
                          color: 'var(--accent)',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--accent)', animation: 'pulse-dot 2s ease-in-out infinite' }}
                        />
                        Live
                      </span>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full"
                        style={{ border: '1px solid var(--border)', color: 'var(--text-3)' }}
                      >
                        <Lock size={10} />
                        Internal
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors"
                    style={{ color: 'var(--text-1)' }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-3)' }}>{p.tagline}</p>
                </div>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'var(--accent)', color: 'var(--accent-fg)' }}
                    className="flex items-center gap-1.5 self-start px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
                  >
                    <ExternalLink size={14} />
                    Live Site
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-2)' }}>
                {p.description}
              </p>

              {/* Highlights */}
              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {p.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-3)' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}