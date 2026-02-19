import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
    title: string;
    category: string;
    description: string;
    longDescription: string;
    technologies: string[];
    impact: string;
    image: string;
    demoUrl?: string;
    githubUrl?: string;
}

/**
 * Projects Section
 */
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "Rabbitt Learning",
            category: "EdTech",
            description: "Interactive learning platform for K-12 students.",
            longDescription: "A gamified educational platform designed to make learning fun and engaging for students. It features interactive lessons and progress tracking.",
            technologies: ["Next.js", "MongoDB", "Stripe", "TailwindCSS"],
            impact: "Making education accessible and engaging for young learners.",
            image: "/RabbittLearning_Thumbnail.png",
            demoUrl: "https://learning.rabbitt.ai/",
            githubUrl: ""
        },
        {
            title: "IcyPluto",
            category: "Full-Stack / AI",
            description: "Advanced AI-driven automation and branding platform.",
            longDescription: "A high-performance platform focused on automating marketing workflows and brand intelligence using cutting-edge AI orchestration.",
            technologies: ["Next.js", "AI Orchestration", "Node.js", "TailwindCSS"],
            impact: "Enabling businesses to scale their digital presence through intelligent automation.",
            image: "/icypluto_bg.png",
            demoUrl: "https://icypluto.com/",
            githubUrl: ""
        },
        {
            title: "Eunoia",
            category: "Luxury E-commerce",
            description: "Luxury fragrance house inspired by the Greek word 'Eunoia'-beautiful thinking.",
            longDescription: "Discover your signature scent through elegant, AI-powered experiences. Eunoia blends technology and artistry to elevate the online perfume shopping experience.",
            technologies: ["React", "Next.js", "Tailwind CSS", "Hydrogen"],
            impact: "Elevates online perfume shopping by blending technology and artistry, helping users discover and wear their unique signature scent.",
            image: "/Eunoia_Thumbnail.png",
            demoUrl: "http://eunoianyc.com/",
            githubUrl: ""
        },
        {
            title: "TOSS Platform",
            category: "Frontend / AI",
            description: "AI-driven SEO & Branding platform with GPT-4o integration.",
            longDescription: "A platform using GPT-4o for automated brand audits with a unique design system focused on performance and aesthetics.",
            technologies: ["Next.js", "GPT-4o", "TailwindCSS", "Relevance AI"],
            impact: "Streamlining brand evolution for global enterprises.",
            image: "/TOSS_Thumbnail.png",
            demoUrl: "https://tosshq.com/",
            githubUrl: ""
        },
        {
            title: "Disease Tagging using ECG & Fundus Imaging",
            category: "AI / Healthcare",
            description: "Multimodal AI for ECG & Fundus imaging cardiovascular diagnosis.",
            longDescription: "An advanced research-grade AI model integrating ECG signals and retinal images for early cardiovascular disease detection.",
            technologies: ["Python", "PyTorch", "Medical Imaging", "Signal Processing"],
            impact: "Improving early diagnosis rates for critical heart conditions.",
            image: "/DiseaseTagging_Thumbnail.png",
            demoUrl: "",
            githubUrl: ""
        },
        {
            title: "SignBridge",
            category: "AI / Accessibility",
            description: "Real-time AI interpreter for Sign Language and Speech communication.",
            longDescription: "A bidirectional translation system bridging communication for the deaf community using CNN and Web Speech API.",
            technologies: ["React", "TensorFlow Lite", "Web Speech API", "Firestore"],
            impact: "Enabled seamless communication for hearing-impaired users.",
            image: "/SignBridge_Thumbnail.png",
            demoUrl: "",
            githubUrl: ""
        }
    ];

    return (
        <section id="projects" className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        Featured <span className="text-teal-400">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)] transition-all"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-3 bg-teal-500 text-gray-950 rounded-full shelf-shadow hover:scale-110 transition-all"
                                            title="Visit Live Site"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 bg-gray-800 text-gray-400 text-xs font-medium rounded-lg border border-gray-700/50">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-900 border border-teal-500/20 rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                        >
                            <div className="relative h-56 sm:h-72">
                                <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-teal-500 text-white hover:text-gray-950 rounded-full transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-8 sm:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-black uppercase tracking-widest rounded-full border border-teal-500/20">
                                        {selectedProject.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">{selectedProject.title}</h3>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-sm font-black text-teal-500 uppercase tracking-widest mb-3">Overview</h4>
                                        <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.longDescription}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-black text-teal-500 uppercase tracking-widest mb-3">Impact</h4>
                                        <p className="text-gray-300 bg-gray-800/50 p-4 rounded-2xl border-l-4 border-teal-500 italic">
                                            "{selectedProject.impact}"
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-black text-teal-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech) => (
                                                <span key={tech} className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-semibold rounded-xl border border-gray-700/50">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                        {selectedProject.demoUrl && (
                                            <a
                                                href={selectedProject.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-teal-500 hover:bg-teal-400 text-gray-950 font-black rounded-2xl shadow-lg shadow-teal-500/20 transition-all uppercase tracking-wider"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                Launch Live App
                                            </a>
                                        )}
                                        {selectedProject.githubUrl && (
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white font-black rounded-2xl border border-gray-700 hover:border-teal-500/30 transition-all uppercase tracking-wider"
                                            >
                                                <Github className="w-5 h-5" />
                                                View Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
