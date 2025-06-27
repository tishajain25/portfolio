import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const titles = [
    'Frontend & AI Developer',
    'Computer Science Engineer',
    'Tech Innovator',
  ];

  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1200); // pause after typing full word
        }
      } else {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-teal-900/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Tisha Jain
              </h1>
              <div className="text-xl sm:text-2xl text-teal-600 dark:text-teal-400 font-medium min-h-[3rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              Enthusiastic Computer Science Engineer with a passion for AI, modern web development, and solving real-world problems. Skilled in blending design with logic to craft seamless, impactful user experiences. Strong communicator and team player with a hacker’s curiosity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('#projects')}
                className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>

              {/* Clean, minimal hover effect for Get In Touch */}
              <button
                onClick={() => scrollTo('#contact')}
                className="px-8 py-4 border-2 border-teal-600 text-teal-600 dark:text-teal-400 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:border-teal-400 hover:text-teal-400 hover:bg-teal-500/10 dark:hover:bg-teal-400/10 shadow-none"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">9.1</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Internships</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="https://i.postimg.cc/g0gT8kmJ/latest-profile.jpg"
                  alt="Tisha Jain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollTo('#about')}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 text-teal-600 dark:text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
