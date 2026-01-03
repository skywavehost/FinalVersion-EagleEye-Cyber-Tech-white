
import React from 'react';
import { ShieldCheck, Target, Users, Award, Eye, Compass } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1 bg-sky-50 border border-sky-100 text-sky-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-sm">
              Our Security Ethos
            </div>
            <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
              Mission Critical <br />
              <span className="text-sky-600">Excellence.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Founded in the crucible of sovereign defense, EagleEye Cyber Technologies was built to bridge the gap between 
              emerging threats and enterprise resilience. We don't just secure systems; we defend legacies.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 bg-white border border-gray-100 shadow-sm space-y-4">
                  <ShieldCheck className="text-sky-600" size={32} />
                  <h3 className="text-gray-900 font-black uppercase text-xs tracking-widest">Resilience</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Persistent defense through adversarial analysis.</p>
               </div>
               <div className="p-8 bg-white border border-gray-100 shadow-sm space-y-4 translate-y-8">
                  <Target className="text-sky-600" size={32} />
                  <h3 className="text-gray-900 font-black uppercase text-xs tracking-widest">Precision</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Targeted hardening of high-value assets.</p>
               </div>
               <div className="p-8 bg-white border border-gray-100 shadow-sm space-y-4">
                  <Users className="text-sky-600" size={32} />
                  <h3 className="text-gray-900 font-black uppercase text-xs tracking-widest">Integrity</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Absolute transparency in operations.</p>
               </div>
               <div className="p-8 bg-white border border-gray-100 shadow-sm space-y-4 translate-y-8">
                  <Award className="text-sky-600" size={32} />
                  <h3 className="text-gray-900 font-black uppercase text-xs tracking-widest">Authority</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">Recognized globally by security standard bodies.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="p-12 md:p-16 bg-gray-50 border border-gray-100 rounded-sm relative overflow-hidden group hover:border-sky-300 transition-colors duration-500 shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <Compass size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 flex items-center justify-center border border-sky-200">
                  <Target className="text-sky-600" size={24} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                To architect the world’s most resilient digital ecosystems, empowering sovereign nations and 
                global enterprises to operate fearlessly in an increasingly adversarial landscape. We deliver 
                high-fidelity protection that is as uncompromising as the threats we face.
              </p>
            </div>
          </div>

          <div className="p-12 md:p-16 bg-gray-50 border border-gray-100 rounded-sm relative overflow-hidden group hover:border-sky-300 transition-colors duration-500 shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <Eye size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 flex items-center justify-center border border-sky-200">
                  <Eye className="text-sky-600" size={24} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                A future where digital trust is absolute, infrastructure is immutable, and the integrity of global 
                data is preserved against all forms of cyber-kinetic threat. We envision a world where technological 
                advancement is never hindered by the shadow of exploitation.
              </p>
            </div>
          </div>
        </section>

        {/* Contract Vehicles */}
        <section className="bg-gray-900 border border-black p-12 text-center rounded-sm shadow-2xl">
           <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">Contract Vehicles & Certifications</h2>
           <div className="flex flex-wrap justify-center gap-12 text-gray-400 font-black uppercase tracking-tighter text-3xl opacity-30">
              <span>GSA MAS</span>
              <span>8(a) STARS III</span>
              <span>OASIS+</span>
              <span>SEWP VI</span>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
