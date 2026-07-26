import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin, Github, Instagram, ExternalLink, MessageSquare } from 'lucide-react';

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export default function Contact() {
  const [state, handleSubmit] = useForm('mjkwyrvb');
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData(initialFormData);
      setErrors({});
    }
  }, [state.succeeded]);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Let's Work <span className="text-gradient-primary">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind or want to discuss front-end development opportunities? Send a message!
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">

            <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect through social channels.
              </p>

              {/* Info Items */}
              <div className="space-y-4 pt-2">

                {/* Name */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                    BS
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Name & Role</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Bhupender Singh</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Web Designer & Front-End Developer</p>
                  </div>
                </div>

                {/* Email Card with Copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Email</span>
                      <a href="mailto:bhupendernadal@gmail.com" className="block text-sm font-bold text-slate-900 dark:text-white truncate hover:text-blue-600 dark:hover:text-cyan-400">
                        bhupendernadal@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('bhupendernadal@gmail.com', 'email')}
                    className="p-2 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card with Copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Phone / WhatsApp</span>
                      <a href="tel:+919015381011" className="block text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400">
                        +91 9015381011
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+919015381011', 'phone')}
                    className="p-2 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Location</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Mohali, Punjab, India</p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  Connect on Social Platforms:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card text-slate-800 dark:text-slate-200 hover:scale-110 transition-transform"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card text-blue-500 dark:text-cyan-400 hover:scale-110 transition-transform"
                    title="Behance"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 relative">

              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                Send a Message
              </h3>

              {state.succeeded && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold flex items-center gap-3 animate-in fade-in">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-bold">Thank you for your message!</p>
                    <p className="text-xs font-normal">Bhupender will review your inquiry and get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border ${errors.fullName ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                        } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    />
                    {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border ${errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                        } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    />
                    {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Website Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project goals, timelines, and requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border ${errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
                      } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg hover:shadow-blue-500/25 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
