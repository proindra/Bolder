import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/8 pt-16 pb-10 bg-[#0c0c0c] z-50 relative mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-lg font-bold text-white mb-4 flex items-center gap-2 tracking-tight w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              BOLDER
            </Link>
            <p className="text-sm text-white/40 font-light leading-relaxed max-w-xs">
              The design tool for the generation that refuses to blend in. Make your workspace unmistakably yours.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Product</p>
            <div className="flex flex-col gap-3">
              <Link className="text-sm text-white/50 hover:text-white transition-colors" to="/templates">Templates</Link>
              <Link className="text-sm text-white/50 hover:text-white transition-colors" to="/editor">Editor</Link>
              <Link className="text-sm text-white/50 hover:text-white transition-colors" to="/pricing">Pricing</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Community</p>
            <div className="flex flex-col gap-3">
              <a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Discord</a>
              <a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Instagram</a>
              <a className="text-sm text-white/50 hover:text-white transition-colors" href="#">X (Twitter)</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/8 pt-8 gap-4">
          <p className="text-xs text-white/30">© 2025 BOLDER. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-xs text-white/30 hover:text-white/60 transition-colors" href="#">Privacy</a>
            <a className="text-xs text-white/30 hover:text-white/60 transition-colors" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
