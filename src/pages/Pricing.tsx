
import { useState } from 'react';

export default function Pricing() {
  const [coupon, setCoupon] = useState('');
  const [couponState, setCouponState] = useState<'idle' | 'success' | 'error'>('idle');

  const applyCoupon = () => {
    if (!coupon.trim()) return;
    if (coupon.trim().toUpperCase() === 'BOLDER20') {
      setCouponState('success');
    } else {
      setCouponState('error');
    }
  };
  return (
    <>
      {/* ── Header ───────────────────────────────────── */}
      <header className="text-center mb-16 relative max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 uppercase tracking-widest font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
          Simple Pricing
        </span>
        <h1 className="text-4xl md:text-6xl font-medium text-white mb-5 tracking-tighter leading-[1.08]">
          Simple, transparent pricing.
        </h1>
        <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
          No hidden fees. Choose the tier that matches your workflow and unlock quiet power in customization.
        </p>
      </header>

      {/* ── Coupon Bar ───────────────────────────────── */}
      <div className="max-w-md mx-auto mb-12">
        <p className="text-xs text-white/40 text-center mb-3 uppercase tracking-widest font-medium">Have a coupon code?</p>
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-[18px] pointer-events-none">local_offer</span>
            <input
              className={`w-full bg-white/5 border rounded-xl py-3 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/25 ${
                couponState === 'success' ? 'border-green-500/60 bg-green-500/5' :
                couponState === 'error'   ? 'border-red-500/60 bg-red-500/5' :
                'border-white/10 focus:border-primary-container/60'
              }`}
              placeholder="Enter code e.g. BOLDER20"
              value={coupon}
              onChange={e => { setCoupon(e.target.value); setCouponState('idle'); }}
              onKeyDown={e => e.key === 'Enter' && applyCoupon()}
            />
          </div>
          <button
            onClick={applyCoupon}
            className="bg-primary-container text-white px-5 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Apply
          </button>
        </div>
        {couponState === 'success' && (
          <p className="text-green-400 text-xs mt-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">check_circle</span>
            20% discount applied!
          </p>
        )}
        {couponState === 'error' && (
          <p className="text-red-400 text-xs mt-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">cancel</span>
            Invalid coupon code. Try again.
          </p>
        )}
      </div>

      {/* ── Pricing Cards ────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">

        {/* Free */}
        <div className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
            <p className="text-sm text-white/50 min-h-[40px] leading-relaxed">Perfect for individuals getting started with custom icon design.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-bold text-white tracking-tighter">₹0</span>
            <span className="text-sm text-white/50 ml-1">/lifetime</span>
          </div>
          <ul className="space-y-3.5 mb-8 flex-grow">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
              <span className="text-sm text-white/80">12 basic presets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
              <span className="text-sm text-white/80">PNG export</span>
            </li>
            <li className="flex items-start gap-3 opacity-40">
              <span className="material-symbols-outlined text-white/50 text-[18px] mt-0.5">cancel</span>
              <span className="text-sm text-white/60">Custom icon overlays</span>
            </li>
          </ul>
          <a href="#/editor" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-sm text-white tracking-wider uppercase transition-colors backdrop-blur-md font-medium text-center block">
            Get Started
          </a>
        </div>

        {/* Pro – featured */}
        <div className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden border-primary-container/30 shadow-[0_0_50px_rgba(255,107,0,0.1)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[90px] bg-primary-container blur-[60px] opacity-20 rounded-full pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-80" />
          <div className="mb-6 relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-white">Pro</h3>
              <span className="bg-primary-container/20 text-primary-container px-2 py-0.5 rounded text-[10px] tracking-widest uppercase border border-primary-container/30 font-semibold">
                Most Popular
              </span>
            </div>
            <p className="text-sm text-white/50 min-h-[40px] leading-relaxed">For professionals who need unlimited freedom and format flexibility.</p>
          </div>
          <div className="mb-8 relative flex items-baseline gap-2">
            <span className="text-5xl font-bold text-white tracking-tighter">
              ₹{couponState === 'success' ? '15' : '19'}
            </span>
            {couponState === 'success' && (
              <span className="text-2xl font-bold text-white/40 line-through tracking-tighter">₹19</span>
            )}
            <span className="text-sm text-white/50">/lifetime</span>
          </div>
          <ul className="space-y-3.5 mb-8 flex-grow relative">
            {['Unlimited presets', '.ico & PNG export', 'Custom icon overlays', 'High-res vector output'].map(f => (
              <li key={f} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                <span className="text-sm text-white/80">{f}</span>
              </li>
            ))}
          </ul>
          <a href="#/editor" className="w-full py-3 rounded-xl bg-gradient-to-b from-primary-container to-[#cc5500] hover:to-primary-container text-sm text-white tracking-wider uppercase transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] relative z-10 font-medium text-center block">
            Upgrade to Pro
          </a>
        </div>
      </div>

    </>
  );
}
