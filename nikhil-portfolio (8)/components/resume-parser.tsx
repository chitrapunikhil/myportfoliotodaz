"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Brain, CheckCircle, AlertCircle, Zap } from "lucide-react"

interface ResumeParserProps {
  onDataParsed: (data: any) => void
}

export function ResumeParser({ onDataParsed }: ResumeParserProps) {
  const [resumeText, setResumeText] = useState("")
  const [parsing, setParsing] = useState(false)
  const [parseProgress, setParseProgress] = useState(0)
  const [parsedData, setParsedData] = useState<any>(null)
  const [parseStatus, setParseStatus] = useState<"idle" | "parsing" | "success" | "error">("idle")

  const simulateAIParsing = async (text: string) => {
    setParsing(true)
    setParseStatus("parsing")
    setParseProgress(0)

    // Simulate AI parsing progress
    const steps = [
      { progress: 20, message: "Extracting personal information..." },
      { progress: 40, message: "Identifying work experience..." },
      { progress: 60, message: "Parsing skills and technologies..." },
      { progress: 80, message: "Analyzing achievements and metrics..." },
      { progress: 100, message: "Finalizing data structure..." },
    ]

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setParseProgress(step.progress)
    }

    // Simulate parsed data (in real app, this would be AI-generated)
    const mockParsedData = {
      personalInfo: {
        name: "Nikhil Chitrapu",
        title: "Engineering & Digital Marketing Professional | AI Generalist",
        email: "nikhilchitrapu193@gmail.com",
        phone: "+49 15510877211",
        location: "Berlin, Germany",
      },
      experience: [
        {
          company: "Concentrix-Meta",
          position: "Social Media Marketing Professional",
          duration: "Nov 2023 - Oct 2024",
          achievements: [
            "Transitioned from SBG to GBG clients in 6 months",
            "Improved campaign performance by 25%",
            "Maintained 95%+ client satisfaction rates",
          ],
        },
      ],
      skills: {
        technical: [
          { name: "Meta Ads Management", proficiency: 90 },
          { name: "Project Management", proficiency: 95 },
          { name: "Python", proficiency: 75 },
        ],
        certifications: [
          { name: "PRINCE2® Specialist", status: "Completed", date: "2025" },
          { name: "Scrum Master", status: "Completed", date: "2025" },
        ],
      },
    }

    setParsedData(mockParsedData)
    setParseStatus("success")
    setParsing(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        setResumeText(text)
      }
      reader.readAsText(file)
    }
  }

  const handleParseResume = async () => {
    if (!resumeText.trim()) {
      alert("Please paste your resume text or upload a file first")
      return
    }

    await simulateAIParsing(resumeText)
  }

  const handleApplyChanges = () => {
    if (parsedData) {
      onDataParsed(parsedData)
      alert("Portfolio updated successfully!")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            AI Resume Parser
          </CardTitle>
          <CardDescription>
            Upload your resume or paste the text, and our AI will automatically update your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Upload Resume File</h4>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-slate-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                  <p className="text-sm text-slate-600">Click to upload resume</p>
                  <p className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX, TXT up to 10MB</p>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Or Paste Resume Text</h4>
              <Textarea
                placeholder="Paste your resume content here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                rows={8}
                className="resize-none"
              />
            </div>
          </div>

          {/* Parse Button */}
          <div className="text-center">
            <Button
              onClick={handleParseResume}
              disabled={parsing || !resumeText.trim()}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Brain className="w-5 h-5 mr-2" />
              {parsing ? "Parsing with AI..." : "Parse Resume with AI"}
            </Button>
          </div>

          {/* Parsing Progress */}
          {parsing && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">AI Processing Progress</span>
                <span className="text-sm text-slate-500">{parseProgress}%</span>
              </div>
              <Progress value={parseProgress} className="h-2" />
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-600 animate-pulse" />
                <span className="text-sm text-slate-600">Analyzing resume content...</span>
              </div>
            </div>
          )}

          {/* Parse Results */}
          {parseStatus === "success" && parsedData && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Resume parsed successfully!</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Extracted Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-medium text-slate-800">Personal Info</h5>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>Name: {parsedData.personalInfo.name}</p>
                        <p>Title: {parsedData.personalInfo.title}</p>
                        <p>Email: {parsedData.personalInfo.email}</p>
                        <p>Location: {parsedData.personalInfo.location}</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-slate-800">Experience</h5>
                      <div className="text-sm text-slate-600">
                        <p>{parsedData.experience.length} positions found</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-slate-800">Skills</h5>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {parsedData.skills.technical.slice(0, 3).map((skill: any, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                        {parsedData.skills.technical.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{parsedData.skills.technical.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Changes Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Personal information updated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Experience section enhanced</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Skills automatically categorized</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Achievements quantified</span>
                      </div>
                    </div>

                    <Button onClick={handleApplyChanges} className="w-full mt-4" size="lg">
                      Apply Changes to Portfolio
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {parseStatus === "error" && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>Failed to parse resume. Please check the format and try again.</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Parsing Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            AI Parsing Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <h5 className="font-semibold text-blue-800">Smart Extraction</h5>
              <p className="text-sm text-blue-700">Automatically extracts key information</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Brain className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <h5 className="font-semibold text-green-800">AI Enhancement</h5>
              <p className="text-sm text-green-700">Improves descriptions and formatting</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Zap className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <h5 className="font-semibold text-purple-800">Auto-Categorization</h5>
              <p className="text-sm text-purple-700">Organizes skills and experience</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <h5 className="font-semibold text-orange-800">Quality Check</h5>
              <p className="text-sm text-orange-700">Validates and optimizes content</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
