import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const vacancies = [
  { title: "Fachangestellte für Bäderbetriebe", type: "Vollzeit", desc: "Verstärken Sie unser Team im Bereich Aufsicht und Technik." },
  { title: "Rettungsschwimmer (m/w/d)", type: "Teilzeit / Aushilfe", desc: "Sicherheit steht bei uns an erster Stelle. Helfen Sie uns dabei." },
  { title: "Mitarbeiter Gastronomie", type: "Vollzeit", desc: "Verwöhnen Sie unsere Gäste in unserem Bistrobereich." }
];

export default function Jobs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">Karriere im AquaOlsberg</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8 rounded-full"></div>
      <p className="text-slate-600 mb-12 max-w-2xl mx-auto italic">
        "Werden Sie Teil unseres Teams in einer der schönsten Thermen des Sauerlands."
      </p>

      <div className="grid gap-6">
        {vacancies.map((job, i) => (
          <motion.div 
            key={i} whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col md:flex-row items-center justify-between text-left gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-cyan-50 p-4 rounded-xl text-cyan-600"><Briefcase /></div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                <p className="text-sm text-cyan-600 font-semibold">{job.type}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-600 font-bold transition-colors">
              Details ansehen <ChevronRight size={20} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}