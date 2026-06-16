"use client";

import React from "react";
import { motion } from "framer-motion";
import MediaPlaceholder from "./MediaPlaceholder";

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#03091e] border-b border-slate-900" id="mensagem-de-video">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-orange-glow font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 block">Boas-vindas</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Uma mensagem para você
          </h2>
        </div>

        {/* Cinematic Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full relative shadow-2xl rounded-3xl overflow-hidden border border-slate-800"
        >
          <MediaPlaceholder
            type="video"
            label="Vídeo de Apresentação da Manu La Porta (Apresentando a proposta do curso e sua trajetória)"
            aspectRatio="aspect-video"
          />
        </motion.div>

        {/* Caption context */}
        <p className="text-center text-xs sm:text-sm text-slate-500 font-light mt-6 italic">
          *Assista ao vídeo para entender o método e como funciona o foil.
        </p>

      </div>
    </section>
  );
}
