import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, ShieldCheck, FileCheck, Award, Landmark, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

const BrandIconImage: React.FC<{ src: string; alt: string; fallbackText: string; bgClass?: string }> = ({
  src,
  alt,
  fallbackText,
  bgClass = 'bg-blue-50 text-blue-700 border-blue-100',
}) => {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 p-1 flex items-center justify-center flex-shrink-0 shadow-2xs overflow-hidden group-hover:border-blue-300 transition-colors">
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    );
  }

  return (
    <div className={`w-10 h-10 rounded-2xl ${bgClass} flex items-center justify-center font-extrabold text-xs border flex-shrink-0 shadow-2xs`}>
      {fallbackText}
    </div>
  );
};

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return Database;
      case 'BarChart3':
        return BarChart3;
      case 'ShieldCheck':
        return ShieldCheck;
      default:
        return Database;
    }
  };

  const getSkillBrandComponent = (skillName: string) => {
    if (skillName.includes('Zoho')) {
      return (
        <BrandIconImage
          src="/images/zoho.jpg"
          alt="Zoho Books"
          fallbackText="Zoho"
          bgClass="bg-red-50 text-[#C8202B] border-red-100"
        />
      );
    }
    if (skillName.includes('Odoo')) {
      return (
        <BrandIconImage
          src="/images/odoo.jpg"
          alt="Odoo ERP"
          fallbackText="Odoo"
          bgClass="bg-purple-50 text-[#714B67] border-purple-100"
        />
      );
    }
    if (skillName.includes('QuickBooks')) {
      return (
        <BrandIconImage
          src="/images/quickbooks.jpg"
          alt="QuickBooks & SAP"
          fallbackText="QB/SAP"
          bgClass="bg-blue-50 text-[#003366] border-blue-100"
        />
      );
    }
    if (skillName.includes('Excel')) {
      return (
        <BrandIconImage
          src="/images/excel.jpg"
          alt="Microsoft Excel"
          fallbackText="Excel"
          bgClass="bg-emerald-50 text-[#107C41] border-emerald-100"
        />
      );
    }
    if (skillName.includes('Power BI')) {
      return (
        <BrandIconImage
          src="/images/powerbi.png"
          alt="Microsoft Power BI"
          fallbackText="PowerBI"
          bgClass="bg-amber-50 text-amber-600 border-amber-200"
        />
      );
    }
    return (
      <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-extrabold text-xs border border-emerald-200/80 flex-shrink-0 shadow-2xs">
        <ShieldCheck className="w-5 h-5 text-emerald-600" />
      </div>
    );
  };

  const frameworks = [
    {
      title: "IFRS Standards",
      subtitle: "International Financial Reporting",
      badge: "Global Statement Standards",
      icon: Landmark,
      color: "text-blue-700 bg-blue-50 border-blue-200"
    },
    {
      title: "ZATCA E-Invoicing",
      subtitle: "Phase 1 & Phase 2 Compliance",
      badge: "Saudi Tax Authority Standard",
      icon: FileCheck,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    {
      title: "SOCPA Framework",
      subtitle: "Saudi Chartered Accounting",
      badge: "Active Certified Governance",
      icon: Award,
      color: "text-blue-700 bg-blue-50 border-blue-200"
    },
    {
      title: "VAT & WHT Tax",
      subtitle: "Calculation, Filing & Defense",
      badge: "Corporate Tax Adherence",
      icon: ShieldCheck,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200"
    },
    {
      title: "CBAHI Quality Accreditation",
      subtitle: "Healthcare Financial Audit",
      badge: "Institutional Excellence",
      icon: Building2,
      color: "text-blue-700 bg-blue-50 border-blue-200"
    }
  ];

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
    <section id="skills" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Core Competencies &amp; Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills &amp; Accounting ERPs
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Mastery of modern financial ERP software, business intelligence analytics, and international regulatory standards.
          </p>
        </div>

        {/* 3 Skill Category Cards Grid with Real Uploaded Brand Images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category: SkillCategory) => {
            const CategoryIcon = getCategoryIcon(category.iconName);
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6 pb-5 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold shadow-2xs group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Real Brand Images */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill, sIdx) => {
                      const BrandComp = getSkillBrandComponent(skill.name);
                      return (
                        <div
                          key={sIdx}
                          className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:border-blue-200 hover:bg-slate-100/60 transition-all"
                        >
                          <div className="flex items-start gap-3.5">
                            {BrandComp}
                            <div className="space-y-1">
                              <span className="font-extrabold text-slate-900 text-sm block leading-tight">
                                {skill.name}
                              </span>
                              {skill.description && (
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {skill.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Executive Accounting Frameworks & Compliance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Regulatory Governance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Accounting Frameworks &amp; Compliance Standards
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Full adherence to international reporting standards and regional tax compliance frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {frameworks.map((fw, idx) => {
              const FwIcon = fw.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all space-y-2.5 group"
                >
                  <div className={`w-9 h-9 rounded-xl ${fw.color} flex items-center justify-center font-bold flex-shrink-0 shadow-2xs`}>
                    <FwIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-blue-700 transition-colors leading-tight">
                      {fw.title}
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5 leading-tight">
                      {fw.subtitle}
                    </p>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[10px] font-bold">
                    {fw.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
