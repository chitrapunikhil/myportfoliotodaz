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
} from "lucide-react"

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
  },
  skills: {
    technical: [
      { name: "Project Management (PRINCE2®)", level: 95, category: "Management" },
      { name: "Scrum Master (PeopleCert®)", level: 95, category: "Agile" },
      { name: "Meta Ads & Social Media Marketing", level: 88, category: "Marketing" },
      { name: "AutoCAD & SolidWorks", level: 85, category: "Engineering" },
      { name: "Python & SQL", level: 75, category: "Programming" },
      { name: "Quality Management (ISO 9001)", level: 90, category: "Operations" },
    ],
    aiSkills: [
      { name: "AI-Powered Process Optimization", level: 85 },
      { name: "Machine Learning Applications", level: 80 },
      { name: "AI Tools Integration", level: 90 },
      { name: "Data Analysis & Insights", level: 82 },
      { name: "Automated Workflow Design", level: 88 },
    ],
    certifications: [
      { name: "PRINCE2® Specialist", issuer: "Lecturio GmbH", year: "2025", status: "Completed" },
      { name: "PeopleCert® Scrum Master I", issuer: "PeopleCert®", year: "2025", status: "Completed" },
      { name: "Mechanical Engineering", issuer: "JNTU Hyderabad", year: "2015", status: "Completed" },
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
    },
    {
      id: 2,
      name: "Thermex Quenching System Implementation",
      description: "Led integration of advanced quenching technology in steel manufacturing",
      technologies: ["Mechanical Systems", "Quality Control", "Project Management"],
      impact: "15% improvement in production efficiency",
      featured: true,
    },
    {
      id: 3,
      name: "AI-Powered Workflow Optimization",
      description: "Designed AI-driven process improvements for operational efficiency",
      technologies: ["AI Tools", "Process Automation", "Data Analysis"],
      impact: "30% reduction in manual processing time",
      featured: true,
    },
  ],
}

// Responsive Navigation Component
function Navigation({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/90 border-b border-gray-200"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-max px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            {portfolioData.personalInfo.name}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors interactive"
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="#contact" className="hidden sm:flex btn btn-primary">
            <Calendar className="w-4 h-4" />
            <span>Contact Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden interactive p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-gray-200" role="menu">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors interactive p-2"
                  role="menuitem"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn btn-primary mt-4">
                <Calendar className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Responsive Skill Bar Component
function SkillBar({ name, level, category }: { name: string; level: number; category?: string }) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedLevel(level), 500)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div
      className="mb-4"
      role="progressbar"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${name} skill level`}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-sm font-medium text-gray-700">{name}</span>
          {category && (
            <span className="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">{category}</span>
          )}
        </div>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${animatedLevel}%` }} />
      </div>
    </div>
  )
}

// Responsive Experience Card Component
function ExperienceCard({ job, index }: { job: any; index: number }) {
  return (
    <article className="card hover-lift mb-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <header className="mb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
            <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1">
              <span>{job.duration}</span>
              <span>•</span>
              <span>{job.location}</span>
              <span>•</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">{job.type}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            Key Achievements
          </h4>
          <ul className="space-y-2" role="list">
            {job.achievements.map((achievement: string, i: number) => (
              <li key={i} className="flex items-start" role="listitem">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Code className="w-4 h-4 mr-2 text-purple-500" />
            Technologies & Skills
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.technologies.map((tech: string) => (
              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs border">
                {tech}
              </span>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg border border-blue-100">
            <h5 className="font-medium text-gray-800 mb-1 flex items-center">
              <Zap className="w-4 h-4 mr-1 text-orange-500" />
              Impact
            </h5>
            <p className="text-sm text-gray-700">{job.impact}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

// Main Portfolio Component
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
        <div className="text-center">
          <div className="animate-pulse rounded-full h-32 w-32 bg-blue-200 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section id="about" className="hero-section pt-24 pb-16 px-4">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up layout-stack">
              <div>
                {/* Status */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span>{portfolioData.personalInfo.availability}</span>
                </div>

                {/* Name & Title */}
                <h1 className="heading-responsive mb-4">{portfolioData.personalInfo.name}</h1>
                <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                  {portfolioData.personalInfo.title}
                </p>
                <p className="text-responsive text-gray-600 mb-8 max-w-lg">{portfolioData.personalInfo.tagline}</p>
              </div>

              {/* Metrics */}
              <div className="layout-flex">
                <div className="card flex items-center space-x-3 min-w-0">
                  <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-semibold">{portfolioData.personalInfo.yearsExperience}</div>
                    <div className="text-xs text-gray-500">Years Experience</div>
                  </div>
                </div>
                <div className="card flex items-center space-x-3 min-w-0">
                  <Globe className="w-5 h-5 text-orange-600 flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-semibold">Berlin</div>
                    <div className="text-xs text-gray-500">Germany</div>
                  </div>
                </div>
                <div className="card flex items-center space-x-3 min-w-0">
                  <Zap className="w-5 h-5 text-purple-600 flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-semibold">AI Expert</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="layout-flex">
                <a href="#contact" className="btn btn-primary">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Schedule Interview</span>
                </a>
                <button className="btn btn-secondary">
                  <Download className="w-5 h-5" aria-hidden="true" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="animate-fade-in">
              <div className="relative w-80 h-80 mx-auto max-w-full">
                <div
                  className="absolute inset-0 modern-gradient rounded-full blur-3xl opacity-20"
                  aria-hidden="true"
                ></div>
                <img
                  src={portfolioData.personalInfo.profileImage || "/placeholder.svg"}
                  alt={`Professional headshot of ${portfolioData.personalInfo.name}`}
                  className="high-dpi-image relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                  loading="eager"
                  width="320"
                  height="320"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="container-max">
          <header className="text-center mb-12">
            <h2 className="heading-responsive mb-4">Core Competencies</h2>
            <p className="text-responsive text-gray-600 max-w-2xl mx-auto">
              Bridging engineering excellence with digital marketing expertise and AI-powered efficiency
            </p>
          </header>

          <div className="grid-layout">
            {/* Technical Skills */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" aria-hidden="true" />
                Technical Skills
              </h3>
              {portfolioData.skills.technical.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} category={skill.category} />
              ))}
            </div>

            {/* AI Skills */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-600" aria-hidden="true" />
                AI Generalist Skills
              </h3>
              {portfolioData.skills.aiSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>

            {/* Certifications */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-orange-600" aria-hidden="true" />
                Certifications
              </h3>
              <div className="layout-stack">
                {portfolioData.skills.certifications.map((cert, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          cert.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-600" aria-hidden="true" />
                Languages
              </h3>
              <div className="layout-stack">
                {portfolioData.personalInfo.languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">{language.split(" (")[0]}</span>
                    <span className="text-sm text-gray-600">
                      {language.split(" (")[1]?.replace(")", "") || "Native"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50">
        <div className="container-max">
          <header className="text-center mb-12">
            <h2 className="heading-responsive mb-4">Professional Experience</h2>
            <p className="text-responsive text-gray-600 max-w-2xl mx-auto">
              A proven track record of delivering results across engineering, digital marketing, and AI implementation
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            {portfolioData.experience.map((job, index) => (
              <ExperienceCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container-max">
          <header className="text-center mb-12">
            <h2 className="heading-responsive mb-4">Featured Projects</h2>
            <p className="text-responsive text-gray-600 max-w-2xl mx-auto">
              Showcasing impactful solutions across engineering, digital marketing, and AI domains
            </p>
          </header>

          <div className="grid-layout">
            {portfolioData.projects.map((project, index) => (
              <article
                key={project.id}
                className="card hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <header className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Featured</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </header>

                <div className="layout-stack">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech: string) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg border border-green-100">
                    <h4 className="font-medium text-gray-800 mb-1 flex items-center">
                      <Zap className="w-4 h-4 mr-1 text-green-500" aria-hidden="true" />
                      Impact
                    </h4>
                    <p className="text-sm text-gray-700">{project.impact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 modern-gradient text-white">
        <div className="container-max">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to bring engineering precision, digital marketing expertise, and AI-powered efficiency to your team
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="layout-stack">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

              <div className="layout-stack">
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="interactive flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20"
                  aria-label={`Send email to ${portfolioData.personalInfo.email}`}
                >
                  <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="break-all">{portfolioData.personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${portfolioData.personalInfo.phone}`}
                  className="interactive flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20"
                  aria-label={`Call ${portfolioData.personalInfo.phone}`}
                >
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>{portfolioData.personalInfo.phone}</span>
                </a>

                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span>{portfolioData.personalInfo.location}</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-blue-100 mb-2">Response Time Commitment:</p>
                <p className="font-semibold">Responds within 24 hours</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="layout-stack">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>

              <div className="layout-stack">
                <button className="btn bg-white text-blue-600 hover:bg-blue-50 w-full justify-center">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Schedule Interview Call</span>
                </button>

                <button className="btn border-white text-white hover:bg-white hover:text-blue-600 w-full justify-center">
                  <Download className="w-5 h-5" aria-hidden="true" />
                  <span>Download Resume (PDF)</span>
                </button>

                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-white text-white hover:bg-white hover:text-blue-600 w-full justify-center"
                  aria-label="Connect on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              {/* Status */}
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Current Status</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span className="text-sm">Open to new opportunities</span>
                </div>
                <p className="text-sm text-blue-100 mt-2">Available for immediate start • Open to relocation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white no-print">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2025 {portfolioData.personalInfo.name}. Designed for maximum recruiter impact.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="interactive text-gray-400 hover:text-white p-2"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-gray-400 hover:text-white p-2"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`tel:${portfolioData.personalInfo.phone}`}
                className="interactive text-gray-400 hover:text-white p-2"
                aria-label="Call phone number"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
