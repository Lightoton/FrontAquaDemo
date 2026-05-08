import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

export default function Prices() {
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Загружаем цены из базы данных
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/public/prices');
        if (response.ok) {
          const data = await response.json();
          setPrices(data);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Preise:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-16 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Preise & Öffnungszeiten</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Время работы */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-cyan-100">
            <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Clock className="text-cyan-500"/> Freizeitbad
            </h4>
            <ul className="text-slate-600 space-y-4">
              <li className="flex justify-between border-b pb-2"><span>Montag - Freitag</span><span className="font-semibold">12:00 - 21:00 Uhr</span></li>
              <li className="flex justify-between border-b pb-2"><span>Sa, So, Feiertag</span><span className="font-semibold">12:00 - 19:00 Uhr</span></li>
            </ul>
            
            <h4 className="text-xl font-bold text-slate-800 mb-6 mt-8 flex items-center gap-2">
              <Clock className="text-teal-500"/> Dampfbad
            </h4>
            <ul className="text-slate-600 space-y-4">
              <li className="flex justify-between border-b pb-2"><span>Montag - Freitag</span><span className="font-semibold">13:00 - 20:00 Uhr</span></li>
              <li className="flex justify-between"><span>Sa, So, Feiertag</span><span className="font-semibold">13:00 - 18:45 Uhr</span></li>
            </ul>
          </div>
        </div>

        {/* Цены */}
        <div className="lg:col-span-8 bg-white p-8 rounded-3xl shadow-xl border-t-4 border-cyan-500">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600"><CheckCircle2 size={24}/></div>
            Eintrittspreise Freizeitbad
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-125">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase text-xs tracking-wider">
                  <th className="p-4 rounded-tl-xl font-semibold">Tarif</th>
                  <th className="p-4 font-semibold text-center">2 Stunden</th>
                  <th className="p-4 font-semibold text-center">3 Stunden</th>
                  <th className="p-4 rounded-tr-xl font-semibold text-center text-cyan-600">Tageskarte</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {isLoading ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-slate-400">
                      <div className="flex justify-center items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyan-500"></div>
                        Daten werden geladen...
                      </div>
                    </td>
                  </tr>
                ) : (
                  prices.map((price) => (
                    <tr key={price.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium">
                        {price.category}
                        {/* Сохраняем твою серую приписку для семейного тарифа */}
                        {price.category.includes('Familien') && (
                          <span className="text-xs text-slate-400 block font-normal">(bis 2 Erw. + 3 Kinder)</span>
                        )}
                      </td>
                      <td className="p-4 text-center">{price.price2h?.toFixed(2).replace('.', ',')} €</td>
                      <td className="p-4 text-center">{price.price3h?.toFixed(2).replace('.', ',')} €</td>
                      <td className="p-4 text-center font-bold text-cyan-600">{price.priceDay?.toFixed(2).replace('.', ',')} €</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-6 bg-slate-50 p-3 rounded-lg border border-slate-100">
            * Jedes weitere Kind bei Familientarif: 1,50 € (bis max. 10 Personen).
          </p>
        </div>
      </div>
    </motion.div>
  );
}