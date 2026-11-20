import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, MessageSquare, ExternalLink, QrCode, X, ShieldCheck, Lock, Clock, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { contactInfo } = portfolioData;
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

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
    <section id="contact" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Executive Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Available for Senior Accounting roles, financial consulting, and audit management opportunities.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Direct Channels
            </h3>

            {/* Email Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-200 transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 p-2.5 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <svg className="w-6 h-6 fill-current text-[#EA4335]" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-bold text-slate-900 hover:text-[#EA4335] transition-colors text-sm sm:text-base"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                      <Check className="w-4 h-4" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* WhatsApp Card with QR Barcode Modal Button */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 p-2.5 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <svg className="w-6 h-6 fill-current text-[#25D366]" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block uppercase">
                      WhatsApp Direct
                    </span>
                    <a
                      href={contactInfo.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-[#25D366] transition-colors text-sm sm:text-base flex items-center gap-1.5"
                    >
                      <span>{contactInfo.whatsapp.display}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setQrModalOpen(true)}
                  className="p-2.5 rounded-xl text-slate-600 hover:text-[#25D366] hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 transition-all flex items-center gap-1.5 text-xs font-bold shadow-2xs"
                  title="View WhatsApp QR Barcode"
                >
                  <QrCode className="w-4 h-4 text-[#25D366]" />
                  <span className="hidden sm:inline">QR Code</span>
                </button>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 p-2.5 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block uppercase">
                      LinkedIn Profile
                    </span>
                    <a
                      href={contactInfo.linkedin.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-[#0A66C2] transition-colors text-sm sm:text-base flex items-center gap-1.5"
                    >
                      <span>{contactInfo.linkedin.display}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

                <a
                  href={contactInfo.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-[#0A66C2] hover:bg-slate-100 transition-colors"
                  title="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Executive Financial Governance & Value Commitment (Executive Light Theme) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Pillar Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Executive Governance &amp; Impact</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Uncompromising Precision &amp; Data Confidentiality
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Delivering executive-grade accounting, rigorous financial controls, and complete alignment with international reporting standards and regional tax frameworks.
              </p>

              {/* 3 Core Value Pillars (Light Theme Cards) */}
              <div className="space-y-3 pt-2">
                {/* Pillar 1: Confidentiality */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5 text-xs sm:text-sm shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-800 flex-shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-bold text-slate-900 block mb-0.5">
                      Absolute Data Confidentiality:
                    </strong>
                    <span className="text-slate-600">Strict ethical management and complete privacy protection of all corporate ledgers, revenues, and financial records.</span>
                  </div>
                </div>

                {/* Pillar 2: Regulatory Compliance */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5 text-xs sm:text-sm shadow-2xs hover:border-blue-300 transition-colors">
                  <div className="p-2 rounded-xl bg-blue-100/70 text-blue-800 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-bold text-slate-900 block mb-0.5">
                      100% Tax &amp; Audit Compliance:
                    </strong>
                    <span className="text-slate-600">Proven record in IFRS, SOCPA, VAT, WHT, and ZATCA E-Invoicing integration with zero audit variances or penalties.</span>
                  </div>
                </div>

                {/* Pillar 3: Closing Discipline */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5 text-xs sm:text-sm shadow-2xs hover:border-emerald-300 transition-colors">
                  <div className="p-2 rounded-xl bg-emerald-100/70 text-emerald-800 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-bold text-slate-900 block mb-0.5">
                      Strict Closing Deadline Discipline:
                    </strong>
                    <span className="text-slate-600">Streamlined monthly and annual financial close turnaround, improving reporting turnaround time by 30%.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Credential Badges Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[11px] font-bold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
                <Award className="w-3.5 h-3.5 text-emerald-600" /> SOCPA Certified Member
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800">
                <Award className="w-3.5 h-3.5 text-blue-600" /> ACCA UK Member
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> 5+ Years Senior Accounting
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp QR Barcode Modal */}
      <AnimatePresence>
        {qrModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQrModalOpen(false)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl z-10 border border-slate-200 text-center space-y-4"
            >
              <button
                onClick={() => setQrModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close QR Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#25D366] mx-auto flex items-center justify-center font-bold">
                <QrCode className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  WhatsApp QR Code
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Scan with your phone camera or WhatsApp scanner to start chatting directly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 inline-block shadow-inner">
                <img
                  src="/images/whatsapp-qr.jpg"
                  alt="WhatsApp QR Barcode"
                  onError={(e) => {
                    e.currentTarget.src = '/images/whatsapp-qr.png';
                  }}
                  className="w-48 h-48 object-contain mx-auto rounded-lg"
                />
              </div>

              <div className="pt-2">
                <a
                  href={contactInfo.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open WhatsApp App Direct</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
