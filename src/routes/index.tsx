import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Sparkles,
} from "lucide-react";
import portrait from "../assets/gita-disale-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gita Disale | Senior Software Engineer" },
      {
        name: "description",
        content:
          "Senior Software Engineer in Chicago building scalable software, distributed systems, AWS cloud platforms, data products, and applied AI solutions.",
      },
      { property: "og:title", content: "Gita Disale | Senior Software Engineer" },
      {
        property: "og:description",
        content:
          "Engineering scalable software, cloud systems, and data platforms that power real-world decisions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

const experience = [
  {
    company: "RWE Supply & Trading Americas",
    role: "Senior Software Engineer",
    date: "2024 - Present",
    text: "Own cloud-native applications and distributed data platforms supporting Trading, Risk, Surveillance, Back Office, and analytics across seven U.S. power markets.",
    tags: ["Python", "C#/.NET", "AWS", "Databricks", "PySpark"],
  },
  {
    company: "Milliman",
    role: "Senior Developer / Technical Project Manager",
    date: "2023",
    text: "Led delivery of healthcare applications spanning responsive React experiences, backend services, implementation planning, and cross-functional execution.",
    tags: ["C#/.NET Core", "React", "SQL"],
  },
  {
    company: "Redapt",
    role: "Technical Project Manager Intern",
    date: "2022",
    text: "Coordinated engineering and product teams across Agile initiatives, reducing delivery blockers by approximately 50% through clearer planning and risk ownership.",
    tags: ["Agile", "JIRA", "Power BI"],
  },
  {
    company: "WeFiveSoft",
    role: "Software Engineer L2",
    date: "2020 - 2021",
    text: "Built scalable web applications, APIs, asynchronous workflows, and optimized databases while owning production debugging and delivery.",
    tags: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
  },
  {
    company: "FIGmd",
    role: "Senior Software Developer",
    date: "2016 - 2020",
    text: "Delivered responsive, data-intensive applications with secure authentication, high-volume rendering, and end-to-end performance optimization.",
    tags: ["Angular", ".NET", "MongoDB", "PostgreSQL"],
  },
];

const projects = [
  {
    number: "01",
    domain: "ENERGY TRADING / BATTERY STORAGE",
    title: "BESS Outage & Availability Platform",
    description:
      "Translated complex CAISO and ERCOT outage rules into a dependable platform for availability and derate insights used by trading and back-office teams.",
    impact: "Business-critical production platform",
    flow: ["Asset data", "Event services", "Availability engine", "Trading insight"],
  },
  {
    number: "02",
    domain: "QUANTITATIVE ANALYTICS / DATA ENGINEERING",
    title: "Mumba Backtesting Platform",
    description:
      "Built cloud infrastructure and processing workflows for market and fundamental datasets, creating standardized data ready for quantitative research.",
    impact: "20+ datasets for quantitative backtesting",
    flow: ["Market feeds", "Cloud ingestion", "Delta Lake", "Backtesting"],
  },
  {
    number: "03",
    domain: "DATA PLATFORM ENGINEERING",
    title: "U.S. Energy Data Harmonization",
    description:
      "Modernized fragmented market data into standardized access patterns with dynamic curve creation, stronger discoverability, and simpler maintenance.",
    impact: "200+ production onboardings",
    flow: ["Data sources", "Standardization", "Quality controls", "Consumers"],
  },
];

const allProjects = [
  {
    date: "Oct 2021 - Nov 2021",
    title: "Real Estate Management",
    org: "Illinois Institute of Technology",
    text: "JavaFX and MySQL system with admin and user roles: property listings for rent or sale, quotation bids from users, and admin accept or reject workflows.",
    tags: ["JavaFX", "MySQL"],
  },
  {
    date: "Aug 2020 - Jul 2021",
    title: "MarkersPro",
    text: "School management and administrative solution for K-12 and higher education institutions. Led training on JIRA, Confluence, Git, .NET Core, Web API, and PostgreSQL while building modern React web applications.",
    tags: ["React", ".NET Core", "PostgreSQL"],
  },
  {
    date: "Jan 2020 - Jun 2020",
    title: "College of American Pathologists (CAP)",
    text: "Built signup and login workflows, digital agreement signing, and scheduled cron jobs, plus utility tooling, bug fixes, and customer issue resolution.",
    tags: [".NET", "SQL"],
  },
  {
    date: "Sep 2018 - Dec 2019",
    title: "American Academy of Ophthalmology (AAO)",
    text: "Developed signup and login workflows, digital agreement signing, and scheduling crons, with ongoing bug fixes and customer support.",
    tags: [".NET", "C#"],
  },
  {
    date: "Sep 2017 - Sep 2019",
    title: "Practice Management System",
    text: "Project lead for a large-user-base platform: requirement gathering, client communication, microservices and APIs in .NET and C#, and weekly scheduler jobs that sent emails and reports to customers and business heads.",
    tags: [".NET MVC", "C#", "SQL"],
  },
  {
    date: "Sep 2016 - Sep 2018",
    title: "FRED - All Registry Practice Management System",
    text: "Module lead owning work distribution and delivery: designed, built, and maintained the codebase while debugging existing applications, upgrading interfaces, and improving performance.",
    tags: [".NET", "SQL"],
  },
  {
    date: "Jun 2016 - Jul 2016",
    title: "E-Government Portal for Schemes and Tenders",
    text: "Portal spreading awareness of government schemes and tenders with user registration and verification, area-of-interest email updates, applications for schemes and tenders, and report generation.",
    tags: ["J2EE", "AJAX", "SQL"],
  },
  {
    date: "Nov 2014 - May 2015",
    title: "Clean City - Android App",
    org: "Pune Institute of Computer Technology",
    text: "Android app for reporting city infrastructure issues: users upload photos of potholes and damaged infrastructure, duplicate requests are rejected automatically, and the most-requested items are prioritized.",
    tags: ["Android", "Oracle"],
  },
];

const skills = [
  ["Languages", "Python · Java · JavaScript · TypeScript · SQL · C# · C++"],
  ["Full Stack & Backend", "React · Angular · Spring Boot · .NET 8 · REST APIs · Microservices"],
  ["Cloud & Systems", "AWS Lambda · S3 · SQS · EventBridge · Terraform · Docker · Distributed Systems"],
  ["Data Engineering", "Databricks · PySpark · Delta Lake · Dremio · ETL/ELT · PostgreSQL · MongoDB"],
  ["Engineering Practice", "CI/CD · Git · Grafana · CloudWatch · Technical Design · Code Reviews · Agile"],
  ["Applied AI", "AI Agents · Custom Assistants · Prompt Engineering · Document Intelligence · Computer Vision"],
];

function BrandMark() {
  return (
    <a href="#home" className="brand" aria-label="Gita Disale - home">
      <span className="brand-mark">G</span>
      <span>Gita Disale</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Architecture({ flow }: { flow: string[] }) {
  return (
    <div className="architecture" aria-label={flow.join(" to ")}>
      {flow.map((item, index) => (
        <div className="architecture-step" key={item}>
          <span>{item}</span>
          {index < flow.length - 1 && <i><ArrowRight size={14} /></i>}
        </div>
      ))}
    </div>
  );
}

function Portfolio() {
  return (
    <main id="home">
      <header className="site-header">
        <BrandMark />
        <nav aria-label="Primary navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu size={20} /></summary>
          <div>{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
        </details>
        <a className="pill pill-dark header-cta" href="mailto:disale.gita@gmail.com">Let&apos;s talk <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <SectionLabel>Hello, I&apos;m</SectionLabel>
          <h1 id="hero-title">Gita <em>Disale</em></h1>
          <p className="hero-role">Senior Software Engineer</p>
          <p className="hero-description">I build scalable software, cloud systems, and data platforms that power real-world decisions.</p>
          <div className="hero-actions">
            <a className="pill pill-dark" href="#projects">View my work <ArrowDownRight size={17} /></a>
            <a className="pill pill-light" href="mailto:disale.gita@gmail.com">Connect with me</a>
          </div>
          <div className="hero-proof">
            <p className="quote-line"><span className="quote-mark" aria-hidden="true">&ldquo;&ldquo;</span>Engineering complex systems into simple, reliable solutions.</p>
            <p className="quote-years">9+ years</p>
            <p className="quote-sub">building production software</p>
          </div>
        </div>

        <div className="portrait-stage">
          <img src={portrait}alt="Gita Disale, Senior Software Engineer" />
          <div className="availability"><span /> Chicago, IL</div>
        </div>



        <div className="hero-tags" aria-label="Core expertise">
          <span>Distributed systems</span><span>AWS cloud</span><span>Full stack</span><span>Data platforms</span><span>Applied AI</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          {["SOFTWARE ENGINEERING", "CLOUD SYSTEMS", "DATA PLATFORMS", "APPLIED AI", "TECHNICAL LEADERSHIP"].map((item, index, list) => (
            <span key={item}>{item}{index < list.length - 1 && <b>|</b>}</span>
          ))}
        </div>
      </div>

      <section id="about" className="section shell about-section">
        <div>
          <SectionLabel>What I do</SectionLabel>
          <h2>Complex systems.<br/><em>Clear outcomes.</em></h2>
        </div>
        <div className="about-copy">
          <p className="lead">I translate demanding business, risk, operational, and technical requirements into software that is scalable, maintainable, and ready for production.</p>
          <p>My work spans architecture and technical design through development, deployment, monitoring, and production support-with a collaborative approach grounded in code quality and operational ownership.</p>
        </div>
        <div className="capabilities">
          {[
            [Code2, "Software Engineering"], [Cloud, "Cloud & Distributed Systems"], [Database, "Data Platforms"], [BrainCircuit, "Applied AI"], [BriefcaseBusiness, "Technical Leadership"],
          ].map(([Icon, label], i) => {
            const CapabilityIcon = Icon as typeof Code2;
            return <div className="capability" key={label as string}><span>0{i + 1}</span><CapabilityIcon size={22}/><strong>{label as string}</strong></div>;
          })}
        </div>
      </section>

      <section id="experience" className="section section-dark">
        <div className="shell">
          <SectionLabel>Career journey</SectionLabel>
          <div className="section-heading-row"><h2>Building through<br/><em>experience.</em></h2><p>From responsive products to market-critical cloud and data systems.</p></div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-index">0{index + 1}</div>
                <div><p className="timeline-date">{job.date}</p><h3>{job.company}</h3><h4>{job.role}</h4></div>
                <div><p>{job.text}</p><div className="tag-list">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section more-projects">
        <div className="shell">
          <div className="section-heading-row light"><h2>Systems with<br/><em>real impact.</em></h2><p>Three production stories where architecture, data, and business outcomes meet.</p></div>
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-body"><p className="project-domain">{project.domain}</p><h3>{project.title}</h3><p>{project.description}</p><strong>{project.impact}</strong></div>
              <Architecture flow={project.flow}/>
            </article>
          ))}
          <div className="project-list">
            <SectionLabel>All projects</SectionLabel>
            <div className="section-heading-row light"><h2>Every build,<br/><em>end to end.</em></h2><p>The complete list - from Android and J2EE beginnings to production platforms and data systems.</p></div>
          </div>
          <div className="more-projects-grid">
            {allProjects.map((project, index) => (
              <article key={project.title}>
                <div className="mp-top"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.date}</span></div>
                <h3>{project.title}</h3>
                {project.org && <p className="mp-org">{project.org}</p>}
                <p>{project.text}</p>
                <div className="mp-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="shell">
          <SectionLabel>Technical toolkit</SectionLabel>
          <div className="section-heading-row light"><h2>Depth across<br/><em>the stack.</em></h2><p>Tools selected for the problem-not the other way around.</p></div>
          <div className="skill-grid">
            {skills.map(([title, items], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{items}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section ai-section">
        <div className="shell ai-grid">
          <div><SectionLabel>Engineering + applied AI</SectionLabel><h2>Practical intelligence,<br/><em>built into systems.</em></h2><p>Modern AI can complement scalable software, cloud platforms, and business workflows-without replacing sound engineering fundamentals.</p></div>
          <div className="ai-network" aria-hidden="true"><Network size={120}/><span className="node n1">Agents</span><span className="node n2">Vision</span><span className="node n3">Automation</span><span className="node n4">Assistants</span></div>
          <div className="ai-topics">{["AI Agents", "Custom AI Assistants", "Prompt Engineering", "Document Intelligence", "Computer Vision", "Workflow Automation"].map(x => <span key={x}><Sparkles size={14}/>{x}</span>)}</div>
        </div>
      </section>

      <section id="education" className="section shell education-section">
        <div>
          <SectionLabel>Foundation</SectionLabel>
          <h2>Education &<br/><em>certifications.</em></h2>
        </div>
        <div className="education-list">
          <article><span>2023</span><div><h3>Illinois Institute of Technology</h3><p>Master of Science in Information Technology and Management · Chicago, IL</p><p className="gpa">GPA: 4.0 / 4.0</p></div><Award/></article>
          <article><span>2015</span><div><h3>Pune Institute of Computer Technology</h3><p>Bachelor of Engineering in Information Technology · Pune, India</p><p className="gpa">GPA: 3.6 / 4.0</p></div><Award/></article>
          <div className="certifications">
            <h3>Certifications</h3>
            <p>AI Builder Accelerator <span>2026</span></p><p>Certified Scrum Product Owner <span>2022</span></p><p>Certified ScrumMaster <span>2022</span></p><p>Foundations of Project Management <span>2022</span></p><p>Agile with Atlassian Jira <span>2022</span></p>
          </div>
        </div>
      </section>

      <section className="philosophy section section-dark">
        <div className="shell">
          <SectionLabel>How I approach engineering</SectionLabel>
          <div className="philosophy-grid">
            {[["01", "Understand the problem first", "Translate complexity into a clear engineering problem."], ["02", "Build for production", "Prioritize reliability, observability, and ownership."], ["03", "Design for scale", "Create reusable architecture and durable platforms."], ["04", "Engineer collaboratively", "Bring technical and business teams into alignment."]].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="shell footer-grid">
          <SectionLabel>Let&apos;s work together</SectionLabel>
          <h2>Let&apos;s build something<br/><em>meaningful.</em></h2>
          <p>I&apos;m interested in challenging engineering problems involving scalable software, cloud platforms, distributed systems, data engineering, and applied AI.</p>
          <div className="footer-actions"><a className="pill pill-coral" href="mailto:disale.gita@gmail.com"><Mail size={18}/> Email me</a><a className="pill pill-outline-dark" href="https://linkedin.com/in/gita-disale/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div>
          <div className="footer-meta"><BrandMark/><span><MapPin size={15}/> Chicago, IL</span><span>© 2026 Gita Disale</span></div>
        </div>
      </footer>
    </main>
  );
}
