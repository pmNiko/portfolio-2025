import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Server, Database, Container, GitBranch, Cloud, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors"
            >
              Portfolio
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-orange-600 transition-colors">
                Habilidades
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-orange-600 transition-colors">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-orange-600 transition-colors">
                Sobre mí
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-orange-600 transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Martín González
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full Stack Developer & DevOps Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Especializado en construir arquitecturas escalables y automatizar procesos de desarrollo.
              Apasionado por crear soluciones que impactan directamente en la eficiencia de los equipos.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all hover:scale-105">
                Contactar
                <Mail size={18} />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all">
                Ver proyectos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-orange-600 hover:shadow-md transition-all group"
                >
                  <Icon className="text-gray-600 group-hover:text-orange-600 transition-colors" size={24} />
                  <span className="font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Proyectos destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <Github size={18} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Sobre mí</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Comencé mi carrera en desarrollo web hace 8 años, y rápidamente descubrí mi pasión por
              la infraestructura y automatización. Esta intersección entre desarrollo y operaciones se
              convirtió en mi especialidad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              He liderado la transformación DevOps en startups y equipos corporativos, implementando
              pipelines CI/CD que redujeron los tiempos de deployment de horas a minutos. Mi enfoque
              combina código limpio con infraestructura como código.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mi visión es construir sistemas que no solo funcionen, sino que evolucionen. Busco
              constantemente nuevas formas de hacer que los equipos trabajen más rápido, más seguro
              y con mayor confianza en cada release.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Contacto</h2>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-600 mb-8">
              ¿Tenés un proyecto en mente o querés charlar sobre tecnología?
              Estoy siempre abierto a nuevas oportunidades y colaboraciones.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              <a
                href="mailto:martin.gonzalez@example.com"
                className="inline-flex items-center gap-3 text-lg hover:text-orange-600 transition-colors group"
              >
                <Mail className="text-orange-600" size={24} />
                <span>martin.gonzalez@example.com</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg hover:text-orange-600 transition-colors group"
              >
                <Github className="text-orange-600" size={24} />
                <span>github.com/martingonzalez</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg hover:text-orange-600 transition-colors group"
              >
                <Linkedin className="text-orange-600" size={24} />
                <span>linkedin.com/in/martingonzalez</span>
              </a>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-colors resize-none"
                  placeholder="Contame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all hover:scale-105 font-medium"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2025 Martín González. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
