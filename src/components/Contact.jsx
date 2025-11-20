import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)

    // At this stage we mock success. Later we can hook to backend/email.
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold text-white">Let’s work together</h2>
          <p className="mt-2 text-blue-100/85">Tell me about your project and I’ll get back to you.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-slate-950/30 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-slate-950/30 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
            </div>
            <input name="company" placeholder="Company (optional)" className="w-full rounded-xl bg-slate-950/30 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <textarea name="message" required rows="5" placeholder="Project details" className="w-full rounded-xl bg-slate-950/30 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-white/30" />

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-blue-100 transition-colors">Send message</button>
              {status && <p className="text-sm text-blue-100/80">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
