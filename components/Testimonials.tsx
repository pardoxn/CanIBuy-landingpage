import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B0B14] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Story Section */}
        <div className="mb-24 rounded-[2.5rem] overflow-hidden bg-gray-50 dark:bg-[#1E1E2D] border border-gray-100 dark:border-white/5 shadow-2xl relative transition-colors duration-300">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-guru-primary/5 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[128px] pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
                
                {/* Text Side */}
                <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
                    <div className="inline-flex self-start items-center space-x-2 bg-white dark:bg-white/5 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
                        <span className="text-sm font-bold text-guru-primary dark:text-white tracking-wide">FOUNDER STORY</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.1]">
                        Warum ich CanIBuy <br/> gegründet habe.
                    </h2>
                    
                    <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                        <p>
                           "Damals wollte ich mir mein Traumauto kaufen. Ich suchte im Internet fand keinen Rechner, der mein Problem löste. Manuell alles aufschreiben und planen war mir zu mühsam."
                        </p>
                        <p>
                           "Daraus Entstand <strong className="text-guru-primary dark:text-white">CanIBuy</strong>. Kein Budget-Tracker, keine Daten die geteilt werden."
                        </p>
                    </div>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-900 dark:text-white text-xl">Benedikt Niewels</span>
                            <span className="text-guru-primary dark:text-gray-400 uppercase tracking-wider text-xs font-bold">Founder & CEO</span>
                        </div>
                    </div>
                </div>

                {/* Image Side - Styled like a cutout/portrait */}
                <div className="lg:col-span-5 h-[400px] lg:h-full relative flex items-end justify-center lg:justify-end overflow-hidden">
                    {/* Founder Image Placeholder - Man holding phone to match the vibe */}
                    <img 
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                        alt="Benedikt Niewels" 
                        className="relative z-10 w-auto h-[100%] object-cover object-top lg:mr-8 mask-image-gradient-b lg:mask-image-none"
                         style={{
                            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                        }}
                    />
                </div>
            </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              name: "Felix M.",
              role: "Wollte einen C63 AMG",
              text: "Mein Herz wollte den AMG, aber die App hat mir schwarz auf weiß gezeigt, dass ich dann nur noch Nudeln essen würde. Danke für die Rettung!",
              stars: 5
            },
            {
              name: "Sarah L.",
              role: "Leasing-Neuling",
              text: "Ich hatte keine Ahnung von den versteckten Kosten. CanIBuy hat mir genau gezeigt, was das Auto wirklich im Monat kostet, nicht nur die Rate.",
              stars: 5
            },
            {
              name: "Markus W.",
              role: "Familienvater",
              text: "Super Tool um zu checken, ob der Familien-SUV ins Budget passt, ohne dass der Urlaub gestrichen werden muss. Sehr ehrlich.",
              stars: 5
            }
          ].map((review, i) => (
            <div key={i} className="bg-gray-50 dark:bg-[#151520] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none">
              <div className="flex space-x-1 mb-4">
                {[...Array(review.stars)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-guru-primary to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                    <div className="text-gray-900 dark:text-white font-medium">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-guru-primary to-orange-600 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-orange-500/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Sicherheit vor der Unterschrift.
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              Lade dir CanIBuy kostenlos herunter und triff deine Entscheidung mit klarem Kopf.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors shadow-lg">
                <div className="w-6 h-6">
                    <svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 98 126.7 32.3 0 52.8-21.9 79.5-21.9 29 0 48.5 21.9 76.6 21.9 27.4 0 52.9-27.4 82.7-83.6 8.3-15.3 11.5-24 16.9-38.2-56.7-17-73.4-83.3-53.4-110.8zM243.6 77.6c18.5-26.7 21.6-43.2 13.9-63.7-31.8 4.7-56.6 20.7-72.2 40.5-12 15.3-21.6 39.7-14.7 65.2 26.2 3.6 51.5-12 73-42z"/></svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] leading-none">Laden im</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-3 hover:bg-gray-900 transition-colors shadow-lg">
                 <div className="w-6 h-6">
                    <svg viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] leading-none">JETZT BEI</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};