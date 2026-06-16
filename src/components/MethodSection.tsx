"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function MethodSection() {
  const modules = [
    {
      num: "0",
      title: "Vento e Direção",
      desc: "Compreensão essencial da janela de vento, as direções (orça, arribada, través) e como ler a praia antes de começar.",
    },
    {
      num: "1",
      title: "Equipamento",
      desc: "Como escolher o mastro, asas do foil, tamanho da wing e prancha corretos para seu peso e região de velejo.",
    },
    {
      num: "2",
      title: "Controle do Wing em Terra",
      desc: "Treinamentos fundamentais fora da água para dominar a asa: como segurar, girar, virar a wing e tirar a força do vento de forma instantânea.",
    },
    {
      num: "3",
      title: "Prancha e Primeiros Bordos",
      desc: "Como entrar na água com segurança, subir na prancha sem o foil subir e fazer as primeiras derivas de joelhos controlando a direção.",
    },
    {
      num: "4",
      title: "Controle na Prancha",
      desc: "A transição de joelhos para a posição de pé (pop-up). Distribuição de peso ideal e postura para manter a prancha colada na água.",
    },
    {
      num: "5",
      title: "Primeiros Voos",
      desc: "Como bombear a wing e o foil em sincronia para gerar velocidade e fazer a prancha decolar da água de forma controlada.",
    },
    {
      num: "6",
      title: "Toeside e Transições",
      desc: "Como navegar com os pés invertidos (toeside), manter a altura do foil em curvas e iniciar as primeiras transições de direção.",
    },
    {
      num: "BÔNUS",
      title: "Física do Foil",
      desc: "Como funcionam a sustentação e o arrasto do hidrofoil. Ajustes avançados da posição do mastro na caixa de trilhos para mudar o comportamento da prancha.",
      isBonus: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#03091e] border-b border-slate-900" id="metodo">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 block">Estrutura Didática</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Um método progressivo do zero ao voo
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Aulas planejadas em sequência lógica. Você só avança quando estiver confortável com o passo anterior.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 pl-8 md:pl-12 space-y-10 pb-4">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline marker node */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full border-2 ${
                mod.isBonus 
                  ? "bg-orange-glow border-orange-glow/40 ring-4 ring-orange-500/5 shadow-[0_0_12px_rgba(255,85,0,0.3)]" 
                  : "bg-slate-950 border-cyan-500/40 group-hover:border-cyan-400 ring-4 ring-slate-900 transition-colors"
              } flex items-center justify-center`}>
                <div className={`w-2.5 h-2.5 rounded-full ${mod.isBonus ? "bg-white" : "bg-cyan-500 group-hover:bg-cyan-400 transition-colors"}`} />
              </div>

              {/* Sidebar labels for desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className={`font-display font-extrabold text-sm tracking-wider uppercase ${mod.isBonus ? "text-orange-glow" : "text-slate-500"}`}>
                  {mod.isBonus ? "Extra" : `Módulo ${mod.num}`}
                </span>
              </div>

              {/* Card Container */}
              <div className={`p-6 rounded-2xl border ${
                mod.isBonus 
                  ? "bg-gradient-to-r from-orange-950/10 to-slate-900/40 border-orange-500/15" 
                  : "bg-[#0b1528]/20 border-slate-800/80 group-hover:border-slate-850 transition-colors"
              }`}>
                {/* Mobile indicators */}
                <div className="md:hidden block mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${mod.isBonus ? "text-orange-glow" : "text-cyan-400"}`}>
                    {mod.isBonus ? "Bônus" : `Módulo ${mod.num}`}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-tight">
                  {mod.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {mod.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
