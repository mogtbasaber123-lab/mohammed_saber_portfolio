import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Eye, Calendar, Building2 } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';
import { CertificateLightbox } from './CertificateLightbox';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const { academicDegree, certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic &amp; Professional Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education &amp; Professional Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Verified academic degrees, professional accounting fellowships, and executive commendations.
          </p>
        </div>

        {/* Academic Degree Featured Card (Executive Light Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 mb-12 border border-slate-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  Academic Degree
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                  Grade: {academicDegree.grade}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight leading-tight">
                {academicDegree.title}
              </h3>

              <div className="space-y-1.5 text-slate-700 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-700" />
                  <span className="font-bold">{academicDegree.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{academicDegree.period}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                {academicDegree.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedCert(academicDegree)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Box (Matches Rest of Certificates) */}
            <div className="lg:col-span-4">
              <div
                onClick={() => setSelectedCert(academicDegree)}
                className="relative aspect-[4/3] bg-slate-950 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 p-3 flex items-center justify-center group/img shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={academicDegree.image}
                  alt={academicDegree.title}
                  className="w-full h-full object-contain mx-auto group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-4 h-4 text-blue-700" />
                    <span>View Lightbox</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Certifications & Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Preview Slot (100% Uncropped Preview) */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-200 p-3 flex items-center justify-center group/img"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain mx-auto group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <Eye className="w-4 h-4 text-blue-700" />
                      <span>View Lightbox</span>
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold border border-slate-700">
                    {cert.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-600">
                    {cert.issuer}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs shadow-xs hover:border-slate-400 transition-all"
                >
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};
