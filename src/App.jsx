import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  LineChart, 
  Mail, 
  ChevronRight,
  Code,
  Terminal,
  ExternalLink,
  Download
} from 'lucide-react';

// --- ÍCONES PERSONALIZADOS ---
const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// --- DADOS DO PORTFÓLIO ---
const personalInfo = {
  name: "Eduardo Marotta",
  role: "Data Engineer & Analytics Specialist",
  bio: "Especialista em Engenharia de Dados com ampla experiência em desenvolvimento de software e pipelines ETL/ELT. Domínio na construção de arquiteturas escaláveis, modelagem dimensional (Star Schema), processamento distribuído (PySpark, DuckDB) e integração end-to-end com Power BI.",
  email: "oseuemail@exemplo.com",
  github: "https://github.com/edumarotta",
  linkedin: "https://www.linkedin.com/in/eduardomarottadev/"
};

const skills = [
  "Python", "PySpark", "DuckDB", "Apache Parquet", "SQL Server", "Oracle SQL", 
  "AWS", "ETL / ELT", "Data Warehouse", "Star Schema", "Power BI", "FME Desktop"
];

const projects = [
  {
    id: 1,
    title: "E-Commerce & Logística End-to-End Analytics",
    category: "Engenharia de Dados & Analytics",
    description: "Pipeline analítico end-to-end simulando o fluxo de e-commerce. Abrange desde a ingestão de dados brutos operacionais (OLTP) com inconsistências reais via Python (Faker/Pandas) e processamento distribuído com PySpark, até a estruturação de um Data Warehouse analítico (OLAP) em Esquema Estrela com DuckDB, armazenamento em Apache Parquet e disponibilização em dashboard executivo no Power BI.",
    tags: ["PySpark", "DuckDB", "Apache Parquet", "Python", "Power BI", "Data Warehouse", "Esquema Estrela"],
    iframeUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjM2NjViMDEtZWRlYy00OGI1LWEyNjctY2UwZWU5ODlkZjYyIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    githubUrl: "https://github.com/edumarotta/ecommerce-end-to-end-analytics/tree/main",
  },
  {
    id: 2,
    title: "Dashboard Financeiro",
    category: "Power BI",
    description: "Este dashboard apresenta uma visão clara e integrada da saúde financeira do negócio. Ele consolida indicadores essenciais — Receita, Despesas, Impostos e Lucro — permitindo avaliar rapidamente o desempenho geral. A análise mensal destaca variações positivas e negativas ao longo do tempo, enquanto o indicador de Margem resume a eficiência operacional.",
    tags: ["Power BI", "Finanças", "Lucratividade", "DAX"],
    iframeUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWJjN2RjNDEtNDk2NS00MTBmLTllYzMtMjk0ODFlNzFiNDE5IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9", 
  },
  {
    id: 3,
    title: "Dashboard de Compras",
    category: "Power BI",
    description: "O dashboard oferece uma visão estratégica das compras realizadas pela empresa, permitindo identificar rapidamente quanto se gasta, onde se gasta, com quem se gasta e como esses gastos evoluem ao longo do tempo. Ele reúne indicadores essenciais e gráficos interativos que facilitam decisões operacionais e gerenciais.",
    tags: ["Power BI", "DAX", "Gestão de Compras", "KPIs"],
    iframeUrl: "https://app.powerbi.com/view?r=eyJrIjoiOGQ4ZjBlNWMtYTllMy00YTFiLTk4Y2QtNThjYjQyODViMTc2IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
  },
  {
    id: 4,
    title: "Relatório de Vendas",
    category: "Power BI",
    description: "Monitoramento detalhado do desempenho comercial da empresa. Permite analisar o volume de vendas, faturamento por período, performance de produtos e o atingimento de metas, facilitando a tomada de decisão da equipe comercial.",
    tags: ["Comercial", "Vendas", "Power BI", "KPIs"],
    iframeUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDNhZTZmMjItYzlkMi00YjNkLWE4ZmEtYWU2ODg0ZGNhMjg4IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
  },
  {
    id: 5,
    title: "Dashboard de Funcionários (RH)",
    category: "Power BI",
    description: "Visão estratégica sobre o capital humano (People Analytics). Acompanhamento de indicadores fundamentais de RH como headcount, turnover, perfil demográfico dos colaboradores e custos com pessoal para otimização da gestão de pessoas.",
    tags: ["RH", "People Analytics", "Gestão", "Power BI"],
    iframeUrl: "https://app.powerbi.com/view?r=eyJrIjoiZWViYWE2OGItM2MxYi00YzE3LWFkODQtMTcxNTllOWRjZmJmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
  }
];

// --- COMPONENTES DA INTERFACE ---

const Header = () => (
  <header className="sticky top-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      
      {/* Esquerda: Logo */}
      <div className="flex-1">
        <a href="#home" className="inline-flex items-center gap-4 group transition-all duration-300">
          <div className="flex relative w-11 h-11 group-hover:scale-105 transition-transform duration-300">
            {/* "E" (Gráfico de Barras) */}
            <div className="absolute inset-0 flex pt-1 pb-1 pr-1">
              <div className="w-1.5 h-full bg-amber-500/80 rounded-full group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-all duration-300"></div>
              <div className="flex flex-col justify-between w-full h-full py-[3px] pl-1.5">
                <div className="h-[5px] w-[50%] bg-amber-500/80 rounded-r-full group-hover:w-[100%] group-hover:bg-amber-400 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-all duration-500 ease-out"></div>
                <div className="h-[5px] w-[30%] bg-amber-500/80 rounded-r-full group-hover:w-[70%] group-hover:bg-amber-400 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-all duration-500 ease-out delay-75"></div>
                <div className="h-[5px] w-[60%] bg-amber-500/80 rounded-r-full group-hover:w-[90%] group-hover:bg-amber-400 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-all duration-500 ease-out delay-150"></div>
              </div>
            </div>
            
            {/* "M" (Gráfico de Linhas) */}
            <svg 
              className="absolute inset-0 w-full h-full text-red-500/60 drop-shadow-[0_0_2px_rgba(239,68,68,0.2)] group-hover:text-red-400 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,1)] transition-all duration-500 ease-out z-10 scale-[0.6] group-hover:scale-100 origin-bottom-left" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.75" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M 2 19 C 3.5 10, 5.5 4, 7.5 4 C 9.5 4, 11 15, 12.5 15 C 14 15, 16.5 5, 18.5 5 C 20.5 5, 21.5 14, 23 18" className="group-hover:stroke-[1.2px] transition-all duration-500" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-100 flex items-baseline gap-1.5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300">
            <span className="text-amber-500 font-light">&lt;</span>
            <span>edu<span className="text-amber-500 font-medium group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all duration-300">marotta</span></span>
            <span className="text-amber-500 font-light">&gt;</span>
          </span>
        </a>
      </div>
      
      {/* Centro: Menu de Navegação */}
      <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm font-medium text-slate-300">
        <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
        <a href="#skills" className="hover:text-amber-400 transition-colors">Competências</a>
        <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfólio</a>
        <a href="#contact" className="hover:text-amber-400 transition-colors">Contatos</a>
      </nav>

      {/* Direita: Botão de Currículo */}
      <div className="hidden md:flex flex-1 justify-end">
        <a href="/seu-curriculo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all font-medium text-sm">
          <Download size={18} />
          Baixar Currículo
        </a>
      </div>

    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="pt-28 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
      
      {/* Coluna da Esquerda: Textos */}
      <div className="flex-1 space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <Terminal size={18} />
          <span>Olá, eu sou {personalInfo.name}</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight leading-[1.1]">
          <span className="block mb-3 text-3xl md:text-4xl text-slate-400 font-medium">Especialista em</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 drop-shadow-sm block pb-2">
            Data Engineering
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            & Analytics.
          </span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-2 border-amber-500/50 pl-5">
          {personalInfo.bio}
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#portfolio" className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:-translate-y-1 flex items-center gap-2">
            Ver Projetos <ChevronRight size={20} />
          </a>
          <a href="#contact" className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-xl font-medium transition-all border border-slate-700 hover:border-amber-500/50 hover:-translate-y-1">
            Falar Comigo
          </a>
        </div>
      </div>

      {/* Coluna da Direita: Foto de Perfil & Badges */}
      <div className="flex-1 relative w-full max-w-md lg:max-w-none mt-10 lg:mt-0">
        
        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-blue-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="absolute inset-0 flex items-center justify-center text-slate-500">
             <div className="text-center">
               <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-700 shadow-inner">
                 <Terminal size={40} className="text-slate-600" />
               </div>
               <span className="text-sm font-medium tracking-widest uppercase">Área para a sua Foto</span>
             </div>
          </div>
          
          {/* Coloque sua foto na pasta 'public' e descomente abaixo: */}
          {/* <img src="/sua-foto.jpg" alt="Eduardo Marotta" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" /> */}
        </div>

        <div className="absolute -bottom-8 -left-8 lg:-left-12 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-[bounce_4s_infinite]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
              <Database size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-200">Data Pipelines</p>
              <p className="text-xs text-slate-400">PySpark & SQL</p>
            </div>
          </div>
        </div>

        <div className="absolute -top-8 -right-8 lg:-right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-[bounce_5s_infinite_1s]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-200">Insights & KPIs</p>
              <p className="text-xs text-slate-400">Power BI & Python</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-slate-900/20 border-y border-slate-800/50 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-2">
        <Code className="text-amber-400" /> Ferramentas e Tecnologias
      </h2>
      <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
        A minha stack técnica e as ferramentas que utilizo no dia a dia para transformar dados brutos em inteligência de negócios.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-slate-900/80 border border-slate-700/50 rounded-full text-slate-300 font-medium hover:border-amber-500 hover:text-amber-400 hover:shadow-[0_0_10px_rgba(251,191,36,0.2)] transition-all cursor-default backdrop-blur-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors group backdrop-blur-sm flex flex-col">
    
    <div className="w-full h-[400px] md:h-[550px] lg:h-[650px] bg-slate-950 relative border-b border-slate-800">
      {project.iframeUrl ? (
        <iframe 
          title={project.title}
          className="w-full h-full border-0"
          src={project.iframeUrl} 
          allowFullScreen={true}
        ></iframe>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-slate-700">
          <LineChart size={64} className="mb-4 opacity-50" />
          <span className="text-lg font-medium">Dashboard / Código não incorporado</span>
        </div>
      )}
    </div>

    <div className="p-8">
      <div className="text-sm font-bold text-amber-500 tracking-wider uppercase mb-2">
        {project.category}
      </div>
      <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
      <p className="text-slate-400 text-base mb-6 max-w-4xl">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="text-sm px-3 py-1.5 bg-slate-950 rounded-md text-slate-300 border border-slate-800">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-slate-800/50">
        {project.iframeUrl && (
          <a href={project.iframeUrl} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors font-medium">
            <ExternalLink size={18} /> Abrir em Tela Cheia
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors ml-auto font-medium">
            <Github size={18} /> Ver Código no GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center gap-3">
        <Database className="text-amber-400" size={32} /> Projetos em Destaque
      </h2>
      <p className="text-slate-400 max-w-2xl text-lg">
        Explore alguns dos meus trabalhos recentes. Os dashboards abaixo são interativos, você pode aplicar filtros e explorar os dados diretamente por aqui.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-16">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="border-t border-slate-800 py-12 px-6 bg-slate-950/50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">Vamos conversar?</h3>
        <p className="text-slate-400">Aberto a novas oportunidades em dados.</p>
      </div>
      
      <div className="flex gap-4">
        <a href={`mailto:${personalInfo.email}`} className="p-3 bg-slate-900/80 border border-slate-700/50 rounded-full hover:bg-amber-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:border-amber-500 transition-all text-slate-400">
          <Mail size={24} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-900/80 border border-slate-700/50 rounded-full hover:bg-amber-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:border-amber-500 transition-all text-slate-400">
          <Linkedin size={24} />
        </a>
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-900/80 border border-slate-700/50 rounded-full hover:bg-amber-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:border-amber-500 transition-all text-slate-400">
          <Github size={24} />
        </a>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800/50 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 font-sans selection:bg-amber-500/30">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}