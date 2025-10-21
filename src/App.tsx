import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, ExternalLink, Code2, Server, Database, Cloud, Menu, X, ArrowRight, Sun, Moon, Smartphone, Zap, Code, User2, CreditCard, Network, Plug } from 'lucide-react';
import { Download } from 'lucide-react';

// Inicializar EmailJS
emailjs.init('tjTCVED0LjhPAnVZs');

// Traducciones
const translations = {
  es: {
    nav: {
      skills: 'Habilidades',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      name: 'Martín Nicolás Paneblanco',
      title: 'Desarrollador de software',
      description: 'Diseñando soluciones escalables y automatizando flujos complejos para potenciar equipos de desarrollo. Enfocado en performance, calidad y despliegues sin fricción.',
      contactBtn: 'Contactar',
      projectsBtn: 'Ver proyectos',
      cvBtn: 'Ver CV actualizado',
    },
    skills: 'Habilidades',
    badges: 'Medallas',
    mapappDesc: 'Aplicación de mapas interactiva desarrollada en React y TypeScript que permite buscar ubicaciones, generar rutas y visualizar caminos en San Martín de los Andes con integración de Mapbox.',
    jsSimulatorDesc: 'Simulador visual e interactivo que muestra cómo funciona el Event Loop de JavaScript, incluyendo Call Stack, Web APIs, Microtask Queue y Callback Queue. Permite ejecutar código paso a paso o en modo automático, con log detallado y resumen final.',
    appsmaGobDesc: 'Plataforma modular de gestión municipal basada en microservicios y un meta framework propio construido sobre un monorepositorio multipaquete. Integra prácticas ágiles (Scrum + Kanban), Git Flow simplificado y CI/CD automatizado con GitHub Actions y Docker.',
    pythonLearningDesc: 'Experiencia formativa compartida con estudiantes a través de dos cursos complementarios: "Programación en Python" y "POO en Python". Ambos enfocados en bases de programación, estructuras de datos y principios de diseño orientado a objetos.',
    projects: 'Proyectos destacados',
    codeBtn: 'Código',
    demoBtn: 'Demo',
    viewCode: 'Ver código del proyecto',
    viewDemo: 'Ver demo del proyecto',
    about: 'Sobre mí',
    aboutTitle: 'Sobre mí',
    aboutText1: 'Comencé mi carrera en desarrollo web en 2017, y rápidamente descubrí mi pasión por entender cómo funcionan las cosas desde adentro: la infraestructura, la automatización y la arquitectura que sostiene el software. Esta intersección entre desarrollo y operaciones se convirtió en mi especialidad.',
    aboutText2: 'He liderado procesos de transformación DevOps en startups y equipos corporativos, implementando pipelines CI/CD que redujeron los tiempos de deployment de horas a minutos. Mi enfoque combina buenas prácticas de desarrollo con infraestructura como código y una fuerte cultura de automatización.',
    aboutText3: 'Mi visión es construir sistemas que no solo funcionen, sino que evolucionen. Busco constantemente nuevas formas de hacer que los equipos trabajen más rápido, con mayor seguridad y confianza en cada release.',
    philosophy: 'Filosofía',
    philosophyText: 'Me apasiona conectar piezas. Lenguajes, frameworks y servicios en la nube se integran para formar sistemas como redes, donde cada nodo aporta su valor. La estrategia más adecuada se define según el contexto, y si un problema puede mapearse, puede resolverse. Mi objetivo es que cada solución sea replicable, escalable y elegante, sumando siempre al equipo y facilitando su crecimiento.',
    philosophyQuote: 'Creo que el verdadero valor de un desarrollador no está solo en escribir código, sino en saber cómo conectar piezas con propósito a partir del trabajo en equipo.',
    contact: 'Contacto',
    contactDescription: '¿Tenés un proyecto en mente o querés charlar sobre tecnología? Estoy siempre abierto a nuevas oportunidades y colaboraciones.',
  form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Me contactaré pronto.',
      error: 'Error al enviar el mensaje. Intenta de nuevo.',
      required: 'requerido',
    },
  footer: '© 2025 Martín Nicolás Paneblanco',
  commitBy: 'Implementación:',
  committedOn: 'commit el',
  },
  en: {
    nav: {
      skills: 'Skills',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      name: 'Martín Nicolás Paneblanco',
  title: 'Software Developer',
      description: 'Designing scalable solutions and automating complex workflows to empower development teams. Focused on performance, quality, and frictionless deployments.',
      contactBtn: 'Contact',
      projectsBtn: 'View projects',
      cvBtn: 'View updated CV',
    },
    skills: 'Skills',
    badges: 'Badges',
    mapappDesc: 'Interactive map application built with React and TypeScript. Search locations, generate routes, and visualize paths in San Martín de los Andes with Mapbox integration.',
    jsSimulatorDesc: 'Visual and interactive simulator that shows how the JavaScript Event Loop works, including Call Stack, Web APIs, Microtask Queue and Callback Queue. Allows step-by-step or automatic code execution, with detailed logging and final summary.',
    appsmaGobDesc: 'Modular municipal management platform based on microservices and a custom meta-framework built on a multi-package monorepo. Integrates agile practices (Scrum + Kanban), simplified Git Flow, and automated CI/CD with GitHub Actions and Docker.',
    pythonLearningDesc: 'Educational experience shared with students through two complementary courses: "Programming in Python" and "OOP in Python". Both focused on programming fundamentals, data structures and object-oriented design principles.',
    projects: 'Featured Projects',
    codeBtn: 'Code',
    demoBtn: 'Demo',
    viewCode: 'View project code',
    viewDemo: 'View project demo',
    about: 'About',
    aboutTitle: 'About Me',
    aboutText1: 'I started my web development career in 2017, and quickly discovered my passion for understanding how things work under the hood: infrastructure, automation, and the architecture that sustains software. This intersection between development and operations became my specialty.',
    aboutText2: 'I\'ve led DevOps transformation processes in startups and corporate teams, implementing CI/CD pipelines that reduced deployment times from hours to minutes. My approach combines development best practices with infrastructure-as-code and a strong automation culture.',
    aboutText3: 'My vision is to build systems that not only work, but evolve. I constantly seek new ways to make teams work faster, with greater security and confidence in every release.',
    philosophy: 'Philosophy',
    philosophyText: 'I\'m passionate about connecting pieces. Languages, frameworks, and cloud services integrate to form systems like networks, where each node brings its value. The most appropriate strategy is defined based on context, and if a problem can be mapped, it can be solved. My goal is for each solution to be replicable, scalable, and elegant, always contributing to the team and facilitating its growth.',
    philosophyQuote: 'I believe that the true value of a developer lies not only in writing code, but in knowing how to connect pieces with purpose through teamwork.',
    contact: 'Contact',
    contactDescription: 'Do you have a project in mind or want to chat about technology? I\'m always open to new opportunities and collaborations.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent! I\'ll contact you soon.',
      error: 'Error sending message. Try again.',
      required: 'required',
    },
  footer: '© 2025 Martín Nicolás Paneblanco',
  commitBy: 'By:',
  committedOn: 'committed on',
  }
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'Frontend', icon: Code2, tooltip: 'React, Tailwind CSS, TypeScript' },
    { name: 'Backend', icon: Server, tooltip: 'Node.js, Express, FastAPI, Python' },
    { name: 'SQL / NoSQL', icon: Database, tooltip: 'PostgreSQL, MongoDB, Firebase' },
    { name: 'AWS / Azure / Google', icon: Cloud, tooltip: 'EC2, S3, Cloud Functions' },
    { name: 'Expo Android / iOS', icon: Smartphone, tooltip: 'React Native, Expo SDK' },
    { name: 'CI/CD', icon: Github, tooltip: 'GitHub Actions, Jenkins' },
    { name: 'Firebase / Supabase', icon: Zap, tooltip: 'Real-time DB, Auth, Hosting' },
    { name: 'Sysadmin / DevOps', icon: Code, tooltip: 'Docker, Kubernetes, Dokploy, Linux' },
    { name: 'OAuth', icon: User2, tooltip: 'OAuth2, Google Auth' },
    { name: 'Mercado Pago / Stripe', icon: CreditCard, tooltip: 'Pasarela de pagos, webhooks' },
    { name: 'Nginx', icon: Network, tooltip: 'Reverse proxy, SSL, load balancing' },
    { name: 'MCP', icon: Plug, tooltip: 'Claude, Cursor, Windsurf, n8n' },    
  ];

  const projects = [
      {
      title: 'AppSmaGob',
      descriptionKey: 'appsmaGobDesc',
      tech: ['React','Typescript', 'CI/CD', 'GitHub Actions'],
      github: '#',
      demo: 'https://app.sma.gob.ar',
      icon: `${import.meta.env.BASE_URL}icons/appsmagob.png`,
      date: 'Oct 6, 2025',
    },
  
    {
      title: 'JS Event Loop Simulator',
      descriptionKey: 'jsSimulatorDesc',
      tech: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS'],
      github: 'https://github.com/pmNiko/JS-Event-Loop-Simulator',
      demo: 'https://pmniko.github.io/JS-Event-Loop-Simulator/',
      icon: `${import.meta.env.BASE_URL}icons/event-loop.png`,
      date: 'Oct 19, 2025',
    },
  
      {
      title: 'MapApp',
      descriptionKey: 'mapappDesc',
      tech: ['React', 'TypeScript', 'Mapbox API'],
      github: 'https://github.com/pmNiko/MapApp',
      demo: 'https://maps-app-niko.netlify.app',
      icon: `${import.meta.env.BASE_URL}icons/maps.png`,
      date: 'Jan 28, 2023',
    },
    {
      title: 'Python Learning Path',
      descriptionKey: 'pythonLearningDesc',
      tech: ['Python', 'POO', 'Educación', 'GitHub'],
      github: 'https://github.com/pmNiko/programacion-en-python',
      demo: '#',
      github2: 'https://github.com/pmNiko/POO-Python',
      icon: `${import.meta.env.BASE_URL}icons/python.png`,
      date: 'Dec 10, 2021',
    },
  ];

  return (
    <div
  className={`min-h-screen w-screen overflow-x-hidden transition-colors duration-300 ${
    darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
  }`}
>
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
              <img 
                src={`${import.meta.env.BASE_URL}icons/nk2.png`}
                alt="Niko.dev logo" 
                className={`w-16 h-16 object-contain transition-all -my-4 ${
                  darkMode ? '' : 'drop-shadow-[0_0_3px_rgba(0,0,0)]'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('skills')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('projects')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                {t.nav.projects}
              </button>
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}>
                {t.nav.contact}
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
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className={`p-2 rounded-lg transition-colors text-lg ${
                  darkMode
                    ? 'hover:bg-gray-700'
                    : 'hover:bg-gray-100'
                }`}
                title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                {language === 'es' ? '🇦🇷' : '🇺🇸'}
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
              <button
                onClick={() => scrollToSection('skills')}
                className={`transition-colors text-left ${
                  darkMode
                    ? 'text-gray-300 hover:text-orange-400'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`transition-colors text-left ${
                  darkMode
                    ? 'text-gray-300 hover:text-orange-400'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors text-left ${
                  darkMode
                    ? 'text-gray-300 hover:text-orange-400'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors text-left ${
                  darkMode
                    ? 'text-gray-300 hover:text-orange-400'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {t.nav.contact}
              </button>
            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up ${darkMode ? 'text-white' : ''}`}>
              {t.hero.name}
            </h1>
            <h2 className={`text-2xl md:text-3xl mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t.hero.title}
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
              <a
                href="#contact"
                className="flex-1 min-w-[150px] sm:flex-none inline-flex items-center justify-center gap-2 bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800 transition-all hover:scale-105 font-semibold"
                aria-label="Ir a la sección de contacto"
              >
                {t.hero.contactBtn}
                <Mail size={18} aria-hidden="true" />
              </a>

              <a
                href="https://pmniko.github.io/minimalist-portfolio-json/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 min-w-[150px] sm:flex-none inline-flex items-center justify-center gap-2 border-2 px-6 py-3 rounded-lg font-semibold group transition-all hover:scale-105 ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:border-orange-700 hover:bg-orange-700 hover:text-white'
                    : 'border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'
                }`}
                aria-label={t.hero.cvBtn}
              >
                {t.hero.cvBtn}
                <Download size={18} aria-hidden="true" className="group-hover:text-white transition-colors" />
              </a>

              <a
                href="#projects"
                className={`flex-1 min-w-[150px] sm:flex-none inline-flex items-center justify-center gap-2 border-2 px-6 py-3 rounded-lg hover:scale-105 transition-all font-semibold group ${
                  darkMode
                    ? 'border-gray-600 text-gray-300 hover:border-orange-700 hover:bg-orange-700 hover:text-white'
                    : 'border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white'
                }`}
                aria-label="Ver proyectos destacados"
              >
                {t.hero.projectsBtn}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>{t.skills}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 border rounded-lg transition-all group relative ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20'
                      : 'border-gray-200 hover:border-orange-600 hover:shadow-md'
                  }`}
                  title={skill.tooltip}
                >
                  <Icon className={`group-hover:text-orange-600 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-800'
                  }`} size={24} />
                  <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{skill.name}</span>
                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                    darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-900 text-white'
                  }`}>
                    {skill.tooltip}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Badges/Medallas Section */}
      <section id="badges" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>{t.badges}</h2>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {[
              { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'SOLID', url: 'https://res.cloudinary.com/dl1k2dee0/image/upload/v1701878258/courses/solid/badge/solid.svg' },
              { name: 'Testing', url: './icons/jest-js-icon.png' },
              { name: 'Express', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
              { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'Zustand', url: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg' },
              { name: 'RxJS', url: 'https://rxjs.dev/assets/images/logos/Rx_Logo_S.png' },
              { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
              { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
              { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'AI', url: './icons/ia-badge.png' },
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
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>{t.projects}</h2>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg border transition-all flex flex-col ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-600/20'
                    : 'bg-white border-gray-200 hover:border-orange-600 hover:shadow-lg'
                }`}
              >
                {/* Custom layout for the first four cards */}
                {index === 0 || index === 1 || index === 2 || index === 3 ? (
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={project.icon} 
                        alt={`Ícono de ${project.title}`} 
                        className="w-12 h-12 object-cover bg-gray-100 rounded shadow-sm" 
                        loading="lazy" 
                        onError={e => { e.currentTarget.style.display = 'none'; }}
                      />
                      <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : ''}`}>{project.title}</h3>
                    </div>
                    <p className={`mb-4 leading-relaxed flex-grow ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {t[project.descriptionKey as keyof typeof t] as string}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
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
                    <div className="flex justify-between items-center mt-auto pt-4">
                      <div className="flex gap-4">
                        {/* Primary Code button */}
                        {project.github === '#' ? (
                          <span
                            className={`inline-flex items-center gap-2 opacity-50 cursor-not-allowed ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}
                            aria-label={`${t.viewCode} ${project.title} - No disponible`}
                          >
                            <Github size={18} aria-hidden="true" />
                            {t.codeBtn}
                          </span>
                        ) : (
                          <a
                            href={project.github}
                            className={`inline-flex items-center gap-2 transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                            aria-label={`${t.viewCode} ${project.title}`}
                            target="_blank" rel="noopener noreferrer"
                          >
                            <Github size={18} aria-hidden="true" />
                            {t.codeBtn}
                          </a>
                        )}

                        {/* Secondary Code button when github2 is provided */}
                        {'github2' in project && (project as any).github2 ? (
                          <a
                            href={(project as any).github2}
                            className={`inline-flex items-center gap-2 transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                            aria-label={`${t.viewCode} ${project.title} (2)`}
                            target="_blank" rel="noopener noreferrer"
                          >
                            <Github size={18} aria-hidden="true" />
                            {t.codeBtn}
                          </a>
                        ) : (
                          project.demo && project.demo !== '#' && (
                            <a
                              href={project.demo}
                              className={`inline-flex items-center gap-2 transition-colors ${darkMode ? 'text-gray-300 hover:text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
                              aria-label={`${t.viewDemo} ${project.title}`}
                              target="_blank" rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} aria-hidden="true" />
                              {t.demoBtn}
                            </a>
                          )
                        )}
                      </div>
                      <small className={`flex items-center gap-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-800'}`} style={{fontFamily:'monospace'}}>
                        {project.date || ''}
                      </small>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>{t.aboutTitle}</h2>
          <div className="max-w-3xl">
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t.aboutText1}
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t.aboutText2}
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t.aboutText3}
            </p>
            
            <h3 className={`text-2xl font-bold mt-12 mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.philosophy}</h3>
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t.philosophyText}
            </p>
            <div className={`pl-6 border-l-4 ${darkMode ? 'border-orange-500 bg-gray-800' : 'border-orange-500 bg-gray-100'} p-6 rounded`}>
              <p className={`text-base italic leading-relaxed ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                💡 {t.philosophyQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : ''}`}>{t.contact}</h2>
          <div className="max-w-2xl">
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {t.contactDescription}
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
                  setFormMessage(t.form.success);
                  form.reset();
                  setTimeout(() => setFormStatus('idle'), 5000);
                } catch (error) {
                  setFormStatus('error');
                  setFormMessage(t.form.error);
                  console.error('EmailJS error:', error);
                }
              }}
              className="space-y-6"
              noValidate
              aria-label="Formulario de contacto"
            >
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : ''}`}>
                  {t.form.name} <span aria-label={t.form.required} className="text-orange-600">*</span>
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
                  placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : ''}`}>
                  {t.form.email} <span aria-label={t.form.required} className="text-orange-600">*</span>
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
                  {t.form.message} <span aria-label={t.form.required} className="text-orange-600">*</span>
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
                  placeholder={language === 'es' ? 'Contame sobre tu proyecto...' : 'Tell me about your project...'}
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
                className="w-full bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800 transition-all hover:scale-105 font-medium disabled:opacity-50 disabled:hover:scale-100"
              >
                {formStatus === 'loading' ? t.form.sending : t.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className={`py-8 px-6 border-t transition-colors duration-300 ${
        darkMode
          ? 'border-gray-700 bg-gray-800'
          : 'border-gray-200 bg-white'
      }`}>
  <div className={`max-w-6xl mx-auto text-center ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          <p>{t.footer}</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
