import React from 'react';
import { Calculator, Fuel, HeartHandshake, ShieldCheck, Car, Split, Search } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    icon: Calculator,
    title: "Realitäts-Check",
    description: "Gib Einkommen und Fixkosten ein. Wir zeigen dir, was wirklich übrig bleibt – VOR der Unterschrift."
  },
  {
    icon: Search,
    title: "Keine versteckten Kosten",
    description: "Leasingrate ist nicht alles. Wir berechnen Versicherung, Steuer, Sprit und Wartung automatisch mit."
  },
  {
    icon: Split,
    title: "Szenarien simulieren",
    description: "Leasing oder Finanzierung? 3er BMW oder doch der Golf? Vergleiche die Auswirkung auf deinen Alltag."
  },
  {
    icon: HeartHandshake,
    title: "Ehrlich & Neutral",
    description: "Wir verkaufen dir keine Autos und keine Kredite. Unser einziges Ziel ist, dass du dich nicht übernimmst."
  },
  {
    icon: ShieldCheck,
    title: "Datenschutz",
    description: "Deine Finanzen gehen niemanden etwas an. Alle Berechnungen passieren lokal oder anonymisiert."
  },
  {
    icon: Car,
    title: "Lifestyle Fokus",
    description: "Passt das Auto zu deinem Urlaub? Zu deinen Hobbys? Wir schauen auf dein Leben, nicht nur aufs Konto."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-[#0B0B14] relative transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-guru-primary font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Dein Kopf sagt Ja. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Aber sagt das auch dein Konto?
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Entdecke, wie CanIBuy dir hilft, Fehlentscheidungen zu vermeiden und dein Traumauto stressfrei zu genießen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50 dark:bg-[#151520] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-guru-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-guru-primary/10 dark:hover:shadow-guru-primary/10"
            >
              
              <div className="w-14 h-14 rounded-xl bg-guru-primary/10 flex items-center justify-center mb-6 group-hover:bg-guru-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-guru-primary group-hover:text-white transition-colors" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};