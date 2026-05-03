import React, { useState, useEffect } from 'react';
import { Mail, MapPin, ExternalLink, ChevronRight, BookOpen, Terminal, Code2, Sun, Moon } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-dot-pattern bg-fixed relative transition-colors duration-300">
      {/* Navbar - Floating pills style matching screenshot */}
      <nav className="fixed w-full top-0 z-50 pt-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
          <div className="font-extrabold text-xl tracking-tight uppercase text-gray-900 dark:text-white justify-self-start">
            SANA KHALID
          </div>
          
          <div className="hidden md:flex space-x-4 justify-self-center">
            <a href="#experience" className="px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 text-sm font-bold text-red-500 hover:-translate-y-0.5 transition-transform">EXPERIENCE</a>
            <a href="#projects" className="px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 text-sm font-bold text-slate-800 dark:text-zinc-100 hover:-translate-y-0.5 transition-transform">PROJECTS</a>
            <a href="#skills" className="px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 text-sm font-bold text-slate-500 dark:text-zinc-400 hover:-translate-y-0.5 transition-transform">SKILLS</a>
          </div>

          <div className="flex items-center space-x-4 justify-self-end">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-zinc-300 hover:-translate-y-0.5 transition-transform"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="mailto:sanak.khalid@outlook.com" className="px-7 py-2.5 rounded-full text-sm font-bold text-white bg-brand-green hover:bg-green-700 shadow-sm hover:-translate-y-0.5 transition-transform">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="py-12 md:py-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 text-brand-green font-mono text-sm mb-8 bg-green-50 dark:bg-brand-green/10 px-4 py-2 rounded-md">
            <Terminal size={16} />
            <span>&gt; root@sana_khalid:~/portfolio</span>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-12 text-gray-900 dark:text-white transition-colors duration-300">
            <span className="text-brand-green">Data Scientist</span> <br className="hidden md:block"/>
            & Analytics Leader.
          </h1>

          <div className="flex flex-wrap gap-4 items-center mb-12">
            <div className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 text-sm font-bold text-gray-600 dark:text-zinc-300 flex items-center space-x-2 transition-colors duration-300">
              <span className="text-xs tracking-widest text-gray-400 dark:text-zinc-500 mr-1">STATUS</span>
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span>OPEN TO WORK</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 text-sm font-bold text-gray-600 dark:text-zinc-300 flex items-center space-x-2 transition-colors duration-300">
              <MapPin size={16} className="text-gray-400 dark:text-zinc-500" />
              <span>SEATTLE, WA / NY</span>
            </div>
            <div className="flex items-center space-x-3 ml-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 rounded-full text-gray-600 dark:text-zinc-300 hover:text-brand-green dark:hover:text-brand-green hover:-translate-y-0.5 transition-all"><FaLinkedin size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-zinc-900 shadow-sm border border-gray-100 dark:border-zinc-800 rounded-full text-gray-600 dark:text-zinc-300 hover:text-brand-green dark:hover:text-brand-green hover:-translate-y-0.5 transition-all"><FaGithub size={18} /></a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-10 flex items-center text-gray-900 dark:text-white transition-colors duration-300">
            <span className="w-8 h-1 bg-brand-green mr-4 rounded-full"></span>
            Experience
          </h2>
          <div className="space-y-12 border-l-2 border-gray-100 dark:border-zinc-800 pl-6 ml-4">
            
            <div className="relative group">
              <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-brand-green group-hover:scale-125 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Lead Data Scientist <span className="text-brand-green text-sm font-medium ml-2 px-2 py-1 bg-green-50 dark:bg-brand-green/10 rounded-md">(Promoted)</span></h3>
                <span className="text-gray-500 dark:text-zinc-400 text-sm font-medium">Sep '25 – Present</span>
              </div>
              <p className="text-gray-600 dark:text-zinc-300 font-medium mb-4">The Global Consortium of Political Analysts / Remote</p>
              <ul className="space-y-3 text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Architected and optimized Azure Data Factory pipelines processing multi-regional datasets, implementing automated data quality frameworks with anomaly detection models to increase reliability 25%.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Enhanced decision-making efficiency 40% by building automated Power BI and Tableau dashboards delivering real-time performance KPIs.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Reduced reporting time 30% by designing scalable ETL architecture and governance frameworks across datasets.</li>
              </ul>
            </div>

            <div className="relative group">
              <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-gray-300 dark:border-zinc-700 group-hover:border-brand-green transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Data Scientist (Capstone)</h3>
                <span className="text-gray-500 dark:text-zinc-400 text-sm font-medium">Apr '25 – June '25</span>
              </div>
              <p className="text-gray-600 dark:text-zinc-300 font-medium mb-4">Dell Technologies Inc. / Seattle, WA</p>
              <ul className="space-y-3 text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Built multi-agent AI trading system processing datasets from 20+ publicly traded companies, delivering real-time insights for investment decision-making in transaction environments using MySQL.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Orchestrated automated ETL pipelines with Airflow, accelerating strategy testing by integrating market signals for senior leadership.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Minimized analysis time by 60% by designing conversational AI interface processing millions of data points.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Developed agentic AI workflows combining LLM reasoning (LangChain + Gemini API) with reinforcement learning policies to automate market decision-making.</li>
              </ul>
            </div>

            <div className="relative group">
              <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-gray-300 dark:border-zinc-700 group-hover:border-brand-green transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Co-Founder / Chief Data Officer</h3>
                <span className="text-gray-500 dark:text-zinc-400 text-sm font-medium">Sep '21 – May '24</span>
              </div>
              <p className="text-gray-600 dark:text-zinc-300 font-medium mb-4">Diakob Enterprises / HQ: Aus</p>
              <ul className="space-y-3 text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Delivered $500K+ revenue impact by leading company-wide analytics strategy, unifying data engineering, modeling, and visualization efforts to drive investment due-diligence decisions.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Reduced analytics delivery time 50% by architecting automated Power BI and Tableau pipelines and implementing enterprise-wide data-governance frameworks.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Increased user engagement 40% by deploying ML-driven behavioral segmentation and campaign optimization for market-research clients.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Led cross-functional teams across engineering, and marketing to operationalize predictive models and translate analytical insights into growth strategies.</li>
              </ul>
            </div>
            
            <div className="relative group">
              <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-gray-300 dark:border-zinc-700 group-hover:border-brand-green transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Graduate Research Assistant</h3>
                <span className="text-gray-500 dark:text-zinc-400 text-sm font-medium">June '23 – Aug '23</span>
              </div>
              <p className="text-gray-600 dark:text-zinc-300 font-medium mb-4">LUMS / Remote</p>
              <ul className="space-y-3 text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Designed and executed large-scale A/B testing framework across 18,000 SMEs, applying causal inference methods to optimize behavioral interventions.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Built data pipelines in Python and SQL to process and analyze multi-source datasets, automating data collection and quality validation workflows.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Conducted cohort analysis and segmentation delivering econometric insights that informed tax policy decisions.</li>
              </ul>
            </div>

            <div className="relative group">
              <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-gray-300 dark:border-zinc-700 group-hover:border-brand-green transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Associate Consultant (Pro Bono)</h3>
                <span className="text-gray-500 dark:text-zinc-400 text-sm font-medium">Aug '20 – Nov '21</span>
              </div>
              <p className="text-gray-600 dark:text-zinc-300 font-medium mb-4">LUMS Consultancy Group / Pak</p>
              <ul className="space-y-3 text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Enabled multi-province expansion strategy for sustainable housing startup through statistical modeling, trend identification, and demand forecasting using Python and SQL.</li>
                <li className="flex items-start"><ChevronRight size={18} className="text-brand-green mr-2 mt-0.5 shrink-0" /> Optimized supply chain decisions for B2B e-commerce marketplace through statistical forecasting models and inventory optimization.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-10 flex items-center text-gray-900 dark:text-white transition-colors duration-300">
            <span className="w-8 h-1 bg-brand-green mr-4 rounded-full"></span>
            Featured Work & Publications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Simulating Smarter Investing: A Multi-Agent Finance Platform", 
                link: "https://medium.com/@sanak.khalid/simulating-smarter-investing-a-multi-agent-finance-platform-f40799b60aa6",
                desc: "Architected a Python-based algorithmic trading simulation using multi-agent architectures (LangChain & Gemini API) to synthesize market signals. Deployed autonomous AI agents capable of continuous backtesting and executing reinforcement learning policies across 20+ publicly traded equities."
              },
              { 
                title: "Customer Lifetime Value Optimization & Churn Prevention", 
                link: "https://medium.com/@sanak.khalid/uncorking-insights-data-driven-customer-segmentation-and-retention-strategy-for-a-u-s-winery-430582d1f1ff",
                desc: "Engineered predictive churn models and conducted comprehensive RFM segmentation for a U.S. Winery. The strategy directly optimized channel engagement, significantly improving ROI and yielding a 67.6% boost in retention for high-value segments."
              },
              { 
                title: "Predicting Permit Success: Machine Learning Lottery Optimization", 
                link: "https://medium.com/@sanak.khalid/predicting-permit-success-a-machine-learning-approach-to-lottery-optimization-88e1c9eb4862",
                desc: "Developed supervised learning models to uncover optimization strategies within lottery-based permit systems. Processed historical geospatial and demographic datasets to build robust classification pipelines that forecast success probabilities."
              },
              { 
                title: "Do minimum wage hikes come at a cost? Trade-offs in compensation", 
                link: "https://medium.com/@sanak.khalid/do-minimum-wage-hikes-come-at-a-cost-uncovering-trade-offs-in-employer-compensation-behavior-a95b3eb441e4",
                desc: "Conducted rigorous econometric analysis leveraging causal inference frameworks (Difference-in-Differences) to measure the impact of wage policy shifts. Extracted actionable insights on how employers re-balance total compensation."
              },
              { 
                title: "Mapping Employer Preferences in Health Insurance", 
                link: "https://medium.com/@sanak.khalid/mapping-employer-preferences-in-health-insurance-a-quantitative-market-research-study-73c5f2203e98",
                desc: "Executed a large-scale A/B testing and market segmentation framework to analyze corporate healthcare benefits. Utilized advanced statistical modeling to map employer purchasing behaviors, driving strategic alignment."
              },
              { 
                title: "The Sound of Wellness: Music Preferences and Mental Health", 
                link: "https://medium.com/@sanak.khalid/the-sound-of-wellness-analyzing-the-link-between-music-preferences-and-mental-health-c229c0e926c7",
                desc: "Built dynamic data pipelines to correlate behavioral data with mental well-being metrics. Employed unsupervised learning clustering techniques to identify psychographic segments and uncover latent therapeutic patterns within the audio data."
              },
              { 
                title: "Uncovering Global Digital Marketing Trends", 
                link: "https://medium.com/@sanak.khalid/uncovering-global-digital-marketing-trends-for-strategic-platform-optimization-9bf2ec8ce1ce",
                desc: "Designed end-to-end automated ETL workflows pulling cross-platform API data to track multi-regional marketing performance. Built dynamic Power BI and Tableau dashboards to deliver real-time KPI visibility."
              }
            ].map((article, idx) => (
              <a key={idx} href={article.link} target="_blank" rel="noreferrer" className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:-translate-y-1 hover:border-brand-green dark:hover:border-brand-green transition-all flex flex-col h-full">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-green transition-colors mb-4 leading-snug">{article.title}</h4>
                <p className="text-sm text-gray-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">{article.desc}</p>
                <div className="flex items-center text-sm font-bold text-brand-green mt-auto tracking-wide">
                  READ CASE STUDY <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-10 flex items-center text-gray-900 dark:text-white transition-colors duration-300">
            <span className="w-8 h-1 bg-brand-green mr-4 rounded-full"></span>
            Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
              <div className="w-14 h-14 bg-green-50 dark:bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8">
                <Code2 className="text-brand-green" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Data Analytics & Engineering</h3>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Python', 'ETL Pipelines', 'Data Modeling', 'Spark', 'Hadoop', 'Airflow', 'DBT', 'Azure Data Factory', 'AWS', 'Data Governance'].map(skill => (
                  <span key={skill} className="px-3.5 py-1.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 rounded-lg text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                <BookOpen className="text-blue-600 dark:text-blue-400" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Visualization & BI</h3>
              <div className="flex flex-wrap gap-2">
                {['Tableau', 'Power BI', 'D3.js', 'Excel', 'Data Storytelling', 'Dashboards', 'Strategic Analytics'].map(skill => (
                  <span key={skill} className="px-3.5 py-1.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 rounded-lg text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8">
                <Terminal className="text-purple-600 dark:text-purple-400" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Machine Learning & Stats</h3>
              <div className="flex flex-wrap gap-2">
                {['Predictive Modeling', 'A/B Testing', 'Time Series Forecasting', 'Supervised/Unsupervised Learning', 'Reinforcement Learning', 'Statistical Analysis'].map(skill => (
                  <span key={skill} className="px-3.5 py-1.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 rounded-lg text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10 flex items-center text-gray-900 dark:text-white transition-colors duration-300">
            <span className="w-8 h-1 bg-brand-green mr-4 rounded-full"></span>
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">University of Washington</h3>
              <p className="text-brand-green font-semibold mb-6">Foster School of Business</p>
              <h4 className="text-lg font-bold text-gray-800 dark:text-zinc-200 mb-4">Master of Science in Business Analytics</h4>
              <div className="flex items-center text-sm text-gray-500 dark:text-zinc-400 font-medium">
                <MapPin size={16} className="mr-2" /> Seattle, WA <span className="mx-3">•</span> June '25
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Lahore University of Management Sciences</h3>
              <p className="text-brand-green font-semibold mb-6">LUMS</p>
              <h4 className="text-lg font-bold text-gray-800 dark:text-zinc-200 mb-4">Bachelor of Science in Economics</h4>
              <div className="flex items-center text-sm text-gray-500 dark:text-zinc-400 font-medium">
                <MapPin size={16} className="mr-2" /> Lahore, Pakistan <span className="mx-3">•</span> June '23
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 py-12 mt-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-zinc-400 font-medium mb-4 md:mb-0">
            © {new Date().getFullYear()} Sana Khalid. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="mailto:sanak.khalid@outlook.com" className="text-gray-400 hover:text-brand-green dark:hover:text-brand-green transition-colors"><Mail size={20} /></a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-brand-green dark:hover:text-brand-green transition-colors"><FaLinkedin size={20} /></a>
            <a href="https://github.com" className="text-gray-400 hover:text-brand-green dark:hover:text-brand-green transition-colors"><FaGithub size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
