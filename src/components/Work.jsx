import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Product Landing',
    description: 'A sleek marketing page with motion and 3D accents.',
    tags: ['UI/UX', 'Framer Motion', 'Spline'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Creative Dashboard',
    description: 'Data-rich interface with playful micro-interactions.',
    tags: ['Dashboard', 'Design System'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Brand System',
    description: 'Identity, typography, and components for a modern brand.',
    tags: ['Brand', 'Components'],
    image: 'https://images.unsplash.com/photo-1586267633144-3e2340b1ec2f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFuZCUyMFN5c3RlbXxlbnwwfDB8fHwxNzYzNjQwNDA5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-blue-100/80 max-w-2xl">A snapshot of projects I’ve designed — from product concepts to production interfaces.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl bg-white/10 text-white px-4 py-2 font-semibold border border-white/10 hover:bg-white/15 transition-colors">Start a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
