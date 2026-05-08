import { motion } from 'framer-motion';
import { Waves, Droplets, Info } from 'lucide-react';

export default function Pools() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Unsere Bäder</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-cyan-500">
          <img src="https://www.aquaolsberg.de/110217-aquaolsberg-de-wAssets/img/bildergalerien/freizeitbad/sportbecken/sportbecken-bild1.jpg" alt="Freizeitbad" className="w-full h-48 object-cover" />
          <div className="p-8">
            <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-cyan-600">
              <Waves size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Freizeitbad</h3>
            <p className="text-slate-600">Ziehen Sie Ihre Bahnen im 28°C warmen Wasser des Sportbeckens oder genießen Sie die Sonne im Freibad. Für Kinder ist der Wasserspielgarten ein Traum!</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-teal-500">
           <div className="bg-slate-200 w-full h-48 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply"></div>
               <Droplets size={64} className="text-teal-200" />
           </div>
          <div className="p-8">
            <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-teal-600">
              <Droplets size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Solebad</h3>
            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-2 mb-4">
              <Info size={14}/> Wiedereröffnung Sommer 2026
            </div>
            <p className="text-slate-600">Olsberg ist Kneipp-Kurort. Spüren Sie die Kraft von Wasser, Salz und Wärme in unseren Solebecken und im Dampfbad.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}