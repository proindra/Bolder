
export default function LandingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="min-h-[76vh] flex flex-col items-center justify-center text-center relative mb-24 pt-4">
        <div className="relative w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 mb-6 group perspective-1000">
          <div className="absolute inset-0 bg-primary-container rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 scale-150" />
          <img
            alt="Bolder hero folder icon"
            className="relative w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-700 ease-out"
            src="./assets/icons/anime_pink_kawaii.png"
          />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-4 max-w-4xl mx-auto leading-[1.08] tracking-tighter">
          DESIGN WITHOUT <br />
          <span className="text-white/50 italic font-light">BOUNDARIES.</span>
        </h1>

        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-8 font-light tracking-wide leading-relaxed">
          Break the grid. Bend the rules. Bolder is the design tool for the generation that refuses to blend in.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="bg-primary-container text-white text-sm md:text-base px-8 py-3.5 rounded-full neon-glow hover:opacity-90 hover:-translate-y-1 transition-all duration-300 font-medium tracking-wide">
            Ignite Ideas
          </button>
          <button className="border border-white/20 text-white bg-white/5 backdrop-blur-md px-8 py-3.5 rounded-full text-sm md:text-base hover:bg-white/10 transition-all duration-300 flex items-center gap-2 font-medium">
            <span className="material-symbols-outlined text-[18px]" data-icon="play_arrow">play_arrow</span>
            Watch Demo
          </button>
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────── */}
      <section className="mb-24 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-10 bg-white/20" />
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em]">How it Works</h2>
          <div className="h-px w-10 bg-white/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-7xl mx-auto">
          {/* Phase 01 – large card */}
          <div className="glass-card rounded-2xl p-8 md:p-12 col-span-1 md:col-span-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-container blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">Phase 01</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-medium text-white mb-3 tracking-tight">Drag, Drop, Destroy.</h3>
                <p className="text-white/50 max-w-md font-light leading-relaxed text-base md:text-lg">
                  Our fluid canvas lets you compose with zero constraints. Physics-based placement means elements land with impact.
                </p>
              </div>
              <div className="mt-10 rounded-xl overflow-hidden border border-white/10 relative h-64 shadow-2xl">
                <img
                  alt="Phase 01 canvas preview"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="./assets/icons/skeuomorphic_folder.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Phase 02 – small card */}
          <div className="glass-card rounded-2xl p-8 col-span-1 md:col-span-4 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-container/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4918c8]" />
                <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">Phase 02</span>
              </div>
              <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Remix Reality.</h3>
              <p className="text-white/50 mb-8 flex-grow font-light leading-relaxed text-sm">
                Apply non-destructive, wild filters and generative textures in real-time. Make it yours.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    alt="Remix texture 1"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src="./assets/icons/flame_folder.png"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    alt="Remix texture 2"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 delay-75"
                    src="./assets/icons/zen_bamboo.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature – Instant Publish */}
          <div className="glass-card rounded-2xl p-7 col-span-1 md:col-span-6 flex items-start gap-5 group hover:bg-white/[0.04] transition-colors duration-500">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary-container/50 group-hover:bg-primary-container/10 transition-all duration-500">
              <span className="material-symbols-outlined text-xl text-white/80 group-hover:text-primary-container transition-colors" data-icon="bolt">bolt</span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-1.5 tracking-tight">Instant Publish</h4>
              <p className="text-white/50 font-light leading-relaxed text-sm">Push your creations live to the ether with zero friction. One click deployment.</p>
            </div>
          </div>

          {/* Feature – Multiplayer */}
          <div className="glass-card rounded-2xl p-7 col-span-1 md:col-span-6 flex items-start gap-5 group hover:bg-white/[0.04] transition-colors duration-500">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#4918c8]/50 group-hover:bg-[#4918c8]/10 transition-all duration-500">
              <span className="material-symbols-outlined text-xl text-white/80 group-hover:text-[#4918c8] transition-colors" data-icon="groups">groups</span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-1.5 tracking-tight">Multiplayer Chaos</h4>
              <p className="text-white/50 font-light leading-relaxed text-sm">Design with your squad in real-time. See their cursors, feel the energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="mb-16 text-center py-28 relative overflow-hidden rounded-3xl border border-white/10 glass-card">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-container/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container rounded-full blur-[200px] opacity-10 pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 relative z-10 tracking-tighter">Ready to Build?</h2>
        <button className="relative z-10 bg-primary-container text-white text-base px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] transition-all duration-500 font-medium tracking-wide">
          Get Bolder Free
        </button>
      </section>
    </>
  );
}
