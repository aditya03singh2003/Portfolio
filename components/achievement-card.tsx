"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AchievementCardProps {
  achievement: {
    title: string
    description: string
    icon: ReactNode
  }
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-[#1a1a2e]/50 p-6 rounded-xl border border-purple-900/50 h-full glow-effect"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-purple-500/20">{achievement.icon}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
        <p className="text-gray-300">{achievement.description}</p>
      </div>
    </motion.div>
  )
}
