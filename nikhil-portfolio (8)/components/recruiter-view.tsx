"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Calendar,
  Award,
  Languages,
  CheckCircle,
  TrendingUp,
  Zap,
  Brain,
  Settings,
} from "lucide-react"

interface RecruiterViewProps {
  data: any
  onSwitchToOwner: () => void
}

export function RecruiterView({ data, onSwitchToOwner }: RecruiterViewProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    // Track view analytics
    console.log("Portfolio viewed by recruiter")
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hidden Owner Access */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onSwitchToOwner}
        className="fixed top-4 left-4 z-50 opacity-20 hover:opacity-100 transition-opacity"
      >
        <Settings className="w-4 h-4" />
      </Button>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div className="text-xl font-bold text-slate-800" whileHover={{ scale: 1.05 }}>
              {data.personalInfo.name}
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Interview
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-2 text-sm text-slate-600"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>{data.personalInfo.availability}</span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {data.personalInfo.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-blue-600 font-semibold"
                >
                  {data.personalInfo.title}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-slate-600 max-w-lg"
                >
                  {data.personalInfo.tagline}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {data.personalInfo.heroMetrics.map((metric: any, index: number) => (
                  <div key={index} className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                    <metric.icon className={`w-5 h-5 text-${metric.color}-600`} />
                    <div>
                      <span className="font-semibold">{metric.value}</span>
                      <div className="text-xs text-slate-500">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Interview
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
                <img
                  src={data.personalInfo.profileImage || "/placeholder.svg"}
                  alt={data.personalInfo.name}
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Core Competencies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Bridging engineering excellence with digital marketing expertise and AI-powered efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-blue-600" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {data.skills.technical
                    .filter((skill: any) => skill.enabled)
                    .map((skill: any, index: number) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.proficiency}%</span>
                        </div>
                        <Progress value={skill.proficiency} className="h-2" />
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    AI Generalist
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {data.skills.aiSkills
                    .filter((skill: any) => skill.enabled)
                    .map((skill: any, index: number) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                          <span className="text-sm text-slate-500">{skill.proficiency}%</span>
                        </div>
                        <Progress value={skill.proficiency} className="h-2 bg-purple-100" />
                        <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                          {skill.category}
                        </Badge>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Languages className="w-5 h-5 mr-2 text-green-600" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {data.skills.languages
                    .filter((language: any) => language.enabled)
                    .map((language: any) => (
                      <div key={language.name} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="font-medium text-slate-700">{language.name}</span>
                        <Badge variant="outline">{language.fluency}</Badge>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-orange-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {data.skills.certifications
                    .filter((cert: any) => cert.enabled)
                    .map((cert: any) => (
                      <div key={cert.name} className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-slate-700">{cert.name}</h4>
                            <p className="text-sm text-slate-500">{cert.issuer}</p>
                          </div>
                          <Badge variant={cert.status === "Completed" ? "default" : "secondary"} className="ml-2">
                            {cert.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600">{cert.date}</p>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven track record of delivering results across engineering, digital marketing, and AI implementation
            </p>
          </motion.div>

          <div className="space-y-8">
            {data.experience
              .filter((job: any) => job.enabled)
              .map((job: any, index: number) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl text-slate-800">{job.position}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-blue-600">
                            {job.company}
                          </CardDescription>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600">
                            <span>{job.duration}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement: string, i: number) => (
                              <li key={i} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.technologies.map((tech: string) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <h5 className="font-medium text-slate-800 mb-1">Impact</h5>
                            <p className="text-sm text-slate-700">{job.impact}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Showcasing impactful solutions across engineering, digital marketing, and AI domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects
              .filter((project: any) => project.enabled)
              .map((project: any, index: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        {project.featured && <Badge className="bg-orange-100 text-orange-800">Featured</Badge>}
                      </div>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-slate-800 mb-2">Technologies</h5>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech: string) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-medium text-slate-800 mb-1">Impact</h5>
                          <p className="text-sm text-slate-700">{project.impact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to bring engineering precision, digital marketing expertise, and AI-powered efficiency to your team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${data.personalInfo.email}`}
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>{data.personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${data.personalInfo.phone}`}
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>{data.personalInfo.phone}</span>
                </a>

                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span>{data.personalInfo.location}</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-blue-100 mb-2">Response Time Commitment:</p>
                <p className="font-semibold">Responds within 24 hours</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>

              <div className="space-y-4">
                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Interview Call
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume (PDF)
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Current Status</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Open to new opportunities</span>
                </div>
                <p className="text-sm text-blue-100 mt-2">Available for immediate start • Open to relocation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-slate-400">
                © 2025 {data.personalInfo.name}. Designed for maximum recruiter impact.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
