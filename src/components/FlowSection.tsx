"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, MapPin, Compass, RefreshCw, ArrowRight, ArrowDown } from "lucide-react";

export default function FlowSection() {
  const steps = [
    {
      icon: <Play className="w-5 h-5 text-cyan-400 fill-cyan-400/10" />,
      title: "1. Assista à aula",
      desc: "Entenda os conceitos teóricos e veja as demonstrações em vídeo de qualquer lugar.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      title: "2. Vá para a praia",
      desc: "Leve o conhecimento fresco e aplique nas condições de vento do dia.",
    },
    {
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      title: "3. Pratique",
      desc: "Treine de forma focada os movimentos específicos ensinados no módulo.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
      title: "4. Avance de etapa",
      desc: "Domine a habilidade atual e volte para liberar o próximo módulo do método.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#03091e] to-[#020617] border-b border-slate-900" id="como-funciona">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 block">Rotina de Evolução</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Aprenda no seu ritmo
          </h2>
        </div>

        {/* Steps Flow Display */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start relative">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-[#0b1528]/25 border border-slate-800/80 p-6 rounded-2xl relative h-full justify-between"
              >
                <div>
                  <div className="p-3 bg-cyan-500/10 rounded-xl w-fit mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
              
              {/* Connector arrows for desktop and mobile */}
              {idx < 3 && (
                <>
                  {/* Desktop Right Arrow */}
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 text-slate-700 pointer-events-none" style={{ left: `${(idx + 1) * 25 - 2}%` }}>
                    <ArrowRight className="w-5 h-5 animate-[pulse_2s_infinite]" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Text bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center max-w-xl mx-auto space-y-3"
        >
          <p className="text-slate-300 font-light text-base leading-relaxed">
            Cada módulo prepara você para o próximo.
          </p>
          <p className="text-white font-bold text-base sm:text-lg">
            Sem atalhos. Sem informações desnecessárias.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
