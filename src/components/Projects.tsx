
import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  featured: boolean;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  impact: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "SignBridge",
      category: "AI/Accessibility",
      featured: true,
      description: "Bidirectional Sign Language & Speech Interpreter using AI for real-time accessibility solutions for the deaf and hearing-impaired community.",
      longDescription: "A real-time AI system for two-way translation between sign language and speech/text. Built using CNN with TensorFlow Lite for sign recognition and Web Speech API for speech processing, this project aims to bridge communication gaps for the deaf and hearing-impaired community.",
      technologies: ["React", "Python", "TensorFlow Lite", "Web Speech API", "Firestore", "CNN", "Postimg", "Vercel"],
      features: [
        "Real-time sign language recognition using CNN",
        "Bidirectional translation (sign to speech, speech to sign)",
        "Web-based interface for accessibility",
        "Firestore integration for user data management",
        "Cross-platform compatibility",
        "Deployed on Vercel for global accessibility"
      ],
      impact: "Enhancing accessibility for the deaf and hearing-impaired community",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      demoUrl: "not-available",
      githubUrl: "#"
    },
    {
      title: "NexaTalk",
      category: "Full-Stack",
      featured: true,
      description: "Real-time chat application with secure, scalable database backend, featuring robust authentication, encryption, and persistent messaging.",
      longDescription: "A real-time chat application built with a secure, scalable database backend. This project integrates robust authentication, encryption for privacy, and enables persistent messaging across devices for reliable communication.",
      technologies: ["Node.js", "ReactJS", "MongoDB", "Socket.IO", "JWT", "Express", "Encryption"],
      features: [
        "Real-time messaging with Socket.IO",
        "Secure user authentication and authorization",
        "End-to-end message encryption for privacy",
        "Cross-device chat persistence with MongoDB",
        "Responsive design for all devices",
        "Online/offline status indicators and typing notifications"
      ],
      impact: "Secure and reliable communication platform for seamless conversations across devices",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      demoUrl: "not-available",
      githubUrl: "#"
    },
    {
      title: "Disease Tagging using ECG & Fundus Imaging",
      category: "AI/Healthcare",
      featured: true,
      description: "AI-based system integrating ECG and fundus image data for improved cardiovascular disease detection and early diagnosis.",
      longDescription: "An AI-based system that integrates ECG and fundus imaging data to provide more accurate cardiovascular disease detection. This multimodal approach enables earlier and more accurate diagnosis through advanced signal processing and image analysis techniques.",
      technologies: ["Python", "Machine Learning", "EMD Algorithm", "Medical Imaging", "AI/ML", "Signal Processing"],
      features: [
        "Multimodal approach combining ECG and fundus imaging",
        "EMD (Empirical Mode Decomposition) algorithm for signal analysis",
        "High accuracy disease classification and tagging",
        "Advanced medical image processing techniques",
        "Support for early and accurate diagnosis",
        "Cardiologist-validated disease markers"
      ],
      impact: "Earlier detection of cardiovascular diseases leading to improved patient outcomes and treatment options",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      demoUrl: "not-available",
      githubUrl: "#"
    },
    {
      title: "TOSS Platform",
      category: "Frontend/AI",
      featured: false,
      description: "AI-driven SEO and branding platform integrating dynamic UI components based on five natural elements with advanced AI capabilities.",
      longDescription: "An AI-driven SEO and branding platform I led the frontend development for at TechCurators. This project integrates dynamic UI components based on five natural elements and leverages advanced AI capabilities using ChatGPT-4o and Relevance AI for automated analysis.",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Figma", "ChatGPT-4o", "Relevance AI", "Lighthouse API"],
      features: [
        "AI-powered SEO analysis and recommendations",
        "Automated Lighthouse report analysis",
        "Data extraction agents for web content",
        "Dynamic UI components based on natural elements",
        "Custom design system implementation",
        "Real-time performance monitoring"
      ],
      impact: "Enhanced SEO optimization and branding capabilities for businesses through AI-powered analysis",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      demoUrl: "https://tosshq.com/",
      githubUrl: "#"
    },
    {
      title: "Rabbitt Learning Platform",
      category: "Full-Stack",
      featured: false,
      description: "Educational platform focused on AI and technology learning with interactive courses and community-driven content.",
      longDescription: "A comprehensive educational platform focused on AI and technology learning. Features interactive courses, community-driven content, and personalized learning paths for technology enthusiasts and professionals.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Auth0", "AWS"],
      features: [
        "Interactive AI learning courses",
        "Community discussion forums",
        "Progress tracking and learning paths",
        "Resource library and documentation",
        "Responsive design for mobile learning",
        "Personalized course recommendations"
      ],
      impact: "Democratizing AI education and making technology learning accessible to all skill levels",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      demoUrl: "https://learning.rabbitt.ai/",
      githubUrl: "#"
    },
    {
      title: "Eunoia NYC",
      category: "Frontend",
      featured: false,
      description: "Elegant e-commerce platform for a premium New York perfume brand with immersive shopping experience and sleek design.",
      longDescription: "A sophisticated e-commerce platform for a premium New York perfume brand. Features an immersive shopping experience with sleek design, responsive product galleries, and seamless checkout process for luxury fragrances.",
      technologies: ["React", "Commerce.js", "Stripe", "Styled Components", "Framer Motion", "Contentful CMS"],
      features: [
        "Immersive perfume product galleries",
        "Seamless checkout experience",
        "Animation-rich user interface",
        "Responsive design for all devices",
        "Integration with headless CMS",
        "Advanced filtering and search functionality"
      ],
      impact: "Elevating online shopping experience for perfume enthusiasts with intuitive design and smooth interactions",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=300&fit=crop",
      demoUrl: "http://eunoianyc.com/",
      githubUrl: "#"
    }
  ];

  const categories = ['All', 'AI/Accessibility', 'Full-Stack', 'AI/Healthcare', 'Frontend/AI', 'Frontend'];

  // First filter by category, then sort to show live projects first
  const filteredProjects = selectedCategory === 'All' 
    ? [...projects] 
    : [...projects].filter(project => project.category === selectedCategory);
    
  // Sort to show projects with live demos first, then featured projects
  filteredProjects.sort((a, b) => {
    // First prioritize live demos
    if (a.demoUrl !== "not-available" && b.demoUrl === "not-available") return -1;
    if (a.demoUrl === "not-available" && b.demoUrl !== "not-available") return 1;
    
    // Then prioritize featured projects
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    
    return 0;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining AI, accessibility, and modern web technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2 sm:px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1 xl:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.featured && (
                    <span className="px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                    💡 {project.impact}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 h-10">
                  {project.demoUrl === "not-available" ? (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 h-full flex items-center justify-center px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200">
                      View Details
                    </button>
                  ) : (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 h-full flex items-center justify-center px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200">
                      View Live
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="h-full flex items-center justify-center px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {[
            { number: "7+", label: "Projects Completed", icon: "🚀" },
            { number: "3", label: "AI Integrations", icon: "🤖" },
            { number: "2", label: "Open Source", icon: "💻" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto shadow-2xl">
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-8">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                {/* Category & Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-medium rounded-full">
                      Featured Project
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    About the Project
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Impact */}
                <div className="mb-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Impact
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProject.impact}
                  </p>
                </div>
                
                {/* Footer Actions */}
                <div className="flex flex-wrap gap-4 mt-8">
                  {selectedProject.demoUrl !== "not-available" && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Live Site
                    </a>
                  )}
                  {selectedProject.githubUrl !== "#" && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200 inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
