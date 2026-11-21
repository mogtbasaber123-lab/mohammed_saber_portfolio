import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, BarChart3, ShieldCheck, Award, TrendingUp, Sparkles, MapPin, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CompanyLogoBadge: React.FC<{ logo?: string; logoBg?: string; company: string }> = ({ logo, logoBg, company }) => {
  const [hasError, setHasError] = useState(false);

  if (logo && !hasError) {
    return (
      <div
        style={{ backgroundColor: logoBg || '#FFFFFF' }}
        className="w-12 h-12 rounded-2xl border border-slate-200/90 p-1.5 flex items-center justify-center shadow-xs overflow-hidden flex-shrink-0 group-hover:border-blue-400 transition-colors"
      >
        <img
          src={logo}
          alt={`${company} logo`}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-700 flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
      <Building2 className="w-6 h-6" />
    </div>
  );
};

const getCategoryIcon = (category: string) => {
  if (category.includes('Reporting') || category.includes('Close')) return BarChart3;
  if (category.includes('Supervision') || category.includes('Internal') || category.includes('Audit')) return ShieldCheck;
  if (category.includes('Tax') || category.includes('Regulatory') || category.includes('Adherence')) return Award;
  if (category.includes('Analysis') || category.includes('Control') || category.includes('Asset')) return TrendingUp;
  return CheckCircle2;
};

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/3 left-0 -z-10 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A track record of accounting excellence, ledger accuracy, cost optimization, and full regulatory compliance.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-12 relative"
        >
          {/* Vertical Connecting Timeline Line */}
          <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-600 via-emerald-500 to-slate-200" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              variants={itemVariants}
              className="relative lg:pl-16 group"
            >
              {/* Timeline Node Point (Desktop) */}
              <div className="hidden lg:flex absolute left-5 top-10 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-700 shadow-md group-hover:scale-125 group-hover:border-emerald-500 transition-all duration-300 z-10 items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </div>

              {/* Main Role Card */}
              <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                {/* Header Banner */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-slate-200">
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Company Logo Badge */}
                    <CompanyLogoBadge logo={exp.companyLogo} logoBg={exp.companyLogoBg} company={exp.company} />

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {exp.jobTitle}
                        </h3>
                        {exp.badge && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-slate-700 font-bold text-base">
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-2xs self-start lg:self-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-blue-700" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Executive Achievements Grid Cards */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" />
                      <span>Key Achievements &amp; Executive Impact</span>
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {exp.achievements.map((ach, aIdx) => {
                      const AchIcon = getCategoryIcon(ach.category);
                      return (
                        <div
                          key={aIdx}
                          className="group/item bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 transition-colors">
                                <AchIcon className="w-4 h-4" />
                              </div>
                              <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                                {ach.category}
                              </h5>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                              {ach.description}
                            </p>
                          </div>

                          {ach.highlightMetric && (
                            <div className="pt-3.5 border-t border-slate-100 mt-4 flex items-center justify-between">
                              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                                Key Impact
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/90 text-xs font-extrabold shadow-2xs group-hover/item:bg-emerald-100 transition-colors">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                                {ach.highlightMetric}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
