import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './components/SEO';
import {
  Terminal,
  Layers,
  Server,
  Database,
  CheckCircle,
  ExternalLink,
  Linkedin,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Mail,
  Phone,
  MapPin
  , Menu, X
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [hoveredSkillCategory, setHoveredSkillCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  // Skill Mapping from your actual Resume
  const skillsData = [
    {
      category: "Core & Frontend",
      icon: <Layers className="w-6 h-6 text-teal-400" />,
      items: ["Node.js", "Express.js", "React.js", "Angular.js", "TypeScript", "JavaScript (ES6+)", "GitHub Copilot"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      items: ["AWS (EC2, S3, Lambda)", "Azure", "Docker", "Jenkins", "CI/CD Pipelines", "API Gateway", "Kafka"]
    },
    {
      category: "Databases & Caching",
      icon: <Database className="w-6 h-6 text-pink-400" />,
      items: ["MongoDB", "MySQL", "Redis"]
    },
    {
      category: "Testing & Quality Assurance",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      items: ["Jest", "Mocha", "Chai", "Jasmine", "Karma", "SonarQube"]
    },
    {
      category: "Architecture & Methodology",
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      items: ["Microservices", "REST API Design", "Design Patterns", "Agile/Scrum", "GenAI", "Git"]
    }
  ];

  // Career Achievements from Resume
  const metrics = [
    { value: "11+", label: "Years Experience" },
    { value: "50+", label: "REST Microservices Built" },
    { value: "50K+", label: "Daily Transactions Managed" },
    { value: "46%", label: "UI Speed Optimization" }
  ];

  // Professional Experience Timeline
  const timeline = [
    {
      company: "Cognizant Technology Solutions",
      role: "Senior Associate — Technical Lead",
      period: "Mar 2022 – Present",
      location: "Noida, India",
      highlights: [
        "Led a 9-member cross-functional team (Developers, QA, BA) with 100% on-time release cycles.",
        "Managed end-to-end communication for Nolan Transportation Group (USA) and Frontier Agriculture (UK).",
        "Architected and deployed 50+ REST microservices reducing latency below 200ms via Redis and database query refinement.",
        "Designed and published a customizable React.js components library, dropping page load times from 6.5s to 3.5s."
      ]
    },
    {
      company: "Kellton Tech Solutions Ltd",
      role: "Technical Lead",
      period: "Jul 2021 – Mar 2022",
      location: "Gurugram, India",
      highlights: [
        "Technical Lead for Adstream (UK), driving architecture design decisions and coordinating stakeholder reviews.",
        "Developed custom browser application security architectures protecting user login and core workflow modules.",
        "Engineered API integration test automation framework (Mocha, Chai), reducing system errors by 40%."
      ]
    },
    {
      company: "Infogain India Pvt. Ltd",
      role: "Senior UI Consultant — Team Lead",
      period: "Aug 2017 – Jul 2021",
      location: "Noida, India",
      highlights: [
        "Directed a team of 5 engineering specialists to deliver FedEx (USA) business logic interfaces 2 weeks ahead of target.",
        "Engineered and maintained Paytm Web-App and Seller Panel dashboards supporting instant merchant registrations.",
        "Authored custom automation tooling scripts in Node.js to streamline database migration executions."
      ]
    },
    {
      company: "Friends Color Images Pvt. Ltd. (Smartbox)",
      role: "Software Engineer",
      period: "Jan 2017 – Aug 2017",
      location: "Noida, India",
      highlights: [
        "Integrated parcel logistics modules utilizing custom Flipkart API requests, accelerating order processing by 60%.",
        "Refactored relational indexes to yield 15% improvement in core system data response rates."
      ]
    },
    {
      company: "Excellence Technosoft Pvt. Ltd",
      role: "UI Developer",
      period: "Nov 2014 – Dec 2016",
      location: "Noida, India",
      highlights: [
        "Delivered interactive Comstice Web-App using AngularJS paired with customized dynamic D3.js analytics components.",
        "Boosted query parsing efficiency by 25% through progressive indexing practices."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 relative overflow-hidden">

      {/* Background Radial Gradient Patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <SEO />

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 w-full bg-slate-950/70 backdrop-blur-md border-b border-slate-900/80 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Terminal className="text-teal-400 w-5 h-5 animate-pulse" />
            <span className="font-mono font-bold text-sm tracking-wider">PEEYUSH.SYSTEMS</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-xs font-mono uppercase tracking-widest">
            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors relative hover:text-teal-400 ${activeSection === item ? 'text-teal-400' : 'text-slate-400'
                  }`}
              >
                {item}
                {activeSection === item && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-400"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 bg-slate-900 border border-slate-800 rounded text-slate-300 hover:text-teal-400 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-slate-950/95 border-b border-slate-900/60 backdrop-blur-md"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col space-y-2">
              {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => { scrollToSection(item); setMobileOpen(false); }}
                  className={`text-left w-full px-3 py-2 rounded font-mono uppercase text-sm ${activeSection === item ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-36 relative z-10">

        {/* HERO SECTION */}
        <section id="hero" className="min-h-[75vh] flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-teal-400 mb-4 tracking-widest text-sm uppercase"
          >
            Technical Lead & Full-Stack Architect
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-slate-100 tracking-tight leading-none mb-6"
          >
            Peeyush Kumar
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-slate-400 mb-8"
          >
            Engineering robust systems from core engines to reactive interfaces.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed mb-12"
          >
            With 11+ years of experience constructing cloud-native, microservice architectures across logistics, fintech, and CRM frameworks. Specialized in optimization, reactive state management, and high-load API performance.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('Experience')}
              className="group px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded transition-all flex items-center gap-2 shadow-lg shadow-teal-500/10"
            >
              Explore History
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('Contact')}
              className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 font-semibold rounded transition-all"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Metrics Dashboard Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-900"
          >
            {metrics.map((stat, i) => (
              <div key={i} className="p-4 bg-slate-900/20 border border-slate-900/60 rounded">
                <div className="text-3xl md:text-4xl font-extrabold text-teal-400 font-mono mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="About" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-teal-400 font-mono text-xl">01.</span> Profile Overview
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                I drive digital execution by coupling technical capabilities with engineering team coordination. Across my career, I have prioritized modular code architectures, continuous deployment processes, and scalable system structures.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                As a graduate of <span className="text-slate-200 font-medium">JSS Academy of Technical Education</span> (Noida), I focus on reducing development friction by establishing shared guidelines, optimizing index patterns, and engineering microservice pipelines.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-lg space-y-4">
              <h3 className="font-bold text-slate-200 text-lg border-b border-slate-900 pb-2">Direct Contact</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>peeyush1891@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>+91-9599812027</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>Noida, India</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-slate-900">
                <a href="https://linkedin.com/in/peeyushjss" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-950 border border-slate-900 rounded hover:text-teal-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://peeyushjss.medium.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-950 border border-slate-900 rounded hover:text-teal-400 transition-colors">
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="Skills" className="scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="text-teal-400 font-mono text-xl">02.</span> Core Technologies
            </h2>
            <p className="text-slate-400 mt-2">Hover over categories to inspect the specific toolsets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-slate-900/20 border border-slate-900 rounded-lg relative overflow-hidden transition-all duration-300"
                onMouseEnter={() => setHoveredSkillCategory(index)}
                onMouseLeave={() => setHoveredSkillCategory(null)}
                whileHover={{ y: -4, borderColor: "rgba(20, 184, 166, 0.3)" }}
              >
                {/* Visual Glow Effect */}
                <AnimatePresence>
                  {hoveredSkillCategory === index && (
                    <motion.div
                      className="absolute inset-0 bg-teal-500/5 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  {skill.icon}
                  <h3 className="font-bold text-slate-200 text-base tracking-tight">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400 font-mono hover:text-teal-300 hover:border-slate-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="Experience" className="scroll-mt-24">
          <h2 className="text-3xl font-bold border-b border-slate-900 pb-4 mb-12 flex items-center gap-3">
            <span className="text-teal-400 font-mono text-xl">03.</span> Professional History
          </h2>

          <div className="relative border-l-2 border-slate-900 pl-6 md:pl-8 ml-2 space-y-12">
            {timeline.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Decorative Node Indicator */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-4 h-4 bg-slate-950 border-2 border-slate-700 rounded-full group-hover:border-teal-400 transition-colors z-20" />

                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-200">{job.role}</h3>
                      <h4 className="text-teal-400 font-mono text-sm tracking-wide mt-0.5">{job.company}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono px-3 py-1 bg-slate-900 border border-slate-800 rounded text-slate-400 block md:inline-block">{job.period}</span>
                      <span className="text-xs text-slate-500 font-mono block mt-1">{job.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-slate-400 text-sm md:text-base leading-relaxed pl-4 list-disc marker:text-slate-700">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="Contact" className="scroll-mt-24 max-w-xl mx-auto py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 flex justify-center items-center gap-3">
              <span className="text-teal-400 font-mono text-lg">04.</span> Connect
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Currently accepting custom contract architectures, team consulting mandates, and full-stack integration opportunities.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 bg-slate-900/20 p-6 rounded-lg border border-slate-900/80">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400/50 rounded px-4 py-2.5 text-slate-100 focus:outline-none transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400/50 rounded px-4 py-2.5 text-slate-100 focus:outline-none transition-colors text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Message Description</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 focus:border-teal-400/50 rounded px-4 py-2.5 text-slate-100 focus:outline-none transition-colors text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-mono font-bold rounded transition-all text-sm uppercase tracking-widest"
            >
              Dispatch Transmission
            </button>
          </form>

          {/* Success Dialog */}
          <AnimatePresence>
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 bg-teal-950/20 border border-teal-500/30 text-teal-400 rounded flex items-center gap-2 text-sm font-mono"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Message Sent. (Simulation Complete)</span>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 bg-slate-950/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} Peeyush Kumar. Generated as a Responsive React SPA.
          </p>
          <div className="flex space-x-6 text-slate-500 text-sm">
            <a href="https://linkedin.com/in/peeyushjss" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://peeyushjss.medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              Medium
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}