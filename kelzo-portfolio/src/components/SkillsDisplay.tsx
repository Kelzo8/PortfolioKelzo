"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Globe, 
  Cpu, 
  Zap,
  GitBranch,
  Shield,
  Smartphone,
  Server
} from "lucide-react";

interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "Languages", icon: <Code className="w-5 h-5" />, color: "#3776AB" },
  { name: "Java", category: "Languages", icon: <Code className="w-5 h-5" />, color: "#ED8B00" },
  { name: "C++", category: "Languages", icon: <Code className="w-5 h-5" />, color: "#00599C" },

  // Web Development
  { name: "Django", category: "Web Development", icon: <Server className="w-5 h-5" />, color: "#092E20" },
  { name: "Flask", category: "Web Development", icon: <Server className="w-5 h-5" />, color: "#000000" },
  { name: "Streamlit", category: "Web Development", icon: <Globe className="w-5 h-5" />, color: "#FF4B4B" },

  // Database
  { name: "SQL", category: "Database", icon: <Database className="w-5 h-5" />, color: "#336791" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", icon: <Cloud className="w-5 h-5" />, color: "#FF9900" },
  { name: "Docker", category: "Cloud & DevOps", icon: <Server className="w-5 h-5" />, color: "#2496ED" },
  { name: "Git", category: "Cloud & DevOps", icon: <GitBranch className="w-5 h-5" />, color: "#F05032" },
  { name: "GitHub", category: "Cloud & DevOps", icon: <GitBranch className="w-5 h-5" />, color: "#181717" },

  // AI & Machine Learning
  { name: "Machine Learning", category: "AI & ML", icon: <Cpu className="w-5 h-5" />, color: "#FF6B6B" },
];

const categories = ["Languages", "Web Development", "Database", "Cloud & DevOps", "AI & ML"];

export function SkillsDisplay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Skills Overview */}
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h3 className="text-2xl font-bold tracking-tight mb-4">Technical Expertise</h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          A comprehensive skill set spanning programming languages, web technologies, 
          cloud platforms, and emerging AI technologies.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <motion.div
              key={category}
              variants={itemVariants}
              className="glass rounded-xl p-5 border border-white/15 hover:border-white/25 transition-all duration-300"
            >
              <h4 className="text-base font-semibold mb-4 text-sky-400">
                {category}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg glass border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div 
                      className="p-2 rounded-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <div style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>


    </motion.div>
  );
} 