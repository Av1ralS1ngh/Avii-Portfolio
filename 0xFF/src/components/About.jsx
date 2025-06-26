import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <div className="section-subtitle">Passionate about building the future of Web3</div>
        </div>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <h2>Hello! I'm Aviral Singh</h2>
              <p>
                I'm a B.Tech student at IIT Roorkee, 
                but my true passion lies in the revolutionary world of blockchain and Web3 technology. 
                What started as curiosity about decentralized systems has evolved into a deep expertise 
                in building innovative DeFi protocols, smart contracts, and blockchain applications.
              </p>
              <p>
                My journey in Web3 began with learning the fundamentals of blockchain technology through Grokking Bitcoin and our college club BlocSoc IITR, where I first discovered the transformative potential of decentralized systems. From understanding basic Ethereum concepts and Solidity programming, I quickly expanded to mastering advanced topics like cross-chain protocols, yield farming mechanisms, and decentralized governance systems. I've had the privilege of working on cutting-edge projects that push the boundaries of what's possible in DeFi.
              </p>
              <p>
                When I'm not coding smart contracts or designing tokenomics, you'll find me exploring 
                the latest developments in the blockchain space, contributing to open-source projects, 
                or sharing knowledge with the amazing Web3 community.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Hackathons</div>
              </div>
            </div>
          </div>
          
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-card">
              <div className="education-info">
                <h4>Indian Institute of Technology, Roorkee</h4>
                <div className="degree">B.Tech in Metallurgy & Materials Engineering</div>
                <div className="education-detail">
                  Currently pursuing my undergraduate degree while actively building in the Web3 space. 
                  My engineering background provides a unique perspective on problem-solving and 
                  systematic thinking that I apply to blockchain development.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
