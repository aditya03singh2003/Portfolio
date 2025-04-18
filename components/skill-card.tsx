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
      className="bg-[#0f0a19] rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 border border-purple-900/20 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
    >
      <div className="w-12 h-12 mb-2 flex items-center justify-center">
        {typeof icon === "string" ? (
          <Image src={icon || "/placeholder.svg"} alt={name} width={40} height={40} />
        ) : (
          <div className="text-purple-400">{icon}</div>
        )}
      </div>
      <div className="text-sm text-center text-white font-medium">{name}</div>
    </motion.div>
  )
}
