import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CompanyLogoBadge: React.FC<{ logo?: string; logoBg?: string; company: string }> = ({ logo, logoBg, company }) => {
  const [hasError, setHasError] = useState(false);

  if (logo && !hasError) {
    return (
      <div
        style={{ backgroundColor: logoBg || '#FFFFFF' }}
        className="w-11 h-11 rounded-xl border border-slate-200/80 p-1 flex items-center justify-center shadow-xs overflow-hidden flex-shrink-0 group-hover:border-blue-400 transition-colors"
      >
        <img
          src={logo}
          alt={`${company} logo`}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/70 text-blue-700 flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
      <Building2 className="w-5 h-5" />
    </div>
  );
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A track record of accounting excellence, ledger accuracy, cost optimization, and full regulatory compliance.
          </p>
        </div>

        {/* Timeline / Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-8 relative"
        >
          {/* Vertical Connecting Line */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              variants={itemVariants}
              className="relative bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
                {/* Job Title & Company */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {exp.jobTitle}
                    </h3>
                    {exp.badge && (
                      <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-0.5">
                    {/* Company Logo Container with Seamless Dynamic Background */}
                    <CompanyLogoBadge logo={exp.companyLogo} logoBg={exp.companyLogoBg} company={exp.company} />
                    <span className="text-slate-800 font-bold text-base sm:text-lg">
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-xs self-start lg:self-center">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Achievements &amp; Core Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="bg-white p-4 rounded-xl border border-slate-200/90 flex items-start gap-3 shadow-xs hover:border-emerald-300 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-slate-700 leading-relaxed">
                        <strong className="font-bold text-slate-900 block mb-0.5">
                          {ach.category}:
                        </strong>
                        <span>{ach.description}</span>
                        {ach.highlightMetric && (
                          <strong className="text-emerald-600 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded ml-1 border border-emerald-200/70 inline-block">
                            {ach.highlightMetric}
                          </strong>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
