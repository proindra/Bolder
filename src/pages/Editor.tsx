
export default function Editor() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 relative min-h-[calc(100vh-12rem)]">

      {/* ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-primary-container rounded-full mix-blend-screen filter blur-[200px] opacity-10" />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-[#4918c8] rounded-full mix-blend-screen filter blur-[250px] opacity-10" />
      </div>

      {/* ── Left Panel: Presets ───────────────────────── */}
      <aside className="lg:col-span-3 flex flex-col gap-4 h-[calc(100vh-12rem)] overflow-y-auto pr-1 custom-scrollbar relative z-10">
        <h2 className="text-lg font-semibold text-white tracking-tight px-1">Presets</h2>

        {/* Active preset */}
        <div className="glass-panel rounded-2xl p-5 cursor-pointer glow-active">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-semibold bg-primary-container text-white px-2 py-0.5 rounded uppercase tracking-widest">PRO</span>
            <span className="material-symbols-outlined text-primary-container text-[18px]">favorite</span>
          </div>
          <img alt="Neon Pulse preset" className="w-full h-28 object-cover rounded-xl mb-3" src="./assets/icons/anime_pink_kawaii.png" />
          <h3 className="text-sm font-semibold text-white mb-0.5">Neon Pulse</h3>
          <p className="text-[11px] text-white/40 uppercase tracking-widest">12 Variations</p>
        </div>

        {/* Inactive presets */}
        {[
          { label: 'Solar Flare', vars: '8 Variations', src: './assets/icons/anime_shonen.png' },
          { label: 'Crimson Void', vars: '5 Variations', src: './assets/icons/flame_folder.png' },
        ].map(({ label, vars, src }) => (
          <div key={label} className="glass-panel rounded-2xl p-5 cursor-pointer hover:bg-white/[0.04] transition-colors duration-300">
            <img alt={label} className="w-full h-28 object-cover rounded-xl mb-3" src={src} />
            <h3 className="text-sm font-semibold text-white mb-0.5">{label}</h3>
            <p className="text-[11px] text-white/40 uppercase tracking-widest">{vars}</p>
          </div>
        ))}
      </aside>

      {/* ── Center: Canvas ────────────────────────────── */}
      <div className="lg:col-span-6 glass-panel rounded-2xl flex flex-col h-[calc(100vh-12rem)] relative overflow-hidden group z-10">

        {/* Canvas toolbar */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-white/8 bg-white/[0.015] shrink-0">
          <div className="flex gap-1.5">
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white/70 text-[18px]">undo</span>
            </button>
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white/70 text-[18px]">redo</span>
            </button>
          </div>
          <div className="text-xs text-white/40 flex gap-4 tracking-widest font-medium">
            <span>100%</span>
            <span>1080×1080</span>
          </div>
          <div className="flex gap-1.5">
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white/70 text-[18px]">layers</span>
            </button>
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white/70 text-[18px]">code</span>
            </button>
          </div>
        </div>

        {/* Canvas area */}
        <div className="flex-grow flex items-center justify-center p-8 relative bg-black/20">
          {/* dot grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}
          />
          {/* canvas content */}
          <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
            <img alt="Canvas preview" className="w-full h-full object-cover" src="./assets/icons/skeuomorphic_folder.png" />
            <div className="absolute -top-4 -right-4 bg-primary-container text-white text-[10px] font-bold px-4 py-1.5 rounded-full rotate-[12deg] shadow-lg border border-white/20 z-10 tracking-widest uppercase">
              *NEW*
            </div>
          </div>
        </div>

        {/* Canvas footer */}
        <div className="px-5 py-4 border-t border-white/8 bg-white/[0.015] flex justify-center gap-3 shrink-0">
          <button className="bg-white/8 hover:bg-white/12 border border-white/10 text-white px-7 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors tracking-wide">
            <span className="material-symbols-outlined text-[16px]">play_arrow</span>
            PREVIEW
          </button>
          <button className="bg-primary-container text-white px-7 py-2.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 tracking-wide neon-glow">
            EXPORT
          </button>
        </div>
      </div>

      {/* ── Right Panel: Tweak ────────────────────────── */}
      <aside className="lg:col-span-3 flex flex-col gap-4 h-[calc(100vh-12rem)] overflow-y-auto pl-1 custom-scrollbar relative z-10">
        <h2 className="text-lg font-semibold text-white tracking-tight px-1">Tweak</h2>

        {/* Layers */}
        <div className="glass-panel rounded-2xl p-5">
          <h3 className="text-[10px] font-semibold text-white/40 mb-4 uppercase tracking-widest">Base Structure</h3>
          <div className="space-y-2.5">
            {[
              { src: './assets/icons/zen_bamboo.png', label: 'Geometry 01', sub: 'Visible', icon: 'visibility', opacity: '' },
              { src: './assets/icons/starry_night.png', label: 'Texture 02', sub: 'Hidden', icon: 'visibility_off', opacity: 'opacity-50' },
            ].map(({ src, label, sub, icon, opacity }) => (
              <div key={label} className={`flex items-center gap-3 bg-white/5 px-3 py-2.5 rounded-xl border border-white/5 ${opacity}`}>
                <img alt={label} className="w-10 h-10 rounded-lg object-cover shrink-0" src={src} />
                <div className="flex-grow min-w-0">
                  <p className="text-sm font-medium text-white truncate">{label}</p>
                  <p className="text-[11px] text-white/40">{sub}</p>
                </div>
                <span className="material-symbols-outlined text-white/40 hover:text-white cursor-pointer transition-colors text-[18px] shrink-0">{icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Properties */}
        <div className="glass-panel rounded-2xl p-5 flex-grow">
          <h3 className="text-[10px] font-semibold text-white/40 mb-5 uppercase tracking-widest">Properties</h3>
          <div className="space-y-7">
            {/* Intensity */}
            <div>
              <div className="flex justify-between text-[11px] mb-2.5 font-semibold text-white/50 tracking-widest uppercase">
                <span>Intensity</span>
                <span className="text-primary-container">85%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-[85%] shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
              </div>
            </div>
            {/* Distortion */}
            <div>
              <div className="flex justify-between text-[11px] mb-2.5 font-semibold text-white/50 tracking-widest uppercase">
                <span>Distortion</span>
                <span className="text-white/40">42%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white/30 w-[42%]" />
              </div>
            </div>
            {/* Color swatches */}
            <div>
              <span className="text-[10px] font-semibold text-white/40 block mb-3 uppercase tracking-widest">Primary Glow</span>
              <div className="flex gap-3 flex-wrap">
                {[
                  'bg-primary-container ring-2 ring-white/30 shadow-[0_0_12px_rgba(255,107,0,0.5)]',
                  'bg-[#4918c8] border border-white/10',
                  'bg-[#ccff00] border border-white/10',
                  'bg-white border border-white/20',
                ].map((cls, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full cursor-pointer hover:scale-110 transition-transform ${cls}`} />
                ))}
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center cursor-pointer border border-white/20 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-[14px] text-white/60">add</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Render Node */}
        <div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
          <h3 className="text-[10px] font-semibold text-white/40 mb-3.5 uppercase tracking-widest">Render Node</h3>
          <div className="relative h-20 rounded-xl overflow-hidden border border-white/10">
            <img alt="Render node" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="./assets/icons/anime_cyber_moon.png" />
            <div className="absolute inset-0 bg-primary-container/10 mix-blend-color" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-primary-container rounded-full shadow-[0_0_12px_rgba(255,107,0,1)] animate-pulse" />
          </div>
        </div>
      </aside>
    </div>
  );
}
