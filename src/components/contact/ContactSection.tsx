import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, CheckCircle2, ShieldAlert } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section className="space-y-6">
      
      <div className="rpg-glass-panel p-6 sm:p-8 rounded-2xl border border-slate-700/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side */}
        <div className="lg:col-span-5 space-y-4">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rpg-gold bg-rpg-gold/10 px-2.5 py-0.5 rounded border border-rpg-gold/30">
              Party Guild Dispatch
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-100">
              Recruit Kshiteesh to Your Party
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Looking for an engineer who builds high-performing AI agent architectures and treats UI/UX with equal craft? Dispatch a message below or connect directly.
            </p>
          </div>

          <div className="space-y-2.5 text-xs pt-1">
            <a
              href="mailto:kshiteeshkandari@gmail.com"
              className="flex items-center space-x-3 p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-rpg-gold transition-colors text-slate-100 font-semibold"
            >
              <div className="p-2 rounded bg-rpg-gold text-slate-950 font-bold">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Direct Email</span>
                <span>kshiteeshkandari@gmail.com</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kshiteeshkandari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-rpg-gold transition-colors text-slate-100 font-semibold"
            >
              <div className="p-2 rounded bg-rpg-cyan text-slate-950 font-bold">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">LinkedIn Guild</span>
                <span>linkedin.com/in/kshiteeshkandari</span>
              </div>
            </a>

            <a
              href="https://github.com/KshiteeshKandari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-rpg-gold transition-colors text-slate-100 font-semibold"
            >
              <div className="p-2 rounded bg-purple-500 text-slate-950 font-bold">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">GitHub Repositories</span>
                <span>github.com/KshiteeshKandari</span>
              </div>
            </a>
          </div>

          <div className="p-2.5 bg-slate-900/60 border border-slate-700 rounded text-[11px] text-slate-400 flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-rpg-gold flex-shrink-0" />
            <span>Note: Phone number is kept private on the public web app and is included in the downloadable PDF Character Sheet.</span>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7 bg-slate-900/90 p-6 rounded-xl border border-slate-700 space-y-4">
          <h3 className="font-serif font-bold text-slate-100 text-lg border-b border-slate-700/60 pb-2.5">
            Dispatch a Quest Message
          </h3>

          {submitted ? (
            <div className="p-6 bg-emerald-950/40 border border-emerald-500/50 rounded-xl text-center space-y-2 animate-unfurl">
              <CheckCircle2 className="w-10 h-10 text-rpg-emerald mx-auto" />
              <h4 className="font-serif font-bold text-slate-100 text-lg">Quest Message Dispatched!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you for reaching out. Kshiteesh will respond promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-4 py-1.5 rounded bg-rpg-gold text-slate-950 text-xs font-bold font-mono"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                  Your Name / Party Handle
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Alex (Engineering Recruiter)"
                  className="w-full p-2.5 rounded bg-slate-950 border border-slate-700 focus:border-rpg-gold outline-none text-slate-100 text-xs placeholder:text-slate-600 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                  Your Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="alex@company.com"
                  className="w-full p-2.5 rounded bg-slate-950 border border-slate-700 focus:border-rpg-gold outline-none text-slate-100 text-xs placeholder:text-slate-600 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-300 uppercase mb-1">
                  Opportunity Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell Kshiteesh about your team or project..."
                  className="w-full p-2.5 rounded bg-slate-950 border border-slate-700 focus:border-rpg-gold outline-none text-slate-100 text-xs placeholder:text-slate-600 resize-none h-28 font-mono"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-rpg-gold hover:bg-yellow-400 text-slate-950 font-serif font-bold text-sm flex items-center justify-center space-x-2 border border-yellow-300 shadow-rpg-gold transition-all active:translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Dispatching Message...' : 'Send Quest Message'}</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  );
};
