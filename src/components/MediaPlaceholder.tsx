"use client";

import React from "react";
import { Image as ImageIcon, Video, Film } from "lucide-react";

interface MediaPlaceholderProps {
  type: "image" | "video";
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function MediaPlaceholder({
  type,
  label,
  aspectRatio = "aspect-video",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 flex flex-col justify-center items-center text-center p-6 group ${className}`}
    >
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      
      {/* Soft gradient spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />

      {/* Decorative corner borders */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-slate-700/50 rounded-tl-md" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-slate-700/50 rounded-tr-md" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-slate-700/50 rounded-bl-md" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-slate-700/50 rounded-br-md" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Animated Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500/20 group-hover:scale-105 transition-all duration-300">
          {type === "video" ? (
            <Video className="w-8 h-8" />
          ) : type === "image" && label.toLowerCase().includes("lifestyle") ? (
            <Film className="w-8 h-8" />
          ) : (
            <ImageIcon className="w-8 h-8" />
          )}
        </div>

        {/* Labels */}
        <div className="max-w-xs">
          <h4 className="font-display font-bold text-slate-300 text-sm md:text-base group-hover:text-slate-200 transition-colors">
            {label}
          </h4>
          <p className="text-slate-500 text-xs mt-1.5 uppercase tracking-wider font-semibold">
            {type === "video" ? "Espaço para Vídeo (16:9)" : "Espaço para Imagem"}
          </p>
        </div>
      </div>
    </div>
  );
}
