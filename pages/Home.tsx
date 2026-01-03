
import React from 'react';
import ScannerAnimation from '../components/ScannerAnimation';
import { ChevronRight, Lock, Cpu, Activity, ShieldCheck, ArrowRight, Zap, Network, Cloud, Shield } from 'lucide-react';

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-6">
        {/* Background Network Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Network Grid"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white opacity-90" />
        </div>

        {/* Scanning Animation Layer */}
        <ScannerAnimation />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 flex-grow flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm mx-auto">
             <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
             Mission-Critical Resilience
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight mb-8 tracking-tighter uppercase">
            Securing your <br />
            <span className="text-sky-600 drop-shadow-sm">
              Digital Assets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            EagleEye Cyber Technologies provides sovereign-grade protection for government, 
            enterprise, and regulated global industries. Zero Trust. Zero Compromise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-10 py-5 bg-gray-900 text-white font-black uppercase text-sm tracking-widest rounded-sm transform transition hover:scale-105 hover:bg-black active:scale-95 shadow-xl"
            >
              Request Threat Assessment
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-10 py-5 border border-gray-200 text-gray-900 font-bold uppercase text-sm tracking-widest rounded-sm hover:bg-gray-50 transition"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-y border-gray-100 py-10 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Uptime Reliability</p>
              <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">99.99%</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Threats Blocked Monthly</p>
              <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">25K+</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Incident Response Time</p>
              <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">&lt; 15m</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Compliance Grade</p>
              <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">FISMA High</p>
            </div>
          </div>
        </div>
      </section>

      {/* 01-CAPABILITIES SECTION */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-sky-600 font-black text-xs uppercase tracking-[0.3em] mb-4">01-CAPABILITIES</p>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter uppercase">
                <span className="bg-gray-900 px-3 py-1 inline-block text-white">Full-Spectrum</span><br />Cybersecurity Operations
              </h2>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2 group hover:text-sky-600 transition-all mb-4"
            >
              View all capabilities <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cybersecurity Advisory", icon: Shield, desc: "Elite strategic guidance for C-suite and government leadership to navigate complex threat landscapes." },
              { title: "Network Hardening", icon: Network, desc: "Securing the perimeter and internal fabrics against sophisticated persistent threats (APTs)." },
              { title: "Cloud Ecosystems", icon: Cloud, desc: "Hardening AWS, Azure, and Google Cloud environments with sovereign-grade data sovereignty controls." }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white border border-gray-100 hover:border-sky-200 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity text-gray-900">
                  <item.icon size={80} />
                </div>
                <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center mb-10 group-hover:bg-sky-600 transition-colors duration-500">
                  <item.icon className="text-gray-900 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight uppercase tracking-wide group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-light">
                  {item.desc}
                </p>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-sky-600 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Learn More <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02-ETHOS SECTION */}
      <section className="py-40 bg-gray-50 px-6 overflow-hidden relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-sky-600 font-black text-xs uppercase tracking-[0.5em] flex items-center gap-2">
                  <span className="text-sky-600">#</span> 02-ETHOS
                </p>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter uppercase">
                  <span className="bg-sky-600 px-3 py-1 inline-block text-white">Never Trust.</span><br />Always Verify.
                </h2>
              </div>
              
              <p className="text-gray-600 text-xl leading-relaxed max-w-xl font-light">
                We implement <span className="text-gray-900 font-bold">Zero Trust Architectures</span> that treat every data node as a potential threat vector.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-8">
                {[
                  { icon: Lock, title: "Immutable Security", desc: "Hardened baselines that resist environmental tampering." },
                  { icon: Activity, title: "Real-time Telemetry", desc: "Comprehensive visibility across global distributed stacks." },
                  { icon: Cpu, title: "Post-Quantum Defense", desc: "Proactive encryption ready for next-gen computation." },
                  { icon: ShieldCheck, title: "Automated Response", desc: "Algorithmic containment and adaptive mitigation." }
                ].map((feature, idx) => (
                  <div key={idx} className="space-y-4 p-4 -m-4 rounded-sm transition-all duration-300 hover:bg-white hover:shadow-lg group">
                    <div className="flex items-center gap-3">
                      <feature.icon className="text-gray-400 group-hover:text-sky-600 transition-colors" size={20} strokeWidth={1.5} />
                      <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider">{feature.title}</h4>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden border border-gray-100 shadow-2xl bg-white p-4">
                <img 
                  src="https://skywavehost.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-23-2025-08_27_09-AM.jpg" 
                  alt="Security Engineering Operations" 
                  className="w-full aspect-square object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 border border-black p-16 md:p-24 rounded-sm text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-white/10 transition-colors duration-1000"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Ready to Harden Your Environment?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Contact our engineering team today to schedule a comprehensive security assessment.
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-sky-600 text-white px-10 py-4 font-black uppercase text-xs tracking-[0.2em] rounded-sm hover:bg-sky-500 transition-all flex items-center gap-3 mx-auto shadow-xl"
                >
                  Speak with a Consultant <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
