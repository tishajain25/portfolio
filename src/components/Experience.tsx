import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

/**
 * Experience Section - Enhanced timeline design
 */
const Experience = () => {
  const experiences = [
    {
      title: "Full Stack AI Developer",
      company: "TechCurators",
      location: "New Delhi, India",
      period: "Dec 2024 - Present",
      description: "Building AI-powered web applications, implementing agentic workflows with LangChain and OpenAI, and developing scalable backend systems on AWS.",
      highlights: [
        "Led development of AI-driven SEO platform",
        "Implemented multi-agent AI workflows",
        "Built production APIs serving 10K+ requests/day",
      ],
      technologies: ["Next.js", "Python", "OpenAI", "AWS", "LangChain"],
      current: true
    },
    {
      title: "Web & App Developer Intern",
      company: "IIT Patna",
      location: "Patna, India",
      period: "Jun - Aug 2024",
      description: "Developed web and mobile applications for academic research projects, working closely with professors and researchers.",
      highlights: [
        "Built research data visualization dashboard",
        "Developed cross-platform mobile app",
        "Collaborated with PhD researchers on ML projects",
      ],
      technologies: ["React", "Node.js", "MongoDB", "React Native"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Work <span className="text-teal-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-3xl overflow-hidden ${exp.current
                ? 'bg-gradient-to-br from-teal-500/10 via-gray-800/50 to-gray-800/30 border border-teal-500/30'
                : 'bg-gray-800/30 border border-gray-700/30'
                }`}
            >
              {/* Current badge */}
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-teal-500/20 text-teal-400 text-xs font-bold uppercase rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                    Current
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${exp.current ? 'bg-teal-500/20' : 'bg-gray-700/50'}`}>
                    <Briefcase className={`w-6 h-6 ${exp.current ? 'text-teal-400' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-teal-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <ul className="space-y-4 mb-6">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base group/item">
                      <div className="flex-shrink-0 w-5 h-6 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-teal-500 border-b-[4px] border-b-transparent group-hover/item:scale-125 transition-transform duration-300" />
                      </div>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-lg border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
