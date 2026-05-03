import { useState } from 'react';

const PRESETS = [
  { id: 'neon-pulse', label: 'Neon Pulse', vars: '12 Variations', src: './assets/icons/anime_pink_kawaii.png', isPro: true },
  { id: 'solar-flare', label: 'Solar Flare', vars: '8 Variations', src: './assets/icons/anime_shonen.png' },
  { id: 'crimson-void', label: 'Crimson Void', vars: '5 Variations', src: './assets/icons/flame_folder.png' },
  { id: 'skeuomorphic', label: 'Classic Vault', vars: '3 Variations', src: './assets/icons/skeuomorphic_folder.png' },
];

const GLOW_COLORS = [
  { id: 'orange', value: 'rgba(255,107,0,1)', cls: 'bg-primary-container', shadow: 'shadow-[0_0_12px_rgba(255,107,0,0.5)]' },
  { id: 'purple', value: 'rgba(73,24,200,1)', cls: 'bg-[#4918c8]', shadow: 'shadow-[0_0_12px_rgba(73,24,200,0.5)]' },
  { id: 'lime', value: 'rgba(204,255,0,1)', cls: 'bg-[#ccff00]', shadow: 'shadow-[0_0_12px_rgba(204,255,0,0.5)]' },
  { id: 'white', value: 'rgba(255,255,255,1)', cls: 'bg-white', shadow: 'shadow-[0_0_12px_rgba(255,255,255,0.5)]' },
];

export default function Editor() {
  const [activePreset, setActivePreset] = useState(PRESETS[0]);
  const [intensity, setIntensity] = useState(85);
  const [distortion, setDistortion] = useState(42);
  const [activeColor, setActiveColor] = useState(GLOW_COLORS[0]);
  
  const [layers, setLayers] = useState({
    base: true,
    texture: true
  });

  const toggleLayer = (layer: 'base' | 'texture') => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  // Compute CSS filters based on sliders
  // Intensity controls brightness and saturation
  const brightness = 0.5 + (intensity / 100); 
  const saturate = 0.5 + (intensity / 100) * 1.5;
  // Distortion controls hue-rotate and contrast
  const hueRotate = (distortion / 100) * 360;
  const contrast = 0.8 + (distortion / 100);

  const canvasFilterStyle = {
    filter: `brightness(${brightness}) saturate(${saturate}) hue-rotate(${hueRotate}deg) contrast(${contrast})`,
    transition: 'filter 0.1s ease-out'
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 relative min-h-[calc(100vh-12rem)]">

      {/* ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[200px] opacity-10 transition-colors duration-500" 
          style={{ backgroundColor: activeColor.value }}
        />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-[#4918c8] rounded-full mix-blend-screen filter blur-[250px] opacity-10" />
      </div>

      {/* ── Left Panel: Presets ───────────────────────── */}
      <aside className="lg:col-span-3 flex flex-col gap-4 h-[calc(100vh-12rem)] overflow-y-auto pr-1 custom-scrollbar relative z-10">
        <h2 className="text-lg font-semibold text-white tracking-tight px-1">Presets</h2>

        {PRESETS.map((preset) => {
          const isActive = activePreset.id === preset.id;
          return (
            <div 
              key={preset.id} 
              onClick={() => setActivePreset(preset)}
              className={`glass-panel rounded-2xl p-5 cursor-pointer transition-all duration-300 ${isActive ? 'glow-active border-primary-container/40' : 'hover:bg-white/[0.04] border-white/10'}`}
            >
              <div className="flex justify-between items-start mb-3 h-6">
                {preset.isPro && (
                  <span className="text-[10px] font-semibold bg-primary-container text-white px-2 py-0.5 rounded uppercase tracking-widest">PRO</span>
                )}
                {isActive && (
                  <span className="material-symbols-outlined text-primary-container text-[18px] ml-auto">favorite</span>
                )}
              </div>
              <img alt={preset.label} className="w-full h-28 object-cover rounded-xl mb-3" src={preset.src} />
              <h3 className="text-sm font-semibold text-white mb-0.5">{preset.label}</h3>
              <p className="text-[11px] text-white/40 uppercase tracking-widest">{preset.vars}</p>
            </div>
          );
        })}
      </aside>

      {/* ── Center: Canvas ────────────────────────────── */}
      <div className="lg:col-span-6 glass-panel rounded-2xl flex flex-col h-[calc(100vh-12rem)] relative overflow-hidden group z-10">
        
        {/* Canvas toolbar */}
        <div className="flex justify-between items-center px-5 py-3 border-b border-white/8 bg-white/[0.015] shrink-0">
          <div className="flex gap-1.5">
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" onClick={() => { setIntensity(85); setDistortion(42); }}>
              <span className="material-symbols-outlined text-white/70 text-[18px]">undo</span>
            </button>
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors opacity-50 cursor-not-allowed">
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
        <div className="flex-grow flex items-center justify-center p-8 relative bg-black/20 overflow-hidden">
          {/* dot grid */}
          <div 
            className="absolute inset-0 opacity-20" 
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} 
          />
          
          {/* Main canvas container */}
          <div 
            className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ease-out flex items-center justify-center"
            style={{ boxShadow: `0 0 ${intensity}px ${activeColor.value.replace('1)', '0.3)')}` }}
          >
            {/* Base Layer */}
            {layers.base && (
               <img 
                 alt="Base structure" 
                 className="absolute w-full h-full object-contain p-4" 
                 src="./assets/icons/skeuomorphic_folder.png" 
               />
            )}
            
            {/* Texture Layer (controlled by preset and tweaks) */}
            {layers.texture && (
              <img 
                alt="Canvas preview texture" 
                className="absolute w-[85%] h-[85%] object-cover rounded-xl mix-blend-overlay" 
                src={activePreset.src} 
                style={canvasFilterStyle}
              />
            )}
            
            {/* Optional badge */}
            {activePreset.isPro && (
              <div className="absolute top-4 right-4 bg-primary-container text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 z-10 tracking-widest uppercase">
                PRO
              </div>
            )}
          </div>
        </div>

        {/* Canvas footer */}
        <div className="px-5 py-4 border-t border-white/8 bg-white/[0.015] flex justify-center gap-3 shrink-0">
          <button className="bg-white/8 hover:bg-white/12 border border-white/10 text-white px-7 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors tracking-wide">
            <span className="material-symbols-outlined text-[16px]">play_arrow</span>
            PREVIEW
          </button>
          <button 
            className="bg-primary-container text-white px-7 py-2.5 rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 tracking-wide neon-glow"
            onClick={() => alert(`Exporting ${activePreset.label} composite...`)}
          >
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
            {/* Base Layer */}
            <div className={`flex items-center gap-3 bg-white/5 px-3 py-2.5 rounded-xl border border-white/5 ${!layers.base ? 'opacity-50' : ''}`}>
              <img alt="Base" className="w-10 h-10 rounded-lg object-contain shrink-0 bg-black/40" src="./assets/icons/skeuomorphic_folder.png" />
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-white truncate">Folder Base</p>
                <p className="text-[11px] text-white/40">{layers.base ? 'Visible' : 'Hidden'}</p>
              </div>
              <span 
                className="material-symbols-outlined text-white/40 hover:text-white cursor-pointer transition-colors text-[18px] shrink-0"
                onClick={() => toggleLayer('base')}
              >
                {layers.base ? 'visibility' : 'visibility_off'}
              </span>
            </div>
            
            {/* Texture Layer */}
            <div className={`flex items-center gap-3 bg-white/5 px-3 py-2.5 rounded-xl border border-white/5 ${!layers.texture ? 'opacity-50' : ''}`}>
              <img alt="Texture" className="w-10 h-10 rounded-lg object-cover shrink-0" src={activePreset.src} />
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-white truncate">{activePreset.label}</p>
                <p className="text-[11px] text-white/40">{layers.texture ? 'Visible' : 'Hidden'}</p>
              </div>
              <span 
                className="material-symbols-outlined text-white/40 hover:text-white cursor-pointer transition-colors text-[18px] shrink-0"
                onClick={() => toggleLayer('texture')}
              >
                {layers.texture ? 'visibility' : 'visibility_off'}
              </span>
            </div>
          </div>
        </div>

        {/* Properties */}
        <div className="glass-panel rounded-2xl p-5 flex-grow">
          <h3 className="text-[10px] font-semibold text-white/40 mb-5 uppercase tracking-widest">Properties</h3>
          <div className="space-y-7">
            
            {/* Intensity Slider */}
            <div>
              <div className="flex justify-between text-[11px] mb-2.5 font-semibold text-white/50 tracking-widest uppercase">
                <span>Intensity</span>
                <span className="text-primary-container">{intensity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-container"
              />
            </div>
            
            {/* Distortion Slider */}
            <div>
              <div className="flex justify-between text-[11px] mb-2.5 font-semibold text-white/50 tracking-widest uppercase">
                <span>Distortion</span>
                <span className="text-white/40">{distortion}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={distortion}
                onChange={(e) => setDistortion(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
            
            {/* Color swatches */}
            <div>
              <span className="text-[10px] font-semibold text-white/40 block mb-3 uppercase tracking-widest">Primary Glow</span>
              <div className="flex gap-3 flex-wrap">
                {GLOW_COLORS.map((color) => {
                  const isActive = activeColor.id === color.id;
                  return (
                    <div 
                      key={color.id} 
                      onClick={() => setActiveColor(color)}
                      className={`w-7 h-7 rounded-full cursor-pointer transition-all duration-300 border border-white/10 ${color.cls} ${isActive ? `ring-2 ring-white/50 ${color.shadow} scale-110` : 'hover:scale-110'}`} 
                    />
                  );
                })}
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
          <div className="relative h-20 rounded-xl overflow-hidden border border-white/10 group">
            <img alt="Render node" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src={activePreset.src} />
            <div className="absolute inset-0 opacity-20 mix-blend-color" style={{ backgroundColor: activeColor.value }} />
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full animate-pulse" 
              style={{ backgroundColor: activeColor.value, boxShadow: `0 0 12px ${activeColor.value}` }}
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
