import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100 selection:bg-blue-500/30">
      <div className="fixed inset-0 -z-0 pointer-events-none opacity-40" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(800px_circle_at_80%_20%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(800px_circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
      </div>

      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />

      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-100/60">© {new Date().getFullYear()} Designer Portfolio. All rights reserved.</p>
            <a href="#top" className="text-sm text-blue-100/80 hover:text-white">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
