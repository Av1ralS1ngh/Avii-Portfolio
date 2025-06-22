import { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      category: "Blockchain & Web3",
      icon: "⛓️",
      skills: [
        { name: "Solidity", percentage: 95 },
        { name: "Yul", percentage: 80 },
        { name: "Cairo", percentage: 75 },
        { name: "EVM Development", percentage: 90 },
        { name: "LayerZero Protocol", percentage: 85 },
        { name: "Chainlink VRF", percentage: 88 }
      ]
    },
    {
      category: "Languages & Frameworks",
      icon: "💻",
      skills: [
        { name: "TypeScript", percentage: 90 },
        { name: "Rust", percentage: 78 },
        { name: "Python", percentage: 85 },
        { name: "React", percentage: 92 },
        { name: "HTML/CSS", percentage: 90 },
        { name: "RestAPIs", percentage: 88 }
      ]
    },
    {
      category: "Development Tools",
      icon: "🔧",
      skills: [
        { name: "Foundry", percentage: 92 },
        { name: "Hardhat", percentage: 90 },
        { name: "The Graph Protocol", percentage: 82 },
        { name: "Web Sockets", percentage: 80 },
        { name: "Git/GitHub", percentage: 95 },
        { name: "Coinbase Agent Kit", percentage: 75 }
      ]
    },
    {
      category: "Blockchain Standards",
      icon: "📜",
      skills: [
        { name: "ERC-20 Tokens", percentage: 95 },
        { name: "ERC-721 NFTs", percentage: 92 },
        { name: "Soulbound Tokens", percentage: 85 },
        { name: "Dynamic NFTs", percentage: 88 },
        { name: "Cross-chain Protocols", percentage: 82 },
        { name: "Smart Contract Security", percentage: 90 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Skills & Expertise</h1>
          <div className="section-subtitle">Technologies I work with to build amazing experiences</div>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: animatedSkills ? `${skill.percentage}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
