import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const titles = [
    'Frontend & AI Developer @TechCurators',
    'Former Intern @IIT Patna',
    'Former Intern @IBM',
    'Technical Content Writer',
  ];

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
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1 text-sm sm:text-base text-teal-700 dark:text-teal-300 font-medium tracking-wide min-h-[2rem]">
                {titles.map((title, idx) => (
                  <span key={title} className="">
                    {title}
                    {idx < titles.length - 1 && <span className="mx-2 text-gray-400 dark:text-gray-500">|</span>}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              Computer Science Engineer and AWS Certified Solutions Architect with expertise in AI integration and responsive web development. Combining technical excellence with creative problem-solving to build accessible, innovative solutions that bridge technology gaps and enhance user experiences.
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
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative h-80 sm:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="https://i.postimg.cc/g0gT8kmJ/latest-profile.jpg"
                  alt="Tisha Jain"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-teal-400/30 rounded-full blur-md"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400/30 rounded-full blur-md"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollTo('#about')}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
