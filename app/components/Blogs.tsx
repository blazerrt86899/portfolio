type Blog = {
  title: string
  description: string
  tag: string
  readTime: string
}

const blogs: Blog[] = [
  {
    title: 'LLM Cost Optimization: Best Practices',
    description:
      'Practical strategies for reducing LLM costs in production — prompt caching, model selection, batching, and token budgeting techniques that actually move the needle.',
    tag: 'AI / LLM',
    readTime: '8 min',
  },
  {
    title: 'Use of CrewAI to Automate the First Responder Agent in Zendesk',
    description:
      'A deep dive into building a multi-agent CrewAI system that automates Zendesk first-response handling — from architecture decisions to production deployment.',
    tag: 'Agentic AI',
    readTime: '12 min',
  },
  {
    title: 'Resolving 502 Errors in AWS Fargate ECS: A Real-World Case Study',
    description:
      'Debugging production 502 errors on AWS Fargate — tracing through ALB, ECS task networking, and container health check configurations.',
    tag: 'AWS / DevOps',
    readTime: '6 min',
  },
]

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="py-24 px-6"
      style={{ background: 'var(--bg-card)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ cat posts/*.md
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: 'var(--text-1)' }}>
            Blog Posts
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-3)' }}>
            Writing about AI, DevOps, and production engineering
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-[var(--accent)] cursor-pointer group"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full"
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-3)',
                  }}
                >
                  {blog.tag}
                </span>
                <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
                  {blog.readTime} read
                </span>
              </div>

              <h3
                className="text-sm font-semibold leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors flex-1"
                style={{ color: 'var(--text-1)' }}
              >
                {blog.title}
              </h3>

              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-3)' }}>
                {blog.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}