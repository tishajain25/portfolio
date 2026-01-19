import { motion } from 'framer-motion';

/**
 * About/Education Section - Polished and Direct
 */
const About = () => {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "University of Petroleum and Energy Studies",
      period: "2021 - 2025",
      score: "CGPA: 9.1"
    },
    {
      degree: "Class XII CBSE",
      institution: "Higher Secondary Education",
      period: "2021",
      score: "96%"
    },
    {
      degree: "Class X CBSE",
      institution: "Secondary Education",
      period: "2019",
      score: "94.6%"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background Accent */}
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-teal-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-teal-500 rounded-full" />
                My Story
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I am a <span className="text-teal-400 font-semibold">Computer Science Engineer</span> who enjoys the process of building clean, functional software. I like taking complex problems and breaking them down into <span className="text-teal-400 font-semibold">scalable solutions</span> that actually work in the real world.
                </p>
                <p>
                  Beyond coding, I have a strong interest in <span className="text-teal-400 font-semibold">technical writing and public speaking</span>. I find that exploring these avenues helps me sharpen my own understanding and stay connected with new ideas in the tech space.
                </p>
                <p>
                  Being <span className="text-teal-400 font-semibold">AWS Certified</span> gives me a solid foundation to look beyond just the frontend—ensuring that the systems I build are structured for efficiency, security, and future growth.
                </p>
                <p className="text-gray-400 italic border-l-2 border-teal-500/30 pl-4 mt-8 text-sm sm:text-base">
                  "I believe technology is most effective when it is built with purpose, simplicity, and a long-term vision."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-teal-500 rounded-full" />
              Education
            </h3>
            {education.map((edu, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border bg-gray-800/30 border-gray-700/30 hover:border-teal-500/30 transition-all group"
              >
                <div className="mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors tracking-tight">{edu.degree}</h4>
                </div>
                <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-black text-teal-400">{edu.score}</span>
                  <span className="text-gray-500 text-sm font-medium">{edu.period}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
