import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, FileText, Briefcase, Award, Phone, UserCheck, ShieldCheck, Landmark } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple section spy
      const sections = ['about', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: UserCheck },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: ShieldCheck },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/60 py-5'
      }`}
    >
      {/* Top Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-700 origin-left z-50 shadow-xs"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <a
            href="#about"
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-900 text-emerald-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 border border-slate-700/60">
              <Landmark className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="block font-extrabold text-slate-900 text-lg leading-tight tracking-tight group-hover:text-blue-700 transition-colors">
                {portfolioData.personalInfo.name}
              </span>
              <span className="block text-xs font-semibold text-emerald-600 tracking-wide uppercase">
                {portfolioData.personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={portfolioData.personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-500" />
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <a
              href={portfolioData.personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base shadow-md transition-all"
            >
              <FileText className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
