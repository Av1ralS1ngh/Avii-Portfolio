import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <div className="section-subtitle">Get to know more about my journey</div>
        </div>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <h2>Hello, I'm Aviral Singh 👋</h2>
              <p>
                I'm a passionate Blockchain Developer and Web3 Innovator currently pursuing my B.Tech in 
                Metallurgy & Materials Engineering at the prestigious Indian Institute of Technology, Roorkee.
              </p>
              <p>
                My journey in the blockchain space has been marked by consistent wins at major hackathons 
                and a deep commitment to building innovative DeFi solutions. I specialize in smart contract 
                development, cross-chain protocols, and creating user-friendly Web3 applications.
              </p>
              <p>
                With expertise in Solidity, Rust, and modern web technologies, I bridge the gap between 
                complex blockchain infrastructure and intuitive user experiences. My work ranges from 
                DeFi protocols to NFT gaming platforms and everything in between.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Hackathon Wins</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Programming Languages</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Coding</div>
              </div>
            </div>
          </div>
          
          <div className="education-section">
            <h3>🎓 Education</h3>
            <div className="education-card">
              <div className="education-info">
                <h4>Indian Institute of Technology, Roorkee</h4>
                <p className="degree">B.Tech in Metallurgy & Materials Engineering</p>
                <p className="education-detail">
                  One of India's premier technical institutions, IIT Roorkee has provided me with 
                  a strong foundation in analytical thinking and problem-solving skills that I apply 
                  to blockchain development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
