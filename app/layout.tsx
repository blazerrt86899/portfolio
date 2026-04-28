import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#080808' },
  ],
}

export const metadata: Metadata = {
  title: 'Romu Tiwari — Agentic AI Engineer',
  description:
    'DevOps-turned-Agentic AI Engineer with 6+ years building production AI systems using LangGraph, CrewAI, and RAG pipelines on AWS.',
  keywords: [
    'Agentic AI', 'LangGraph', 'RAG', 'CrewAI', 'FastAPI', 'AWS', 'DevOps',
    'AI Engineer', 'Romu Tiwari',
  ],
  openGraph: {
    type: 'website',
    title: 'Romu Tiwari — Agentic AI Engineer',
    description:
      'DevOps-turned-Agentic AI Engineer building production AI systems with LangGraph, CrewAI, and RAG pipelines on AWS.',
    siteName: 'Romu Tiwari Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Romu Tiwari — Agentic AI Engineer',
    description:
      'Building production AI systems with LangGraph, CrewAI, and RAG pipelines on AWS.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}