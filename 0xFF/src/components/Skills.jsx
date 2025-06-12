import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain Languages",
      icon: "⛓️",
      skills: [
        { name: "Solidity", level: 95, color: "#646cff" },
        { name: "Yul", level: 85, color: "#61dafb" },
        { name: "Rust", level: 80, color: "#ff6b6b" },
        { name: "Cairo", level: 75, color: "#4ecdc4" }
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "TypeScript", level: 90, color: "#3178c6" },
        { name: "Python", level: 85, color: "#3776ab" },
        { name: "JavaScript", level: 95, color: "#f7df1e" }
      ]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: [
        { name: "Foundry", level: 95, color: "#646cff" },
        { name: "Hardhat", level: 90, color: "#61dafb" },
        { name: "The Graph", level: 80, color: "#6f3ff7" },
        { name: "Chainlink VRF", level: 85, color: "#375bd2" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        { name: "React", level: 90, color: "#61dafb" },
        { name: "HTML/CSS", level: 95, color: "#e34c26" },
        { name: "REST APIs", level: 85, color: "#4caf50" },
        { name: "WebSockets", level: 80, color: "#ff9800" }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Technical Skills</h1>
          <div className="section-subtitle">Technologies I work with</div>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      ></div>
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
