import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function Saunas() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-3xl p-12 shadow-xl border-t-4 border-orange-500 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-[4px] z-10 flex flex-col items-center justify-center">
          <span className="bg-slate-800 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wider shadow-xl uppercase border border-slate-700 mb-4">Derzeit Geschlossen</span>
          <p className="text-slate-800 font-medium max-w-md">Die Saunalandschaft bleibt bis auf Weiteres für Renovierungsarbeiten geschlossen.</p>
        </div>
        
        <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
          <Flame size={40} />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-slate-800">Saunalandschaft</h2>
        <p className="text-slate-600 text-lg">
          Ausgesuchte Naturhölzer, Felsgestein und plätscherndes Wasser machen den Saunabesuch in unserer Waldsauna zu einer Art Waldspaziergang.
        </p>
      </div>
    </motion.div>
  );
}