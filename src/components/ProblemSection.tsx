"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    { id: 1, text: "Comprou um Wing e quer aprender sozinho" },
    { id: 2, text: "Não entende de onde vem e para onde vai a direção do vento" },
    { id: 3, text: "Tem dificuldade extrema para controlar o Wing na água" },
    { id: 4, text: "Cai constantemente ao tentar se levantar na prancha" },
    { id: 5, text: "Não consegue gerar velocidade suficiente para fazer o foil subir" },
    { id: 6, text: "Não tem certeza se está treinando da maneira correta" },
    { id: 7, text: "Tem medo de criar vícios de postura que serão difíceis de corrigir depois" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#03091e] to-[#020617] border-b border-slate-900" id="problemas">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-glow font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 block">Desafios Práticos</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Talvez você esteja passando por isso...
          </h2>
        </div>

        {/* Problems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 rounded-2xl bg-[#0f172a]/30 border border-slate-800/80 flex gap-4 hover:border-slate-700/50 hover:bg-[#0f172a]/50 transition-all duration-300"
            >
              <div className="mt-1 shrink-0 p-1.5 rounded-lg bg-orange-500/10 text-orange-glow h-fit">
                <AlertTriangle className="w-4.5 h-4.5" />
              </div>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Text Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center bg-[#0d1b38]/20 border border-cyan-500/10 p-8 rounded-3xl glass-effect"
        >
          <p className="text-slate-300 font-light text-base sm:text-lg leading-relaxed mb-4">
            O Wingfoil parece simples quando vemos alguém navegando livremente no foil.
          </p>
          <p className="text-white font-medium text-lg sm:text-xl leading-relaxed mb-4">
            Mas sem entender os fundamentos, a evolução costuma ser muito mais lenta e frustrante.
          </p>
          <p className="text-cyan-400 font-semibold text-sm sm:text-base tracking-wide">
            Este curso foi criado exatamente para evitar isso.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
