import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, ExternalLink, Code2, Server, Database, Container, GitBranch, Cloud, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

// Inicializar EmailJS
emailjs.init('tjTCVED0LjhPAnVZs');

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'React', icon: Code2 },
    { name: 'Node.js', icon: Server },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Docker', icon: Container },
    { name: 'GitHub Actions', icon: GitBranch },
    { name: 'AWS', icon: Cloud },
    { name: 'TypeScript', icon: Code2 },
    { name: 'CI/CD', icon: GitBranch }
  ];

  const projects = [
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Sistema automatizado de despliegue multi-cloud con Terraform y Ansible. Reducción del 70% en tiempo de provisioning.',
      tech: ['Terraform', 'AWS', 'Docker', 'Jenkins'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Microservices Platform',
      description: 'Arquitectura de microservicios escalable con comunicación asíncrona, implementando Event Sourcing y CQRS.',
      tech: ['Node.js', 'RabbitMQ', 'MongoDB', 'Kubernetes'],
      github: '#',
      demo: '#'
    },
    {
      title: 'DevOps Dashboard',
      description: 'Dashboard centralizado para monitoreo de pipelines CI/CD, métricas de deployment y health checks en tiempo real.',
      tech: ['React', 'Prometheus', 'Grafana', 'GitHub Actions'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Database Migration Tool',
      description: 'CLI tool para gestión de migraciones cross-database con rollback automático y validación de schemas.',
      tech: ['TypeScript', 'PostgreSQL', 'MySQL', 'Redis'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        darkMode
          ? 'bg-gray-800/90 border-b border-gray-700'
          : 'bg-white/90 border-b border-gray-200'
      } backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className={`flex items-center gap-2 text-xl font-semibold transition-colors ${
                darkMode
                  ? 'text-white hover:text-orange-400'
                  : 'text-gray-900 hover:text-orange-600'
              }`}
              aria-label="Ir al inicio"
            >
              <Code2 size={28} className="text-orange-600" aria-hidden="true" />
              Niko.dev
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('skills')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                Habilidades
              </button>
              <button onClick={() => scrollToSection('projects')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                Proyectos
              </button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                Sobre mí
              </button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button & Dark Mode Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? 'hover:bg-gray-700'
                    : 'hover:bg-gray-100'
                }`}
                title={darkMode ? 'Light mode' : 'Dark mode'}
                aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                aria-pressed={darkMode}
              >
                {darkMode ? <Sun size={24} className="text-orange-400" aria-hidden="true" /> : <Moon size={24} className="text-gray-600" aria-hidden="true" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-orange-600 transition-colors text-left">
                Habilidades
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-orange-600 transition-colors text-left">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-orange-600 transition-colors text-left">
                Sobre mí
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-orange-600 transition-colors text-left">
                Contacto
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : ''}`}>
              Martín Nicolás Paneblanco
            </h1>
            <h2 className={`text-2xl md:text-3xl mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Arquitecto de Software · Full Stack & DevOps Engineer
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Diseñando soluciones escalables y automatizando flujos complejos para potenciar equipos de desarrollo. Enfocado en performance, calidad y despliegues sin fricción.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all hover:scale-105 font-semibold" aria-label="Ir a la sección de contacto">
                Contactar
                <Mail size={18} aria-hidden="true" />
              </a>
              <a href="#projects" className={`inline-flex items-center gap-2 border-2 px-6 py-3 rounded-lg hover:scale-105 transition-all font-semibold group ${
                darkMode
                  ? 'border-gray-600 text-gray-300 hover:border-orange-600 hover:bg-orange-600 hover:text-white'
                  : 'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              }`} aria-label="Ver proyectos destacados">
                Ver proyectos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 border rounded-lg transition-all group ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20'
                      : 'border-gray-200 hover:border-orange-600 hover:shadow-md'
                  }`}
                >
                  <Icon className={`group-hover:text-orange-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`} size={24} />
                  <span className={`font-medium ${darkMode ? 'text-gray-100' : ''}`}>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Badges/Medallas Section */}
      <section id="badges" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>Medallas</h2>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {[
              { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'SOLID', url: 'https://res.cloudinary.com/dl1k2dee0/image/upload/v1701878258/courses/solid/badge/solid.svg' },
              { name: 'Testing', url: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png' },
              { name: 'Express', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
              { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'Zustand', url: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg' },
              { name: 'RxJS', url: 'https://rxjs.dev/assets/images/logos/Rx_Logo_S.png' },
              { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
              { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
              { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'AI', url: 'https://cdn-icons-png.flaticon.com/512/11592/11592357.png' },
              { name: 'n8n', svg: true },
            ].map((badge, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-2 p-4 h-24 rounded-lg border transition-all group hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20'
                    : 'bg-white border-gray-200 hover:border-orange-600 hover:shadow-md'
                }`}
              >
                {badge.svg ? (
                  <svg 
                    width={32}
                    height={32}
                    viewBox="0 0 48 24"
                    fill="none"
                    className="group-hover:scale-125 transition-transform"
                  >
                    <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M47.9855 4.8C47.9855 7.45098 45.8365 9.6 43.1855 9.6C40.949 9.6 39.0696 8.0703 38.5368 6H31.8352C30.662 6 29.6607 6.84822 29.4678 8.00544L29.2706 9.18912C29.0832 10.313 28.5147 11.2911 27.7108 12C28.5147 12.7089 29.0832 13.687 29.2706 14.8109L29.4678 15.9946C29.6607 17.1518 30.662 18 31.8352 18H33.7368C34.2696 15.9297 36.149 14.4 38.3855 14.4C41.0365 14.4 43.1855 16.549 43.1855 19.2C43.1855 21.851 41.0365 24 38.3855 24C36.149 24 34.2696 22.4703 33.7368 20.4H31.8352C29.4888 20.4 27.4863 18.7036 27.1005 16.3891L26.9032 15.2054C26.7104 14.0482 25.7091 13.2 24.5359 13.2H22.5782C21.979 15.1681 20.1495 16.6 17.9855 16.6C15.8216 16.6 13.9921 15.1681 13.3929 13.2H10.5782C9.97901 15.1681 8.14949 16.6 5.98554 16.6C3.33458 16.6 1.18555 14.4509 1.18555 11.8C1.18555 9.14904 3.33458 7.00002 5.98554 7.00002C8.29361 7.00002 10.2212 8.62902 10.6812 10.8H13.2899C13.7499 8.62902 15.6775 7.00002 17.9855 7.00002C20.2936 7.00002 22.2212 8.62902 22.6812 10.8H24.5359C25.7091 10.8 26.7104 9.95178 26.9032 8.79456L27.1005 7.61088C27.4863 5.29638 29.4888 3.6 31.8352 3.6H38.5368C39.0696 1.52973 40.949 0 43.1855 0C45.8365 0 47.9855 2.14903 47.9855 4.8ZM45.5855 4.8C45.5855 6.12546 44.511 7.2 43.1855 7.2C41.8601 7.2 40.7855 6.12546 40.7855 4.8C40.7855 3.47452 41.8601 2.4 43.1855 2.4C44.511 2.4 45.5855 3.47452 45.5855 4.8ZM5.98554 14.2C7.31105 14.2 8.38553 13.1255 8.38553 11.8C8.38553 10.4745 7.31105 9.40002 5.98554 9.40002C4.66006 9.40002 3.58554 10.4745 3.58554 11.8C3.58554 13.1255 4.66006 14.2 5.98554 14.2ZM17.9855 14.2C19.311 14.2 20.3855 13.1255 20.3855 11.8C20.3855 10.4745 19.311 9.40002 17.9855 9.40002C16.6601 9.40002 15.5855 10.4745 15.5855 11.8C15.5855 13.1255 16.6601 14.2 17.9855 14.2ZM38.3855 21.6C39.711 21.6 40.7855 20.5255 40.7855 19.2C40.7855 17.8745 39.711 16.8 38.3855 16.8C37.0601 16.8 35.9855 17.8745 35.9855 19.2C35.9855 20.5255 37.0601 21.6 38.3855 21.6Z" 
                      fill={darkMode ? '#FFFFFF' : '#000000'}
                    />
                  </svg>
                ) : (
                  <img 
                    src={badge.url} 
                    alt={`${badge.name} icon`}
                    width={32}
                    height={32}
                    className="group-hover:scale-125 transition-transform"
                  />
                )}
                <span className={`text-xs font-semibold text-center line-clamp-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>Proyectos destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg border transition-all ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20'
                    : 'bg-white border-gray-200 hover:border-orange-600 hover:shadow-lg'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : ''}`}>{project.title}</h3>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm px-3 py-1 rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-gray-200'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className={`inline-flex items-center gap-2 transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                    aria-label={`Ver código del proyecto ${project.title}`}
                  >
                    <Github size={18} aria-hidden="true" />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className={`inline-flex items-center gap-2 transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                    aria-label={`Ver demo del proyecto ${project.title}`}
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>Sobre mí</h2>
          <div className="max-w-3xl">
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Comencé mi carrera en desarrollo web en 2017, y rápidamente descubrí mi pasión por entender 
              cómo funcionan las cosas desde adentro: la infraestructura, la automatización y la arquitectura 
              detrás del software. Esta intersección entre desarrollo y operaciones se convirtió en mi especialidad.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              He liderado la transformación DevOps en startups y equipos corporativos, implementando
              pipelines CI/CD que redujeron los tiempos de deployment de horas a minutos. Mi enfoque
              une buenas prácticas de desarrollo con una visión de infraestructura como código y cultura DevOps.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Mi visión es construir sistemas que no solo funcionen, sino que evolucionen. Busco
              constantemente nuevas formas de hacer que los equipos trabajen más rápido, más seguros
              y con mayor confianza en cada release.
            </p>
            
            <h3 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Filosofía</h3>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Me apasiona conectar piezas: lenguajes, frameworks y servicios en la nube se integran 
              para crear sistemas como redes, donde cada nodo aporta su valor. La estrategia más adecuada 
              se elige según el contexto, y si el problema se puede mapear, se puede resolver. El objetivo 
              es que esas soluciones sean replicables, escalables y elegantes, sumando siempre al equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>Contacto</h2>
          <div className="max-w-2xl">
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              ¿Tenés un proyecto en mente o querés charlar sobre tecnología?
              Estoy siempre abierto a nuevas oportunidades y colaboraciones.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              <a
                href="mailto:niko.dev.contact@gmail.com"
                className={`inline-flex items-center gap-3 text-lg transition-colors group ${
                  darkMode
                    ? 'text-gray-200 hover:text-orange-400'
                    : 'text-gray-900 hover:text-orange-600'
                }`}
                aria-label="Enviar email a niko.dev.contact@gmail.com"
              >
                <Mail className="text-orange-600" size={24} aria-hidden="true" />
                <span>niko.dev.contact@gmail.com</span>
              </a>
              <a
                href="https://github.com/pmNiko"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 text-lg transition-colors group ${
                  darkMode
                    ? 'text-gray-200 hover:text-orange-400'
                    : 'text-gray-900 hover:text-orange-600'
                }`}
                aria-label="Visitar perfil de GitHub - pmNiko (abre en nueva ventana)"
              >
                <Github className="text-orange-600" size={24} aria-hidden="true" />
                <span>github.com/pmNiko</span>
              </a>
              <a
                href="https://linkedin.com/in/nicolás-paneblanco-527108190"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 text-lg transition-colors group ${
                  darkMode
                    ? 'text-gray-200 hover:text-orange-400'
                    : 'text-gray-900 hover:text-orange-600'
                }`}
                aria-label="Visitar perfil de LinkedIn - Nicolás Paneblanco (abre en nueva ventana)"
              >
                <Linkedin className="text-orange-600" size={24} aria-hidden="true" />
                <span>linkedin.com/in/nicolás-paneblanco-527108190</span>
              </a>
            </div>

            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus('loading');
                
                const form = e.currentTarget as HTMLFormElement;
                const nameInput = form.querySelector('[name="name"]') as HTMLInputElement;
                const emailInput = form.querySelector('[name="email"]') as HTMLInputElement;
                const messageInput = form.querySelector('[name="message"]') as HTMLTextAreaElement;
                
                try {
                  await emailjs.send(
                    'service_nceqg4c',
                    'template_o9pql6w',
                    {
                      from_name: nameInput.value,
                      from_email: emailInput.value,
                      message: messageInput.value,
                      to_email: 'niko.dev.contact@gmail.com'
                    }
                  );
                  
                  setFormStatus('success');
                  setFormMessage('¡Mensaje enviado! Me contactaré pronto.');
                  form.reset();
                  setTimeout(() => setFormStatus('idle'), 5000);
                } catch (error) {
                  setFormStatus('error');
                  setFormMessage('Error al enviar el mensaje. Intenta de nuevo.');
                  console.error('EmailJS error:', error);
                }
              }}
              className="space-y-6"
              noValidate
              aria-label="Formulario de contacto"
            >
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : ''}`}>
                  Nombre <span aria-label="requerido" className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-colors ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : ''}`}>
                  Email <span aria-label="requerido" className="text-orange-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-colors ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : ''}`}>
                  Mensaje <span aria-label="requerido" className="text-orange-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-colors resize-none ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Contame sobre tu proyecto..."
                />
              </div>
              {formStatus === 'success' && (
                <div className={`p-4 border rounded-lg ${
                  darkMode
                    ? 'bg-green-900/30 border-green-700 text-green-400'
                    : 'bg-green-50 border-green-200 text-green-700'
                }`}>
                  {formMessage}
                </div>
              )}
              {formStatus === 'error' && (
                <div className={`p-4 border rounded-lg ${
                  darkMode
                    ? 'bg-red-900/30 border-red-700 text-red-400'
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}>
                  {formMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all hover:scale-105 font-medium disabled:opacity-50 disabled:hover:scale-100"
              >
                {formStatus === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t transition-colors duration-300 ${
        darkMode
          ? 'border-gray-700 bg-gray-800'
          : 'border-gray-200 bg-white'
      }`}>
        <div className={`max-w-6xl mx-auto text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>© 2025 Martín Nicolás Paneblanco. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
