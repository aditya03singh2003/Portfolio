"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SkillCategory {
  title: string
  skills: {
    name: string
    icon: string
  }[]
}

export default function SkillSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Front-End",
      skills: [
        { name: "HTML", icon: "/icons/html.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "React.js", icon: "/icons/reactjs.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Tailwind", icon: "/icons/tailwind.svg" },
        { name: "Angular", icon: "/icons/angular-icon.svg" },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Express.js", icon: "/icons/express.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "REST API", icon: "/icons/database.svg" },
        { name: "Firebase", icon: "/icons/firebase.svg" },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "C++", icon: "/icons/cpp.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "C", icon: "/icons/c.svg" },
      ],
    },
    {
      title: "Tech & Tools",
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "GitHub", icon: "/placeholder.svg?height=40&width=40" },
        { name: "VS Code", icon: "/icons/vscode.svg" },
        { name: "NPM", icon: "/icons/npm.svg" },
        { name: "Postman", icon: "/icons/postman.svg" },
        { name: "Vite.js", icon: "/icons/vitejs.svg" },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-[#0c0414]">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="category-title"
                >
                  <span className="gradient-text">{category.title}</span>
                  <span className="text-purple-500 ml-2">()</span>
                </motion.h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${category.title}-${skill.name}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-[#1a0d33]/50 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 border border-purple-900/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} width={40} height={40} />
                      </div>
                      <div className="text-sm text-center text-white font-medium">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
