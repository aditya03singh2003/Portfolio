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
      whileHover={{
        y: -10,
        boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
        borderColor: "rgba(147, 51, 234, 0.5)",
      }}
      className="bg-[#1a1a2e]/50 p-6 rounded-xl border border-purple-900/50 h-full transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="mb-4 p-3 rounded-full bg-purple-500/20"
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            backgroundColor: "rgba(168, 85, 247, 0.3)",
          }}
          transition={{
            scale: { type: "spring", stiffness: 400, damping: 10 },
            rotate: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {achievement.icon}
        </motion.div>
        <motion.h3
          className="text-xl font-bold mb-3 text-white"
          whileHover={{
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {achievement.title}
        </motion.h3>
        <p className="text-gray-300">{achievement.description}</p>
      </div>
    </motion.div>
  )
}
