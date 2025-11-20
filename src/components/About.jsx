import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="text-3xl font-bold text-white">About</h2>
          <p className="mt-4 text-blue-100/85 leading-relaxed">
            I’m a multi-disciplinary designer focused on creating delightful digital products. My process blends research, rapid prototyping, and a strong aesthetic foundation. Recently, I’ve been exploring real-time 3D and playful interactions to deliver memorable experiences.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-blue-100/80">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="font-semibold text-white">Expertise</p>
              <p className="mt-1">Product Design, Interaction, Motion</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="font-semibold text-white">Tools</p>
              <p className="mt-1">Figma, Framer, Spline, Blender</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="font-semibold text-white">Location</p>
              <p className="mt-1">Remote • Worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
