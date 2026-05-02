export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 pt-20 pb-10 bg-[#0a0a0a] z-50 relative mt-auto">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-white/50">
        <div>
          <div className="text-lg font-bold text-white mb-6 flex items-center gap-2 tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            BOLDER
          </div>
          <p className="font-light">© 2024 BOLDER. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="flex flex-col gap-4">
          <a className="hover:text-white transition-colors cursor-pointer" href="#">Privacy</a>
          <a className="hover:text-white transition-colors cursor-pointer" href="#">Terms</a>
        </div>
        <div className="flex flex-col gap-4">
          <a className="hover:text-white transition-colors cursor-pointer" href="#">Discord</a>
          <a className="hover:text-white transition-colors cursor-pointer" href="#">Instagram</a>
        </div>
        <div className="flex flex-col gap-4">
          <a className="hover:text-white transition-colors cursor-pointer" href="#">X (Twitter)</a>
        </div>
      </div>
    </footer>
  );
}
