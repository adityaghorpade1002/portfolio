import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Linkedin, 
  Github, 
  AlertCircle 
} from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('success');

    // Mailto fallback link formation
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact & Collaboration"
          title="Let's Discuss Opportunities"
          subtitle="Open for full-time Full Stack Developer roles, technical interviews, and collaborative engineering projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="enterprise-glass rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-slate-100">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect through LinkedIn. Responses are typically sent within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email card */}
                <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] text-slate-400 font-mono">Email Address</p>
                      <a
                        href={personal.social.email}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-brand-400 transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono">Mobile / WhatsApp</p>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-brand-400 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono">Location</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-200">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs font-mono text-slate-400 mb-3">
                  Professional Networks
                </p>
                <div className="flex gap-2">
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-dark-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-600 text-xs font-medium text-slate-200 hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-brand-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-dark-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-600 text-xs font-medium text-slate-200 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="enterprise-glass rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-100">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details to launch a pre-formatted message in your default email application.
                </p>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Email Client Triggered</p>
                    <p className="mt-0.5 text-slate-300">
                      Your default mail program has been opened with the structured message. If it didn't open automatically, you can write directly to {personal.email}.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Please check the required fields</p>
                    <p className="mt-0.5 text-slate-300">
                      Kindly ensure all fields are filled properly before submitting.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full Stack Developer Opening / Technical Interview"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role requirements, team details, or project discussion points..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all ${
                      errors.message
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 border border-brand-400/40 shadow-lg shadow-brand-600/30 hover:shadow-brand-500/40 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2 font-mono">
                    Direct client fallback • Zero credential exposure
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
