import './App.css'

import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Download,
  Code2,
  Cpu,
  GraduationCap,
  Wrench,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Kwesta',
    category: 'Full-Stack Development',
    description:
      'A location-based social application designed to encourage interaction with the world around you. Developed as part of a collaborative team project.',
    technologies: ['TypeScript', 'React', 'MongoDB', 'GitHub'],
    color: 'sage',
  },
  {
    number: '02',
    name: 'Equipment Rental App',
    category: 'Application Development',
    description:
      'A cross-platform equipment rental application featuring QR code scanning for streamlined checkouts and returns, with authentication and real-time database management.',
    technologies: ['React', 'Supabase', 'Tailwind CSS'],
    color: 'blue',
  },
  {
    number: '03',
    name: '2D Game Development',
    category: 'Game Development',
    description:
      'Developed multiple 2D games, including a grid-based strategy game with AI and a fast-paced hack-and-slash featuring adaptive enemy behavior.',
    technologies: ['Godot', 'GDScript', 'A* Pathfinding'],
    color: 'beige',
  },
  {
    number: '04',
    name: 'Web Development',
    category: 'Web Development',
    description:
      'Created responsive websites and interactive applications, including a Raspberry Pi-hosted Wordle replica featuring local storage and custom gameplay logic.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Raspberry Pi'],
    color: 'sage',
  },
]

const skills = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Assembly', 'Racket', 'GDScript'],
  },
  {
    title: 'Frameworks & Technologies',
    icon: Cpu,
    items: ['React', 'Tailwind CSS', 'Supabase', 'MongoDB', 'Arduino', 'HTML/CSS'],
  },
  {
    title: 'Tools & Environments',
    icon: Wrench,
    items: ['GitHub', 'Linux', 'VS Code', 'PyCharm', 'IntelliJ IDEA', 'VirtualBox'],
  },
]

function Navbar() {
  const links = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">BW</a>

      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </div>

      <a href="#contact" className="nav-contact">
        Get in touch <ArrowUpRight size={15} />
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          Computer Science Student · Cal Poly SLO
        </div>

        <h1>
          <span>Bobby Woodard</span>
        </h1>

        <p className="hero-description">
          I'm a computer science student interested in software
          development, engineering, and finding creative solutions
          to interesting problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Explore my work <ArrowUpRight size={17} />
          </a>

          <a href="#about" className="button-secondary">
            More about me <ArrowDown size={16} />
          </a>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/in/bobby-woodard-76427a347"
              target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-label="LinkedIn"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
          </a>
          <a href="mailto:bobbywoodard11@gmail.com">
            <Mail size={18} /> Email
          </a>
        </div>
      </div>

      <div className="hero-aside">
        <div className="hero-decoration">
          <div className="decoration-circle circle-one" />
          <div className="decoration-circle circle-two" />
          <div className="decoration-circle circle-three" />
          <div className="decoration-center">
            <span>BW</span>
            <small>CREATIVE THINKER<br />& PROBLEM SOLVER</small>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, description }: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-container">
        <SectionHeading
          eyebrow="ABOUT ME"
          title="A little bit about myself."
          description="A student, developer, and passionate learner."
        />

        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">
              I enjoy figuring out how things work and finding
              ways to make them better.
            </p>
            <p>
              I'm currently pursuing a Bachelor's degree in
              Computer Science at California Polytechnic State
              University, San Luis Obispo. My interests span
              software development, systems programming, and
              the intersection of software and physical engineering.
            </p>
            <p>
              Outside of coursework, I've spent several years
              involved in robotics, developing software, working
              with electronics, and collaborating with teams to
              turn ideas into working projects.
            </p>
            <p>
              I'm always looking for opportunities to learn
              something new, take on challenging problems, and
              build things that have a meaningful impact.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <span className="detail-label">EDUCATION</span>
              <GraduationCap size={23} />
              <h3>Cal Poly SLO</h3>
              <p>B.S. Computer Science</p>
              <span className="detail-small">Expected May 2027</span>
            </div>

            <div className="detail-card detail-card-accent">
              <span className="detail-label">ACADEMICS</span>
              <h3>3.99 GPA</h3>
              <p>Dean's List & President's Honors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Things I've built."
          description="A collection of projects I've worked on, technologies I've explored, and problems I've enjoyed solving."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.color}`}
              key={project.number}
            >
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <ArrowUpRight size={21} />
              </div>

              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="content-section skills-section" id="skills">
      <div className="section-container">
        <SectionHeading
          eyebrow="TOOLKIT"
          title="Technical skills."
          description="Technologies and tools I've worked with through coursework, personal projects, and collaborative development."
        />

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <div className="skill-card" key={skill.title}>
                <Icon size={25} />
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <div className="section-container">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Where I've been."
          description="Experiences that have shaped the way I approach engineering, collaboration, and problem-solving."
        />

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">SEP 2020 — PRESENT</div>
            <div className="timeline-content">
              <h3>Robotics Team Experience</h3>
              <span className="timeline-role">
                Programming Captain & Combat Robotics Member
              </span>
              <p>
                Led programming efforts for a high school robotics
                team, developing autonomous programs and mentoring
                teammates. Continued robotics involvement at
                university, designing and building combat robots
                through CAD, 3D printing, Arduino programming,
                electronics, and system integration.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">APR 2023 — SEP 2024</div>
            <div className="timeline-content">
              <h3>Mathnasium</h3>
              <span className="timeline-role">Math Tutor</span>
              <p>
                Tutored students from elementary school through
                college in subjects ranging from arithmetic to
                calculus. Adapted instruction to individual
                learning styles while managing multiple students
                in a fast-paced environment.
              </p>
            </div>
          </article>
        </div>

        <div className="education-block">
          <GraduationCap size={25} />
          <div>
            <span className="eyebrow">EDUCATION</span>
            <h3>California Polytechnic State University</h3>
            <p>Bachelor of Science in Computer Science · 2024–2027</p>
            <p>3.99 GPA · Dean's List · President's Honors</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-content section-container">
        <div>
          <span className="eyebrow">RESUME</span>
          <h2>Want to know more?</h2>
          <p>
            Take a look at my resume for a more detailed overview
            of my education, experience, and qualifications.
          </p>
        </div>

        <a href={`${import.meta.env.BASE_URL}resume.pdf`}
           className="button-primary" target="_blank" rel="noreferrer">
          View my resume <Download size={17} />
        </a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-container">
        <SectionHeading
          eyebrow="GET IN TOUCH"
        />

        <a className="contact-email" href="mailto:bobbywoodard11@gmail.com">
          bobbywoodard11@gmail.com <ArrowUpRight size={23} />
        </a>

        <div className="contact-socials">
          <a href="https://linkedin.com/in/bobby-woodard-76427a347"
              target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-label="LinkedIn"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
          </a>
          <a href="mailto:bobbywoodard11@gmail.com">
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-inner">
        <a href="#home" className="nav-logo">BW</a>
        <p>Designed & built by Bobby Woodard · 2026</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
