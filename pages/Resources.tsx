
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Search, Calendar, User, Tag, ChevronRight, ArrowLeft, Share2, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { BlogPost } from '../types';

const FORMSPREE_URL = 'https://formspree.io/f/mzdprzpq';

const ImageWithLoader: React.FC<{ src: string; alt: string; className?: string; initialOpacity?: number }> = ({ src, alt, className = "", initialOpacity = 0.7 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      style={{ opacity: isLoaded ? 1 : 0 }}
      className={`${className} transition-opacity duration-1000 ease-in-out`}
    />
  );
};

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const categories = ['All', 'Cyber Strategy', 'Research', 'Threat Intel', 'Compliance'];

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus('submitting');
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          _subject: `New Newsletter Subscription: ${newsletterEmail}`,
          source: 'Intelligence Digest Section'
        }),
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      setNewsletterStatus('error');
    }
  };

  if (selectedPost) {
    return (
      <div className="pt-32 pb-40 px-6 min-h-screen bg-white animate-in fade-in duration-500">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-sky-600 transition-colors mb-12 uppercase text-[10px] font-black tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Resources
          </button>

          <div className="space-y-8 mb-12 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sky-600 text-[10px] font-black uppercase tracking-widest">
              <span className="px-4 py-1.5 bg-gray-900 text-white rounded-sm shadow-lg">
                {selectedPost.category}
              </span>
              <span className="flex items-center gap-2 text-gray-500"><Clock size={14} /> 6 Min Read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
              {selectedPost.title}
            </h1>
          </div>

          <div className="aspect-[16/8] w-full mb-16 border border-gray-100 rounded-sm overflow-hidden relative shadow-2xl bg-gray-50">
            <ImageWithLoader 
              src={selectedPost.imageUrl} 
              alt={selectedPost.title} 
              className="w-full h-full object-cover brightness-105 contrast-105"
            />
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="text-xl text-gray-600 font-light leading-relaxed mb-12 border-l-4 border-sky-600 pl-8 py-2 italic">
              {selectedPost.excerpt}
            </div>
            <div className="space-y-8">
              {selectedPost.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-700 text-lg leading-loose font-light whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter mb-6">Security Intelligence</h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              In-depth research and expert analysis from EagleEye Labs.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm border transition-all ${
                  activeCategory === cat ? 'bg-sky-600 border-sky-600 text-white shadow-lg' : 'bg-transparent border-gray-200 text-gray-400 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="group bg-white border border-gray-100 flex flex-col hover:border-sky-200 transition-all duration-500 h-full overflow-hidden shadow-sm hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <ImageWithLoader 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-xl">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 
                  onClick={() => setSelectedPost(post)}
                  className="text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-sky-600 transition-colors cursor-pointer uppercase tracking-tight"
                >
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-light">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-2 text-sky-600 text-xs font-black uppercase tracking-widest transition-all mt-auto"
                >
                  Read Analysis <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Subscription */}
        <div className="mt-32 p-12 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-12 rounded-sm overflow-hidden relative shadow-2xl">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Intelligence Digest</h2>
            <p className="font-bold opacity-80">Get high-fidelity threat reports delivered bi-weekly.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            {newsletterStatus === 'success' ? (
              <div className="flex items-center gap-4 animate-in fade-in zoom-in duration-500 bg-white/10 p-4 border border-white/20 rounded-sm">
                <CheckCircle className="text-sky-400" size={24} />
                <span className="font-black uppercase text-xs tracking-widest">Intelligence Feed Active</span>
              </div>
            ) : (
              <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
                <div className="flex">
                  <input 
                    required
                    type="email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter work email"
                    className="bg-white/5 border-b-2 border-white/40 p-4 text-white font-bold placeholder:text-white/30 outline-none w-full md:w-80"
                  />
                  <button 
                    disabled={newsletterStatus === 'submitting'}
                    className="bg-sky-600 text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-sky-500 transition shadow-xl disabled:opacity-50 flex items-center gap-2"
                  >
                    {newsletterStatus === 'submitting' ? (
                      <><Loader2 size={16} className="animate-spin" /> Processing</>
                    ) : 'Subscribe'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
