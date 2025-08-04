"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Calendar,
  Award,
  Briefcase,
  CheckCircle,
  Linkedin,
  Menu,
  X,
  ExternalLink,
  Star,
  Globe,
  Code,
  Zap,
  Brain,
  Settings,
  Share2,
  Eye,
  BarChart3,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const portfolioData = {
  personalInfo: {
    name: "Nikhil Chitrapu",
    title: "Engineering & Digital Marketing Professional | AI Generalist",
    tagline: "Transforming Technical Expertise into Digital Success with AI-Powered Efficiency",
    location: "Berlin, Germany",
    email: "nikhilchitrapu193@gmail.com",
    phone: "+49 15510877211",
    linkedin: "https://linkedin.com/in/nikhilchitrapu",
    profileImage: "/nikhil-profile.jpg",
    availability: "Open to Opportunities",
    yearsExperience: "9+",
    languages: ["English (C2)", "German (B1)", "Hindi (Native)"],
    summary: "Experienced engineering and digital marketing professional with 9+ years of expertise in project management, AI implementation, and campaign optimization. Proven track record of improving operational efficiency by 25% and managing 50+ client accounts with 95%+ satisfaction rates."
  },
  skills: {
    technical: [
      { name: "Project Management (PRINCE2®)", level: 95, category: "Management", enabled: true },
      { name: "Scrum Master (PeopleCert®)", level: 95, category: "Agile", enabled: true },
      { name: "Meta Ads & Social Media Marketing", level: 88, category: "Marketing", enabled: true },
      { name: "AutoCAD & SolidWorks", level: 85, category: "Engineering", enabled: true },
      { name: "Python & SQL", level: 75, category: "Programming", enabled: true },
      { name: "Quality Management (ISO 9001)", level: 90, category: "Operations", enabled: true },
    ],
    aiSkills: [
      { name: "AI-Powered Process Optimization", level: 85, enabled: true },
      { name: "Machine Learning Applications", level: 80, enabled: true },
      { name: "AI Tools Integration", level: 90, enabled: true },
      { name: "Data Analysis & Insights", level: 82, enabled: true },
      { name: "Automated Workflow Design", level: 88, enabled: true },
    ],
    certifications: [
      { name: "PRINCE2® Specialist", issuer: "Lecturio GmbH", year: "2025", status: "Completed", enabled: true },
      { name: "PeopleCert® Scrum Master I", issuer: "PeopleCert®", year: "2025", status: "Completed", enabled: true },
      { name: "Mechanical Engineering", issuer: "JNTU Hyderabad", year: "2015", status: "Completed", enabled: true },
    ],
  },
  experience: [
    {
      id: 1,
      company: "Concentrix-Meta",
      position: "Social Media Marketing Professional",
      duration: "Nov 2023 - Oct 2024",
      location: "Berlin, Germany",
      type: "Full-time",
      enabled: true,
      achievements: [
        "Transitioned from SBG to GBG clients in 6 months, demonstrating rapid adaptability",
        "Improved campaign performance by 25% through strategic optimization",
        "Maintained 95%+ client satisfaction rates across 50+ accounts",
        "Trained team members on best practices, improving overall efficiency",
      ],
      technologies: ["Meta Ads", "Campaign Management", "Client Relations", "Team Training"],
      impact: "Enhanced ROI for 50+ clients through comprehensive campaign evaluations",
    },
    {
      id: 2,
      company: "MS Agarwal Foundries Pvt Ltd",
      position: "Junior Engineer",
      duration: "Mar 2019 - Sep 2022",
      location: "Hyderabad, India",
      type: "Full-time",
      enabled: true,
      achievements: [
        "Implemented Thermex Quenching System technology in steel manufacturing",
        "Improved production efficiency by 15% through process optimization",
        "Maintained ISO 9001:2015 and OHSAS 18001:2007 compliance",
        "Reduced project risks by 20% through effective communication",
      ],
      technologies: ["Mechanical Systems", "ISO Standards", "Project Management", "Quality Control"],
      impact: "Contributed to capacity expansion and sustainable manufacturing practices",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Meta Ads Campaign Optimization",
      description: "Developed systematic approach to campaign evaluation and optimization",
      technologies: ["Meta Ads Manager", "Analytics", "Campaign Strategy"],
      impact: "25% average improvement in campaign performance",
      featured: true,
      enabled: true,
    },
    {
      id: 2,
      name: "Thermex Quenching System Implementation",
      description: "Led integration of advanced quenching technology in steel manufacturing",
      technologies: ["Mechanical Systems", "Quality Control", "Project Management"],
      impact: "15% improvement in production efficiency",
      featured: true,
      enabled: true,
    },
    {
      id: 3,
      name: "AI-Powered Workflow Optimization",
      description: "Designed AI-driven process improvements for operational efficiency",
      technologies: ["AI Tools", "Process Automation", "Data Analysis"],
      impact: "30% reduction in manual processing time",
      featured: true,
      enabled: true,
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
      content: "Nikhil's expertise in AI-powered marketing optimization helped us achieve a 40% increase in campaign ROI.",
      rating: 5,
      enabled: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Engineering Manager",
      company: "InnovateTech",
      content: "His project management skills and technical expertise made our product launch 3 months ahead of schedule.",
      rating: 5,
      enabled: true,
    },
  ]
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Responsive Navigation Component
function Navigation({ isMenuOpen, setIsMenuOpen, isAdmin, setIsAdmin }: { 
  isMenuOpen: boolean; 
  setIsMenuOpen: (open: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-max px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {portfolioData.personalInfo.name}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6" role="menubar">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors interactive relative"
                role="menuitem"
                whileHover={{ y: -2 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <motion.button
              onClick={() => setIsAdmin(!isAdmin)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Admin Panel"
            >
              <Settings className="w-4 h-4" />
            </motion.button>
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              <span>Contact Me</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden interactive p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              id="mobile-menu" 
              className="md:hidden mt-4 pb-4 border-t border-gray-200" 
              role="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3 pt-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors interactive p-2"
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact" 
                  className="btn btn-primary mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Contact Me</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Skill Bar Component with Animation
function SkillBar({ name, level, category, delay = 0 }: { 
  name: string; 
  level: number; 
  category?: string; 
  delay?: number;
}) {
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          setTimeout(() => setAnimatedLevel(level), delay)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`skill-${name.replace(/\s+/g, '-')}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [level, delay, name, isVisible])

  return (
    <motion.div
      id={`skill-${name.replace(/\s+/g, '-')}`}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1 }}
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${name} skill level`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">{name}</span>
          {category && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full border">
              {category}
            </span>
          )}
        </div>
        <span className="text-sm font-semibold text-blue-600">{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div 
          className="progress-fill" 
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

// Experience Card Component
function ExperienceCard({ job, index }: { job: any; index: number }) {
  return (
    <motion.article 
      className="card hover-lift mb-8"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="relative">
        {/* Company Logo Placeholder */}
        <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {job.company.charAt(0)}
        </div>

        <header className="mb-6 pt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.position}</h3>
              <p className="text-xl text-blue-600 font-semibold mb-2">{job.company}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {job.duration}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {job.type}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Key Achievements
            </h4>
            <ul className="space-y-3" role="list">
              {job.achievements.map((achievement: string, i: number) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  role="listitem"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-700 leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-500" />
              Technologies & Skills
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {job.technologies.map((tech: string, i: number) => (
                <motion.span 
                  key={tech} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border hover:bg-gray-200 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg border border-blue-100">
              <h5 className="font-medium text-gray-800 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                Business Impact
              </h5>
              <p className="text-sm text-gray-700 leading-relaxed">{job.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.article
      className="card hover-lift h-full"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <header className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">{project.name}</h3>
          {project.featured && (
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
      </header>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-3 flex items-center">
            <Code className="w-4 h-4 mr-2 text-purple-500" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <motion.span 
                key={tech} 
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs border hover:bg-purple-100 hover:text-purple-700 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
            <Target className="w-4 h-4 mr-2 text-green-500" />
            Impact & Results
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">{project.impact}</p>
        </div>
      </div>
    </motion.article>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <motion.div
      className="card h-full"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      <footer className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.position}</div>
          <div className="text-sm text-gray-500">{testimonial.company}</div>
        </div>
      </footer>
    </motion.div>
  )
}

// Admin Panel Component
function AdminPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Admin Panel</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-3">
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center">
            <Settings className="w-4 h-4 mr-3" />
            Edit Content
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center">
            <Brain className="w-4 h-4 mr-3" />
            AI Resume Parser
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center">
            <BarChart3 className="w-4 h-4 mr-3" />
            Analytics
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center">
            <Share2 className="w-4 h-4 mr-3" />
            Share Portfolio
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main Portfolio Component
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  // Loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            NC
          </motion.div>
          <p className="text-gray-600">Loading portfolio...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />

      {/* Hero Section */}
      <section id="about" className="hero-section pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="layout-stack"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                {/* Status */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  <span>{portfolioData.personalInfo.availability}</span>
                </div>

                {/* Name & Title */}
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight"
                  variants={fadeInUp}
                >
                  {portfolioData.personalInfo.name}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-blue-600 font-semibold mb-4"
                  variants={fadeInUp}
                >
                  {portfolioData.personalInfo.title}
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
                  variants={fadeInUp}
                >
                  {portfolioData.personalInfo.tagline}
                </motion.p>
              </motion.div>

              {/* Metrics */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                variants={fadeInUp}
              >
                <div className="card flex items-center space-x-3 bg-white/80 backdrop-blur-sm">
                  <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-lg">{portfolioData.personalInfo.yearsExperience}</div>
                    <div className="text-xs text-gray-500">Years Experience</div>
                  </div>
                </div>
                <div className="card flex items-center space-x-3 bg-white/80 backdrop-blur-sm">
                  <Globe className="w-6 h-6 text-teal-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-lg">Berlin</div>
                    <div className="text-xs text-gray-500">Germany</div>
                  </div>
                </div>
                <div className="card flex items-center space-x-3 bg-white/80 backdrop-blur-sm">
                  <Brain className="w-6 h-6 text-purple-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-lg">AI Expert</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.a 
                  href="#contact" 
                  className="btn btn-primary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Schedule Interview</span>
                </motion.a>
                <motion.button 
                  className="btn btn-secondary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-80 h-80 mx-auto max-w-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white">
                  NC
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {portfolioData.personalInfo.summary}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Client Success</h3>
                <p className="text-sm text-gray-600">95%+ satisfaction across 50+ accounts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Performance</h3>
                <p className="text-sm text-gray-600">25% average improvement in campaigns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">AI-powered process optimization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="container-max">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Core Competencies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bridging engineering excellence with digital marketing expertise and AI-powered efficiency
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Technical Skills */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" aria-hidden="true" />
                Technical Skills
              </h3>
              {portfolioData.skills.technical.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                  category={skill.category}
                  delay={index}
                />
              ))}
            </motion.div>

            {/* AI Skills */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-purple-600" aria-hidden="true" />
                AI Generalist Skills
              </h3>
              {portfolioData.skills.aiSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level}
                  delay={index}
                />
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-orange-600" aria-hidden="true" />
                Certifications
              </h3>
              <div className="space-y-4">
                {portfolioData.skills.certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 bg-gray-50 rounded-lg border hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800 text-sm leading-tight">{cert.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        cert.status === "Completed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-green-600" aria-hidden="true" />
                Languages
              </h3>
              <div className="space-y-3">
                {portfolioData.personalInfo.languages.map((language, index) => (
                  <motion.div 
                    key={index} 
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="font-medium text-gray-700">{language.split(" (")[0]}</span>
                    <span className="text-sm text-gray-600 font-medium">
                      {language.split(" (")[1]?.replace(")", "") || "Native"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="container-max">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven track record of delivering results across engineering, digital marketing, and AI implementation
            </p>
          </motion.header>

          <div className="max-w-5xl mx-auto">
            {portfolioData.experience.map((job, index) => (
              <ExperienceCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-50">
        <div className="container-max">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing impactful solutions across engineering, digital marketing, and AI domains
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="container-max">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What colleagues and clients say about working with me
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioData.testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-teal-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to bring engineering precision, digital marketing expertise, and AI-powered efficiency to your team
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <motion.a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  whileHover={{ x: 5 }}
                  aria-label={`Send email to ${portfolioData.personalInfo.email}`}
                >
                  <Mail className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span className="break-all">{portfolioData.personalInfo.email}</span>
                </motion.a>

                <motion.a
                  href={`tel:${portfolioData.personalInfo.phone}`}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  whileHover={{ x: 5 }}
                  aria-label={`Call ${portfolioData.personalInfo.phone}`}
                >
                  <Phone className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>{portfolioData.personalInfo.phone}</span>
                </motion.a>

                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                  <span>{portfolioData.personalInfo.location}</span>
                </motion.div>

                <motion.a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  whileHover={{ x: 5 }}
                  aria-label="Connect on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-blue-100 mb-2 font-medium">Response Time Commitment:</p>
                <p className="text-lg font-semibold">Responds within 24 hours</p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>

              <div className="space-y-4">
                <motion.button 
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Schedule Interview Call</span>
                </motion.button>

                <motion.button 
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  <span>Download Resume (PDF)</span>
                </motion.button>

                <motion.a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Connect on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              </div>

              {/* Status */}
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-3 text-lg">Current Status</h4>
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                  />
                  <span className="font-medium">Open to new opportunities</span>
                </div>
                <p className="text-blue-100">Available for immediate start • Open to relocation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 {portfolioData.personalInfo.name}. Designed for maximum recruiter impact.
              </p>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-gray-400 hover:text-white p-2 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white p-2 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`tel:${portfolioData.personalInfo.phone}`}
                className="text-gray-400 hover:text-white p-2 transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="Call phone number"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Admin Panel */}
      <AnimatePresence>
        {isAdmin && <AdminPanel isOpen={isAdmin} onClose={() => setIsAdmin(false)} />}
      </AnimatePresence>
    </div>
  )
}