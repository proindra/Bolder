
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
          <a href="https://youtu.be/gTbrFggLJLs?si=Zi90jm9tTyf4rwNL" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white bg-white/5 backdrop-blur-md px-8 py-3.5 rounded-full text-sm md:text-base hover:bg-white/10 transition-all duration-300 flex items-center gap-2 font-medium">
            <span className="material-symbols-outlined text-[18px]" data-icon="play_arrow">play_arrow</span>
            Watch Demo
          </a>
        </div>
      </section>


      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="mb-16 text-center py-28 relative overflow-hidden rounded-3xl border border-white/10 glass-card">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-container/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container rounded-full blur-[200px] opacity-10 pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 relative z-10 tracking-tighter">Ready to Build?</h2>
        <div className="flex items-center justify-center gap-4 relative z-10 flex-wrap">
          <button className="bg-primary-container text-white text-base px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] transition-all duration-500 font-medium tracking-wide">
            Get Bolder Free
          </button>
          <a href="#/apply" className="border border-white/20 text-white bg-white/5 backdrop-blur-md text-base px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium">
            How to Apply Icons →
          </a>
        </div>
      </section>
    </>
  );
}
