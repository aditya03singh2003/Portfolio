"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface SkillHexagonProps {
  name: string
  icon: React.ReactNode
  proficiency: number
  delay?: number
}

export default function SkillHexagon({ name, icon, proficiency, delay = 0 }: SkillHexagonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className={`hexagon w-24 h-24 flex items-center justify-center ${
          isHovered ? "bg-gradient-to-br from-purple-600 to-violet-600" : "bg-purple-900/40"
        } glow-effect`}
      >
        <div className="text-3xl">{icon}</div>
      </motion.div>
      <div className="mt-3 text-center">
        <h3 className="font-medium text-white">{name}</h3>
        <div className="mt-1 w-full bg-gray-700 h-1 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-purple-500 to-violet-500"
          />
        </div>
        <span className="text-xs text-gray-400">{proficiency}%</span>
      </div>
    </motion.div>
  )
}
