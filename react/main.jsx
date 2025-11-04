/* @jsx React.createElement */
const { useState, useEffect, useMemo } = React;

// Theme removed - using light mode only

// Typing Animation Component (Feature #7)
function TypingText({ text, speed = 100, className = '', delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer;
    
    const startTyping = () => {
      timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);
    };

    if (delay > 0) {
      const delayTimer = setTimeout(startTyping, delay);
      return () => {
        clearTimeout(delayTimer);
        if (timer) clearInterval(timer);
      };
    } else {
      startTyping();
      return () => {
        if (timer) clearInterval(timer);
      };
    }
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="cursor-blink">|</span>}
    </span>
  );
}


// Interactive Background Particles (Feature #10)
function ParticleBackground() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; opacity: 0.6;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(23, 184, 193, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(23, 184, 193, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.remove();
    };
  }, []);

  return null;
}

// Custom Logo Component (Feature #31)
function CustomLogo({ className = '' }) {
  return (
    <a href="#home" className={`custom-logo ${className}`} aria-label="James Kelly Home">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#17b8c1" />
            <stop offset="100%" stopColor="#0f2540" />
          </linearGradient>
        </defs>
        <rect width="44" height="44" rx="12" fill="url(#logoGradient)" />
        <path d="M12 22 L22 12 L32 22 M22 12 L22 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="22" cy="22" r="2" fill="white" />
      </svg>
    </a>
  );
}

// 3D Card Component (Feature #28)
function Card3D({ children, className = '' }) {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className={`card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
}

// Interactive Resume Download Button (Feature #42)
function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download animation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Link to actual resume PDF
    const link = document.createElement('a');
    link.href = '/react/assets/resume.pdf';
    link.download = 'James_Kelly_Resume.pdf';
    link.click();
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 500);
  };

  return (
    <button
      className={`btn btn-resume ${isDownloading ? 'downloading' : ''}`}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <span className="btn-content">
        {isDownloading ? (
          <>
            <i className="fa-solid fa-spinner fa-spin"></i>
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-download"></i>
            <span>Download Resume</span>
          </>
        )}
      </span>
      <span className="btn-progress"></span>
    </button>
  );
}

const projectsData = [
  {
    title: 'Dengue Virus Prediction',
    desc: 'Predicting dengue cases using advanced machine learning, Python and scikit-learn, with robust visualisation tools.',
    chips: ['Python', 'scikit-learn', 'ML', 'Visualisation'],
    code: 'https://github.com/NiallSom/DengueCasePrediction'
  },
  {
    title: 'API Weather App',
    desc: 'Real-time weather data and forecasts via public APIs, built with Python, Flask, and React.',
    chips: ['Python', 'Flask', 'React', 'APIs'],
    code: 'https://github.com/Kelzo8/DataWebApp'
  },
  {
    title: 'Customer Portal AI',
    desc: 'AI-backed customer management portal, using Python, TypeScript, React.',
    chips: ['Python', 'TypeScript', 'React', 'AI'],
    code: 'https://github.com/Kelzo8/CustomerPortalAI'
  },
  {
    title: 'Club Management System',
    desc: 'Modern web platform for club activities and events with Python, Docker, Flask, PostgreSQL.',
    chips: ['Python', 'Docker', 'Flask', 'PostgreSQL'],
    code: 'https://github.com/NiallSom/flaskClubManagement'
  },
  {
    title: 'AI Chatbot',
    desc: 'Next-gen customer support chatbot with NLP and machine learning.',
    chips: ['Python', 'NLP', 'ML'],
    code: 'https://github.com/Kelzo8/AI-Chatbot'
  },
  {
    title: 'Webcam Motion Detection',
    desc: 'Real-time motion detection using Python and OpenCV.',
    chips: ['Python', 'OpenCV'],
    code: 'https://github.com/Kelzo8/webcam'
  },
  {
    title: 'Operations Manual Generator',
    desc: 'Automates regulatory compliance workflows for Avtrain. Built with Flask, HTML, Bootstrap, PostgreSQL.',
    chips: ['Flask', 'Bootstrap', 'PostgreSQL']
  },
  {
    title: 'Motion Sensor Detector',
    desc: "Arduino-based sensor with Telegram alerts, supporting dementia/Alzheimer's caretakers.",
    chips: ['Arduino', 'Telegram']
  },
  {
    title: 'Pygame Race Car Simulator',
    desc: 'Game development with Pygame, applying OOP patterns for maintainable code.',
    chips: ['Python', 'Pygame', 'OOP']
  },
  {
    title: 'Secure File Sharing',
    desc: 'Multi-device secure file sharing app using Python, C++, and cryptography.',
    chips: ['Python', 'C++', 'Crypto'],
    code: 'https://github.com/GobblerGang/PyClient'
  },
  {
    title: 'Ticket App (Web3)',
    desc: 'Blockchain-powered ticketing platform leveraging Web3 and smart contracts.',
    chips: ['Web3', 'Smart Contracts'],
    code: 'https://github.com/Kelzo8/BlockChain'
  },
  {
    title: 'Sleep Quality Prediction',
    desc: 'AI-powered analysis of sleep data for personalised lifestyle recommendations.',
    chips: ['AI', 'ML'],
    code: 'https://github.com/ISE-CS4445-AI/SleeperBuilds'
  }
];

function NavBar() {
  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const links = document.querySelectorAll('.nav-link');
      let current = '';
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY - 120;
        if (window.scrollY >= top && window.scrollY < top + sec.offsetHeight) current = sec.id;
      });
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible'));
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal-up').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleMenu = () => {
    document.querySelector('#primary-navigation')?.classList.toggle('open');
  };

  return (
    <header className="site-header" id="top">
      <div className="container nav-container">
        <CustomLogo />
        <nav className="nav" aria-label="Primary">
          <button className="nav-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="Menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul id="primary-navigation" className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#achievements" className="nav-link">Achievements</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container grid-2">
        <div className="hero-text reveal-up">
          <h1 className="title">
            <TypingText text="James Kelly" speed={150} />
          </h1>
          <p className="subtitle">
            <TypingText text="Third-Year Immersive Software Engineering Student, University of Limerick" speed={50} delay={2000} />
          </p>
          <div className="socials">
            <a href="https://github.com/Kelzo8" className="icon-btn" target="_blank" rel="noopener" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jameskellyise/" className="icon-btn" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:james.kelly991@yahoo.com" className="icon-btn" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
          </div>
          <div className="cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            <ResumeDownload />
          </div>
        </div>
        <div className="hero-visual reveal-up delay-1" aria-hidden="true">
          <Card3D>
            <div className="orb orb-teal"></div>
            <div className="orb orb-navy"></div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container narrow reveal-up">
        <h2 className="section-title">About Me</h2>
        <p className="lead">Hi, I’m James Kelly, a third-year Immersive Software Engineering student at the University of Limerick, currently on placement with Avtrain. Experienced in Python, Java, Django, C++, AWS, and Docker. Passionate about AI, web development, and sports (GAA & fitness).</p>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-header">
        <h3 className="card-title">{project.title}</h3>
        <div className="chip-row">
          {project.chips.map((c) => (<span className="chip" key={c}>{c}</span>))}
        </div>
      </div>
      <p className="card-body">{project.desc}</p>
      {project.code && (
        <div className="card-actions">
          <a className="link" href={project.code} target="_blank" rel="noopener"><i className="fa-brands fa-github"></i> Code</a>
        </div>
      )}
    </article>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = useMemo(() => showAll ? projectsData : projectsData.slice(0, 3), [showAll]);

  return (
    <section id="projects" className="section">
      <div className="container reveal-up">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {visibleProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <button className="btn btn-ghost" onClick={() => setShowAll((s) => !s)}>
            {showAll ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    { icon: 'fa-award', title: 'President’s Volunteer Award', desc: 'Recognition for community impact and leadership.' },
    { icon: 'fa-aws', title: 'AWS Cloud Foundations (AWS)', desc: 'Core AWS services and cloud fundamentals.' },
    { icon: 'fa-code', title: 'Python Mega Course (Udemy)', desc: 'Hands-on Python projects and best practices.' },
    { icon: 'fa-shield-halved', title: 'Cybersecurity Essentials (Cisco)', desc: 'Security fundamentals and threat awareness.' },
    { icon: 'fa-trophy', title: 'Johnson & Johnson Winning in STEM (2025)', desc: 'Award for innovation and excellence in STEM.' }
  ];
  return (
    <section id="achievements" className="section section-alt">
      <div className="container reveal-up">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {items.map((it) => (
            <div className="achievement" key={it.title}>
              <i className={`fa-solid ${it.icon}`}></i>
              <div>
                <h4>{it.title}</h4>
                <p>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [
    { company: 'Avtrain', text: 'Was a sole developer, where I developed and maintained a full-stack application to streamline the operations manual genration process for Avtrian.' },
    { company: 'KEEPER Solutions', text: 'Worked with numerous Fintech startups in design sprints to develop MVPs for their products. I also worked in the AI-Lab by monitoring and making models for customers.' }
  ];
  return (
    <section id="experience" className="section">
      <div className="container reveal-up">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {items.map((x) => (
            <article className="xp-card" key={x.company}>
              <div className="xp-dot"></div>
              <div className="xp-content">
                <h3>{x.company}</h3>
                <p>{x.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container narrow reveal-up">
        <h2 className="section-title">Get in Touch</h2>
        <p className="lead">Feel free to reach out for collaborations, internships, or just a friendly chat.</p>
        <div className="contact-row">
          <a href="mailto:james.kelly991@yahoo.com" className="contact-link"><i className="fa-solid fa-envelope"></i> james.kelly991@yahoo.com</a>
          <a href="https://github.com/Kelzo8" target="_blank" rel="noopener" className="contact-link"><i className="fa-brands fa-github"></i> GitHub</a>
          <a href="https://www.linkedin.com/in/jameskellyise/" target="_blank" rel="noopener" className="contact-link"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <p>James Kelly © 2025</p>
        <div className="socials">
          <a href="https://github.com/Kelzo8" target="_blank" rel="noopener" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jameskellyise/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="mailto:james.kelly991@yahoo.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  // Set default theme to light (no toggle needed)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <>
      <ParticleBackground />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


