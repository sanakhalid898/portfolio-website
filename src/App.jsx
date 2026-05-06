import React, { useState, useEffect } from 'react';
import { Mail, MapPin, ExternalLink, ChevronRight, BookOpen, Terminal, Code2, Sun, Moon, GraduationCap, Briefcase, ArrowUpRight, Database, BarChart3, BrainCircuit, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { experiences, projects, research, skillCategories, education } from './data';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) { root.classList.add('dark'); localStorage.setItem('theme', 'dark'); }
    else { root.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const skillIcons = { 
    green: <Database size={24} />, 
    blue: <BarChart3 size={24} />, 
    purple: <BrainCircuit size={24} /> 
  };
  
  const skillColors = {
    green: {
      bg: 'bg-emerald-50 dark:bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-500/20',
      gradient: 'from-emerald-200 dark:from-emerald-500/20',
      pill: 'border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-400 dark:hover:border-emerald-400/40 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10'
    },
    blue: {
      bg: 'bg-sky-50 dark:bg-sky-500/10', text: 'text-sky-600 dark:text-sky-400', border: 'border-sky-200 dark:border-sky-500/20',
      gradient: 'from-sky-200 dark:from-sky-500/20',
      pill: 'border-sky-200 dark:border-sky-500/20 hover:border-sky-400 dark:hover:border-sky-400/40 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-500/10'
    },
    purple: {
      bg: 'bg-violet-50 dark:bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-200 dark:border-violet-500/20',
      gradient: 'from-violet-200 dark:from-violet-500/20',
      pill: 'border-violet-200 dark:border-violet-500/20 hover:border-violet-400 dark:hover:border-violet-400/40 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10'
    }
  };

  return (
    <div className="min-h-screen bg-grid-pattern bg-fixed relative noise-overlay transition-colors duration-500">

      {/* === NAVBAR === */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="font-black text-lg tracking-tight text-text-primary dark:text-text-dark-primary uppercase">
            Sana Khalid
          </div>
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'Experience', id: 'experience' },
              { label: 'Projects', id: 'projects' },
              { label: 'Research', id: 'research' },
              { label: 'Skills', id: 'skills' },
              { label: 'Education', id: 'education' },
            ].map(s => (
              <a key={s.label} href={`#${s.id}`}
                className="px-5 py-2 rounded-full text-sm font-bold text-text-secondary dark:text-text-dark-secondary hover:text-brand-green hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300">
                {s.label.toUpperCase()}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsDark(!isDark)} className="p-2.5 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-border-light dark:border-border-dark text-text-secondary dark:text-text-dark-secondary hover:text-brand-green transition-all duration-300">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="#contact" className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-brand-green hover:bg-brand-green-dark shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:-translate-y-0.5 transition-all duration-300">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto relative z-10">

        {/* === HERO === */}
        <section className="py-16 md:py-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-brand-green font-mono text-xs tracking-wider mb-8 bg-brand-green-glow px-4 py-2 rounded-lg border border-brand-green/10">
              <Sparkles size={14} className="animate-pulse" />
              <span>&gt; Hello, I'm Sana Khalid</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-text-primary dark:text-text-dark-primary">
              <span className="text-gradient">Building Intelligent</span><br />
              Systems with Data.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary max-w-2xl leading-relaxed mb-10">
              I bridge the gap between data and decisions — building scalable systems, uncovering actionable insights, and deploying solutions that drive measurable impact across industries.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-border-light dark:border-border-dark text-sm font-bold text-text-secondary dark:text-text-dark-secondary">
                <span className="text-xs tracking-widest text-text-tertiary dark:text-text-dark-tertiary mr-1">STATUS</span>
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse-soft"></span>
                OPEN TO WORK
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-border-light dark:border-border-dark text-sm font-bold text-text-secondary dark:text-text-dark-secondary">
                <MapPin size={14} className="text-text-tertiary dark:text-text-dark-tertiary" /> NEW YORK, NY
              </div>
              <div className="flex items-center gap-2 ml-1">
                <a href="https://linkedin.com/in/sanakhalid898" target="_blank" rel="noreferrer" className="p-2.5 bg-white dark:bg-zinc-900 shadow-sm border border-border-light dark:border-border-dark rounded-full text-text-secondary dark:text-text-dark-secondary hover:text-brand-green hover:-translate-y-0.5 transition-all duration-300"><FaLinkedin size={16} /></a>
                <a href="https://github.com/sanakhalid898" target="_blank" rel="noreferrer" className="p-2.5 bg-white dark:bg-zinc-900 shadow-sm border border-border-light dark:border-border-dark rounded-full text-text-secondary dark:text-text-dark-secondary hover:text-brand-green hover:-translate-y-0.5 transition-all duration-300"><FaGithub size={16} /></a>
                <a href="https://medium.com/@sanak.khalid" target="_blank" rel="noreferrer" className="p-2.5 bg-white dark:bg-zinc-900 shadow-sm border border-border-light dark:border-border-dark rounded-full text-text-secondary dark:text-text-dark-secondary hover:text-brand-green hover:-translate-y-0.5 transition-all duration-300"><FaMedium size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* === EXPERIENCE === */}
        <section id="experience" className="py-16">
          <SectionHeader icon={<Briefcase size={20} />} title="Professional Experience" />
          <div className="relative mt-10 ml-4 md:ml-6">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-green via-brand-green/40 to-transparent"></div>

            <div className="space-y-8">
              {experiences.map((exp, i) => {
                const metrics = exp.bullets.flatMap(b => {
                  const m = b.match(/(\d+%|\$[\d.]+[KMB]?\+?)/g);
                  return m || [];
                }).slice(0, 3);

                return (
                  <div key={i} className="relative pl-10 md:pl-12 animate-fade-in-up" style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'both' }}>
                    <div className="absolute left-0 top-5 -translate-x-[calc(50%+0.5px)] z-10">
                      {exp.isCurrent ? (
                        <>
                          <div className="w-4 h-4 rounded-full bg-brand-green shadow-lg shadow-brand-green/50"></div>
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-brand-green/40 animate-ping"></div>
                        </>
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border-[3px] border-brand-green bg-white dark:bg-surface-dark"></div>
                      )}
                    </div>
                    {exp.isCurrent && (
                      <div className="absolute -left-1 top-10 text-[9px] font-bold text-brand-green tracking-widest" style={{ writingMode: 'vertical-lr' }}>CURRENT</div>
                    )}
                    <div className="absolute left-1.5 top-[1.35rem] w-7 md:w-9 h-px bg-brand-green/30"></div>

                    <div className="group relative rounded-xl border border-border-light dark:border-brand-green/15 bg-white dark:bg-[#0d1117] shadow-sm hover:shadow-xl hover:shadow-brand-green/10 hover:border-brand-green/30 hover:-translate-y-0.5 transition-all duration-500 overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-green to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-[38%] shrink-0 font-mono text-sm leading-8">
                          <div className="flex">
                            <span className="w-9 shrink-0 text-right pr-3 text-text-tertiary dark:text-text-dark-tertiary select-none text-xs leading-8 border-r border-border-light dark:border-border-dark">1</span>
                            <span className="pl-4">&nbsp;</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-9 shrink-0 text-right pr-3 text-text-tertiary dark:text-text-dark-tertiary select-none text-xs leading-8 border-r border-border-light dark:border-border-dark">2</span>
                            <span className="pl-4 font-bold text-brand-green">{exp.companyShort || exp.company}</span>
                          </div>
                          <div className="flex">
                            <span className="w-9 shrink-0 text-right pr-3 text-text-tertiary dark:text-text-dark-tertiary select-none text-xs leading-8 border-r border-border-light dark:border-border-dark">3</span>
                            <span className="pl-4 text-text-primary dark:text-text-dark-primary leading-8">
                              <span className="text-text-tertiary dark:text-text-dark-tertiary">Role:</span> <span className="font-semibold">{exp.title}</span>
                            </span>
                          </div>
                          <div className="flex">
                            <span className="w-9 shrink-0 text-right pr-3 text-text-tertiary dark:text-text-dark-tertiary select-none text-xs leading-8 border-r border-border-light dark:border-border-dark">4</span>
                            <span className="pl-4 text-text-secondary dark:text-text-dark-secondary">
                              <span className="text-text-tertiary dark:text-text-dark-tertiary">Period:</span> {exp.date}
                            </span>
                          </div>
                          <div className="flex">
                            <span className="w-9 shrink-0 text-right pr-3 text-text-tertiary dark:text-text-dark-tertiary select-none text-xs leading-8 border-r border-border-light dark:border-border-dark">5</span>
                            <span className="pl-4 text-text-secondary dark:text-text-dark-secondary">
                              <span className="text-text-tertiary dark:text-text-dark-tertiary">Location:</span> {exp.location}
                            </span>
                          </div>

                          {metrics.length > 0 && (
                            <div className="px-4 py-3 border-t border-border-light dark:border-border-dark flex flex-wrap gap-2">
                              {metrics.map((m, mi) => (
                                <span key={mi} className="px-2.5 py-1 text-xs font-bold text-brand-green bg-brand-green-glow rounded-md border border-brand-green/10">
                                  ↑ {m}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="hidden md:block w-px bg-border-light dark:bg-brand-green/15"></div>
                        <div className="md:hidden h-px bg-border-light dark:bg-brand-green/15"></div>

                        <div className="flex-1 px-5 py-4 md:px-6 md:py-5 flex flex-col justify-center">
                          <p className="text-[10px] font-mono text-text-tertiary dark:text-text-dark-tertiary mb-2.5 uppercase tracking-wider">// Impact & Responsibilities</p>
                          <ul className="space-y-2">
                            {exp.bullets.map((b, j) => (
                              <li key={j} className="flex items-start text-[13px] text-text-secondary dark:text-text-dark-secondary leading-relaxed">
                                <ChevronRight size={13} className="text-brand-green mr-1.5 mt-0.5 shrink-0" />{b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === PROJECTS === */}
        <section id="projects" className="py-16">
          <SectionHeader icon={<Terminal size={20} />} title="Featured Projects" />
          <div className="mt-12 flex flex-col md:flex-row gap-6 lg:gap-10 items-start">
            
            <div className="w-full md:w-5/12 lg:w-1/3 flex flex-col gap-3 relative z-20">
              {projects.map((p, i) => {
                const isActive = activeProject === i;
                return (
                  <div 
                    key={i} 
                    onMouseEnter={() => setActiveProject(i)}
                    className={`cursor-pointer group flex items-center p-4 md:p-5 rounded-2xl border transition-all duration-300 relative ${isActive ? 'bg-white/90 dark:bg-[#131820] border-brand-green/30 shadow-md' : 'bg-white/40 dark:bg-transparent border-border-light dark:border-transparent hover:bg-white/60 dark:hover:bg-white/[0.02] hover:border-border-light dark:hover:border-border-dark'}`}
                  >
                    <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-brand-green/10 text-brand-green' : 'bg-gray-100 dark:bg-surface-dark text-text-tertiary dark:text-text-dark-tertiary group-hover:text-text-primary dark:group-hover:text-text-dark-primary'}`}>
                      <Code2 size={20} />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className={`text-base font-bold transition-colors ${isActive ? 'text-text-primary dark:text-text-dark-primary' : 'text-text-secondary dark:text-text-dark-secondary group-hover:text-text-primary dark:group-hover:text-text-dark-primary'}`}>
                        {p.title}
                      </h4>
                      <p className={`text-xs mt-1 transition-colors ${isActive ? 'text-brand-green' : 'text-text-tertiary dark:text-text-dark-tertiary'}`}>
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full md:w-7/12 lg:w-2/3 sticky top-28 mt-12 md:mt-0 flex flex-col">
              <div key={activeProject} className="w-full bg-white/70 dark:bg-[#0a0f16]/80 backdrop-blur-3xl border border-white/50 dark:border-white/10 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,230,118,0.1)] overflow-hidden group mx-auto flex flex-col h-auto">
                <div className="h-10 border-b border-border-light/50 dark:border-white/5 flex items-center px-6 gap-2 bg-white/50 dark:bg-white/5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green/80"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col relative animate-fade-in h-auto">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                  <div className="flex justify-between items-start mb-6 relative z-10 shrink-0">
                    <div>
                      <h3 className="text-3xl font-bold text-text-primary dark:text-text-dark-primary mb-3 tracking-tight">{projects[activeProject].title}</h3>
                      <p className="text-brand-green font-mono text-sm font-semibold tracking-wide uppercase">{projects[activeProject].tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5 mb-8 relative z-10 shrink-0">
                    {projects[activeProject].tags.map(t => (
                      <span key={t} className="px-3.5 py-1.5 text-[11px] font-bold tracking-widest uppercase bg-white dark:bg-white/5 text-text-secondary dark:text-gray-300 rounded-md border border-border-light dark:border-white/10 shadow-sm">{t}</span>
                    ))}
                  </div>
                  <div className="text-text-secondary dark:text-text-dark-secondary leading-relaxed space-y-5 relative z-10 shrink-0">
                    <p className="text-base md:text-lg font-medium">{projects[activeProject].desc}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border-light dark:border-white/10 flex justify-between items-center relative z-10 shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                      <span className="text-xs font-mono text-text-tertiary dark:text-gray-500 uppercase tracking-wider">Status: Online</span>
                    </div>
                    <a href={projects[activeProject].link} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#0a0a0a] dark:text-black bg-brand-green px-5 py-2.5 rounded-xl hover:bg-[#00e676] flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-green/20">
                      View Project <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === RESEARCH === */}
        <section id="research" className="py-16">
          <SectionHeader icon={<BookOpen size={20} />} title="Insights & Publications" />
          <p className="mt-3 text-sm text-text-secondary dark:text-text-dark-secondary max-w-2xl leading-relaxed">
            Analytical research and deep-dives spanning econometrics, machine learning, and behavioral science — all published on Medium.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {research.map((r, i) => (
              <a key={i} href={r.link} target="_blank" rel="noreferrer"
                className="group relative flex flex-col bg-white dark:bg-[#0d1117] rounded-2xl border border-border-light dark:border-brand-green/15 p-6 hover:border-brand-green/40 hover:shadow-xl hover:shadow-brand-green/8 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-green/20 group-hover:bg-brand-green transition-colors duration-300 rounded-l-2xl"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono font-bold text-brand-green/70 tracking-[0.2em] uppercase">
                    PUBLICATION · {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight size={14} className="text-text-tertiary dark:text-text-dark-tertiary group-hover:text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <h3 className="text-lg font-bold text-text-primary dark:text-text-dark-primary mb-1 leading-snug group-hover:text-brand-green transition-colors duration-300">{r.title}</h3>
                <p className="text-xs font-semibold text-brand-green/70 uppercase tracking-wider mb-3">{r.tagline}</p>

                <p className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed flex-1">{r.desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-border-light dark:border-brand-green/10">
                  {r.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase text-brand-green bg-brand-green/5 rounded border border-brand-green/15">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* === SKILLS === */}
        <section id="skills" className="py-16">
          <SectionHeader icon={<Code2 size={20} />} title="Technical Arsenal" />
          <div className="mt-12 space-y-10">
            {skillCategories.map((cat, i) => {
              const colors = skillColors[cat.color];
              return (
                <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2 rounded-xl ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {skillIcons[cat.color]}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-text-secondary dark:text-text-dark-secondary">
                      {cat.title}
                    </span>
                    <div className={`flex-1 h-px bg-gradient-to-r ${colors.gradient} to-transparent`}></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(s => (
                      <span key={s} className={`px-4 py-2 text-sm font-medium rounded-full border bg-white dark:bg-transparent text-text-secondary dark:text-text-dark-secondary cursor-default transition-all duration-200 ${colors.pill}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* === EDUCATION === */}
        <section id="education" className="py-16">
          <SectionHeader icon={<GraduationCap size={20} />} title="Education" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {education.map((ed, i) => (
              <div key={i} className="group relative bg-white dark:bg-[#0a0f16] rounded-xl border-2 border-gray-200 dark:border-[#1a222f] shadow-lg hover:shadow-[0_15px_40px_rgba(0,230,118,0.1)] hover:border-brand-green/50 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                <div className="h-6 bg-gray-100 dark:bg-[#131820] border-b-2 border-gray-200 dark:border-[#1a222f] flex justify-center items-center relative">
                   <div className="w-16 h-2 rounded-full bg-gray-300 dark:bg-[#080c13] shadow-inner"></div>
                </div>
                <div className="p-8 relative">
                  <div className="absolute right-4 top-4 w-24 h-24 border-[4px] border-brand-green/5 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                     <GraduationCap size={40} className="text-brand-green/10" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] font-mono text-brand-green tracking-widest uppercase mb-1">ID: ALUMNI-{new Date().getFullYear()}-{i}00</p>
                    <h3 className="text-2xl font-bold text-text-primary dark:text-text-dark-primary mb-1 uppercase tracking-tight">{ed.school}</h3>
                    <p className="text-sm font-bold text-brand-green mb-6 uppercase tracking-wider">{ed.sub}</p>
                    <div className="inline-block bg-gray-100 dark:bg-[#131820] px-4 py-2 rounded-lg border border-gray-200 dark:border-[#1a222f] mb-8">
                      <h4 className="text-sm font-mono font-bold text-text-secondary dark:text-gray-300">{ed.degree}</h4>
                    </div>
                    <div className="flex items-center text-xs font-mono font-semibold text-text-tertiary dark:text-text-dark-tertiary">
                      <MapPin size={14} className="mr-2 text-brand-green" /> {ed.location} 
                      <span className="mx-3 text-border-light dark:text-[#1a222f]">|</span> 
                      <span className="text-brand-green">{ed.year}</span>
                    </div>
                  </div>
                </div>
                <div className="h-16 px-8 bg-gray-50 dark:bg-[#080c13] border-t-2 border-gray-200 dark:border-[#1a222f] flex items-center justify-between">
                  <div className="flex items-center h-8 gap-[3px] opacity-40 dark:opacity-60">
                    {[1,2,1,4,1,1,3,2,1,1,2,5,1,2,1,3,2,1,4,1].map((w, idx) => (
                      <div key={idx} className="bg-text-primary dark:bg-brand-green h-full" style={{ width: `${w * 2}px` }}></div>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-brand-green/50 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* === CONTACT === */}
        <section id="contact" className="py-20 mb-10">
          <div className="relative rounded-3xl border border-border-light dark:border-brand-green/30 bg-white dark:bg-[#0d1117] overflow-hidden p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-green/20 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-dark-primary mb-6">Let's Connect</h2>
              <p className="text-lg text-text-secondary dark:text-text-dark-secondary mb-10">
                Have a project in mind or just want to chat? I'm always open to discussing new opportunities and collaborations.
              </p>
              
              <form 
                action="https://formspree.io/f/xknadjyb" 
                method="POST"
                className="max-w-md mx-auto text-left space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" required className="w-full bg-gray-50 dark:bg-zinc-900 border border-border-light dark:border-zinc-800 rounded-xl px-4 py-3 text-text-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" required className="w-full bg-gray-50 dark:bg-zinc-900 border border-border-light dark:border-zinc-800 rounded-xl px-4 py-3 text-text-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-shadow" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input type="text" name="subject" id="subject" placeholder="Subject" className="w-full bg-gray-50 dark:bg-zinc-900 border border-border-light dark:border-zinc-800 rounded-xl px-4 py-3 text-text-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-shadow" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" rows="4" placeholder="Your Message" required className="w-full bg-gray-50 dark:bg-zinc-900 border border-border-light dark:border-zinc-800 rounded-xl px-4 py-3 text-text-primary dark:text-text-dark-primary focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-shadow resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-brand-green hover:bg-[#00e676] text-[#0a0a0a] font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 hover:-translate-y-1">
                  Send Message <ArrowUpRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer className="border-t border-border-light dark:border-border-dark py-12 transition-colors duration-500 bg-white/50 dark:bg-transparent">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-black text-xl tracking-tight text-text-primary dark:text-text-dark-primary uppercase mb-2">Sana Khalid</div>
            <p className="text-sm text-text-tertiary dark:text-text-dark-tertiary font-medium">© {new Date().getFullYear()} Sana Khalid. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-5">
              <a href="mailto:sanak.khalid@outlook.com" className="text-text-tertiary dark:text-text-dark-tertiary hover:text-brand-green transition-colors"><Mail size={20} /></a>
              <a href="https://linkedin.com/in/sanakhalid898" target="_blank" rel="noreferrer" className="text-text-tertiary dark:text-text-dark-tertiary hover:text-brand-green transition-colors"><FaLinkedin size={20} /></a>
              <a href="https://github.com/sanakhalid898" target="_blank" rel="noreferrer" className="text-text-tertiary dark:text-text-dark-tertiary hover:text-brand-green transition-colors"><FaGithub size={20} /></a>
              <a href="https://medium.com/@sanak.khalid" target="_blank" rel="noreferrer" className="text-text-tertiary dark:text-text-dark-tertiary hover:text-brand-green transition-colors"><FaMedium size={20} /></a>
            </div>
            <p className="text-xs text-text-tertiary dark:text-text-dark-tertiary font-mono uppercase tracking-widest">Built with React & Vite</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/20">{icon}</div>
      <h2 className="text-3xl font-bold text-text-primary dark:text-text-dark-primary tracking-tight">{title}</h2>
    </div>
  );
}

export default App;
