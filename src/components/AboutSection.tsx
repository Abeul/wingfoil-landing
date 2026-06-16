"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Eye, Globe } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

export default function AboutSection() {
  const stats = [
    {
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
      number: "+8 milhões",
      label: "Visualizações orgânicas",
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      number: "+90 mil",
      label: "Seguidores nas redes",
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      number: "Internacional",
      label: "Patrocinada por marcas globais",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#03091e] border-b border-slate-900" id="quem-e-a-manu">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Placeholder Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[420px]"
            >
              <MediaPlaceholder
                type="image"
                label="Foto profissional da Manu La Porta (Lifestyle na praia com prancha de Wingfoil)"
                aspectRatio="aspect-[4/5]"
              />
            </motion.div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-orange-glow font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">A Instrutora</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              Prazer, eu sou Manu La Porta
            </h2>
            
            <div className="space-y-6 text-slate-300 font-light leading-relaxed text-sm sm:text-base md:text-lg mb-8 max-w-xl">
              <p>
                Atleta de Kitesurf e Wingfoil, apaixonada por esportes de vento e por ensinar.
              </p>
              <p>
                Ao longo dos anos percebi que muita gente desiste do Wingfoil porque tenta aprender sem uma sequência lógica ou recebe informações soltas na internet.
              </p>
              <p>
                Foi por isso que criei este curso: um passo a passo simples, organizado e pensado para quem quer aprender desde o início, entendendo não apenas <strong>o que fazer</strong>, mas <strong>por que fazer</strong>.
              </p>
              <p>
                Acredito que qualquer pessoa pode aprender Wingfoil quando tem o equipamento certo, a informação correta e um método progressivo.
              </p>
            </div>

            {/* Discrete Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-900/55">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2 text-slate-400">
                    {stat.icon}
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">{stat.label}</span>
                  </div>
                  <span className="font-display text-xl sm:text-2xl font-black text-white">{stat.number}</span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
