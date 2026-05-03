import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Pricing from './pages/Pricing';
import TemplatesGallery from './pages/TemplatesGallery';
import CommunityShowcase from './pages/CommunityShowcase';
import ApplyGuide from './pages/ApplyGuide';
import Editor from './pages/Editor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-background text-on-background font-sans overflow-x-hidden min-h-screen flex flex-col relative selection:bg-primary-container selection:text-white">
        {/* Ambient Background Blurs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary-container rounded-full mix-blend-screen filter blur-[200px] opacity-15"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#4918c8] rounded-full mix-blend-screen filter blur-[250px] opacity-10"></div>
          <div className="absolute top-[40%] left-[60%] w-[50vw] h-[50vw] bg-primary-container rounded-full mix-blend-screen filter blur-[200px] opacity-5"></div>
        </div>

        <TopNavBar />
        
        <main className="flex-grow z-10 pt-28 pb-24 px-5 md:px-10 max-w-[1440px] mx-auto w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/templates" element={<TemplatesGallery />} />
            <Route path="/community" element={<CommunityShowcase />} />
            <Route path="/apply" element={<ApplyGuide />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
