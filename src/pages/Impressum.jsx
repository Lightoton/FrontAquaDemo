import { Scale } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="py-24 bg-white min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-cyan-600">
          <Scale size={40} />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-6">Impressum</h1>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>
        
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm text-left">
          <p className="text-slate-600 leading-relaxed mb-6">
            <strong className="text-slate-800">Hinweis zum Demo-Projekt:</strong><br />
            Da es sich bei dieser Website um ein reines Konzept- und Demonstrationsprojekt (Proof of Concept) handelt, sind hier noch keine offiziellen Unternehmensangaben hinterlegt.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Im Falle einer produktiven Umsetzung und Zusammenarbeit werden an dieser Stelle die vollständigen und rechtsgültigen Angaben gemäß § 5 TMG des AquaOlsberg bzw. der Stadt Olsberg eingefügt.
          </p>
        </div>
      </div>
    </div>
  );
}