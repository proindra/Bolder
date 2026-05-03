
const steps = [
  {
    num: '01',
    accent: 'bg-primary-container',
    title: 'Find Your Icon',
    desc: 'Download your favorite `.ico` file. Save it somewhere safe, like Documents or a dedicated "Custom Icons" folder.',
    src: './assets/icons/skeuomorphic_folder.png',
    span: '',
    wide: false,
  },
  {
    num: '02',
    accent: 'bg-[#4918c8]',
    title: 'Right-Click & Properties',
    desc: 'Locate the folder you want to upgrade. Right-click on it and select "Properties" from the context menu.',
    src: './assets/icons/anime_shonen.png',
    hint: 'ALT + ENTER',
    span: 'md:col-span-2',
    wide: true,
  },
  {
    num: '03',
    accent: 'bg-primary-container',
    title: 'Hit "Customize"',
    desc: 'In the Properties window, navigate to the far right tab labeled "Customize". This is where the magic happens.',
    src: './assets/icons/anime_cyber_moon.png',
    span: '',
    wide: false,
  },
  {
    num: '04',
    accent: 'bg-[#4918c8]',
    title: 'Change Icon',
    desc: 'Look for the "Folder icons" section at the bottom. Click the shiny "Change Icon..." button.',
    src: './assets/icons/starry_night.png',
    span: '',
    wide: false,
  },
  {
    num: '05',
    accent: 'bg-primary-container',
    title: 'Browse & Select',
    desc: 'Click "Browse…" to find the `.ico` file you downloaded in Step 1. Select it, and click "OK".',
    src: './assets/icons/flame_folder.png',
    span: '',
    wide: false,
  },
];

export default function ApplyGuide() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 uppercase tracking-widest font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
          Step-by-step Guide
        </span>
        <h1 className="text-5xl md:text-6xl font-medium text-white mb-5 tracking-tighter leading-[1.08]">
          Level Up Your Folders
        </h1>
        <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
          Ditch the boring manila. Follow these 6 steps to apply custom icons and make your workspace unmistakably yours.
        </p>
      </div>

      {/* ── Steps Grid ───────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">

        {/* Steps 01–05 */}
        {steps.map(({ num, accent, title, desc, src, hint, span, wide }) => (
          <div key={num} className={`bento-card rounded-2xl p-7 flex flex-col relative group ${span}`}>
            {/* Step label */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className={`w-1.5 h-1.5 rounded-full ${accent}`} />
              <span className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.15em]">Step {num}</span>
            </div>

            {wide ? (
              <div className="flex flex-col md:flex-row gap-6 flex-grow">
                {/* text side */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
                  <p className="text-white/50 font-light leading-relaxed text-sm mb-5">{desc}</p>
                  {hint && (
                    <div className="inline-block bg-white/5 text-white/60 px-3 py-1.5 rounded-lg font-mono text-xs w-fit border border-white/10 tracking-widest">
                      {hint}
                    </div>
                  )}
                </div>
                {/* image side */}
                <div className="flex-1 h-44 md:h-auto rounded-xl overflow-hidden relative border border-white/10">
                  <img alt={`Step ${num}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src={src} />
                </div>
              </div>
            ) : (
              <>
                <div className="w-full h-44 rounded-xl mb-5 overflow-hidden relative border border-white/10">
                  <img alt={`Step ${num}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src={src} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2.5 tracking-tight">{title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm flex-grow">{desc}</p>
              </>
            )}
          </div>
        ))}

        {/* Step 06 – full width CTA card */}
        <div className="bento-card rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-center gap-10 col-span-1 md:col-span-3 group relative overflow-hidden">
          {/* glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container blur-[150px] opacity-10 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none" />

          <div className="flex-1 text-center lg:text-left relative z-10">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.15em]">Step 06</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Apply &amp; Admire</h3>
            <p className="text-white/50 font-light leading-relaxed text-base max-w-lg mx-auto lg:mx-0">
              Click "Apply" then "OK". Boom — your folder is now a masterpiece. Refresh the desktop if it doesn't update immediately.
            </p>
            <button className="mt-7 bg-primary-container text-white px-8 py-3.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 neon-glow">
              Browse Icon Packs →
            </button>
          </div>

          <div className="flex-1 w-full h-56 md:h-72 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
            <img
              alt="Step 6 – apply and admire"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              src="./assets/icons/zen_bamboo.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </>
  );
}
