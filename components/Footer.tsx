
import React from 'react';
import { LOGO_URL } from '../constants';
import { Twitter, Linkedin, Github, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate?.('home')}
            >
              <img 
                src={LOGO_URL} 
                alt="EagleEye Logo" 
                className="h-10 w-auto filter brightness-0 invert" 
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white tracking-tighter">EagleEye</span>
                <span className="text-[9px] font-black tracking-[0.15em] text-sky-500 uppercase">
                  Cyber Technologies
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Pioneering the next generation of sovereign-grade security operations for global industries. 
              Resilience by architecture. Intelligence by design.
            </p>
            <div className="flex items-center gap-5">
              <Twitter className="text-gray-500 hover:text-sky-400 cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-gray-500 hover:text-sky-400 cursor-pointer transition-colors" size={20} />
              <Github className="text-gray-500 hover:text-sky-400 cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('services')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Managed Detection
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('services')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Cloud Hardening
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('services')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Zero Trust Architecture
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('services')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Incident Response
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('about')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Our Mission
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('careers')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('resources')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Intelligence Labs
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group" onClick={() => onNavigate?.('contact')}>
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-sky-500" />
                Contract Vehicles
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Operations</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-sky-500 mt-1 shrink-0" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  7375 Executive Place, Suite 400<br />
                  Lanham, MD 20706
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-sky-500 shrink-0" size={18} />
                <span className="text-gray-300 text-sm font-semibold tracking-tight">+1 (301) 818 - 2005</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-sky-500 shrink-0" size={18} />
                <span className="text-gray-300 text-sm font-semibold">contact@eagleeye.tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
              © 2026 EagleEye Cyber Technologies, LLC.
            </p>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <p className="text-gray-500 text-[10px] font-medium tracking-wide italic">
              Empowering global resilience in an adversarial landscape.
            </p>
          </div>
          <div className="flex gap-8 text-gray-500 text-[10px] uppercase font-black tracking-[0.15em]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-white cursor-pointer transition-colors">SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
