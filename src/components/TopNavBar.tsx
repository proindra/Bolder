import { Link, useLocation } from 'react-router-dom';

export default function TopNavBar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-white border-b border-primary-container pb-1" : "text-white/60 hover:text-white transition-colors";
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full border border-white/10 shadow-xl flex justify-between items-center px-8 py-4 z-50 bg-[#131313]/60 backdrop-blur-xl transition-all duration-300">
      <Link to="/" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
        BOLDER
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link className={isActive('/features')} to="/features">Features</Link>
        <Link className={isActive('/templates')} to="/templates">Templates</Link>
        <Link className={isActive('/community')} to="/community">Community</Link>
        <Link className={isActive('/apply')} to="/apply">Apply Icons</Link>
        <Link className={isActive('/pricing')} to="/pricing">Pricing</Link>
      </div>
      <Link to="/editor">
        <button className="bg-white/10 text-white border border-white/20 px-5 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
          Start Designing
        </button>
      </Link>
    </nav>
  );
}
