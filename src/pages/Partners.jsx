import { motion } from 'framer-motion';
import { Building2, Map, Music, ExternalLink } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Partners() {
  const partners = [
    {
      name: "Stadt Olsberg",
      description: "Die offizielle Website der Stadt Olsberg. Alle Informationen zu Verwaltung, Bürgerservice und Stadtleben.",
      icon: <Building2 size={32} className="text-cyan-600" />,
      url: "https://www.olsberg.de/",
      color: "border-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      name: "Olsberg Touristik",
      description: "Ihr Start in die Natur! Entdecken Sie Urlaubsangebote, Wanderrouten und Freizeitaktivitäten im Sauerland.",
      icon: <Map size={32} className="text-teal-600" />,
      url: "https://www.tourismus-brilon-olsberg.de/",
      color: "border-teal-500",
      bg: "bg-teal-50"
    },
    {
      name: "Konzerthalle Olsberg",
      description: "Top-Adresse für Veranstaltungen. Theater, Konzerte, Kabarett und Comedy-Stars live erleben.",
      icon: <Music size={32} className="text-rose-600" />,
      url: "https://www.konzerthalle-olsberg.de/",
      color: "border-rose-500",
      bg: "bg-rose-50"
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Unsere Partner</h1>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Das AquaOlsberg arbeitet eng mit starken lokalen Partnern zusammen, um Ihren Aufenthalt im Sauerland unvergesslich zu machen.
          </p>
        </div>

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.a 
              key={index}
              variants={fadeUpVariant}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${partner.color} group block`}
            >
              <div className={`${partner.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                {partner.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-cyan-600 transition-colors">
                {partner.name}
              </h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                {partner.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-cyan-500 transition-colors">
                Zur Website <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}