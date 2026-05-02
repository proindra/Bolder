
export default function Editor() {
  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
{/**/}
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-primary-container rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
<div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-[#4918c8] rounded-full mix-blend-screen filter blur-[250px] opacity-10"></div>
</div>
{/**/}
<div className="lg:col-span-3 flex flex-col gap-6 h-[calc(100vh-12rem)] overflow-y-auto pr-2 custom-scrollbar relative z-10">
<h2 className="font-h2 text-h2 text-white mb-2 tracking-tight">Presets</h2>
<div className="glass-panel rounded-2xl p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 glow-active">
<div className="flex justify-between items-start mb-4">
<span className="font-label-sm text-label-sm bg-primary-container text-white px-2 py-1 rounded">PRO</span>
<span className="material-symbols-outlined text-white/50">favorite</span>
</div>
<img alt="Abstract pink digital art piece representing a bold folder preset." className="w-full h-32 object-cover rounded-lg mb-4" src="./assets/icons/anime_pink_kawaii.png"/>
<h3 className="font-medium text-lg text-white mb-1">Neon Pulse</h3>
<p className="text-xs text-white/50 font-label-sm uppercase tracking-widest">12 VARIATIONS</p>
</div>
<div className="glass-panel rounded-2xl p-6 cursor-pointer hover:bg-white/[0.04] transition-colors duration-300">
<img alt="Yellow abstract digital art piece representing a bold folder preset." className="w-full h-32 object-cover rounded-lg mb-4" src="./assets/icons/anime_shonen.png"/>
<h3 className="font-medium text-lg text-white mb-1">Solar Flare</h3>
<p className="text-xs text-white/50 font-label-sm uppercase tracking-widest">8 VARIATIONS</p>
</div>
<div className="glass-panel rounded-2xl p-6 cursor-pointer hover:bg-white/[0.04] transition-colors duration-300">
<img alt="Red abstract digital art piece representing a bold folder preset." className="w-full h-32 object-cover rounded-lg mb-4" src="./assets/icons/flame_folder.png"/>
<h3 className="font-medium text-lg text-white mb-1">Crimson Void</h3>
<p className="text-xs text-white/50 font-label-sm uppercase tracking-widest">5 VARIATIONS</p>
</div>
</div>
{/**/}
<div className="lg:col-span-6 glass-panel rounded-2xl flex flex-col h-[calc(100vh-12rem)] relative overflow-hidden group z-10">
{/**/}
<div className="flex justify-between items-center p-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<button className="p-2 rounded hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-white/80">undo</span></button>
<button className="p-2 rounded hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-white/80">redo</span></button>
</div>
<div className="font-label-sm text-label-sm text-white/50 flex gap-4 tracking-widest">
<span>100%</span>
<span>1080x1080</span>
</div>
<div className="flex gap-2">
<button className="p-2 rounded hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-white/80">layers</span></button>
<button className="p-2 rounded hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-white/80">code</span></button>
</div>
</div>
{/**/}
<div className="flex-grow flex items-center justify-center p-8 relative bg-black/20">
{/**/}
<div className="absolute inset-0 opacity-20" style={{ "backgroundImage": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)", "backgroundSize": "24px 24px" }}></div>
{/**/}
<div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
<img alt="Main canvas digital art piece." className="w-full h-full object-cover" src="./assets/icons/skeuomorphic_folder.png"/>
{/**/}
<div className="absolute -top-4 -right-4 bg-primary-container text-white font-label-sm text-label-sm px-4 py-1.5 rounded-full rotate-[12deg] shadow-lg border border-white/20 z-10 tracking-widest">
                        *NEW*
                    </div>
</div>
</div>
{/**/}
<div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-center gap-4">
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full font-medium text-sm flex items-center gap-2 transition-colors tracking-wide">
<span className="material-symbols-outlined text-lg">play_arrow</span> PREVIEW
                </button>
<button className="bg-primary-container text-white px-8 py-3 rounded-full font-medium text-sm hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 tracking-wide">
                    EXPORT
                </button>
</div>
</div>
{/**/}
<div className="lg:col-span-3 flex flex-col gap-6 h-[calc(100vh-12rem)] overflow-y-auto pl-2 custom-scrollbar relative z-10">
<h2 className="font-h2 text-h2 text-white mb-2 tracking-tight">Tweak</h2>
{/**/}
<div className="glass-panel rounded-2xl p-6">
<h3 className="font-label-sm text-label-sm text-white/50 mb-6 uppercase tracking-widest">Base Structure</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
<img alt="Green structural element." className="w-12 h-12 rounded-lg object-cover" src="./assets/icons/zen_bamboo.png"/>
<div className="flex-grow">
<p className="text-sm font-medium text-white">Geometry 01</p>
<p className="text-xs text-white/50 mt-0.5">Visible</p>
</div>
<span className="material-symbols-outlined text-white/50 hover:text-white cursor-pointer transition-colors">visibility</span>
</div>
<div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
<img alt="Blue structural element." className="w-12 h-12 rounded-lg object-cover opacity-50" src="./assets/icons/starry_night.png"/>
<div className="flex-grow">
<p className="text-sm font-medium text-white/50">Texture 02</p>
<p className="text-xs text-white/40 mt-0.5">Hidden</p>
</div>
<span className="material-symbols-outlined text-white/40 hover:text-white cursor-pointer transition-colors">visibility_off</span>
</div>
</div>
</div>
{/**/}
<div className="glass-panel rounded-2xl p-6 flex-grow">
<h3 className="font-label-sm text-label-sm text-white/50 mb-8 uppercase tracking-widest">Properties</h3>
<div className="space-y-8">
{/**/}
<div>
<div className="flex justify-between text-xs mb-3 font-label-sm text-white/70 tracking-widest">
<span>INTENSITY</span>
<span className="text-primary-container">85%</span>
</div>
<div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[85%] relative shadow-[0_0_15px_rgba(255,107,0,0.6)]"></div>
</div>
</div>
{/**/}
<div>
<div className="flex justify-between text-xs mb-3 font-label-sm text-white/70 tracking-widest">
<span>DISTORTION</span>
<span className="text-white/50">42%</span>
</div>
<div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/30 w-[42%] relative"></div>
</div>
</div>
{/**/}
<div>
<span className="font-label-sm text-label-sm text-white/50 block mb-4 uppercase tracking-widest">Primary Glow</span>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-primary-container ring-2 ring-white/20 cursor-pointer shadow-[0_0_15px_rgba(255,107,0,0.4)] hover:ring-white transition-all"></div>
<div className="w-8 h-8 rounded-full bg-[#4918c8] cursor-pointer hover:ring-2 ring-white/50 transition-all border border-white/10"></div>
<div className="w-8 h-8 rounded-full bg-[#ccff00] cursor-pointer hover:ring-2 ring-white/50 transition-all border border-white/10"></div>
<div className="w-8 h-8 rounded-full bg-white cursor-pointer hover:ring-2 ring-white/50 transition-all border border-white/10"></div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer border border-white/20 hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-sm text-white/70">add</span>
</div>
</div>
</div>
</div>
</div>
{/**/}
<div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
<h3 className="font-label-sm text-label-sm text-white/50 mb-4 uppercase tracking-widest">Render Node</h3>
<div className="relative h-24 rounded-xl overflow-hidden border border-white/10">
<img alt="Map of Tokyo rendering node." className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="./assets/icons/anime_cyber_moon.png"/>
<div className="absolute inset-0 bg-primary-container/10 mix-blend-color"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-container rounded-full shadow-[0_0_15px_rgba(255,107,0,1)] animate-pulse"></div>
</div>
</div>
</div>
      </div></>
  );
}
