import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '/vite.svg' },
    { id: 'about', label: 'About', icon: '/vite.svg' },
    { id: 'skills', label: 'Skills', icon: '/vite.svg' },
    { id: 'projects', label: 'Projects', icon: '/vite.svg' },
    { id: 'achievements', label: 'Achievements', icon: '/vite.svg' },
    { id: 'contact', label: 'Contact', icon: '/vite.svg' }
  ];

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav-menu') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="main-navigation">
        <div className="nav-container">
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          
          <div className="nav-brand">
            0xFaucetFailure
          </div>
          
          <div className="nav-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleSectionChange(item.id)}
              >
                {item.icon && <img src={item.icon} alt="" className="nav-icon" />}
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-nav-brand">Aviral Singh</div>
          <button 
            className="mobile-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>
        
        <div className="mobile-nav-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleSectionChange(item.id)}
            >
              {item.icon && <img src={item.icon} alt="" className="mobile-nav-icon" />}
              <span className="mobile-nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
