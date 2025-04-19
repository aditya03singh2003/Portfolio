"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, FileText, ChevronDown, ChevronUp, Trophy, Code, Award } from "lucide-react"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import Loading from "@/components/loading"
import ParticleBackground from "@/components/particle-background"
import SkillSection from "@/components/skill-section"
import ProjectCard from "@/components/project-card"
import AchievementCard from "@/components/achievement-card"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ac1388f8-5f00-4908-900a-d2041e4850b4",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New message from portfolio website",
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Reset form
        setFormData({ name: "", email: "", message: "" })
        setFormStatus("success")
      } else {
        console.error("Error submitting form:", result)
        setFormStatus("error")
      }

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")

      // Reset status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  const projects = [
    {
      title: "CodeSync – Video Calling Interview Platform",
      description:
        "A fully-featured web platform designed to streamline remote technical interviews with live collaboration tools.",
      technologies: ["Next.js 14", "TypeScript", "Stream", "Convex", "Clerk", "Tailwind CSS", "Shadcn/UI"],
      features: [
        "🚀 Highlights",
        "Tech Stack: Next.js & TypeScript, Stream, Convex, Clerk",
        "🎥 Video Calls",
        "🖥️ Screen Sharing",
        "🎬 Screen Recording",
        "🔒 Authentication & Authorization",
        "💻 Server Components, Layouts, Server Actions",
        "🎭 Client & Server Components",
        "🛣️ Dynamic & Static Routes",
        "🎨 Styling with Tailwind & Shadcn",
        "✨ Server Actions",
      ],
      image: "/images/codesync.png",
      sourceCode: "https://github.com/aditya03singh2003/CodeSync",
      liveDemo: "https://code-sync-eight-xi.vercel.app/",
    },
    {
      title: "Sankalp95 – Coaching Center Management System",
      description:
        "A full-featured web application for managing educational coaching operations, used by 50+ active users.",
      technologies: ["Next.js", "React", "MongoDB", "Tailwind CSS", "NextAuth.js", "TypeScript", "Shadcn/UI"],
      features: [
        "👥 Developed a role-based dashboard system for admins, teachers, students, and parents.",
        "⏰ Implemented real-time attendance tracking with automated email notifications.",
        "💰 Integrated secure payment tracking and academic scheduling modules.",
        "⚡ Optimized MongoDB queries, improving performance by 40%; ensured responsive, accessible UI design.",
      ],
      image: "/images/sankalp.png",
      sourceCode: "https://github.com/aditya03singh2003/Sankalp95",
    },
    {
      title: "Code Forge – Multi-language Online Code Editor",
      description:
        "Advanced browser-based code editor with real-time collaboration, theming, and Pro-tier monetization features.",
      technologies: ["Next.js 15", "Convex", "Clerk", "Tailwind CSS", "LemonSqueezy"],
      features: [
        "💻 Built a full-stack multi-language code editor supporting 10+ languages with real-time code execution and theme customization.",
        "🔄 Integrated code sharing, live editing, smart output formatting, and markdown preview to enhance collaboration.",
        "⚡ Implemented real-time synchronization between users using Convex backend, ensuring seamless coding experience.",
        "🚀 Reduced code execution delay by 30% through smart output buffering and optimized runtime handling.",
        "💰 Launched Pro-tier pricing using LemonSqueezy for gated premium features and simulated revenue generation.",
      ],
      image: "/images/codeforge.png",
      sourceCode: "https://github.com/aditya03singh2003/CodeForge",
      liveDemo: "https://code-forge-editor.vercel.app/",
    },
    {
      title: "CaseCobra - A Modern Fullstack E-Commerce Shop for Custom Phone Cases",
      description:
        "A complete e-commerce platform for selling custom phone cases with a beautiful UI and advanced features.",
      technologies: ["Next.js 14", "TypeScript", "Postgres", "Tailwind CSS", "Kinde Auth"],
      features: [
        "🛠️ Complete shop built from scratch in Next.js 14",
        "💻 Beautiful landing page included",
        "🎨 Custom artworks made by a professional illustrator",
        "💳 Secret admin dashboard to manage orders",
        "🖥️ Drag-and-drop file uploads",
        "🛍️ Customers can purchase directly from you",
        "🌟 Clean, modern UI on top of shadcn-ui",
        "🛒 Completely custom phone case configurator",
        "🔑 Authentication using Kinde",
        "✉️ Beautiful thank-you email after purchase",
        "✅ Apple-inspired configuration design",
        "⌨️ 100% written in TypeScript",
      ],
      image: "/images/casecobre3.png",
      sourceCode: "https://github.com/aditya03singh2003/CaseCobra",
      liveDemo: "https://case-cobra.vercel.app/",
    },
  ]

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)

  const achievements = [
    {
      title: "AIR-72 in CodeKaze",
      description:
        "Achieved All India Rank 72 among 1,00,000+ participants in CodeKaze- Sep 2024 organized by Coding Ninjas.",
      icon: <Trophy className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "LeetCode Problem Solver",
      description: "Improved problem-solving skills by solving over 250+ questions on LeetCode.",
      icon: <Code className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Competitive Programming",
      description: "Solved 500+ questions on various platforms like Codechef, GeeksforGeeks and Coding Ninjas.",
      icon: <Award className="w-8 h-8 text-purple-400" />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0c0414] text-white overflow-hidden">
      <Navbar />
      <ParticleBackground />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 leading-[1.2]">
              Aditya Singh
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">Full-Stack Developer</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  View Projects
                </motion.button>
              </a>
              <a href="#contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                    borderColor: "rgb(168, 85, 247)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium py-2 px-6 rounded-md"
                >
                  Contact Me
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-[#0c0414] to-[#130a24]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500">
                About Me
              </span>
            </h2>
            <div className="max-w-3xl mx-auto bg-[#1a0d33]/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-8 shadow-lg shadow-purple-500/10">
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full-Stack Developer with expertise in building modern web applications using
                cutting-edge technologies. My focus is on creating responsive, user-friendly interfaces backed by robust
                server-side architecture.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in both front-end and back-end development, I enjoy tackling complex problems
                and turning ideas into functional, elegant solutions. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
              <div className="flex justify-center mt-8">
                <a
                  href="https://drive.google.com/file/d/1hcpspN6VcxXiRzXcCveZiDIKnF5xZcWE/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-lg shadow-purple-500/20"
                >
                  <FileText size={18} />
                  <span>View Full Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-[#130a24] to-[#0c0414]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500">
                Projects
              </span>
            </h2>
            <div className="space-y-12">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}

              {projects.length > 3 && (
                <div className="flex justify-center mt-8">
                  <motion.button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(42, 26, 74, 0.9)",
                      borderColor: "rgba(168, 85, 247, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-2 px-6 py-3 bg-[#1a0d33]/70 hover:bg-[#2a1a4a] text-white rounded-md transition-all duration-300 border border-purple-500/30"
                  >
                    {showAllProjects ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp size={20} />
                      </>
                    ) : (
                      <>
                        <span>Show More</span>
                        <ChevronDown size={20} />
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-[#0c0414]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500">
                Achievements
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#130a24] to-[#0c0414]">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500">
                Get In Touch
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#1a0d33]/50 backdrop-blur-sm rounded-xl border border-purple-900/30 p-8 shadow-lg shadow-purple-500/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <motion.a
                    href="mailto:aditya03singh2003@gmail.com"
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(42, 26, 74, 0.8)",
                      y: -5,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center p-4 bg-[#2a1a4a]/50 rounded-lg hover:bg-[#2a1a4a] transition-colors"
                  >
                    <Mail className="w-6 h-6 mr-3 text-purple-400" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-300">aditya03singh2003@gmail.com</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="tel:+918707664940"
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(42, 26, 74, 0.8)",
                      y: -5,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center p-4 bg-[#2a1a4a]/50 rounded-lg hover:bg-[#2a1a4a] transition-colors"
                  >
                    <Phone className="w-6 h-6 mr-3 text-purple-400" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-gray-300">+91 8707664940</p>
                    </div>
                  </motion.a>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-md bg-[#2a1a4a] border-purple-900/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-md bg-[#2a1a4a] border-purple-900/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-md bg-[#2a1a4a] border-purple-900/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    whileHover={{
                      scale: formStatus !== "submitting" ? 1.02 : 1,
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                    }}
                    whileTap={{ scale: formStatus !== "submitting" ? 0.98 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-lg shadow-purple-500/20 flex justify-center items-center"
                  >
                    {formStatus === "submitting" ? (
                      <span className="inline-flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>

                  {formStatus === "success" && (
                    <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md text-green-200 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-200 text-center">
                      Something went wrong. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0c0414]">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/aditya03singh2003" label="GitHub" />
            <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/adityaaa03/" label="LinkedIn" />
            <SocialIcon icon={<Mail />} href="mailto:aditya03singh2003@gmail.com" label="Email" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Aditya Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
