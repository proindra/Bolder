
export default function TemplatesGallery() {
  return (
    <>
      
{/**/}
<section className="mb-xl">
<h1 className="font-display text-display text-on-surface mb-lg">Template Gallery</h1>
<div className="flex flex-col md:flex-row gap-lg items-center glass-card p-lg rounded-xl glow-effect">
<div className="relative w-full md:w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-tertiary-container pointer-events-none">search</span>
<input className="w-full bg-[#050505] text-on-surface border border-outline-variant focus:border-primary-container rounded-lg py-2 pl-10 pr-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] outline-none transition-colors font-body-md placeholder:text-tertiary-container" placeholder="Search templates..." type="text"/>
</div>
<div className="flex flex-wrap gap-sm">
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-bright transition-colors">All</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-surface-container text-tertiary-container font-label-sm text-label-sm hover:bg-surface-bright hover:text-on-surface transition-colors">Minimal</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-surface-container text-tertiary-container font-label-sm text-label-sm hover:bg-surface-bright hover:text-on-surface transition-colors">Vibrant</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-surface-container text-tertiary-container font-label-sm text-label-sm hover:bg-surface-bright hover:text-on-surface transition-colors">Dark</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 bg-surface-container text-tertiary-container font-label-sm text-label-sm hover:bg-surface-bright hover:text-on-surface transition-colors">Neon</button>
</div>
</div>
</section>
{/**/}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-xl">
{/**/}
<article className="glass-card rounded-xl p-lg flex flex-col group relative overflow-hidden glow-effect transition-transform hover:-translate-y-1 duration-300">
<div className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,107,0,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-lg">
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Cyberpunk Essentials</h3>
<p className="font-body-md text-body-md text-tertiary-container">Neon accents &amp; stark contrasts.</p>
</div>
<span className="bg-surface-container px-2 py-1 rounded-sm border border-outline-variant text-primary-container font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                        PRO
                    </span>
</div>
<div className="grid grid-cols-2 gap-sm mb-lg flex-grow">
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative">
<img alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." className="w-full h-full object-cover opacity-80 mix-blend-screen grayscale-[50%]" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="/assets/icons/anime_cyber_moon.png"/>
</div>
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative">
<img alt="A close up shot of a sleek, dark metallic surface with intricate, glowing orange circuitry patterns etched into it. The scene represents a high-performance computing environment with a dark mode aesthetic. The lighting is low and moody, emphasizing the glowing orange lines against the deep blacks and subtle greys. The mood is highly technical and powerful." className="w-full h-full object-cover opacity-80 mix-blend-screen grayscale-[50%]" data-alt="A close up shot of a sleek, dark metallic surface with intricate, glowing orange circuitry patterns etched into it. The scene represents a high-performance computing environment with a dark mode aesthetic. The lighting is low and moody, emphasizing the glowing orange lines against the deep blacks and subtle greys. The mood is highly technical and powerful." src="/assets/icons/flame_folder.png"/>
</div>
</div>
<button className="w-full py-2 bg-transparent border border-white/10 rounded-DEFAULT text-on-surface font-label-sm text-label-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[16px]">visibility</span>
                    Preview Collection
                </button>
</article>
{/**/}
<article className="glass-card rounded-xl p-lg flex flex-col group relative overflow-hidden glow-effect transition-transform hover:-translate-y-1 duration-300">
<div className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-lg">
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Minimalist Mono</h3>
<p className="font-body-md text-body-md text-tertiary-container">Clean lines, pure focus.</p>
</div>
<span className="bg-surface-container px-2 py-1 rounded-sm border border-outline-variant text-tertiary-container font-label-sm text-label-sm">
                        FREE
                    </span>
</div>
<div className="grid grid-cols-2 gap-sm mb-lg flex-grow">
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim" style={{ "fontVariationSettings": "'wght' 200" }}>folder_open</span>
</div>
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative">
<img alt="A minimalist architectural space featuring smooth concrete surfaces and sharp, angular shadows. The environment is rendered in stark black and white with a subtle, atmospheric noise grain. The lighting is dramatic and directional, creating a sense of depth and precision. The overall aesthetic is highly technical, clean, and silent, representing a sophisticated dark-mode UI style." className="w-full h-full object-cover opacity-60 grayscale" data-alt="A minimalist architectural space featuring smoothংকার smooth concrete surfaces and sharp, angular shadows. The environment is rendered in stark black and white with a subtle, atmospheric noise grain. The lighting is dramatic and directional, creating a sense of depth and precision. The overall aesthetic is highly technical, clean, and silent, representing a sophisticated dark-mode UI style." src="/assets/icons/anime_shonen.png"/>
</div>
</div>
<button className="w-full py-2 bg-transparent border border-white/10 rounded-DEFAULT text-on-surface font-label-sm text-label-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[16px]">visibility</span>
                    Preview Collection
                </button>
</article>
{/**/}
<article className="glass-card rounded-xl p-lg flex flex-col group relative overflow-hidden glow-effect transition-transform hover:-translate-y-1 duration-300">
<div className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(202,190,255,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-lg">
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Pastel Dreams</h3>
<p className="font-body-md text-body-md text-tertiary-container">Soft gradients &amp; ethereal vibes.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-sm mb-lg flex-grow">
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative">
<img alt="A collection of soft, blurred, pastel-colored orbs floating in a dark, infinite space. The colors are muted pinks, purples, and soft yellows, contrasting against the deep black background. The light source is gentle and diffused, creating a dreamy, ethereal atmosphere. The visual style represents a delicate glassmorphic UI approach within a dark mode theme." className="w-full h-full object-cover opacity-70 mix-blend-screen" data-alt="A collection of soft, blurred, pastel-colored orbs floating in a dark, infinite space. The colors are muted pinks, purples, and soft yellows, contrasting against the deep black background. The light source is gentle and diffused, creating a dreamy, ethereal atmosphere. The visual style represents a delicate glassmorphic UI approach within a dark mode theme." src="/assets/icons/anime_pink_kawaii.png"/>
</div>
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative">
<img alt="A serene landscape rendered as low-poly digital art, featuring subtle pastel hues of violet and soft green against a dark, starry sky. The geometric shapes create sharp edges that contrast with the gentle colors. The lighting simulates a soft moonlight, providing a calm, focused mood suitable for a premium technical UI design." className="w-full h-full object-cover opacity-70 mix-blend-screen" data-alt="A serene landscape rendered as low-poly digital art, featuring subtle pastel hues of violet and soft green against a dark, starry sky. The geometric shapes create sharp edges that contrast with the gentle colors. The lighting simulates a soft moonlight, providing a calm, focused mood suitable for a premium technical UI design." src="/assets/icons/starry_night.png"/>
</div>
</div>
<button className="w-full py-2 bg-transparent border border-white/10 rounded-DEFAULT text-on-surface font-label-sm text-label-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[16px]">visibility</span>
                    Preview Collection
                </button>
</article>
{/**/}
<article className="glass-card rounded-xl p-lg flex flex-col group relative overflow-hidden glow-effect transition-transform hover:-translate-y-1 duration-300">
<div className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start mb-lg">
<div>
<h3 className="font-h3 text-h3 text-on-surface mb-xs">Studio Pro</h3>
<p className="font-body-md text-body-md text-tertiary-container">High-fidelity tools for creators.</p>
</div>
<span className="bg-surface-container px-2 py-1 rounded-sm border border-outline-variant text-primary-container font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                        PRO
                    </span>
</div>
<div className="grid grid-cols-2 gap-sm mb-lg flex-grow">
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative">
<img alt="A highly detailed, macro shot of a camera lens element reflecting a stark, geometric studio lighting setup. The metallic textures of the lens barrel are deep blacks and gunmetal greys, with sharp highlights. The overall mood is professional, precise, and engineered, fitting perfectly into a cinematic dark mode design system." className="w-full h-full object-cover opacity-80 grayscale-[30%]" data-alt="A highly detailed, macro shot of a camera lens element reflecting a stark, geometric studio lighting setup. The metallic textures of the lens barrel are deep blacks and gunmetal greys, with sharp highlights. The overall mood is professional, precise, and engineered, fitting perfectly into a cinematic dark mode design system." src="/assets/icons/skeuomorphic_folder.png"/>
</div>
<div className="aspect-square bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden relative flex items-center justify-center">
<span className="material-symbols-outlined text-4xl text-on-surface" style={{ "fontVariationSettings": "'wght' 300" }}>movie_creation</span>
</div>
</div>
<button className="w-full py-2 bg-transparent border border-white/10 rounded-DEFAULT text-on-surface font-label-sm text-label-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[16px]">visibility</span>
                    Preview Collection
                </button>
</article>
</section>
{/**/}
<div className="hidden">
<img alt="Hidden placeholder 1" data-alt="Abstract geometric shapes in dark mode." src="/assets/icons/zen_bamboo.png"/>
<img alt="Hidden placeholder 2" data-alt="Abstract geometric shapes in dark mode." src="/assets/icons/anime_pink_kawaii.png"/>
</div>

    </>
  );
}
