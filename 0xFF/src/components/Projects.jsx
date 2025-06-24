import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      id: 'velmora',
      title: "Velmora",
      category: "Blockchain Gaming Platform",
      description: "A next-generation blockchain gaming ecosystem that seamlessly integrates multiple ERC standards with cross-chain functionality. Features advanced smart contract architecture enabling secure, scalable gaming experiences with true digital asset ownership.",
      technologies: ["Solidity", "React", "Web3.js", "IPFS"],
      links: {
        github: "https://github.com/Av1ralS1ngh/Velmora",
        demo: "https://vimeo.com/1059494943/68338b1ab5"
      }
    },
    {
      id: 'defi-dojo',
      title: "DeFi-Dojo",
      category: "AI-Powered DeFi Platform",
      description: "Revolutionary AI-guided DeFi learning platform featuring real-time market simulations and interactive smart contract tutorials. Winner of the prestigious Coinbase Pool Prize at Agentic Ethereum hackathon.",
      technologies: ["AI/ML", "Solidity", "React", "Python"],
      links: {
        github: "https://github.com/arnavkirti/DeFi-Dojo",
        demo: "https://vimeo.com/1054981792?share=copy"
      }
    },
    {
      id: 'secure-invoice',
      title: "Secure Invoice",
      category: "Decentralized Finance Tool",
      description: "Enterprise-grade decentralized invoicing system built specifically for freelancers and gig economy workers. Provides transparent, automated payment solutions with dispute resolution mechanisms on the blockchain.",
      technologies: ["Solidity", "Next.js", "Ethers.js", "IPFS"],
      links: {
        github: "https://github.com/arsh0429/Bit-by-Bit",
        demo: "https://vimeo.com/1059230800?share=copy"
      }
    },
    {
      id: 'swiish',
      title: "SWIISH",
      category: "Telegram DeFi Integration",
      description: "Groundbreaking Telegram Mini App that brings decentralized finance directly into messaging platforms. Features intuitive UX design with enterprise-level blockchain security for seamless crypto trading.",
      technologies: ["Telegram Bot API", "Solidity", "Node.js", "Web3"],
      links: {
        github: "https://github.com/amsorrytola/SWIISH",
        demo: "https://vimeo.com/1089609955/f3048fb5af?ts=15827&share=copy"
      }
    }
  ];

  const renderProjectCard = (project) => (
    <article key={project.id} className="project-card" aria-labelledby={`project-${project.id}-title`}>
      <div className="project-content">
        <header className="project-header">
          <h3 id={`project-${project.id}-title`} className="project-title">
            {project.title}
          </h3>
        </header>
        
        <div className="project-category" aria-label="Project category">
          {project.category}
        </div>
        
        <p className="project-description">
          {project.description}
        </p>
        
        <div className="project-technologies" aria-label="Technologies used">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        
        <nav className="project-actions" aria-label="Project links">
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link project-link--code"
            aria-label={`View ${project.title} source code`}
          >
            <span>Source Code</span>
          </a>
          <a 
            href={project.links.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link project-link--demo"
            aria-label={`Watch ${project.title} demo video`}
          >
            <span>Video Demo</span>
          </a>
        </nav>
      </div>
    </article>
  );

  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-header">
          <h1 id="projects-title" className="section-title">
            Featured Projects
          </h1>
          <p className="section-subtitle">
            Innovative Web3 solutions driving the future of decentralized technology
          </p>
        </header>
        
        <div className="projects-grid" role="grid" aria-label="Featured projects grid">
          {featuredProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
