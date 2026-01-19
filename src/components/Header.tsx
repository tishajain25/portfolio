import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header - Fixed Navigation Bar with Active Section Tracking
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -70% 0px', // Detect as soon as it nears the header
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Ordered list of section IDs as they appear on the page
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'py-4 bg-gray-950/90 backdrop-blur-xl border-b border-white/5'
      : 'py-6 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="transition-transform hover:scale-105"
          >
            <img
              src="/DarkBgLogo.png"
              alt="Tisha Jain Logo"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-2 ${activeSection === item.id
                  ? 'text-teal-400 opacity-100'
                  : 'text-gray-400 hover:text-white opacity-60 hover:opacity-100'
                  }`}
              >
                {item.name}
                {/* Active Indicator Underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-500 transition-all duration-300 rounded-full ${activeSection === item.id ? 'w-full' : 'w-0'
                  }`} />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-gray-950 text-xs font-black uppercase tracking-widest rounded-xl transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 bg-gray-950/95 backdrop-blur-xl border-b border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="px-8 py-10 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left text-sm font-black uppercase tracking-[0.2em] transition-colors ${activeSection === item.id
                    ? 'text-teal-400'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-teal-500 text-gray-950 font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl"
              >
                View Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
