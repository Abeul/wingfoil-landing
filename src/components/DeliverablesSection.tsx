"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Layers, Award, Clock, Laptop, Star } from "lucide-react";

export default function DeliverablesSection() {
  const deliverables = [
    {
      icon: <Play className="w-5 h-5 text-cyan-400" />,
      title: "Curso completo",
      desc: "Acesso a todas as videoaulas detalhadas explicando passo a passo cada etapa do aprendizado.",
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "6 módulos principais",
      desc: "Estrutura progressiva que guia você desde a análise do vento até as curvas no foil.",
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: "Módulo bônus exclusivo",
      desc: "Aula focada nas regulagens avançadas do foil e dinâmica de fluidos aplicável.",
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      title: "+1 hora de conteúdo objetivo",
      desc: "Material editado de forma dinâmica, sem enrolação ou teorias desnecessárias.",
    },
    {
      icon: <Laptop className="w-5 h-5 text-cyan-400" />,
      title: "Acesso online vitalício",
      desc: "Assista pelo celular, tablet ou computador quando e onde quiser.",
    },
    {
      icon: <Star className="w-5 h-5 text-cyan-400" />,
      title: "Atualizações futuras",
      desc: "Inclusão automática e sem custo extra de novas aulas e refinamentos do curso.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#03091e] border-b border-slate-900" id="o-que-voce-recebe">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 block">Conteúdo Incluso</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            O que você recebe
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#0b1528]/25 border border-slate-800/80 hover:border-slate-700/60 transition-all duration-300"
            >
              <div className="p-2.5 bg-cyan-500/10 rounded-xl w-fit mb-4 text-cyan-400">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
