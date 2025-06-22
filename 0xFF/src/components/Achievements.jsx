import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner - AMHacks 2025",
      type: "Competition",
      description: "Latest victory at AMHacks 2025, continuing the winning streak with innovative blockchain solutions and technical excellence in competitive hackathon environment.",
      year: "2025",
      icon: "🏆"
    },
    {
      title: "Winner - DU Hacks 4.0 (2025)",
      type: "Competition",
      description: "First place winner at DU Hacks 4.0 with Velmora - a blockchain-based gaming platform integrating multiple ERC standards and cross-chain functionality.",
      year: "2025",
      icon: "🏆"
    },
    {
      title: "Coinbase Pool Prize - Agentic Ethereum",
      type: "Recognition",
      description: "Won Coinbase Pool Prize for Defi-Dojo, an AI-guided DeFi learning platform with real-time simulations and smart contract interactions.",
      year: "2024",
      icon: "🪙"
    },
    {
      title: "Winner - Bit by Bit Cognizance '25",
      type: "Competition",
      description: "First place at Cognizance IITR for Secure Invoice - an onchain invoicing system designed for freelancers and gig economy workers.",
      year: "2025",
      icon: "🥇"
    },
    {
      title: "Winner - Hathor Hackathon",
      type: "Competition",
      description: "Won Hathor Hackathon with SWIISH - a Telegram Mini App bringing DeFi directly into Telegram with intuitive UX and blockchain security.",
      year: "2024",
      icon: "🎯"
    },
    {
      title: "100xDevs Track Winner - SyntaxError 2024",
      type: "Track Winner",
      description: "Won the prestigious 100xDevs track at SyntaxError 2024, demonstrating excellence in full-stack blockchain development.",
      year: "2024",
      icon: "💯"
    },
    {
      title: "Multiple Placements - StackTooDeep v2.0",
      type: "Competition",
      description: "Achieved 2nd place in UniDAO track and 3rd place in Open Track, showcasing versatility across different blockchain domains.",
      year: "2024",
      icon: "🏅"
    },
    {
      title: "3rd Place - Blockathon Cognizance '24",
      type: "Competition",
      description: "Secured third place at Blockathon during Cognizance '24, demonstrating consistent performance in blockchain competitions.",
      year: "2024",
      icon: "🥉"
    },
    {
      title: "BuildGuild Batch 15 Selection",
      type: "Selection",
      description: "Selected as a builder in BuildGuild Batch 15, joining an elite community of blockchain developers and innovators.",
      year: "2024",
      icon: "🏗️"
    },
    {
      title: "Turbin3 Q2 2024 Cohort",
      type: "Selection",
      description: "Selected for the prestigious Turbin3 Q2 2024 Cohort, advancing Rust and Solana development skills with industry experts.",
      year: "2024",
      icon: "🚀"
    }
  ];

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Achievements</h1>
          <div className="section-subtitle">Milestones in my Web3 journey</div>
        </div>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <span className="achievement-icon">{achievement.icon}</span>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <div className="achievement-type">{achievement.type}</div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-summary">
          <div className="summary-item">
            <div className="summary-number">10+</div>
            <div className="summary-label">Hackathon Wins & Placements</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">5</div>
            <div className="summary-label">First Place Victories</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">2</div>
            <div className="summary-label">Elite Program Selections</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">6+</div>
            <div className="summary-label">Blockchain Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
