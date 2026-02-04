import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#08080F] border-t border-gray-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-guru-primary to-orange-500 flex items-center justify-center mr-2 shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">CanIBuy</span>
            </div>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Die App für ehrliche Auto-Kaufentscheidungen. Wir helfen dir, Finanzen und Träume in Einklang zu bringen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-guru-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-guru-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-guru-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">App</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-500">
              <li><a href="#" className="hover:text-guru-primary transition-colors">Vorteile</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Ablauf</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Kostenrechner</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Modelle</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-500">
              <li><a href="#" className="hover:text-guru-primary transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Vision</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-500">
              <li><a href="#" className="hover:text-guru-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-guru-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600">
          <p>&copy; {new Date().getFullYear()} CanIBuy App. Alle Rechte vorbehalten. Keine Finanzberatung.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span>Made with ❤️ for car lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};