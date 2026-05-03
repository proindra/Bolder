
const features = [
  {
    icon: 'bolt',
    accent: 'text-primary-container group-hover:bg-primary-container/10 group-hover:border-primary-container/50',
    glow: 'rgba(255,107,0,0.06)',
    title: 'Physics-Based Canvas',
    desc: 'Drop elements anywhere and watch them snap with realistic weight. Our fluid engine handles collisions, gravity, and momentum so you can focus purely on the art.',
    tag: 'Core',
  },
  {
    icon: 'auto_awesome',
    accent: 'text-[#cabeff] group-hover:bg-[#4918c8]/10 group-hover:border-[#4918c8]/50',
    glow: 'rgba(73,24,200,0.06)',
    title: 'AI Style Engine',
    desc: 'Describe a vibe in plain text and watch Bolder generate matching color palettes, texture overlays, and lighting in seconds. Generative design, on your terms.',
    tag: 'AI',
  },
  {
    icon: 'groups',
    accent: 'text-white/80 group-hover:bg-white/5 group-hover:border-white/20',
    glow: 'rgba(255,255,255,0.03)',
    title: 'Real-Time Multiplayer',
    desc: 'See your collaborators\' cursors live on the canvas. Leave comments, assign layers, and ship together. Designed for chaotic creative energy — not boring stand-ups.',
    tag: 'Collab',
  },
  {
    icon: 'folder_special',
    accent: 'text-primary-container group-hover:bg-primary-container/10 group-hover:border-primary-container/50',
    glow: 'rgba(255,107,0,0.06)',
    title: 'Icon Preset Library',
    desc: 'Browse thousands of community-made presets or start from our curated originals. Every preset is fully editable, layer by layer — no flattening, no lock-in.',
    tag: 'Assets',
  },
  {
    icon: 'download',
    accent: 'text-[#cabeff] group-hover:bg-[#4918c8]/10 group-hover:border-[#4918c8]/50',
    glow: 'rgba(73,24,200,0.06)',
    title: 'Multi-Format Export',
    desc: 'Export as `.ico`, `.png`, `.svg`, or `.icns` in any resolution. One-click to your desktop. Your icons, your formats — never locked into a proprietary file.',
    tag: 'Export',
  },
  {
    icon: 'tune',
    accent: 'text-white/80 group-hover:bg-white/5 group-hover:border-white/20',
    glow: 'rgba(255,255,255,0.03)',
    title: 'Non-Destructive Layers',
    desc: 'Every effect, blend mode, and filter sits on its own layer. Reorder, hide, or ramp the opacity of any element without ever touching the original art.',
    tag: 'Editor',
  },
];

const stats = [
  { value: '200K+', label: 'Icons Created' },
  { value: '50K+', label: 'Active Creators' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '<1s', label: 'Export Speed' },
];

export default function Features() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="text-center mb-20 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 uppercase tracking-widest font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
          Everything You Need
        </span>
        <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.06] mb-5">
          Built for the<br />
          <span className="text-white/40 italic font-light">boldest creators.</span>
        </h1>
        <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
          From zero to iconic — Bolder packs every tool you need to design, customize, and deploy breathtaking folder icons into one fluid, fast, and uncompromising workspace.
        </p>
      </section>

      {/* ── Stats Strip ──────────────────────────────── */}
      <div className="glass-card rounded-2xl p-8 mb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-1">{value}</p>
              <p className="text-sm text-white/40 font-light">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature Cards ────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-10 bg-white/15" />
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">Core Features</h2>
          <div className="h-px w-10 bg-white/15" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {features.map(({ icon, accent, glow, title, desc, tag }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-7 flex flex-col group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              {/* radial hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${glow}, transparent 70%)` }}
              />

              <div className="flex items-start justify-between mb-5 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 ${accent}`}>
                  <span className="material-symbols-outlined text-[22px]" data-icon={icon}>{icon}</span>
                </div>
                <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
                  {tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight relative z-10">{title}</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed flex-grow relative z-10">{desc}</p>

              <div className="mt-5 pt-5 border-t border-white/6 flex items-center gap-2 relative z-10">
                <span className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer flex items-center gap-1 font-medium group/link">
                  Learn more
                  <span className="material-symbols-outlined text-[14px] group-hover/link:translate-x-0.5 transition-transform">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Wide Feature Callout ─────────────────────── */}
      <section className="mb-20 max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container blur-[200px] opacity-8 group-hover:opacity-12 transition-opacity duration-700 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: text */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(255,107,0,0.8)]" />
                <span className="text-xs text-white/50 tracking-[0.15em] uppercase font-semibold">Flagship Feature</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight leading-[1.1]">
                The Bolder Editor.<br />
                <span className="text-white/40">Nothing like it.</span>
              </h2>
              <p className="text-base text-white/50 font-light leading-relaxed mb-8 max-w-md">
                A full-blown non-destructive icon editor that lives right in your browser. Three panels, infinite power — presets on the left, canvas in the center, tweaks on the right. No install required.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Layer control', 'Blend modes', 'Real-time preview', 'Batch export'].map(f => (
                  <span key={f} className="inline-flex items-center gap-1.5 text-xs text-white/60 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                    <span className="w-1 h-1 rounded-full bg-primary-container" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: editor preview mockup */}
            <div className="relative h-72 lg:h-auto bg-black/30 overflow-hidden border-l border-white/6 flex items-center justify-center p-8">
              {/* dot grid bg */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}
              />
              {/* mock canvas area */}
              <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/15 group-hover:scale-[1.03] transition-transform duration-700">
                <img alt="Editor canvas preview" className="w-full h-full object-cover" src="./assets/icons/anime_pink_kawaii.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <div className="flex-grow h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container w-[72%] shadow-[0_0_8px_rgba(255,107,0,0.6)]" />
                  </div>
                  <span className="text-[10px] text-primary-container font-semibold">72%</span>
                </div>
              </div>
              {/* floating label */}
              <div className="absolute top-6 right-6 bg-primary-container/15 border border-primary-container/30 text-primary-container text-[10px] font-semibold px-3 py-1.5 rounded-full tracking-widest uppercase backdrop-blur-md">
                Live Editor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="text-center py-24 relative overflow-hidden rounded-3xl border border-white/10 glass-card mb-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-container rounded-full blur-[180px] opacity-10 pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 relative z-10 tracking-tighter">Start designing today.</h2>
        <p className="text-base text-white/40 mb-8 relative z-10 font-light">Free forever. No credit card required.</p>
        <div className="flex items-center justify-center gap-4 relative z-10 flex-wrap">
          <button className="bg-primary-container text-white px-9 py-3.5 rounded-full text-sm font-medium hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] transition-all duration-300 neon-glow">
            Get Bolder Free
          </button>
          <button className="border border-white/20 text-white bg-white/5 backdrop-blur-md px-9 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">
            View Templates →
          </button>
        </div>
      </section>
    </>
  );
}
