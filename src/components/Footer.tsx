import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ShieldCheck, Landmark } from 'lucide-react';

export const Footer: React.FC = () => {
  const { footer, personalInfo } = portfolioData;

  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Landmark className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400">
                {personalInfo.title}
              </span>
            </div>
          </div>

          {/* Copyright Notice */}
          <p className="text-xs text-slate-400 font-medium">
            {footer.copyright}
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% English Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
