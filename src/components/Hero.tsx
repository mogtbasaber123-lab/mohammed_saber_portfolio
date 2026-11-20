import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, ShieldCheck, CheckCircle2, Award, TrendingUp, User, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { personalInfo, metrics } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8FAFC]">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column - Information & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Executive Financial Portfolio</span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold text-blue-700">
                  {personalInfo.title}
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>

            {/* Bio Statement */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {personalInfo.bio}
            </motion.p>

            {/* Core Strengths Pill Badges */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Core Executive Strengths
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.coreStrengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={personalInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-base shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 transition-all duration-200 active:scale-[0.98]"
              >
                <FileText className="w-5 h-5" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-base shadow-sm hover:border-slate-400 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Quick Contact</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Framed Profile Photo & Key Metrics Grid */}
          <div className="lg:col-span-5 space-y-6">
            {/* Framed Profile Photo Placeholder */}
            <motion.div variants={itemVariants} className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-2xl bg-white p-3 shadow-xl border border-slate-200/80 group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-100">
                  {!imageError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center">
                      <User className="w-20 h-20 text-slate-400 mb-2" />
                      <span className="font-bold text-lg">{personalInfo.name}</span>
                      <span className="text-xs text-emerald-400">{personalInfo.title}</span>
                    </div>
                  )}

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700/50">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Senior Level Professional</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3 Highlighted Key Metric Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight group-hover:scale-105 transition-transform">
                      <AnimatedCounter target={metric.numberValue} suffix={metric.suffix} />
                    </span>
                    <TrendingUp className="w-4 h-4 text-emerald-500 opacity-70" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-800 leading-snug">
                    {metric.label}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-tight line-clamp-2">
                    {metric.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
