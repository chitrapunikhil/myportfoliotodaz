"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Share2, Copy, Mail, Linkedin, QrCode, BarChart3, Eye, Globe } from "lucide-react"

interface ShareableLinkProps {
  data: any
}

export function ShareableLink({ data }: ShareableLinkProps) {
  const [showShareDialog, setShowShareDialog] = useState(false)
  const [shareableUrl, setShareableUrl] = useState("")
  const [linkStats, setLinkStats] = useState({
    views: 247,
    clicks: 18,
    shares: 5,
    lastViewed: "2 hours ago",
  })

  const generateShareableLink = () => {
    // In a real app, this would create a unique URL on your server
    const uniqueId = Math.random().toString(36).substring(2, 15)
    const url = `https://portfolio.nikhilchitrapu.com/share/${uniqueId}`
    setShareableUrl(url)
    setShowShareDialog(true)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Link copied to clipboard!")
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`${data.personalInfo.name} - Professional Portfolio`)
    const body = encodeURIComponent(`Hi,

I'd like to share my professional portfolio with you. You can view it at:
${shareableUrl}

This portfolio showcases my experience in engineering, digital marketing, and AI implementation.

Best regards,
${data.personalInfo.name}`)

    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const shareViaLinkedIn = () => {
    const text = encodeURIComponent(`Check out my professional portfolio: ${shareableUrl}`)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareableUrl)}&text=${text}`)
  }

  return (
    <>
      <Button onClick={generateShareableLink} variant="outline">
        <Share2 className="w-4 h-4 mr-2" />
        Share Portfolio
      </Button>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Share Your Portfolio
            </DialogTitle>
            <DialogDescription>Generate a shareable link that recruiters can access anytime</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Shareable URL */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Shareable Portfolio URL</label>
              <div className="flex space-x-2">
                <Input
                  value={shareableUrl || "https://portfolio.nikhilchitrapu.com/share/abc123def456"}
                  readOnly
                  className="flex-1"
                />
                <Button
                  onClick={() =>
                    copyToClipboard(shareableUrl || "https://portfolio.nikhilchitrapu.com/share/abc123def456")
                  }
                  variant="outline"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">This link will always show your latest portfolio version</p>
            </div>

            {/* Quick Share Options */}
            <div>
              <h4 className="font-semibold mb-3">Quick Share</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button onClick={shareViaEmail} variant="outline" className="justify-start bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Email to Recruiter
                </Button>
                <Button onClick={shareViaLinkedIn} variant="outline" className="justify-start bg-transparent">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Share on LinkedIn
                </Button>
                <Button variant="outline" className="justify-start bg-transparent">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
                <Button variant="outline" className="justify-start bg-transparent">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            </div>

            {/* Link Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Link Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{linkStats.views}</div>
                    <div className="text-sm text-slate-600">Total Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{linkStats.clicks}</div>
                    <div className="text-sm text-slate-600">Contact Clicks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{linkStats.shares}</div>
                    <div className="text-sm text-slate-600">Shares</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-orange-600">{linkStats.lastViewed}</div>
                    <div className="text-sm text-slate-600">Last Viewed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <div>
              <h4 className="font-semibold mb-3">Privacy & Settings</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Public Access</p>
                    <p className="text-xs text-slate-600">Anyone with the link can view</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Enabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">View Tracking</p>
                    <p className="text-xs text-slate-600">Track who views your portfolio</p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Contact Form</p>
                    <p className="text-xs text-slate-600">Allow direct contact through portfolio</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Enabled
                  </Badge>
                </div>
              </div>
            </div>

            {/* Recent Viewers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Recent Viewers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { company: "Tech Corp", location: "Berlin", time: "2 hours ago", type: "Recruiter" },
                    { company: "StartupXYZ", location: "Munich", time: "5 hours ago", type: "Hiring Manager" },
                    { company: "Global Inc", location: "Hamburg", time: "1 day ago", type: "HR Director" },
                  ].map((viewer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{viewer.company}</p>
                        <p className="text-xs text-slate-600">
                          {viewer.location} • {viewer.type}
                        </p>
                      </div>
                      <div className="text-xs text-slate-500">{viewer.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
