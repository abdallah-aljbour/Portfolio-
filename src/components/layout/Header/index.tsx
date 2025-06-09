import { useState, useEffect } from "react";
import "./style.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".header__mobile-menu") &&
        !target.closest(".header__menu-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        {/* Logo/Brand */}
        <a
          href="#home"
          className="header__logo"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="header__logo-text">Abdallah</span>
          <span className="header__logo-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <a
                  href={item.href}
                  className="header__nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="header__cta">
          <a
            href="https://www.fiverr.com/abdallahjbour01"
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta-button"
          >
            Hire Me on Fiverr
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`header__menu-toggle ${
            isMobileMenuOpen ? "header__menu-toggle--active" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="header__menu-toggle-line"></span>
          <span className="header__menu-toggle-line"></span>
          <span className="header__menu-toggle-line"></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`header__mobile-menu ${
            isMobileMenuOpen ? "header__mobile-menu--open" : ""
          }`}
        >
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="header__mobile-nav-item">
                  <a
                    href={item.href}
                    className="header__mobile-nav-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="header__mobile-cta">
            <a
              href="https://www.fiverr.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-cta-button"
            >
              Hire Me on Fiverr
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
