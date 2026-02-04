import React from 'react';
import { Shield, Lock, EyeOff, Check } from 'lucide-react';
import { Button } from './Button';

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-transparent transition-colors duration-300">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-[#0F0F1A] dark:to-[#151525]" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-gradient-to-r dark:from-[#1E1E2D] dark:to-[#252535] rounded-3xl p-8 md:p-16 border border-gray-200 dark:border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
                <Shield className="w-4 h-4 text-green-600 dark:text-green-500" />
                <span className="text-sm font-medium text-green-600 dark:text-green-500">Anonym & Sicher</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Keine Bank erfährt von deinen Träumen.
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                CanIBuy ist ein sicherer Ort für deine Kalkulationen. Wir übermitteln keine Daten an Banken, Händler oder Schufa. Dein Budget-Check bleibt privat.
              </p>

              <ul className="space-y-4">
                {[
                  'Berechnungen erfolgen lokal oder anonym',
                  'Keine Verbindung zur Schufa',
                  'Keine Weitergabe an Autohäuser',
                  'Verschlüsselte Speicherung'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-guru-primary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-guru-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="secondary" className="mt-4 border border-gray-200 dark:border-transparent">
                Mehr zum Datenschutz
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="bg-gray-50 dark:bg-[#0F0F1A] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg">
                  <Lock className="w-8 h-8 text-guru-primary mb-4" />
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Privatsphäre</h4>
                  <p className="text-sm text-gray-500">Kein Tracking deines Einkaufsverhaltens.</p>
                </div>
                <div className="bg-gray-50 dark:bg-[#0F0F1A] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg">
                  <EyeOff className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Inkognito</h4>
                  <p className="text-sm text-gray-500">Teste so viele Autos wie du willst, völlig unsichtbar.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-[#0F0F1A] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg">
                   <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                        <span className="text-yellow-600 dark:text-yellow-500 font-bold text-xs">SSL</span>
                   </div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Verschlüsselt</h4>
                  <p className="text-sm text-gray-500">Moderne Sicherheitsstandards für deine Daten.</p>
                </div>
                 <div className="bg-gray-50 dark:bg-[#0F0F1A] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg">
                  <Shield className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Unabhängig</h4>
                  <p className="text-sm text-gray-500">100% frei von Provisionsinteressen.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};