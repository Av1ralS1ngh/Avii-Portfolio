import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner of DU Hacks 4.0",
      description: "Built Velmora - a blockchain gaming platform with NFT mechanics",
      icon: "🏆",
      type: "Hackathon Win",
      year: "2024"
    },
    {
      title: "Winner of Bit by Bit Cognizance '25",
      description: "Created Secure Invoice - on-chain invoicing solution for freelancers",
      icon: "🥇",
      type: "Hackathon Win",
      year: "2025"
    },
    {
      title: "Winner of Hathor Hackathon",
      description: "Developed SWIISH - Telegram Mini App for DeFi access",
      icon: "🏆",
      type: "Hackathon Win",
      year: "2024"
    },
    {
      title: "Coinbase Prize Pool Winner at Agentic Ethereum",
      description: "Built Defi-Dojo - AI-guided DeFi learning platform",
      icon: "💰",
      type: "Prize Winner",
      year: "2024"
    },
    {
      title: "100xDevs Track Winner at SyntaxError 2024",
      description: "Excellence in development track competition",
      icon: "🥇",
      type: "Track Winner",
      year: "2024"
    },
    {
      title: "2nd Place in UniDAO at StackTooDeep v2.0",
      description: "Decentralized autonomous organization development challenge",
      icon: "🥈",
      type: "Runner-up",
      year: "2024"
    },
    {
      title: "3rd Place in Open Track at StackTooDeep v2.0",
      description: "Open innovation track for blockchain solutions",
      icon: "🥉",
      type: "Third Place",
      year: "2024"
    },
    {
      title: "3rd at Blockathon in Cognizance '24",
      description: "Blockchain development competition at IIT Roorkee",
      icon: "🥉",
      type: "Third Place",
      year: "2024"
    },
    {
      title: "Selected as Builder in BuildGuild Batch 15",
      description: "Exclusive program for promising blockchain developers",
      icon: "🔨",
      type: "Selection",
      year: "2024"
    },
    {
      title: "Selected for Turbin3 Q2 2024 Cohort",
      description: "Elite Web3 development cohort program",
      icon: "🚀",
      type: "Selection",
      year: "2024"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Hackathon Win": return "#4CAF50";
      case "Prize Winner": return "#FF9800";
      case "Track Winner": return "#2196F3";
      case "Runner-up": return "#9C27B0";
      case "Third Place": return "#FF5722";
      case "Selection": return "#607D8B";
      default: return "#646cff";
    }
  };

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Achievements</h1>
          <div className="section-subtitle">Recognition and awards in the Web3 space</div>
        </div>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <div 
                  className="achievement-type"
                  style={{ color: getTypeColor(achievement.type) }}
                >
                  {achievement.type}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-summary">
          <div className="summary-item">
            <div className="summary-number">7+</div>
            <div className="summary-label">Hackathon Wins</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">10+</div>
            <div className="summary-label">Total Achievements</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">2+</div>
            <div className="summary-label">Elite Program Selections</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
