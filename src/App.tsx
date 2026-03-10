/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CompanyProfile from './pages/CompanyProfile';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = translations[lang];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen font-sans text-gray-900 bg-white">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          t={t.nav} 
          onContactClick={() => setIsModalOpen(true)} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<Home t={t} onContactClick={() => setIsModalOpen(true)} />} />
            <Route path="/company-profile" element={<CompanyProfile t={t} />} />
          </Routes>
        </main>

        <Footer 
          t={t.contact} 
          footerT={t.footer} 
          profileT={t.profile}
        />

        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          t={t.contact} 
        />
      </div>
    </BrowserRouter>
  );
}
