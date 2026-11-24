"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Database, Download, Github, Globe2, Linkedin, Mail, Menu, Monitor,
  Server, ShieldCheck, X, GraduationCap, Layers3
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Performiex",
    url: "https://performiex.com",
    category: "Performance Management",
    description: "A multi-tenant performance management platform designed to support Balanced Scorecard implementation, organisational performance tracking, employee appraisals and approval workflows.",
    contribution: "Technical project coordination and systems work across the application, database and deployment environment. Update this description to specify the features you personally designed, developed or administered.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Docker"],
    accent: "PERFORMANCE / ANALYTICS"
  },
  {
    number: "02",
    name: "Board Eficacia",
    url: "https://board-eficacia.com",
    category: "Board Governance",
    description: "A digital platform supporting board performance evaluation, governance processes and strategic performance oversight.",
    contribution: "Systems and technical coordination. Add your precise contribution, modules delivered and responsibilities before publishing.",
    stack: ["FastAPI", "Next.js", "PostgreSQL"],
    accent: "GOVERNANCE / STRATEGY"
  },
  {
    number: "03",
    name: "F&N Corporate Website",
    url: "https://fnbusinessconsultants.com",
    category: "Corporate Web Platform",
    description: "A corporate digital platform for presenting company services, training programmes, courses, news and business information, supported by administrative content management.",
    contribution: "Technical supervision and systems administration. Specify the frontend, backend, integrations and content-management features you personally handled.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "MinIO"],
    accent: "WEB / CONTENT MANAGEMENT"
  },
  {
    number: "04",
    name: "Strategier",
    url: "https://strategiar.com",
    category: "Business Systems",
    description: "A business system included in the organisation's digital systems portfolio. Add an approved summary of its purpose, users and core functionality.",
    contribution: "Add your specific role and verified technical contribution. Do not publish confidential product or client information.",
    stack: ["Add verified technologies"],
    accent: "BUSINESS / DIGITAL SYSTEMS"
  },
  {
    number: "05",
    name: "Infrastructure & Server Administration",
    category: "Infrastructure",
    description: "Linux VPS administration and production infrastructure work involving application deployments, web-server configuration, SSL certificate management, security controls and monitoring.",
    contribution: "Administration and coordination of infrastructure supporting multiple business applications. Include only tasks you have personally performed.",
    stack: ["Ubuntu", "Docker", "Nginx", "Linux", "SSL/TLS"],
    accent: "CLOUD / INFRASTRUCTURE"
  },
  {
    number: "06",
    name: "TempCras",
    url: "https://www.tempcras.io/",
    category: "Cold Chain Monitoring",
    description: "A temperature monitoring platform for cold chains in healthcare facilities.",
    stack: [],
    accent: "TEMPERATURE / MONITORING"
  },
  {
    number: "07",
    name: "Odoo ERP",
    category: "Enterprise Resource Planning",
    description: "An integrated business software suite for managing operations such as sales, inventory and accounting.",
    stack: ["Odoo"],
    accent: "ERP / BUSINESS OPERATIONS"
  }
];

const skills = [
  { title: "Software & APIs", icon: Code2, items: ["Python", "FastAPI", "JavaScript", "Next.js", "REST APIs"] },
  { title: "Databases", icon: Database, items: ["PostgreSQL", "SQL", "Database design", "Data management"] },
  { title: "Infrastructure", icon: Server, items: ["Linux / Ubuntu", "Docker", "Nginx", "VPS administration", "SSL/TLS"] },
  { title: "Enterprise ICT", icon: ShieldCheck, items: ["Microsoft 365", "ICT support", "Systems administration", "IT security", "Backup & recovery"] }
];

function SectionHeading({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return <div className="mb-10 max-w-2xl"><p className="eyebrow mb-3">{kicker}</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>{description && <p className="mt-4 leading-7 text-muted">{description}</p>}</div>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const email = "solomonzemuley@gmail.com";
  const github = "https://github.com/Solomonkamangah";
  const linkedin = "https://www.linkedin.com/in/solomon-kamanga-380001346";

  const selectedProject = activeProject === null ? null : projects[activeProject];
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/90 backdrop-blur-xl">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <Image src="/solomon-kamanga.jpg" alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-xl border border-accent/40 object-cover object-top" />
            <span className="font-semibold tracking-wide">Solomon Kamanga<span className="text-accent">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-lg border border-accent/50 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/10 md:inline-flex">Let&apos;s connect <ArrowUpRight size={15} className="ml-2"/></a>
          <button aria-label="Toggle navigation" className="rounded-lg border border-line p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav className="container-wide grid gap-1 border-t border-line py-4 text-sm text-muted md:hidden">{[["About","#about"],["Projects","#projects"],["Skills","#skills"],["Experience","#experience"],["Contact","#contact"]].map(([label,href])=><a key={href} href={href} onClick={closeMenu} className="rounded-lg px-3 py-2 hover:bg-panel">{label}</a>)}</nav>}
      </header>

      <section id="home" className="grid-bg relative overflow-hidden border-b border-line/60">
        <div className="pointer-events-none absolute -right-24 top-0 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[110px]"/>
        <div className="container-wide relative grid min-h-[650px] items-center gap-12 py-24 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold tracking-wide text-sky-200"><span className="h-2 w-2 rounded-full bg-emerald-400"/> ICT • BUSINESS SYSTEMS • TECHNOLOGY</div>
            <p className="eyebrow mb-4">Hello, I&apos;m</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Solomon <span className="text-gradient">Kamanga</span></h1>
            <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">ICT &amp; Business Systems Professional</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">I work across ICT support, systems administration, database management and software platforms—helping organisations use technology to improve operations and deliver practical digital solutions.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-lg bg-accent px-5 py-3 font-semibold text-ink shadow-glow hover:bg-sky-300">Explore my work <ArrowRight size={17} className="ml-2"/></a>
              <a href="/cv.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-line px-5 py-3 font-semibold text-slate-100 hover:border-accent/60 hover:bg-panel"><Download size={17} className="mr-2"/> Download CV</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted">
              <span className="inline-flex items-center gap-2"><Globe2 size={16} className="text-accent"/> Malawi</span>
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={16} className="text-accent"/> ICT &amp; MIS</span>
              <span className="inline-flex items-center gap-2"><Code2 size={16} className="text-accent"/> Software &amp; Infrastructure</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute inset-8 rounded-full bg-accent/20 blur-3xl"/>
            <div className="glass relative rounded-3xl p-6 shadow-glow">
              <div className="mb-6 flex items-center justify-between"><span className="eyebrow">Professional profile</span><span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">PORTFOLIO</span></div>
              <Image src="/solomon-kamanga.jpg" alt="Portrait of Solomon Kamanga" width={96} height={96} className="h-24 w-24 rounded-2xl border border-accent/40 object-cover object-top" />
              <h3 className="mt-5 text-2xl font-bold">Solomon Kamanga</h3>
              <p className="mt-1 text-sm text-muted">ICT &amp; Management Information Systems</p>
              <div className="my-6 h-px bg-line"/>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-ink/70 p-4"><Code2 className="mb-3 text-accent"/><p className="text-sm font-semibold">Software</p><p className="mt-1 text-xs text-muted">Web platforms &amp; APIs</p></div>
                <div className="rounded-xl bg-ink/70 p-4"><Database className="mb-3 text-accent"/><p className="text-sm font-semibold">Data</p><p className="mt-1 text-xs text-muted">Databases &amp; systems</p></div>
                <div className="rounded-xl bg-ink/70 p-4"><Server className="mb-3 text-accent"/><p className="text-sm font-semibold">Infrastructure</p><p className="mt-1 text-xs text-muted">Linux &amp; deployments</p></div>
                <div className="rounded-xl bg-ink/70 p-4"><Monitor className="mb-3 text-accent"/><p className="text-sm font-semibold">ICT Operations</p><p className="mt-1 text-xs text-muted">Support &amp; security</p></div>
              </div>
              <p className="mt-6 text-xs leading-6 text-muted">A selection of professional experience, technical capabilities and project work.</p>
            </div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted md:block"><ArrowDown size={20}/></a>
      </section>

      <section id="about" className="section-space container-wide">
        <SectionHeading kicker="A little about me" title="Technology that solves real problems." description="I am a Management Information Systems graduate with professional experience spanning ICT operations, business applications, software projects and infrastructure. I enjoy connecting technology with the needs of people and organisations."/>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card rounded-2xl p-6 md:col-span-2"><div className="mb-4 flex items-center gap-3"><Layers3 className="text-accent"/><h3 className="font-semibold">What I bring</h3></div><p className="leading-8 text-muted">A practical combination of user support, systems administration, database management and software delivery experience. I have worked with business systems and development teams, supported production environments and contributed to technology improvements that support organisational processes.</p></div>
          <div className="card rounded-2xl p-6"><GraduationCap className="mb-4 text-accent"/><p className="text-sm text-muted">Education</p><h3 className="mt-2 font-semibold">Bachelor of Management Information Systems</h3><p className="mt-2 text-sm text-muted">Malawi College of Accountancy · 2022</p></div>
        </div>
      </section>

      <section id="projects" className="section-space border-y border-line/60 bg-[#09182b]">
        <div className="container-wide">
          <SectionHeading kicker="Selected work" title="Projects &amp; systems" description="A selection of platforms and technical work. Explore each project for details and website links where available."/>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project,index)=><article key={project.number} className="card overflow-hidden rounded-2xl">
              <div className="project-art flex items-center justify-center"><span className="text-center"><span className="block text-[10px] font-bold tracking-[.25em] text-sky-300">{project.accent}</span><span className="mt-3 block text-3xl font-bold text-white/90">{project.name}</span></span><span className="absolute right-5 top-4 text-xs text-sky-200/60">{project.number}</span></div>
              <div className="p-6">
                <p className="eyebrow !text-[10px]">{project.category}</p>
                <h3 className="mt-2 text-xl font-bold">{project.name}</h3>
                <p className="mt-3 min-h-[104px] text-sm leading-7 text-muted">{project.description}</p>
                {project.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map(item => <span className="pill" key={item}>{item}</span>)}
                  </div>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-accent">
                  <button onClick={() => setActiveProject(index)} className="inline-flex items-center hover:text-sky-200">
                    Project details <ArrowUpRight size={16} className="ml-2" />
                  </button>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-sky-200 hover:underline">
                      {new URL(project.url).hostname} <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>)}
          </div>
          <p className="mt-6 text-xs leading-6 text-muted">Project visuals are illustrations.</p>
        </div>
      </section>

      <section id="skills" className="section-space container-wide">
        <SectionHeading kicker="Technical toolkit" title="Skills &amp; technologies" description="Technologies and areas of practice reflected in my professional and project experience."/>
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map(({title,icon:Icon,items})=><div className="card rounded-2xl p-6" key={title}><div className="mb-5 flex items-center gap-3"><span className="rounded-xl bg-accent/10 p-3 text-accent"><Icon size={21}/></span><h3 className="font-semibold">{title}</h3></div><div className="flex flex-wrap gap-2">{items.map(item=><span key={item} className="pill !px-3 !py-2 !text-xs">{item}</span>)}</div></div>)}
        </div>
      </section>

      <section id="experience" className="section-space border-y border-line/60 bg-[#09182b]">
        <div className="container-wide">
          <SectionHeading kicker="Career journey" title="Professional experience" description="A concise overview of my professional background. Update titles and dates to match your final CV exactly."/>
          <div className="relative ml-2 border-l border-line pl-8">
            <div className="relative pb-10"><span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink"/><p className="text-xs font-semibold tracking-wider text-accent">CURRENT / RECENT</p><h3 className="mt-2 text-lg font-bold">Supervisor – ICT Support &amp; Business Systems</h3><p className="mt-1 text-sm text-muted">F&amp;N Business Consultants · Malawi</p><p className="mt-3 max-w-2xl text-sm leading-7 text-muted">ICT support and business systems responsibilities, including systems administration, infrastructure coordination, software project oversight and support for business technology operations.</p></div>
            <div className="relative pb-10"><span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-line bg-ink"/><p className="text-xs font-semibold tracking-wider text-muted">2021 – 2024</p><h3 className="mt-2 text-lg font-bold">Computer Systems Technician</h3><p className="mt-1 text-sm text-muted">MECHRO Ltd / Virtual Irrigation Academy</p><p className="mt-3 max-w-2xl text-sm leading-7 text-muted">Computer systems and ICT technical support experience. Add verified responsibilities and achievements from your CV.</p></div>
            <div className="relative"><span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-line bg-ink"/><p className="text-xs font-semibold tracking-wider text-muted">2019 – 2020</p><h3 className="mt-2 text-lg font-bold">Web Developer</h3><p className="mt-1 text-sm text-muted">ACCSOFT Ltd</p><p className="mt-3 max-w-2xl text-sm leading-7 text-muted">Web development experience. Add the languages, frameworks and deliverables you worked with.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space container-wide">
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"/>
          <div className="relative max-w-2xl"><p className="eyebrow mb-3">Get in touch</p><h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s connect and build something meaningful.</h2><p className="mt-5 leading-8 text-muted">For professional opportunities, collaboration or discussions about ICT and business systems, feel free to reach out.</p><a href={`mailto:${email}`} className="mt-8 inline-flex items-center rounded-lg bg-accent px-5 py-3 font-semibold text-ink hover:bg-sky-300"><Mail size={17} className="mr-2"/> Email me</a>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-accent">
              <a href="tel:+265884414929" className="whitespace-nowrap hover:underline">+265 884 414 929</a>
              <a href="tel:+265997752553" className="whitespace-nowrap hover:underline">+265 997 752 553</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted"><a className="inline-flex items-center gap-2" href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a className="inline-flex items-center gap-2" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/70 py-7"><div className="container-wide flex flex-col justify-between gap-3 text-xs text-muted sm:flex-row"><p>© {new Date().getFullYear()} Solomon Kamanga. All rights reserved.</p><p>Designed to showcase technology, systems &amp; professional work.</p></div></footer>

      {selectedProject && (
        <div role="dialog" aria-modal="true" aria-label={`${selectedProject.name} details`} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4" onClick={() => setActiveProject(null)}>
          <div className="max-h-full w-full max-w-xl overflow-y-auto rounded-2xl border border-line bg-panel p-7 shadow-2xl" onClick={event => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{selectedProject.category}</p>
                <h2 className="mt-2 text-2xl font-bold">{selectedProject.name}</h2>
              </div>
              <button aria-label="Close project details" onClick={() => setActiveProject(null)} className="rounded-lg border border-line p-2 text-muted hover:text-white"><X size={18} /></button>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">{selectedProject.description}</p>
            {selectedProject.contribution && (
              <>
                <h3 className="mt-6 text-sm font-semibold">Technical contribution</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{selectedProject.contribution}</p>
              </>
            )}
            {selectedProject.stack.length > 0 && (
              <>
                <h3 className="mt-6 text-sm font-semibold">Technology stack</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.stack.map(item => <span className="pill" key={item}>{item}</span>)}
                </div>
              </>
            )}
            {selectedProject.url && (
              <a href={selectedProject.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-sky-200 hover:underline">
                {new URL(selectedProject.url).hostname} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
