import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Kontaktieren Sie uns</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Haben Sie Fragen zu unseren Angeboten или möchten Sie uns Feedback geben? 
            Schreiben Sie uns direkt über das Formular или nutzen Sie unsere Kontaktdaten.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600"><Phone size={24}/></div>
              <div><p className="text-xs text-slate-400 uppercase font-bold">Telefon</p><p className="font-semibold">(02962) 84 50 50</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600"><Mail size={24}/></div>
              <div><p className="text-xs text-slate-400 uppercase font-bold">Email</p><p className="font-semibold">info@aqua-olsberg.de</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600"><MapPin size={24}/></div>
              <div><p className="text-xs text-slate-400 uppercase font-bold">Adresse</p><p className="font-semibold">Zur Sauerlandtherme 1, 59939 Olsberg</p></div>
            </div>
          </div>
        </div>

        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Vorname" className="bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
              <input type="text" placeholder="Nachname" className="bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
            </div>
            <input type="email" placeholder="Ihre Email Adresse" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" />
            <textarea placeholder="Ihre Nachricht" rows="5" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"></textarea>
            <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all">
              <Send size={20} /> Nachricht senden
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}