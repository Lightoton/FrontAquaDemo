import { useState, useEffect } from 'react';
import { Lock, LogOut, Save, CheckCircle } from 'lucide-react';

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('jwt') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Загружаем цены, если есть токен
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/public/prices');
        const data = await response.json();
        setPrices(data);
      } catch (err) {
        console.error("Fehler beim Laden der Preise", err);
      }
    };

    if (token) {
      fetchPrices();
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        localStorage.setItem('jwt', data.token);
        setError('');
      } else {
        setError('Ungültige Anmeldedaten');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Verbindungsfehler zum Server');
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('jwt');
    setPrices([]);
  };

  const handlePriceChange = (id, field, value) => {
    setPrices(prices.map(p => p.id === id ? { ...p, [field]: parseFloat(value) || 0 } : p));
  };

  const savePrice = async (price) => {
    try {
      // ИСПОЛЬЗУЕМ ОБЫЧНОЕ СЛОЖЕНИЕ СТРОК (ПЛЮС), ЧТОБЫ ИЗБЕЖАТЬ ПРОБЛЕМ С КАВЫЧКАМИ
      const url = '/api/admin/prices/' + price.id;
      
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(price)
      });
      
      if (res.ok) {
        setSuccessMsg('Preise für ' + price.category + ' aktualisiert!');
        setTimeout(() => setSuccessMsg(''), 3000);
      } else {
        if (res.status === 403) {
          handleLogout();
          setError('Sitzung abgelaufen. Bitte neu anmelden.');
        } else {
          setError('Serverfehler beim Speichern');
        }
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Fehler beim Speichern');
    }
  };

  if (!token) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border-t-4 border-cyan-500">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-4">
              <Lock size={24} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Interner Bereich</h2>
            <p className="mt-2 text-sm text-slate-600">Nur für autorisiertes Personal</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <input
                type="text"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Benutzername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                required
                className="appearance-none rounded-xl relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-md transition-colors"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Systemsteuerung</h1>
            <p className="text-slate-500 text-sm mt-1">Preise und Einstellungen verwalten</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm transition-colors"
          >
            <LogOut size={16} /> Abmelden
          </button>
        </div>

        {successMsg && (
          <div className="mb-6 bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-2 font-bold animate-in fade-in">
            <CheckCircle size={20} /> {successMsg}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-xl font-bold text-slate-800">Ticketpreise (Sole/Freizeitbad)</h2>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-500 uppercase text-xs tracking-wider">
                  <th className="py-3 px-4">Kategorie</th>
                  <th className="py-3 px-4">2 Stunden (€)</th>
                  <th className="py-3 px-4">3 Stunden (€)</th>
                  <th className="py-3 px-4">Tageskarte (€)</th>
                  <th className="py-3 px-4 text-right">Aktion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {prices.map((price) => (
                  <tr key={price.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-800">{price.category}</td>
                    <td className="py-4 px-4">
                      <input type="number" step="0.10" value={price.price2h} onChange={(e) => handlePriceChange(price.id, 'price2h', e.target.value)} className="w-20 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none" />
                    </td>
                    <td className="py-4 px-4">
                      <input type="number" step="0.10" value={price.price3h} onChange={(e) => handlePriceChange(price.id, 'price3h', e.target.value)} className="w-20 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none" />
                    </td>
                    <td className="py-4 px-4">
                      <input type="number" step="0.10" value={price.priceDay} onChange={(e) => handlePriceChange(price.id, 'priceDay', e.target.value)} className="w-20 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none" />
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button onClick={() => savePrice(price)} className="flex items-center gap-1 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-3 py-2 rounded-lg font-bold text-sm transition-colors ml-auto">
                        <Save size={16} /> Speichern
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}