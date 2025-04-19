"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { ReactNode } from "react"

interface SkillCardProps {
  name: string
  icon: ReactNode | string
  delay?: number
}

export default function SkillCard({ name, icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.05 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
        borderColor: "rgba(147, 51, 234, 0.5)",
        backgroundColor: "rgba(26, 13, 51, 0.8)",
      }}
      className="bg-[#0f0a19] rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 border border-purple-900/20 hover:border-purple-500/50 shadow-lg"
    >
      <motion.div
        className="w-12 h-12 mb-2 flex items-center justify-center"
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.8, type: "spring", stiffness: 100 },
        }}
      >
        {typeof icon === "string" ? (
          <Image src={icon || "/placeholder.svg"} alt={name} width={40} height={40} />
        ) : (
          <div className="text-purple-400">{icon}</div>
        )}
      </motion.div>
      <motion.div
        className="text-sm text-center text-white font-medium"
        whileHover={{
          scale: 1.05,
          color: "#d8b4fe",
        }}
      >
        {name}
      </motion.div>
    </motion.div>
  )
}
