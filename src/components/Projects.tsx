import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  priority: number;  // Replacing 'featured' with priority ranking
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
      title: "Disease Tagging using ECG & Fundus Imaging",
      category: "AI/Healthcare",
      priority: 1,
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
      title: "SignBridge",
      category: "AI/Accessibility",
      priority: 1,  // Higher priority instead of 'featured'
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
      priority: 1,
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
      image: "/NexaTalk_Thumbnail.webp",
      demoUrl: "not-available",
      githubUrl: "#"
    },
    {
      title: "TOSS Platform",
      category: "Frontend/AI",
      priority: 2,
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
      image: "/TOSS_Thumbnail.png",
      demoUrl: "https://tosshq.com/",
      githubUrl: "#"
    },
    {
      title: "Rabbitt Learning Platform",
      category: "Full-Stack",
      priority: 2,
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
      image: "RabbittLearning_Thumbnail.png",
      demoUrl: "https://learning.rabbitt.ai/",
      githubUrl: "#"
    },
    {
      title: "Eunoia",
      category: "Frontend",
      priority: 2,
      description: "Luxury fragrance house inspired by the Greek word 'Eunoia'-beautiful thinking. Discover your signature scent through elegant, AI-powered experiences.",
      longDescription: "Eunoia is a luxury fragrance brand rooted in the belief that scent is a quiet storyteller. Each perfume is crafted with grace and intention, designed to be elegant yet effortless, and to become your signature. The immersive shopping experience features bestsellers like Amber Sunset, Citrus Bloom, and Deep Musk, and includes an AI-powered quiz to help you find the scent that reflects your personality. The upcoming Pen Perfume introduces a new ritual-portable, refillable, and personalized by AI.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Hydrogen"
      ],
      features: [
        "Signature scents: Amber Sunset, Citrus Bloom, Deep Musk",
        "AI-powered scent quiz for personalized recommendations",
        "Elegant, minimal design and immersive shopping experience",
        "Pen Perfume: portable, refillable, and crafted by AI (coming soon)",
        "Story-driven product pages and brand narrative"
      ],
      impact: "Elevates online perfume shopping by blending technology and artistry, helping users discover and wear their unique signature scent.",
      image: "/Eunoia_Thumbnail.png",
      demoUrl: "http://eunoianyc.com/",
      githubUrl: "#"
    }
  ];

  const categories = ['All', 'AI/Accessibility', 'Full-Stack', 'AI/Healthcare', 'Frontend/AI', 'Frontend'];

  // Filter by category, then sort by priority and demo availability
  const filteredProjects = selectedCategory === 'All' 
    ? [...projects] 
    : [...projects].filter(project => project.category === selectedCategory);
    
  // Sort projects: live demos first, then by priority
  filteredProjects.sort((a, b) => {
    // First prioritize live demos
    if (a.demoUrl !== "not-available" && b.demoUrl === "not-available") return -1;
    if (a.demoUrl === "not-available" && b.demoUrl !== "not-available") return 1;
    
    // Then prioritize by priority ranking (lower number = higher priority)
    return a.priority - b.priority;
  });

  // Get top projects for highlighting (priority 1)
  const topProjects = projects.filter(project => project.priority === 1);

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
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

        {/* Showcase Projects - New Visual Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {filteredProjects.map((project, index) => {
            // Enhanced card style for first three projects when viewing 'All'
            const isTopProject = selectedCategory === 'All' && index < 3;
            
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full`}
              >
                {/* Project Image with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Live Demo Badge - only show if available */}
                  {project.demoUrl !== "not-available" && (
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
                        Live Demo
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-6">
                    <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                      💡 {project.impact}
                    </p>
                  </div>

                  {/* Spacer to push buttons to bottom */}
                  <div className="flex-1"></div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 h-10 mt-2">
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
                
                {/* Category Tag */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm font-medium rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.demoUrl !== "not-available" && (
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm font-medium rounded-full">
                      Live Demo Available
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
    </motion.section>
  );
};

export default Projects;