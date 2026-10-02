/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Identification } from './components/Identification';
import { BriefPsychotherapyAccordion } from './components/BriefPsychotherapyAccordion';
import { HowIWork } from './components/HowIWork';
import { ArtAndCreativity } from './components/ArtAndCreativity';
import { AboutMe } from './components/AboutMe';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF5EE] text-[#20130C] flex flex-col font-sans selection:bg-[#EADBCE] selection:text-[#20130C]">
      {/* Discreet Fixed Top Header */}
      <Header />

      {/* Main One-Page Content */}
      <main className="flex-1">
        {/* Seção 1 — Abertura / Hero */}
        <Hero />

        {/* Seção 2 — Identificação */}
        <Identification />

        {/* Seção 3 — Psicoterapia Breve (Acordeão) */}
        <BriefPsychotherapyAccordion />

        {/* Seção 4 — Como eu trabalho */}
        <HowIWork />

        {/* Seção 5 — Arte e criatividade no processo */}
        <ArtAndCreativity />

        {/* Seção 6 — Sobre mim & Para além da psicologia (Unificados e compactos) */}
        <AboutMe />

        {/* Seção 7 — Depoimentos */}
        <Testimonials />

        {/* Seção 8 — Dúvidas frequentes */}
        <FAQ />

        {/* Seção 9 — Encerramento */}
        <Closing />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* WhatsApp Flutuante Discreto */}
      <FloatingWhatsApp />
    </div>
  );
}
