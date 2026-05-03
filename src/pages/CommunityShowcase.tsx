
const communityItems = [
  { name: 'Deep Blue Secure', author: 'J. Doe', initials: 'JD', gradient: 'from-blue-500 to-purple-600', src: './assets/icons/skeuomorphic_folder.png', aspect: 'aspect-square' },
  { name: 'Neon Cherry', author: 'Sarah A.', initials: 'SA', gradient: 'from-pink-500 to-rose-600', src: './assets/icons/anime_shonen.png', aspect: 'aspect-[4/5]' },
  { name: 'Golden Vault', author: 'M. Rossi', initials: 'MR', gradient: 'from-yellow-500 to-orange-600', src: './assets/icons/anime_cyber_moon.png', aspect: 'aspect-square' },
  { name: 'Crimson Core', author: 'K. Vane', initials: 'KV', gradient: 'from-red-500 to-orange-600', src: './assets/icons/starry_night.png', aspect: 'aspect-[3/4]' },
  { name: 'Eco System', author: 'E. Lin', initials: 'EL', gradient: 'from-green-500 to-emerald-600', src: './assets/icons/flame_folder.png', aspect: 'aspect-square' },
  { name: 'Ultraviolet Sync', author: 'T. Wright', initials: 'TW', gradient: 'from-purple-500 to-indigo-600', src: './assets/icons/zen_bamboo.png', aspect: 'aspect-[4/3]' },
  { name: 'Matrix Matrix', author: 'N. X', initials: 'NX', gradient: 'from-green-400 to-teal-600', src: './assets/icons/anime_pink_kawaii.png', aspect: 'aspect-square' },
];

export default function CommunityShowcase() {
  return (
    <>
      {/* ── Spotlight Hero ────────────────────────────── */}
      <section className="mb-16 relative">
        <div className="glass-card rounded-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            {/* Text */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
                <span className="text-xs text-white/60 tracking-[0.15em] uppercase font-semibold">Community Spotlight</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tighter leading-[1.1]">
                Neon Nexus<br /><span className="text-white/40">Collection</span>
              </h1>
              <p className="text-base text-white/50 font-light leading-relaxed mb-8 max-w-md">
                Explore the breathtaking 'Neon Nexus' pack by <strong className="text-white/70">@cybershaper</strong>. A masterclass in high-contrast gradients and precise geometric layering.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <button className="bg-primary-container text-white px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.2)]">
                  View Collection
                </button>
                <button className="bg-transparent border border-white/15 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors backdrop-blur-md">
                  Follow Creator
                </button>
              </div>
            </div>
            {/* Image */}
            <div className="relative h-72 lg:h-auto overflow-hidden bg-black/30">
              <img
                alt="Neon Nexus spotlight collection"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                src="./assets/icons/anime_pink_kawaii.png"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,13,13,0.85)] via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.85)] via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sort Bar ─────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8 border-b border-white/8 pb-5">
        <h2 className="text-2xl font-semibold text-white tracking-tight">Made with Bolder</h2>
        <div className="flex gap-2 items-center">
          <button className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10 backdrop-blur-md">Trending</button>
          <button className="px-4 py-2 rounded-full text-white/40 text-sm font-medium hover:text-white transition-colors">Recent</button>
          <button className="px-4 py-2 rounded-full text-white/40 text-sm font-medium hover:text-white transition-colors">Curated</button>
          <button className="p-2 rounded-full text-white/40 hover:text-white transition-colors ml-1 bg-white/5 border border-white/10">
            <span className="material-symbols-outlined text-[18px] block" data-icon="filter_list">filter_list</span>
          </button>
        </div>
      </div>

      {/* ── Masonry Grid ─────────────────────────────── */}
      <div className="masonry-grid">
        {communityItems.map(({ name, author, initials, gradient, src, aspect }) => (
          <div key={name} className="masonry-item glass-card rounded-2xl overflow-hidden group">
            <div className={`relative ${aspect} overflow-hidden bg-black/20 p-6 flex items-center justify-center`}>
              <img
                alt={name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                src={src}
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <button className="bg-primary-container text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                  <span className="material-symbols-outlined text-[14px]" data-icon="content_copy">content_copy</span>
                  Remix
                </button>
              </div>
            </div>
            {/* Card footer */}
            <div className="px-4 py-3 border-t border-white/6 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-[11px] font-semibold shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm text-white font-medium leading-tight">{name}</p>
                  <p className="text-[11px] text-white/40">by {author}</p>
                </div>
              </div>
              <button className="text-white/30 hover:text-red-400 transition-colors">
                <span className="material-symbols-outlined text-[18px]" data-icon="favorite">favorite</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Load More ────────────────────────────────── */}
      <div className="flex justify-center mt-12">
        <button className="bg-transparent border border-white/15 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors backdrop-blur-md flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]" data-icon="refresh">refresh</span>
          Load More
        </button>
      </div>
    </>
  );
}
