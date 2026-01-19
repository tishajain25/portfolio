import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

/**
 * Footer - Enhanced with Navbar Brand Logo
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img
                src="/DarkBgLogo.png"
                alt="Tisha Jain Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with passion and precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/tishajain25' },
              { icon: Linkedin, href: 'https://linkedin.com/in/tisha-jain25' },
              { icon: Mail, href: 'mailto:jaintisha2530@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 border border-gray-800 hover:border-teal-500/50 hover:bg-gray-800 text-gray-400 hover:text-teal-400 rounded-2xl transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 hover:border-teal-500/50 text-gray-400 hover:text-white rounded-2xl transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
