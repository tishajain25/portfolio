import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Brain, Palette, Wrench } from 'lucide-react';

/**
 * Technical Skills Section - Updated with user's core tech stack
 */
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend & Systems",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Python", "Java", "C", "Express"]
    },
    {
      title: "Database & Storage",
      icon: Code2,
      color: "from-orange-500 to-amber-500",
      skills: ["MongoDB", "MySQL", "SQL", "Firebase"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-violet-500",
      skills: ["AWS", "Azure", "Git", "Linux"]
    },
    {
      title: "AI & Mobile Development",
      icon: Brain,
      color: "from-teal-500 to-emerald-500",
      skills: ["Agentic AI", "TensorFlow", "Flutter", "Android"]
    },
    {
      title: "Tools & Methods",
      icon: Wrench,
      color: "from-pink-500 to-rose-500",
      skills: ["Figma", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Visual Depth Accents */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Technical <span className="text-teal-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/40 border border-gray-800/60 rounded-[2rem] p-8 hover:border-teal-500/30 hover:shadow-[0_0_40px_rgba(45,212,191,0.05)] transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 text-xs sm:text-sm font-semibold rounded-xl border border-gray-700/30 hover:border-teal-500/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
