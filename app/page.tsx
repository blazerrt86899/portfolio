import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import Projects        from './components/Projects'
import Experience      from './components/Experience'
import Skills          from './components/Skills'
import Certifications  from './components/Certifications'
import Blogs           from './components/Blogs'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}