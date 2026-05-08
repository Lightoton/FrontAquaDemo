import { motion } from 'framer-motion';
import { Navigation, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

// Импортируем полный логотип
import logoFull from '../assets/full-logo.webp'; 

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const MAPS_ROUTE_URL = "https://www.google.com/maps/dir/?api=1&destination=Zur+Sauerlandtherme+1,+59939+Olsberg&destination_place_id=ChIJj_nucJXqu0cRAZRdVqSm098";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden p-6">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.aquaolsberg.de/110217-aquaolsberg-de-wAssets/img/bildergalerien/freizeitbad/freibad/freibad.jpg')" }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-cyan-900/70 to-slate-900/90 mix-blend-multiply"></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl w-full flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Полный логотип вместо текстового заголовка */}
          <motion.img 
            src={logoFull} 
            alt="AquaOlsberg Sauerlandtherme Полный Логотип" 
            className="w-full max-w-sm md:max-w-md h-auto mb-6 shadow-xl rounded-full" 
            variants={fadeUpVariant}
          />
          
          <motion.p variants={fadeUpVariant} className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto text-cyan-50">
            Wellness, Sport und Kneipp-Heilbad im Herzen von Olsberg.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/prices" 
              className="bg-white text-cyan-900 font-bold py-4 px-10 rounded-full hover:bg-cyan-50 transition-all inline-block shadow-xl"
            >
              Preise ansehen
            </Link>
            <a 
              href={MAPS_ROUTE_URL} 
              target="_blank" 
              rel="noreferrer"
              className="bg-cyan-600/20 backdrop-blur-md border border-cyan-400/50 text-white font-bold py-4 px-10 rounded-full hover:bg-cyan-600 transition-all inline-flex items-center justify-center gap-2 shadow-lg group"
            >
              <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Route planen
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Galerie (Impressionen) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 flex items-center gap-3">
                <Camera className="text-cyan-500" /> Impressionen
              </h2>
              <p className="text-slate-500 mt-2">Ein Einblick in unsere Wasserwelten</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-96 rounded-3xl overflow-hidden shadow-lg group relative">
              <img src="https://www.aquaolsberg.de/110217-aquaolsberg-de-wAssets/img/bildergalerien/freizeitbad/sportbecken/sportbecken-bild1.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sportbecken" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="h-96 rounded-3xl overflow-hidden shadow-lg group relative">
              <img src="https://www.aquaolsberg.de/110217-aquaolsberg-de-wAssets/img/bildergalerien/Wohnmobilplatz/14_10_31_Wohnmobilstellplatz.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Wohnmobilplatz" />
            </div>
            <div className="h-64 rounded-3xl overflow-hidden shadow-lg group relative">
              <img src="https://www.aquaolsberg.de/110217-aquaolsberg-de-wAssets/img/bildergalerien/freizeitbad/wasserspielgarten/wasserspielgarten2.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Wasserspielgarten" />
            </div>
            <div className="md:col-span-2 h-64 rounded-3xl overflow-hidden shadow-lg group relative">
              <img src="https://www.aquaolsberg.de/110217-aquaolsberg-de-wAssets/img/bildergalerien/freizeitbad/freibad/freibad.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Freibad" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}