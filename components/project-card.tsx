"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    features: string[]
    image: string
    sourceCode?: string
    liveDemo?: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1a0d33]/50 backdrop-blur-sm rounded-xl border border-purple-900/30 overflow-hidden shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-purple-400">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-purple-400">Key Features</h4>
            <ul className="text-gray-300 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mt-6">
            {project.sourceCode && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#2a1a4a]/70 hover:bg-[#2a1a4a] text-white rounded-md transition-all duration-300"
              >
                <Github size={18} />
                <span>Source Code</span>
              </motion.a>
            )}

            {project.liveDemo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-md transition-all duration-300"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        <div className="relative h-64 md:h-auto overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
      </div>
    </motion.div>
  )
}
