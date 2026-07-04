import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-950">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />

        {/* Glow divider */}
        <div className="max-w-[1700px] mx-auto px-6">
          <div className="glow-line" />
        </div>

        <About />

        <div className="max-w-[1700px] mx-auto px-6">
          <div className="glow-line" />
        </div>

        <Projects />

        <div className="max-w-[1700px] mx-auto px-6">
          <div className="glow-line" />
        </div>

        <Skills />

        <div className="max-w-[1700px] mx-auto px-6">
          <div className="glow-line" />
        </div>

        <Contact />
      </main>
    </div>
  )
}
