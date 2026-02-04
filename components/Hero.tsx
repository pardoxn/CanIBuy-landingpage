import React from 'react';
import { Button } from './Button';
import { ChevronRight, Star, CheckCircle, Car, AlertCircle, Info } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50 dark:bg-[#0F0F1A] transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600/10 dark:bg-red-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm dark:shadow-none">
              <span className="flex h-2 w-2 rounded-full bg-guru-primary"></span>
              <span className="text-sm font-medium text-gray-900 dark:text-guru-primary">Lifestyle-Check für große Entscheidungen</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Kann ich mir dieses <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-guru-primary to-orange-400">
                Auto wirklich leisten?
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ohne Bauchschmerzen zur Unterschrift. CanIBuy simuliert transparent, wie sich dein Wunschauto auf dein Leben auswirkt.
              Kein Excel, kein Verkaufsdruck – nur Klarheit.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto group">
                Check jetzt starten
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span>Ehrlich & Unabhängig</span>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 dark:text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-guru-primary" />
                <span>Orientierung statt Empfehlung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-guru-primary" />
                <span>100% Datenschutzfokussiert</span>
              </div>
            </div>
          </div>

          {/* Visual Content (Mockup) */}
          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
             {/* Abstract Shapes behind phone */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-red-500 to-orange-500 rounded-full blur-[80px] opacity-20 dark:opacity-30" />
            
            {/* Phone Container */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform lg:rotate-y-[-12deg] lg:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0 ring-1 ring-white/10 dark:ring-white/10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content - Keeping Dark Mode UI for the App Mockup as it is a premium app feature */}
              <div className="w-full h-full bg-[#0F0F1A] flex flex-col relative">
                {/* Status Bar */}
                <div className="h-12 w-full flex justify-between items-center px-6 text-xs text-white pt-2">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-white rounded-sm opacity-80"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 pt-2 pb-6">
                  <div className="text-gray-400 text-sm">Lifestyle Check</div>
                  <div className="text-2xl font-bold text-white">Mein Wunschauto</div>
                </div>

                {/* Balance Card - Result */}
                <div className="mx-4 bg-gradient-to-br from-[#2a2a40] to-[#1E1E2D] p-5 rounded-2xl shadow-lg border border-white/5 mb-6 relative overflow-hidden">
                   {/* Glow effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="text-gray-400 text-sm">Monatlich übrig</div>
                    <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs font-bold">MACHBAR</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 relative z-10">+ 458,00 €</div>
                  <div className="text-xs text-gray-500 relative z-10">Nach Abzug aller Autokosten</div>
                </div>

                {/* Recent Transactions List - Calculation */}
                <div className="flex-1 bg-white rounded-t-[2.5rem] p-6 space-y-5">
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-gray-800">Kalkulation</span>
                        <span className="text-gray-400 text-xs font-medium">Monatlich</span>
                    </div>

                    {/* Item 1 - Income */}
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                                <Info size={14} />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900 text-sm">Freies Budget</div>
                                <div className="text-xs text-gray-500">Einkommen - Fixkosten</div>
                            </div>
                        </div>
                        <span className="font-medium text-gray-900">+ 1.250 €</span>
                    </div>

                     {/* Item 2 - Car Rate */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
                                <Car size={18} />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900 text-sm">Audi A4 Avant</div>
                                <div className="text-xs text-gray-500">Leasingrate</div>
                            </div>
                        </div>
                        <span className="font-medium text-red-600">- 489 €</span>
                    </div>

                    {/* Item 3 - Running Costs */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                                <AlertCircle size={18} />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900 text-sm">Nebenkosten</div>
                                <div className="text-xs text-gray-500">Versicherung, Sprit...</div>
                            </div>
                        </div>
                        <span className="font-medium text-orange-600">- 303 €</span>
                    </div>
                    
                    <div className="pt-2 text-center">
                        <p className="text-[10px] text-gray-400 leading-tight">
                            Schätzung basierend auf deinen Eingaben. Keine Finanzberatung.
                        </p>
                    </div>
                </div>

              </div>
            </div>

            {/* Floating Elements around phone */}
            <div className="absolute top-[20%] right-[0%] lg:right-[-10%] bg-white dark:bg-[#1E1E2D] p-4 rounded-xl border border-gray-100 dark:border-white/10 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Ergebnis</div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">Passt in dein Leben!</div>
                    </div>
                </div>
            </div>

             <div className="absolute bottom-[20%] left-[0%] lg:left-[-10%] bg-white dark:bg-[#1E1E2D] p-4 rounded-xl border border-gray-100 dark:border-white/10 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Tipp</div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">Versicherung zu hoch?</div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};