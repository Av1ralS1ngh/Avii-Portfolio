import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      platform: "Email",
      value: "aviral02singh@gmail.com",
      link: "mailto:aviral02singh@gmail.com",
      icon: "📧",
      color: "#ea4335"
    },
    {
      platform: "Phone",
      value: "(+91) 8176072816",
      link: "tel:+918176072816",
      icon: "📱",
      color: "#4CAF50"
    },
    {
      platform: "GitHub",
      value: "Av1ralS1ngh",
      link: "https://github.com/Av1ralS1ngh",
      iconFile: "/icons8-github.svg",
      color: "#333"
    },
    {
      platform: "LinkedIn",
      value: "aviral-singh-b854a6342",
      link: "https://www.linkedin.com/in/aviral-singh-b854a6342",
      iconFile: "/icons8-linkedin.svg",
      color: "#0077b5"
    },
    {
      platform: "Twitter/X",
      value: "0xFaucetFailure",
      link: "https://x.com/0xFaucetFailure",
      iconFile: "/icons8-twitter.svg",
      color: "#1da1f2"
    },
    {
      platform: "Farcaster",
      value: "0xfaucetfailure",
      link: "https://warpcast.com/0xfaucetfailure",
      iconFile: "/file.svg",
      color: "#8b5cf6"
    },
    {
      platform: "Telegram",
      value: "Aviral02Singh",
      link: "https://t.me/Aviral02Singh",
      iconFile: "/icons8-telegram.svg",
      color: "#0088cc"
    },
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Get In Touch</h1>
          <div className="section-subtitle">Let's build something amazing together</div>
        </div>
        
        <div className="contact-content">
          <div className="contact-intro">
            <h2>Ready to collaborate?</h2>
            <p>
              I'm always open to discussing new opportunities, innovative projects, 
              and exciting collaborations in the Web3 space. Whether you're looking 
              for a blockchain developer, want to chat about DeFi, or just want to 
              connect with a fellow builder, I'd love to hear from you!
            </p>
            <div className="contact-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <span>Quick Response Time</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🌍</span>
                <span>Available Worldwide</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span>Open to New Ideas</span>
              </div>
            </div>
          </div>
          
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{ '--accent-color': contact.color }}
              >
                <div className="contact-icon">
                  {contact.iconFile ? (
                    <img src={contact.iconFile} alt={contact.platform} className="contact-icon-img" />
                  ) : (
                    contact.icon
                  )}
                </div>
                <div className="contact-info">
                  <div className="contact-platform">{contact.platform}</div>
                  <div className="contact-value">{contact.value}</div>
                </div>
                <div className="contact-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="contact-footer">
          <div className="footer-message">
            <h3>Let's build the future of Web3 together! 🌟</h3>
            <p>Currently based in India 🇮🇳 | Available for remote work globally 🌍</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
