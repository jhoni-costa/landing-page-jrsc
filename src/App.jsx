import { SiPhp, SiLaravel, SiJavascript, SiReact, SiMysql, SiPostgresql, SiPython, SiGithub, SiGit, SiClickup, SiFigma, SiDocker, SiPostman, SiLinear } from 'react-icons/si'
import { TbCursorText } from 'react-icons/tb'
import './App.css'

const SocialIcons = {
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  whatsapp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.774-8.919L2.166 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
}

const profile = {
  name: 'Jhoni Costa',
  role: 'Desenvolvedor de software',
  headline: 'Construo experiencias digitais modernas com codigo limpo, foco no produto e atencao aos detalhes.',
  about:
    'Atuo no desenvolvimento de interfaces e aplicacoes web que unem performance, manutencao simples e uma experiencia consistente para quem usa e para quem evolui o produto.',
  email: 'mailto:jrscdev@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com', shortLabel: 'github' },
    { label: 'WhatsApp', href: 'https://wa.me/5541999440442', shortLabel: 'whatsapp' },
    { label: 'Instagram', href: 'https://instagram.com', shortLabel: 'instagram' },
    { label: 'X', href: 'https://x.com', shortLabel: 'x' },
    { label: 'Email', href: 'mailto:jrscdev@gmail.com', shortLabel: 'email' },
  ],
}

const highlights = [
  'React com foco em usabilidade',
  'Codigo limpo e manutencao previsivel',
  'Entrega alinhada a objetivo de negocio',
]

const metrics = [
  { value: 'Front-end', label: 'experiencias modernas em React.js' },
  { value: 'Back-end', label: 'integracoes e APIs para produtos digitais' },
  { value: 'Produto', label: 'tecnica com visao pratica de entrega' },
]

const services = [
  {
    title: 'Interfaces que comunicam valor',
    description:
      'Desenvolvo interfaces com hierarquia visual clara, responsividade e consistencia para transformar requisitos em experiencias profissionais.',
  },
  {
    title: 'Base solida para crescer',
    description:
      'Estruturo o projeto para facilitar evolucao, com organizacao de codigo, reaproveitamento de componentes e boas praticas de desenvolvimento.',
  },
  {
    title: 'Comunicacao tecnica objetiva',
    description:
      'Traduzo necessidades do produto em decisoes tecnicas claras para acelerar a execucao e reduzir retrabalho.',
  },
]

const techStack = [
  { name: 'PHP',        icon: <SiPhp />,        color: '#777BB4' },
  { name: 'Laravel',    icon: <SiLaravel />,    color: '#FF2D20' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'React',      icon: <SiReact />,      color: '#61DAFB' },
  { name: 'Python',     icon: <SiPython />,     color: '#3776AB' },
  { name: 'MySQL',      icon: <SiMysql />,      color: '#4479A1' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
]

const toolStack = [
  { name: 'GitHub',   icon: <SiGithub />,     color: '#24292E' },
  { name: 'Git',      icon: <SiGit />,        color: '#F05032' },
  { name: 'ClickUp',  icon: <SiClickup />,    color: '#7B68EE' },
  { name: 'Cursor',   icon: <TbCursorText />, color: '#6366F1' },
  { name: 'Figma',    icon: <SiFigma />,      color: '#F24E1E' },
  { name: 'Docker',   icon: <SiDocker />,     color: '#2496ED' },
  { name: 'Postman',  icon: <SiPostman />,    color: '#FF6C37' },
  { name: 'Linear',   icon: <SiLinear />,     color: '#5E6AD2' },
]

function App() {
  return (
    <div className="layout-root">
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">{profile.role}</span>
          <p className="nameplate">{profile.name}</p>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.about}</p>
          <div className="hero-actions">
            <a className="primary-action" href={profile.email}>
              Falar sobre projeto
            </a>
            <a
              className="secondary-action"
              href={profile.links[0].href}
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub
            </a>
          </div>
          <ul className="highlight-list" aria-label="Principais competencias">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-panel" aria-label="Resumo profissional">
          <div className="panel-badge">Disponivel para novos projetos</div>
          <div className="intro-card">
            <span>Perfil</span>
            <p>
              Desenvolvedor focado em criar produtos web com visual profissional,
              implementacao consistente e atencao real ao que faz diferenca para o usuario.
            </p>
          </div>
          <div className="panel-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
          <div className="signal-card">
            <p>Assinatura profissional</p>
            <h2>Codigo bem pensado, interfaces bem resolvidas e entregas com direcao.</h2>
          </div>
        </aside>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <span className="section-kicker">Servicos</span>
          <h2>Como eu trabalho para entregar software com mais impacto</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section stack-section">
        <div className="section-heading">
          <span className="section-kicker">Stack</span>
          <h2>Ferramentas e tecnologias que fazem parte do meu processo</h2>
        </div>

        <div className="stack-group">
          <span className="stack-group-label">Linguagens &amp; Frameworks</span>
          <div className="stack-cloud">
            {techStack.map((tech) => (
              <span key={tech.name} className="stack-pill">
                <span className="stack-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="stack-group">
          <span className="stack-group-label">Ferramentas</span>
          <div className="stack-cloud">
            {toolStack.map((tool) => (
              <span key={tool.name} className="stack-pill">
                <span className="stack-icon" style={{ color: tool.color }}>
                  {tool.icon}
                </span>
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section contact-section">
        <div>
          <span className="section-kicker">Contato</span>
          <h2>Se voce precisa de um desenvolvedor para tirar um projeto do papel, vamos conversar.</h2>
        </div>
        <a className="primary-action" href={profile.email}>
          Entrar em contato
        </a>
      </section>
    </main>

    <footer className="site-footer">
      <span className="footer-name">{profile.name}</span>
      <nav className="footer-links" aria-label="Redes sociais e contato">
        {profile.links.map((link) => (
          <a
            key={link.label}
            className="footer-link"
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={link.label}
          >
            <span className="footer-icon">{SocialIcons[link.shortLabel]}</span>
            <span className="footer-link-label">{link.label}</span>
          </a>
        ))}
      </nav>
    </footer>
    </div>
  )
}

export default App
