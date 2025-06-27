
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/tisha-jain-a06323233',
      icon: '💼'
    },
    {
      name: 'Email',
      href: 'mailto:jaintisha2530@gmail.com',
      icon: '📧'
    },
    {
      name: 'Phone',
      href: 'tel:+918077872646',
      icon: '📱'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Tisha Jain</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Frontend & AI Developer passionate about creating accessible, innovative solutions 
              that bridge technology and social impact. Currently pursuing B.Tech CSE with 9.1 CGPA.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target={social.name !== 'Email' && social.name !== 'Phone' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Tisha Jain. All rights reserved.
            </div>
            
            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Built with</span>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-gray-800 rounded">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded">TypeScript</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <button
            onClick={() => scrollToSection('#home')}
            className="inline-flex items-center justify-center w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
