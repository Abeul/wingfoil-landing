"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function AudienceSection() {
  const isFor = [
    "Nunca praticou Wingfoil e quer começar do jeito certo",
    "Acabou de comprar o equipamento e não sabe os próximos passos",
    "Quer aprender de forma autônoma e segura",
    "Deseja acelerar sua evolução economizando tempo e tentativas frustradas",
    "Busca construir uma base técnica limpa e correta",
    "Quer entender a física por trás do foil e o comportamento do vento",
  ];

  const isNotFor = [
    "Já domina voos avançados, transições complexas e saltos",
    "Procura conteúdo focado em manobras de competição ou freestyle",
    "Não pretende ir para a água praticar os exercícios",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#03091e] to-[#020617] border-b border-slate-900" id="para-quem-e">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 block">Alinhamento</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Este curso é para você?
          </h2>
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* Para Quem É */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#0b1528]/20 border border-emerald-500/10 flex flex-col"
          >
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-emerald-400 mb-6 flex items-center gap-2">
              <span className="p-1 rounded-md bg-emerald-500/10"><Check className="w-5 h-5" /></span>
              Para quem é
            </h3>
            <ul className="space-y-4 flex-grow">
              {isFor.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Para Quem Não É */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#0b1528]/10 border border-red-500/10 flex flex-col"
          >
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-red-400 mb-6 flex items-center gap-2">
              <span className="p-1 rounded-md bg-red-500/10"><X className="w-5 h-5" /></span>
              Para quem não é
            </h3>
            <ul className="space-y-4 flex-grow">
              {isNotFor.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                  <X className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
