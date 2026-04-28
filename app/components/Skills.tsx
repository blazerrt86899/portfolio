type SkillGroup = {
  category: string
  label: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'AI / ML',
    label: 'AI & Machine Learning',
    skills: [
      'LangGraph', 'CrewAI', 'LangChain', 'Bedrock Agents', 'n8n',
      'Agentic AI', 'RAG', 'Hybrid Search', 'Vector Databases', 'RAGAS',
    ],
  },
  {
    category: 'Backend',
    label: 'Backend',
    skills: ['FastAPI', 'Python', 'Flask', 'Celery', 'Redis'],
  },
  {
    category: 'Frontend',
    label: 'Frontend',
    skills: ['Next.js', 'React.js', 'TypeScript'],
  },
  {
    category: 'Database',
    label: 'Database & Storage',
    skills: ['Supabase', 'PostgreSQL', 'pgvector', 'ChromaDB', 'FAISS', 'Pinecone', 'AWS S3'],
  },
  {
    category: 'Cloud',
    label: 'Cloud & Infrastructure',
    skills: ['AWS ECS', 'AWS Lambda', 'EC2', 'AWS Bedrock', 'OpenSearch', 'WAF', 'Load Balancer'],
  },
  {
    category: 'DevOps',
    label: 'DevOps & Containers',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitHub Actions', 'Jenkins', 'Git'],
  },
  {
    category: 'Document',
    label: 'Document Processing',
    skills: ['Unstructured', 'Amazon Textract', 'ScrapingBee', 'uv', 'poetry'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: 'var(--bg-card)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ skills --list-all
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: 'var(--text-1)' }}>
            Technical Skills
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-3)' }}>
            Technologies and tools I work with regularly
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map(group => (
            <div
              key={group.category}
              className="rounded-2xl p-5 transition-colors duration-300 hover:border-[var(--accent)]"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-1)' }}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-2)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}