import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-text">Aviral Singh</span>
        </div>
        <div className="nav-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
