type Cert = {
  name: string
  issuer: string
  code: string
  gradient: string
}

const certs: Cert[] = [
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud Platform',
    code: 'GCP',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    code: 'CKA',
    gradient: 'from-blue-600 to-indigo-400',
  },
  {
    name: 'Terraform Certified Associate',
    issuer: 'HashiCorp',
    code: '002',
    gradient: 'from-purple-500 to-violet-400',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ verify --credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: 'var(--text-1)' }}>
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {certs.map(cert => (
            <div
              key={cert.name}
              className="rounded-2xl p-6 flex flex-col items-center text-center transition-colors duration-300 hover:border-[var(--accent)]"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {/* Badge circle with gradient */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mb-4`}
              >
                <span className="font-mono font-bold text-white text-sm">{cert.code}</span>
              </div>

              <div className="text-xs mb-1 font-mono" style={{ color: 'var(--accent)' }}>
                {cert.issuer}
              </div>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>
                {cert.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}