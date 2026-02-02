import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // Show navbar when scrolling up or at top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const leftNavLinks = [
    { name: 'Home', href: 'https://en.chessbase.com', external: true },
    { name: 'Shop', href: 'https://shop.chessbase.com?Ref=RF370-B93LK2YQWA', external: true },
  ];

  const rightNavLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Opening Report', href: '#opening-report' },
    { name: 'Consult AI', href: '#consult-ai' },
    { name: 'Compare', href: '#comparison' },
  ];

  const navbarClasses = [
    'navbar',
    isScrolled ? 'navbar--scrolled' : '',
    (isVisible || isMobileMenuOpen) ? 'navbar--visible' : 'navbar--hidden'
  ].filter(Boolean).join(' ');

  return (
    <>
      {/* Main Navigation */}
      <nav className={navbarClasses}>
        <div className="navbar__container">
          <div className="navbar__inner">
            {/* Logo and Left Nav */}
            <div className="navbar__left">
              {/* Logo - Left */}
              <a
                href="https://en.chessbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__logo"
              >
                <img
                  src="/assets/CBLogoShadow.svg"
                  alt="ChessBase"
                  className="navbar__logo-img"
                />
              </a>

              {/* Left Navigation Links */}
              <div className="navbar__links-left">
                {leftNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="navbar__link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Nav Links */}
            <div className="navbar__links-right">
              {rightNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="navbar__link"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button - Right Edge */}
            <div className="navbar__cta-wrapper">
              <a
                href="https://shop.chessbase.com/de/products/chessbase_26_mega_package?Ref=RF370-B93LK2YQWA"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__cta"
              >
                Buy Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="navbar__mobile-toggle">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="navbar__mobile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="navbar__mobile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="navbar__mobile-menu">
            <div className="navbar__mobile-menu-inner">
              {[...leftNavLinks, ...rightNavLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="navbar__mobile-link"
                >
                  {link.name}
                </a>
              ))}
              <div className="navbar__mobile-cta-wrapper">
                <a
                  href="https://shop.chessbase.com/de/products/chessbase_26_mega_package?Ref=RF370-B93LK2YQWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="navbar__mobile-cta"
                >
                  Buy Now – €349.90
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
