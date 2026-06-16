"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

export default function HeroSection() {
  const scrollToCheckout = () => {
    const el = document.getElementById("cta-final-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#020617] via-[#040c22] to-[#020617] border-b border-slate-900">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-semibold mb-6 tracking-wide uppercase w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Treinamento Online
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6"
            >
              Aprenda Wingfoil:<br />
              <span className="text-gradient-cyan">Do Zero aos Primeiros Voos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-xl"
            >
              Um método simples, seguro e progressivo para quem quer aprender Wingfoil sozinho, entender o equipamento e evoluir com confiança.
            </motion.p>

            {/* CTA Area */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <button
                onClick={scrollToCheckout}
                className="bg-orange-glow hover:bg-orange-hover text-white text-base md:text-lg font-bold px-8 py-4.5 rounded-2xl orange-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                QUERO COMEÇAR AGORA
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Micro checklist items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span>Para iniciantes absolutos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span>Mais de 1 hora de conteúdo direto ao ponto</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span>6 módulos + módulo bônus</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span>Do vento aos primeiros voos</span>
              </div>
            </motion.div>
          </div>

          {/* Cinematic Media Placeholder */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[460px] lg:max-w-none"
            >
              <MediaPlaceholder
                type="video"
                label="Vídeo de Apresentação do Curso (Destaque da Manu navegando em alta velocidade)"
                aspectRatio="aspect-[4/5] md:aspect-[3/4]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
