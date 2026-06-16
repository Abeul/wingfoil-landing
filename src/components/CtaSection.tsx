"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, ChevronRight } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

export default function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950" id="cta-final-section">
      
      {/* Background glow orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layout split in columns: content on left, media/action card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Headline and bullet list */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-orange-glow font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">Conclusão</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              O Wingfoil Parece Difícil Até Você Entender a Base
            </h2>
            
            <div className="space-y-4 text-slate-300 font-light text-base sm:text-lg mb-8 max-w-md">
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                Aprenda da forma correta desde o primeiro dia.
              </p>
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                Evite erros comuns e vícios difíceis de tirar.
              </p>
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                Ganhe tempo de velejo real na água.
              </p>
              <p className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                E evolua com segurança para você e seu equipamento.
              </p>
            </div>
          </div>

          {/* Right Column: Checkout Pricing Card with Media Placeholder background */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[440px] bg-gradient-to-br from-slate-900 to-[#0b1528] border border-cyan-500/10 p-8 rounded-3xl flex flex-col justify-between items-center text-center relative overflow-hidden orange-glow"
            >
              <div className="p-3 bg-cyan-500/10 rounded-xl mb-4 text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-6">
                Inscrição no Curso
              </h3>

              {/* Pricing */}
              <div className="mb-8 bg-slate-950/40 p-5 rounded-2xl w-full border border-slate-900">
                <span className="text-slate-500 text-xs font-light uppercase tracking-wider block">Por apenas</span>
                <div className="my-2">
                  <span className="text-slate-300 text-lg font-bold align-top">12x </span>
                  <span className="font-display text-4xl sm:text-5xl font-black text-white">R$ 19,70</span>
                </div>
                <span className="text-slate-400 text-xs font-light block">ou R$ 197,00 à vista</span>
              </div>

              {/* Checkout Button */}
              <a
                href="https://pay.kiwify.com.br/placeholder" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4.5 bg-gradient-to-r from-orange-glow to-amber-500 hover:from-orange-hover hover:to-amber-600 text-white text-base sm:text-lg font-bold rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 mb-4 cursor-pointer"
              >
                <CreditCard className="w-5 h-5" />
                QUERO COMEÇAR AGORA
                <ChevronRight className="w-5 h-5" />
              </a>

              {/* Sutil Guarantee Label */}
              <p className="text-slate-500 text-xs font-light">
                Garantia incondicional de 7 dias &bull; Acesso imediato
              </p>

              {/* Media placeholder container representing the final image placeholder of Manu navigando */}
              <div className="mt-8 w-full border-t border-slate-800/80 pt-6">
                <MediaPlaceholder
                  type="image"
                  label="Foto final da Manu voando no foil em alta velocidade"
                  aspectRatio="aspect-[16/9]"
                  className="scale-95"
                />
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
