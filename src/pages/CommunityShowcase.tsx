
export default function CommunityShowcase() {
  return (
    <>
      
{/**/}
<section className="mb-xxl relative">
<div className="glass-card rounded-xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
<div className="p-xl flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-lg">
<span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_10px_rgba(255,107,0,0.8)]"></span>
<span className="font-label-sm text-on-surface-variant tracking-wider uppercase">Community Spotlight</span>
</div>
<h1 className="font-display text-display text-white mb-md">Neon Nexus<br/><span className="text-surface-variant">Collection</span></h1>
<p className="font-body-lg text-body-lg text-tertiary mb-xl max-w-md">Explore the breathtaking 'Neon Nexus' pack by <b>@cybershaper</b>. A masterclass in high-contrast gradients and precise geometric layering, designed for high-performance creative workflows.</p>
<div className="flex items-center gap-4">
<button className="bg-primary-container text-white px-8 py-3 rounded-full font-label-sm hover:bg-orange-600 transition-colors shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.2)]">View Collection</button>
<button className="bg-transparent border border-white/10 text-white px-8 py-3 rounded-full font-label-sm hover:bg-white/5 transition-colors backdrop-blur-md">Follow Creator</button>
</div>
</div>
<div className="relative h-[400px] lg:h-auto overflow-hidden bg-surface-container-highest/50">
<img alt="A stunning 3D rendered composition featuring glowing neon geometric shapes and folder icons suspended against a deep, dark void. The lighting is cinematic, with intense warm orange and cool purple accents highlighting the precision-engineered edges of the objects. The scene represents a high-performance digital workspace with a glassmorphic, premium aesthetic." className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="./assets/icons/anime_pink_kawaii.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,13,13,0.8)] via-transparent to-transparent lg:block hidden"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.8)] via-transparent to-transparent lg:hidden block"></div>
</div>
</div>
</div>
</section>
{/**/}
<div className="flex items-center justify-between mb-xl border-b border-white/5 pb-lg">
<h2 className="font-h2 text-h2 text-white">Made with Bolder</h2>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full bg-white/10 text-white font-label-sm border border-white/5 backdrop-blur-md">Trending</button>
<button className="px-4 py-2 rounded-full text-zinc-500 font-label-sm hover:text-white transition-colors">Recent</button>
<button className="px-4 py-2 rounded-full text-zinc-500 font-label-sm hover:text-white transition-colors">Curated</button>
<button className="p-2 rounded-full text-zinc-500 hover:text-white transition-colors ml-4 bg-surface-container border border-white/5">
<span className="material-symbols-outlined text-[20px] block" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
{/**/}
<div className="masonry-grid">
{/**/}
<div className="masonry-item glass-card rounded-xl overflow-hidden group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8 flex items-center justify-center">
<img alt="A highly detailed, 3D rendered folder icon designed in a deep oceanic color palette. The icon features sleek, architectural lines with layers of dark teal and bright cyan glowing accents. The lighting is focused and dramatic, evoking a sense of advanced underwater technology or high-end secure storage within a dark, premium digital environment." className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out" src="./assets/icons/skeuomorphic_folder.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-orange-500/20">
<span className="material-symbols-outlined text-[16px]" data-icon="content_copy">content_copy</span>
                            Remix
                        </button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-surface-container/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-label-sm">JD</div>
<div>
<h3 className="font-label-sm text-white">Deep Blue Secure</h3>
<p className="text-[11px] text-zinc-500 font-inter">by J. Doe</p>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
</div>
</div>
</div>
{/**/}
<div className="masonry-item glass-card rounded-xl overflow-hidden group">
<div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low p-8 flex items-center justify-center">
<img alt="A meticulously crafted digital folder icon showcasing a vibrant, ethereal pink and magenta gradient. The icon is layered with translucent, glassmorphic panels that catch bright, soft studio lighting. The design feels futuristic yet approachable, set against a stark, contrasting dark background to emphasize the glowing neon edges and precise geometric construction." className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out" src="./assets/icons/anime_shonen.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-orange-500/20">
<span className="material-symbols-outlined text-[16px]" data-icon="content_copy">content_copy</span>
                            Remix
                        </button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-surface-container/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-label-sm">SA</div>
<div>
<h3 className="font-label-sm text-white">Neon Cherry</h3>
<p className="text-[11px] text-zinc-500 font-inter">by Sarah A.</p>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
</div>
</div>
</div>
{/**/}
<div className="masonry-item glass-card rounded-xl overflow-hidden group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8 flex items-center justify-center">
<img alt="A premium, metallic-looking folder icon bathed in warm golden and rich yellow tones. The icon features sharp, machined edges and a subtle brushed texture, reflecting light as if made of solid, anodized metal. Set against a deep black void, the brilliant gold color pops dramatically, exuding a sense of high-value data storage and professional creative engineering." className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out" src="./assets/icons/anime_cyber_moon.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-orange-500/20">
<span className="material-symbols-outlined text-[16px]" data-icon="content_copy">content_copy</span>
                            Remix
                        </button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-surface-container/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white font-label-sm">MR</div>
<div>
<h3 className="font-label-sm text-white">Golden Vault</h3>
<p className="text-[11px] text-zinc-500 font-inter">by M. Rossi</p>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
</div>
</div>
</div>
{/**/}
<div className="masonry-item glass-card rounded-xl overflow-hidden group">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low p-8 flex items-center justify-center">
<img alt="An aggressive, high-energy folder icon design featuring intense crimson, burnt orange, and bright red gradients. The shape is dynamic and slightly asymmetrical, suggesting speed and high-performance processing. The icon is rendered with a glossy, glass-like finish that sharply contrasts with the surrounding dark, minimalistic environment, emphasizing a bold, commanding aesthetic." className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out" src="./assets/icons/starry_night.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-orange-500/20">
<span className="material-symbols-outlined text-[16px]" data-icon="content_copy">content_copy</span>
                            Remix
                        </button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-surface-container/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-label-sm">KV</div>
<div>
<h3 className="font-label-sm text-white">Crimson Core</h3>
<p className="text-[11px] text-zinc-500 font-inter">by K. Vane</p>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
</div>
</div>
</div>
{/**/}
<div className="masonry-item glass-card rounded-xl overflow-hidden group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8 flex items-center justify-center">
<img alt="A serene and organic-feeling digital folder icon, rendered in soft, glowing shades of sage green, lime, and deep forest green. The design blends strict geometric precision with fluid, translucent inner layers, creating a sense of calm focus. The lighting is subtle, casting gentle reflections on the icon's glassmorphic surfaces within a sophisticated dark workspace setting." className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out" src="./assets/icons/flame_folder.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-orange-500/20">
<span className="material-symbols-outlined text-[16px]" data-icon="content_copy">content_copy</span>
                            Remix
                        </button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-surface-container/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-label-sm">EL</div>
<div>
<h3 className="font-label-sm text-white">Eco System</h3>
<p className="text-[11px] text-zinc-500 font-inter">by E. Lin</p>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
</div>
</div>
</div>
{/**/}
<div className="masonry-item glass-card rounded-xl overflow-hidden group">
<div className="relative aspect-[4/3] overflow-hidden bg-surface-container-low p-8 flex items-center justify-center">
<img alt="A highly sophisticated 3D folder icon exhibiting deep ultraviolet and vibrant purple tones, accented with stark white glowing edges. The structure appears complex and multi-layered, resembling advanced aerospace schematics or high-end computational hardware. The dark, minimalist background accentuates the mysterious, intelligent 'Quiet Power' vibe of the deep purple gradients." className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out" src="./assets/icons/zen_bamboo.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-orange-500/20">
<span className="material-symbols-outlined text-[16px]" data-icon="content_copy">content_copy</span>
                            Remix
                        </button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-surface-container/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-label-sm">TW</div>
<div>
<h3 className="font-label-sm text-white">Ultraviolet Sync</h3>
<p className="text-[11px] text-zinc-500 font-inter">by T. Wright</p>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
</div>
</div>
</div>
{/**/}
<div className="masonry-item glass-card rounded-xl overflow-hidden group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8 flex items-center justify-center">
<img alt="A crisp, vibrant folder icon design focused on energetic green hues, ranging from deep emerald to bright neon chartreuse. The icon's surface is slick and highly reflective, styled like polished glass over a technical wireframe. Strong overhead lighting casts dramatic inner shadows, defining its sharp architectural shape against the deep black canvas." className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out" src="./assets/icons/anime_pink_kawaii.png"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-label-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-orange-500/20">
<span className="material-symbols-outlined text-[16px]" data-icon="content_copy">content_copy</span>
                            Remix
                        </button>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-surface-container/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center text-white font-label-sm">NX</div>
<div>
<h3 className="font-label-sm text-white">Matrix Matrix</h3>
<p className="text-[11px] text-zinc-500 font-inter">by N. X</p>
</div>
</div>
<button className="text-zinc-500 hover:text-red-400 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-xl">
<button className="bg-transparent border border-white/10 text-white px-8 py-3 rounded-full font-label-sm hover:bg-white/5 transition-colors backdrop-blur-md flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="refresh">refresh</span>
                Load More
            </button>
</div>

    </>
  );
}
