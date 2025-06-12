import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Velmora",
      subtitle: "Winner - DuHacks 4.0",
      description: "Blockchain game using ERC-20, ERC-721, and Soulbound Tokens with Chainlink VRF for randomness and LayerZero for cross-chain transfers. Features dynamic NFT mechanics with burning/swapping.",
      technologies: ["Solidity", "Chainlink VRF", "LayerZero", "ERC-721", "React"],
      github: "https://github.com/Av1ralS1ngh/Velmora",
      certificate: "https://drive.google.com/file/d/1rvklhPaxVAcLPrFFCFyYYKPelvq67fUi/view?usp=drive_link",
      icon: "🎮",
      status: "🏆 Winner"
    },
    {
      title: "Defi-Dojo",
      subtitle: "Coinbase Pool Prize - Agentic Ethereum",
      description: "AI-guided DeFi learning platform with real-time asset simulations. Used The Graph, Coinbase Agent Kit, and smart contract integrations to create an interactive learning experience.",
      technologies: ["The Graph", "Coinbase Agent Kit", "Solidity", "AI/ML", "React"],
      github: "https://github.com/arnavkirti/DeFi-Dojo",
      certificate: "https://drive.google.com/file/d/1SaC4fjWZcf6IlhQvPW-siv8YH5CcOn0-/view?usp=drive_link",
      icon: "🧠",
      status: "🏆 Prize Winner"
    },
    {
      title: "Secure Invoice",
      subtitle: "Winner - Bit by Bit, Cognizance IITR",
      description: "On-chain invoicing & payments app designed for freelancers, tutors, mentors, and gig workers. Focused on usability and real-time blockchain settlement.",
      technologies: ["Solidity", "Web3.js", "React", "Smart Contracts", "Payment Systems"],
      github: "https://github.com/arsh0429/Bit-by-Bit",
      certificate: "https://drive.google.com/file/d/1n7fGf9ZIxJTB1TtgnlMJNTUuEuRbO-pi/view?usp=drive_link",
      icon: "💳",
      status: "🏆 Winner"
    },
    {
      title: "SWIISH",
      subtitle: "Winner - Hathor Hackathon",
      description: "Telegram Mini App for DeFi access inside Telegram. Features token swaps, yield farming, and governance features using Hathor's nano contracts and wallet system.",
      technologies: ["Hathor", "Telegram Bot API", "DeFi", "Nano Contracts", "TypeScript"],
      github: "https://github.com/arsh0429/Bit-by-Bit",
      icon: "🚀",
      status: "🏆 Winner"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Featured Projects</h1>
          <div className="section-subtitle">Building the future of Web3</div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-status">{project.status}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <span>💻</span> GitHub
                </a>
                {project.certificate && (
                  <a href={project.certificate} target="_blank" rel="noopener noreferrer" className="project-link certificate">
                    <span>🏅</span> Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
