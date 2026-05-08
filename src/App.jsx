import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AlertTriangle, Menu, X, Info } from 'lucide-react';


import logoNav from './assets/logo-nav.png'; 

import Home from './pages/Home';
import Pools from './pages/Pools';
import Saunas from './pages/Saunas';
import Prices from './pages/Prices';
import Parking from './pages/Parking';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Admin from './pages/Admin';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  
  const [showDemoWarning, setShowDemoWarning] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/admin')) {
      return false; 
    }
    return true; 
  });

  
  useEffect(() => {
    if (showDemoWarning) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showDemoWarning]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeDemoWarning = () => setShowDemoWarning(false);

  return (
    <Router>
      <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        
        {/* Модальное окно (Концепт-предупреждение) */}
        {showDemoWarning && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-300 border-t-4 border-cyan-500">
              <button 
                onClick={closeDemoWarning}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Info size={32} />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Projekt-Konzept</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Willkommen! Bitte beachten Sie, dass dies <span className="font-bold text-slate-800">nicht die offizielle Website</span> des AquaOlsberg ist.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Diese Seite ist ein exklusives <span className="font-bold text-cyan-600">Proof of Concept (Demonstrationsprojekt)</span>. Sie wurde von einem Softwareentwickler konzipiert, um das Potenzial eines modernen, reaktionsschnellen Web-Auftritts наглядно показать.
              </p>
              
              <button 
                onClick={closeDemoWarning}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg"
              >
                Verstanden, zur Demo-Seite
              </button>
            </div>
          </div>
        )}

        {/* Глобальное уведомление */}
        <div className="bg-amber-500 text-white text-center py-3 px-4 shadow-md font-medium text-sm md:text-base z-40 flex items-center justify-center gap-2 relative shrink-0">
          <AlertTriangle size={20} className="shrink-0" />
          <span>WICHTIGE INFO: Der Solebereich wird im Sommer 2026 wiedereröffnet! Die Sauna bleibt bis auf Weiteres geschlossen.</span>
        </div>

        {/* Навигация */}
        <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 shrink-0">
          <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
            
            {/* Логотип в шапке (КРУПНЕЕ: h-60) */}
            <Link to="/" className="flex items-center cursor-pointer py-1" onClick={closeMobileMenu}>
              <img src={logoNav} alt="AquaOlsberg Logo" className="h-60 w-auto object-contain block" />
            </Link>

            {/* Десктопное меню */}
            <div className="hidden lg:flex space-x-6 text-sm font-bold uppercase tracking-wider items-center">
              <Link to="/" className="text-slate-500 hover:text-cyan-600 transition-colors">Startseite</Link>
              <Link to="/pools" className="text-slate-500 hover:text-cyan-600 transition-colors">Bäder</Link>
              <Link to="/saunas" className="text-slate-500 hover:text-cyan-600 transition-colors">Sauna</Link>
              <Link to="/prices" className="text-slate-500 hover:text-cyan-600 transition-colors">Preise & Zeiten</Link>
              <Link to="/parking" className="text-slate-500 hover:text-cyan-600 transition-colors">Wohnmobile</Link>
              <Link to="/jobs" className="text-slate-500 hover:text-cyan-600 transition-colors">Jobs</Link>
              <Link to="/partners" className="text-slate-500 hover:text-cyan-600 transition-colors">Partner</Link>
              <Link to="/contact" className="text-slate-500 hover:text-cyan-600 transition-colors">Kontakt</Link>
            </div>

            {/* Бургер меню для мобильных */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2 focus:outline-none">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Мобильное меню */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-6 flex flex-col space-y-4 font-bold uppercase tracking-wide text-sm z-50 overflow-y-auto max-h-[calc(100vh-96px)]">
              <Link to="/" onClick={closeMobileMenu} className="text-slate-600 block py-2 border-b border-slate-50">Startseite</Link>
              <Link to="/pools" onClick={closeMobileMenu} className="text-slate-600 block py-2 border-b border-slate-50">Bäder</Link>
              <Link to="/saunas" onClick={closeMobileMenu} className="text-slate-600 block py-2 border-b border-slate-50">Sauna</Link>
              <Link to="/prices" onClick={closeMobileMenu} className="text-slate-600 block py-2 border-b border-slate-50">Preise & Zeiten</Link>
              <Link to="/parking" onClick={closeMobileMenu} className="text-slate-600 block py-2 border-b border-slate-50">Wohnmobile</Link>
              <Link to="/jobs" onClick={closeMobileMenu} className="text-slate-600 block py-2 border-b border-slate-50">Jobs</Link>
              <Link to="/partners" onClick={closeMobileMenu} className="text-slate-600 block py-2 border-b border-slate-50">Partner</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-slate-600 block py-2">Kontakt</Link>
            </div>
          )}
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/saunas" element={<Saunas />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/parking" element={<Parking />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} /> 
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Футер */}
        <footer className="bg-slate-900 text-slate-400 py-16 mt-auto border-t border-slate-800 shrink-0 relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Логотип в подвале */}
            <img src={logoNav} alt="AquaOlsberg Logo" className="h-60 w-auto mx-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <p className="mb-6 max-w-md mx-auto text-sm text-slate-300 font-medium">Zur Sauerlandtherme 1, 59939 Olsberg</p>
            
            {/* Ссылки на Impressum и Datenschutz */}
            <div className="flex justify-center gap-6 mb-8 text-sm font-bold uppercase tracking-wider">
              <Link to="/impressum" className="text-slate-500 hover:text-cyan-500 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-slate-500 hover:text-cyan-500 transition-colors">Datenschutz</Link>
            </div>
            
            <div className="mt-8 pt-10 border-t border-slate-800 text-sm flex flex-col items-center gap-2">
              <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs border border-cyan-500/20 shadow-inner">
                Technologisches Konzept
              </span>
              <p className="max-w-2xl text-slate-500 leading-relaxed mt-2">
                Dies ist ein unabhängiges Entwickler-Portfolio-Projekt zur Demonstration moderner Web-Technologien. Es besteht keine vertragliche oder rechtliche Verbindung zur Stadt Olsberg oder den Betreibern des AquaOlsberg.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}