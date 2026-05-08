import { ShieldCheck } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="py-24 bg-white min-h-[60vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-cyan-600">
          <ShieldCheck size={40} />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 mb-6">Datenschutzerklärung</h1>
        <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>
        
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm text-left">
          <p className="text-slate-600 leading-relaxed mb-6">
            <strong className="text-slate-800">Hinweis zum Demo-Projekt:</strong><br />
            Diese Konzept-Website sammelt aktiv keine echten Nutzerdaten und verwendet derzeit keine Tracking-Cookies für kommerzielle Zwecke.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Auf der finalen, produktiven Website wird hier eine vollständige, DSGVO-konforme Datenschutzerklärung integriert, die über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten aufklärt.
          </p>
        </div>
      </div>
    </div>
  );
}