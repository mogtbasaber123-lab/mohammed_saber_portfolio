import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Eye, Calendar, Building2 } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';
import { CertificateLightbox } from './CertificateLightbox';

interface QualificationItem extends CertificationItem {
  categoryKey: 'fellowship' | 'academic' | 'training';
}

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'fellowship' | 'academic' | 'training'>('all');
  const { academicDegree, certifications } = portfolioData;

  // Unified 6 qualifications list with category keys
  const allQualifications: QualificationItem[] = [
    { ...academicDegree, categoryKey: 'academic' },
    ...certifications.map((cert) => {
      let catKey: 'fellowship' | 'academic' | 'training' = 'training';
      if (cert.id.includes('uk') || cert.id.includes('socpa')) catKey = 'fellowship';
      else if (cert.id.includes('sudacad')) catKey = 'academic';
      return { ...cert, categoryKey: catKey };
    }),
  ];

  const filteredQualifications = activeFilter === 'all'
    ? allQualifications
    : allQualifications.filter((item) => item.categoryKey === activeFilter);

  const filterTabs = [
    { key: 'all', label: 'All Qualifications', count: allQualifications.length },
    { key: 'fellowship', label: 'Professional Fellowships', count: allQualifications.filter(i => i.categoryKey === 'fellowship').length },
    { key: 'academic', label: 'Academic & Diplomas', count: allQualifications.filter(i => i.categoryKey === 'academic').length },
    { key: 'training', label: 'Certifications & Awards', count: allQualifications.filter(i => i.categoryKey === 'training').length },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education &amp; Professional Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Verified academic degrees, chartered professional accounting fellowships, and executive training commendations.
          </p>
        </div>

        {/* 1️⃣ Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                    : 'bg-[#F8FAFC] text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                    isActive ? 'bg-blue-800 text-white' : 'bg-slate-200/70 text-slate-700'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2️⃣ Clean Light Background 3-Column Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredQualifications.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Light Background Thumbnail Container */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[4/3] bg-slate-100/90 border-b border-slate-200/80 p-4 flex items-center justify-center cursor-pointer group/img overflow-hidden"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain mx-auto group-hover/img:scale-105 transition-transform duration-500 drop-shadow-sm"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold flex items-center gap-2 shadow-md">
                        <Eye className="w-4 h-4 text-blue-700" />
                        <span>View Certificate Lightbox</span>
                      </span>
                    </div>

                    <span className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold border border-slate-700/80 shadow-xs">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Content Info */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                      <Building2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>
                    {cert.period && (
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{cert.period}</span>
                      </div>
                    )}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs shadow-xs hover:border-slate-400 transition-all active:scale-[0.98]"
                  >
                    <Eye className="w-4 h-4 text-blue-700" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};
