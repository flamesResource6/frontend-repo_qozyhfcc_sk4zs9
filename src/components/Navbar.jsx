import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group inline-flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-fuchsia-500 shadow-lg"></div>
              <span className="text-white font-semibold tracking-tight group-hover:text-blue-200 transition-colors">Designer</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="hidden md:flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100/80 hover:text-white transition-colors"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-blue-100/80 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#contact" className="p-2 rounded-lg hover:bg-white/5 text-blue-100/80 hover:text-white transition-colors"><Mail size={18} /></a>
              </div>
            </nav>

            <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg text-blue-100 hover:text-white hover:bg-white/5">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a onClick={() => setOpen(false)} key={item.href} href={item.href} className="px-3 py-2 rounded-lg text-blue-100/90 hover:text-white hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
