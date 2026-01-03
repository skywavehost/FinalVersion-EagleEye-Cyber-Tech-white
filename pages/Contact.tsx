
import React, { useState, useRef } from 'react';
import { Shield, Upload, Send, CheckCircle2, AlertCircle, FileText, Image as ImageIcon, X } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mzdprzpq';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    industry: 'govt',
    briefing: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 3));
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const submissionData = new FormData();
    submissionData.append('Name', formData.name);
    submissionData.append('Email', formData.email);
    submissionData.append('Organization', formData.organization);
    submissionData.append('Industry', formData.industry);
    submissionData.append('Message', formData.briefing);
    
    files.forEach((file, index) => {
      submissionData.append(`attachment_${index}`, file);
    });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: submissionData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (err) {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="pt-40 pb-32 px-6 min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <CheckCircle2 size={64} className="text-sky-600 mx-auto" strokeWidth={1} />
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Transmission Successful</h1>
          <p className="text-gray-600 font-light leading-relaxed">
            Your security audit request has been encrypted and transmitted. 
            Expect a response within 24 hours.
          </p>
          <button onClick={() => setFormState('idle')} className="text-sky-600 text-xs font-black uppercase tracking-widest hover:text-gray-900 transition-colors">Send Another Transmission</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <p className="text-sky-600 font-black text-xs uppercase tracking-[0.4em]">CONTACT OPERATIONS</p>
            <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Initiate <br />
              <span className="text-gray-400">Security Audit.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-xl leading-relaxed">
              Ready to harden your critical infrastructure? Provide your environment details and our 
              offensive security team will conduct a preliminary reconnaissance.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Shield, title: "E2EE Handling", desc: "All submissions are encrypted at rest." },
                { icon: AlertCircle, title: "Immediate Response", desc: "Our GSOC maintains a 24-hour SLA." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-100 rounded-sm">
                   <item.icon className="text-sky-600 shrink-0" size={24} />
                   <div>
                     <h4 className="text-gray-900 font-bold uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-10 md:p-12 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Operator Name</label>
                  <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 p-4 text-gray-900 font-medium outline-none focus:border-sky-600 transition-colors" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Work Email</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-gray-50 border border-gray-100 p-4 text-gray-900 font-medium outline-none focus:border-sky-600 transition-colors" placeholder="e.g. security@corp.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Briefing Summary</label>
                <textarea required name="briefing" value={formData.briefing} onChange={handleInputChange} rows={4} className="w-full bg-gray-50 border border-gray-100 p-4 text-gray-900 font-medium outline-none focus:border-sky-600 transition-colors resize-none" placeholder="Describe your current security challenges..." />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Architecture Assets (PDF/IMAGE)</label>
                <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-gray-200 bg-gray-50 p-10 text-center cursor-pointer hover:border-sky-300 transition-colors group">
                  <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} multiple accept="image/*,.pdf" />
                  <Upload className="mx-auto text-gray-300 group-hover:text-sky-600 transition-colors mb-4" size={32} />
                  <p className="text-sm text-gray-500">{files.length > 0 ? `${files.length} files selected` : 'Click to upload files'}</p>
                </div>
              </div>

              <button type="submit" disabled={formState === 'submitting'} className="w-full bg-gray-900 hover:bg-black text-white py-5 font-black uppercase text-sm tracking-widest transition-all shadow-xl disabled:opacity-50">
                {formState === 'submitting' ? 'ENCRYPTING TRANSMISSION...' : 'SUBMIT AUDIT REQUEST'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
