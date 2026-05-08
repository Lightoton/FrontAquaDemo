import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Parking() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Wohnmobilplatz</h2>
      
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img 
            src="https://www.aquaolsberg.de/110217-aquaolsberg-de-wAssets/img/bildergalerien/Wohnmobilplatz/Herbst1-2015.jpg" 
            alt="Wohnmobilplatz" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
            <MapPin size={32} />
          </div>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Im Herzen Olsbergs: 21 ruhige Einstellplätze direkt am Ruhrtalradweg. Alle Plätze sind mit Strom versorgt. Eine zentrale Ver- und Entsorgungsstelle für Frisch- und Abwasser ist vorhanden.
          </p>
          <div className="bg-rose-50 text-rose-800 p-4 rounded-xl mb-6 font-semibold">
            Keine Reservierungen möglich!
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-slate-500">Anmeldung Touristik</span>
              <span className="font-semibold text-slate-800">Mo-Fr 9-17 Uhr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Anmeldung AquaOlsberg</span>
              <span className="font-semibold text-slate-800">Mo-Fr 12-21 Uhr</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}