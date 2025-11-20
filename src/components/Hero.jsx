import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80">
              Available for freelance • 2025
            </p>
            <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight text-white">
              Hi, I’m <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">a designer</span> crafting modern, playful interfaces
            </h1>
            <p className="mt-6 text-lg text-blue-100/90 max-w-xl">
              I blend interaction, motion, and 3D to shape memorable product experiences. Here’s a selection of work across web, brand and creative tech.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#work" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-blue-100 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="rounded-xl bg-white/10 text-white px-5 py-3 font-semibold border border-white/10 hover:bg-white/15 transition-colors">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
