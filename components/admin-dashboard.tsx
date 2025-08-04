"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContentEditor } from "@/components/content-editor"
import { ImageUpload } from "@/components/image-upload"
import { ResumeParser } from "@/components/resume-parser"
import { VersionControl } from "@/components/version-control"
import { ShareableLink } from "@/components/shareable-link"
import {
  Settings,
  FileText,
  Image,
  Brain,
  History,
  Share2,
  BarChart3,
  Users,
  Eye,
  Download,
  X,
} from "lucide-react"

interface AdminDashboardProps {
  isOpen: boolean
  onClose: () => void
  portfolioData: any
  onDataUpdate: (data: any) => void
}

export function AdminDashboard({ isOpen, onClose, portfolioData, onDataUpdate }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [editingSection, setEditingSection] = useState<string | null>(null)

  const stats = {
    totalViews: 1247,
    uniqueVisitors: 892,
    contactClicks: 34,
    resumeDownloads: 18,
    avgTimeOnSite: "3:42",
    bounceRate: "23%",
  }

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
        className="bg-white rounded-lg w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Portfolio Admin Dashboard</h2>
            <p className="text-gray-600">Manage your portfolio content and settings</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-6 mx-6 mt-4">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
              <TabsTrigger value="media" className="flex items-center space-x-2">
                <Image className="w-4 h-4" />
                <span className="hidden sm:inline">Media</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">AI Tools</span>
              </TabsTrigger>
              <TabsTrigger value="versions" className="flex items-center space-x-2">
                <History className="w-4 h-4" />
                <span className="hidden sm:inline">Versions</span>
              </TabsTrigger>
              <TabsTrigger value="share" className="flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-y-auto p-6">
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Eye className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <div className="text-2xl font-bold">{stats.totalViews}</div>
                      <div className="text-xs text-gray-500">Total Views</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <div className="text-2xl font-bold">{stats.uniqueVisitors}</div>
                      <div className="text-xs text-gray-500">Unique Visitors</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Settings className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <div className="text-2xl font-bold">{stats.contactClicks}</div>
                      <div className="text-xs text-gray-500">Contact Clicks</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Download className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                      <div className="text-2xl font-bold">{stats.resumeDownloads}</div>
                      <div className="text-xs text-gray-500">Resume Downloads</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <BarChart3 className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                      <div className="text-2xl font-bold">{stats.avgTimeOnSite}</div>
                      <div className="text-xs text-gray-500">Avg. Time</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Eye className="w-8 h-8 mx-auto mb-2 text-red-600" />
                      <div className="text-2xl font-bold">{stats.bounceRate}</div>
                      <div className="text-xs text-gray-500">Bounce Rate</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Portfolio viewed by recruiter from TechCorp</span>
                          <span className="text-xs text-gray-500 ml-auto">2h ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Resume downloaded</span>
                          <span className="text-xs text-gray-500 ml-auto">4h ago</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm">Contact form submitted</span>
                          <span className="text-xs text-gray-500 ml-auto">1d ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button 
                        className="w-full justify-start" 
                        variant="outline"
                        onClick={() => setActiveTab("content")}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Edit Portfolio Content
                      </Button>
                      <Button 
                        className="w-full justify-start" 
                        variant="outline"
                        onClick={() => setActiveTab("ai")}
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        Update with AI Parser
                      </Button>
                      <Button 
                        className="w-full justify-start" 
                        variant="outline"
                        onClick={() => setActiveTab("share")}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Generate Share Link
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setEditingSection("personal")}>
                    <CardHeader>
                      <CardTitle className="text-lg">Personal Information</CardTitle>
                      <CardDescription>Name, title, contact details</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setEditingSection("skills")}>
                    <CardHeader>
                      <CardTitle className="text-lg">Skills & Certifications</CardTitle>
                      <CardDescription>Technical skills, AI skills, certifications</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setEditingSection("experience")}>
                    <CardHeader>
                      <CardTitle className="text-lg">Work Experience</CardTitle>
                      <CardDescription>Job history, achievements, technologies</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setEditingSection("projects")}>
                    <CardHeader>
                      <CardTitle className="text-lg">Projects</CardTitle>
                      <CardDescription>Featured projects and case studies</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setEditingSection("testimonials")}>
                    <CardHeader>
                      <CardTitle className="text-lg">Testimonials</CardTitle>
                      <CardDescription>Client and colleague recommendations</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setEditingSection("sections")}>
                    <CardHeader>
                      <CardTitle className="text-lg">Section Visibility</CardTitle>
                      <CardDescription>Show/hide portfolio sections</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="media">
                <ImageUpload 
                  currentImage={portfolioData.personalInfo.profileImage}
                  onImageUpdate={(newImageUrl) => {
                    const updatedData = {
                      ...portfolioData,
                      personalInfo: {
                        ...portfolioData.personalInfo,
                        profileImage: newImageUrl
                      }
                    }
                    onDataUpdate(updatedData)
                  }}
                />
              </TabsContent>

              <TabsContent value="ai">
                <ResumeParser onDataParsed={onDataUpdate} />
              </TabsContent>

              <TabsContent value="versions">
                <VersionControl 
                  currentData={portfolioData}
                  onRestore={onDataUpdate}
                />
              </TabsContent>

              <TabsContent value="share">
                <ShareableLink data={portfolioData} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>

      {/* Content Editor Modal */}
      <AnimatePresence>
        {editingSection && (
          <ContentEditor
            isOpen={!!editingSection}
            onClose={() => setEditingSection(null)}
            section={editingSection}
            data={portfolioData[editingSection] || portfolioData}
            onSave={(updatedData) => {
              const newData = { ...portfolioData, [editingSection]: updatedData }
              onDataUpdate(newData)
              setEditingSection(null)
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}