
export default function TemplatesGallery() {
  const filters = ['All', 'Minimal', 'Vibrant', 'Dark', 'Neon'];

  const templates = [
    {
      title: 'Cyberpunk Essentials',
      desc: 'Neon accents & stark contrasts.',
      badge: 'PRO',
      badgeColor: 'text-primary-container border-primary-container/40 bg-primary-container/10',
      images: ['./assets/icons/anime_cyber_moon.png', './assets/icons/flame_folder.png'],
    },
    {
      title: 'Minimalist Mono',
      desc: 'Clean lines, pure focus.',
      badge: 'FREE',
      badgeColor: 'text-white/50 border-white/20 bg-white/5',
      images: ['./assets/icons/anime_shonen.png', './assets/icons/skeuomorphic_folder.png'],
    },
    {
      title: 'Pastel Dreams',
      desc: 'Soft gradients & ethereal vibes.',
      badge: 'FREE',
      badgeColor: 'text-white/50 border-white/20 bg-white/5',
      images: ['./assets/icons/anime_pink_kawaii.png', './assets/icons/starry_night.png'],
    },
    {
      title: 'Studio Pro',
      desc: 'High-fidelity tools for creators.',
      badge: 'PRO',
      badgeColor: 'text-primary-container border-primary-container/40 bg-primary-container/10',
      images: ['./assets/icons/skeuomorphic_folder.png', './assets/icons/zen_bamboo.png'],
    },
  ];

  return (
    <>
      {/* ── Header & Filter Bar ───────────────────────── */}
      <section className="mb-10">
        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8">Template Gallery</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center glass-card p-5 rounded-2xl">
          <div className="relative w-full sm:w-72 shrink-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-[20px]">search</span>
            <input
              className="w-full bg-white/5 text-white border border-white/10 focus:border-primary-container/60 rounded-xl py-2.5 pl-10 pr-4 outline-none transition-colors text-sm placeholder:text-white/30"
              placeholder="Search templates…"
              type="text"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`px-4 py-1.5 rounded-full border text-xs font-medium transition-colors ${
                  i === 0
                    ? 'border-primary-container/60 bg-primary-container/15 text-white'
                    : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Template Cards ────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {templates.map(({ title, desc, badge, badgeColor, images }) => (
          <article
            key={title}
            className="glass-card rounded-2xl p-6 flex flex-col group relative overflow-hidden glow-effect transition-all hover:-translate-y-1 hover:border-white/15 duration-300"
          >
            {/* radial hover glow */}
            <div className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,107,0,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top row */}
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">{title}</h3>
                <p className="text-sm text-white/50">{desc}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-md border text-[10px] font-semibold tracking-widest uppercase ${badgeColor}`}>
                {badge}
              </span>
            </div>

            {/* Preview thumbnails */}
            <div className="grid grid-cols-2 gap-3 mb-5 flex-grow">
              {images.map((src, idx) => (
                <div key={idx} className="aspect-square bg-black/20 rounded-xl border border-white/8 overflow-hidden">
                  <img
                    alt={title}
                    className="w-full h-full object-cover opacity-85 mix-blend-luminosity group-hover:opacity-100 transition-opacity duration-500"
                    src={src}
                  />
                </div>
              ))}
            </div>

            {/* Action */}
            <button className="w-full py-2.5 bg-transparent border border-white/10 rounded-xl text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center gap-2 font-medium">
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              Preview Collection
            </button>
          </article>
        ))}
      </section>

      {/* ── Hidden preloads ───────────────────────────── */}
      <div className="hidden" aria-hidden="true">
        <img alt="" src="./assets/icons/zen_bamboo.png" />
        <img alt="" src="./assets/icons/anime_pink_kawaii.png" />
      </div>
    </>
  );
}
