"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { History, RotateCcw, Save, Eye, Download, Trash2, GitBranch } from "lucide-react"

interface VersionControlProps {
  currentData: any
  onRestore: (data: any) => void
}

interface Version {
  id: string
  timestamp: string
  description: string
  data: any
  changes: string[]
}

export function VersionControl({ currentData, onRestore }: VersionControlProps) {
  const [versions, setVersions] = useState<Version[]>([])
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    // Load versions from localStorage
    const savedVersions = localStorage.getItem("portfolioVersions")
    if (savedVersions) {
      setVersions(JSON.parse(savedVersions))
    } else {
      // Create initial version
      const initialVersion: Version = {
        id: "v1.0.0",
        timestamp: new Date().toISOString(),
        description: "Initial portfolio version",
        data: currentData,
        changes: ["Portfolio created"],
      }
      setVersions([initialVersion])
      localStorage.setItem("portfolioVersions", JSON.stringify([initialVersion]))
    }
  }, [])

  const saveCurrentVersion = () => {
    const newVersion: Version = {
      id: `v${versions.length + 1}.0.0`,
      timestamp: new Date().toISOString(),
      description: `Manual save - ${new Date().toLocaleDateString()}`,
      data: currentData,
      changes: ["Manual save point created"],
    }

    const updatedVersions = [newVersion, ...versions]
    setVersions(updatedVersions)
    localStorage.setItem("portfolioVersions", JSON.stringify(updatedVersions))
  }

  const restoreVersion = (version: Version) => {
    onRestore(version.data)

    // Create a restore point
    const restoreVersion: Version = {
      id: `v${versions.length + 1}.0.0`,
      timestamp: new Date().toISOString(),
      description: `Restored from ${version.id}`,
      data: version.data,
      changes: [`Restored from version ${version.id}`],
    }

    const updatedVersions = [restoreVersion, ...versions]
    setVersions(updatedVersions)
    localStorage.setItem("portfolioVersions", JSON.stringify(updatedVersions))
  }

  const deleteVersion = (versionId: string) => {
    const updatedVersions = versions.filter((v) => v.id !== versionId)
    setVersions(updatedVersions)
    localStorage.setItem("portfolioVersions", JSON.stringify(updatedVersions))
  }

  const exportVersion = (version: Version) => {
    const dataStr = JSON.stringify(version.data, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = `portfolio-${version.id}.json`
    link.click()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <History className="w-5 h-5 mr-2" />
              Version Control
            </div>
            <Button onClick={saveCurrentVersion} className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Save Current Version
            </Button>
          </CardTitle>
          <CardDescription>Track changes and restore previous versions of your portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {versions.map((version, index) => (
              <div
                key={version.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <Badge variant={index === 0 ? "default" : "secondary"}>{version.id}</Badge>
                    {index === 0 && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Current
                      </Badge>
                    )}
                    <span className="font-medium">{version.description}</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    <p>Saved: {new Date(version.timestamp).toLocaleString()}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {version.changes.map((change, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {change}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedVersion(version)
                      setShowPreview(true)
                    }}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => exportVersion(version)}>
                    <Download className="w-4 h-4" />
                  </Button>
                  {index !== 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => restoreVersion(version)}
                      className="text-blue-600 bg-transparent"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  )}
                  {versions.length > 1 && index !== 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteVersion(version.id)}
                      className="text-red-600 bg-transparent"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Version Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <GitBranch className="w-5 h-5 mr-2" />
            Version Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{versions.length}</div>
              <div className="text-sm text-blue-700">Total Versions</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {versions[0] ? new Date(versions[0].timestamp).toLocaleDateString() : "N/A"}
              </div>
              <div className="text-sm text-green-700">Last Updated</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{currentData.experience?.length || 0}</div>
              <div className="text-sm text-purple-700">Experience Entries</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {(currentData.skills?.technical?.length || 0) + (currentData.skills?.aiSkills?.length || 0)}
              </div>
              <div className="text-sm text-orange-700">Skills Listed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auto-Save Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Auto-Save Settings</CardTitle>
          <CardDescription>Configure automatic version saving</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Auto-save on changes</h4>
                <p className="text-sm text-slate-600">Automatically create versions when content changes</p>
              </div>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Daily backups</h4>
                <p className="text-sm text-slate-600">Create daily backup versions</p>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Version retention</h4>
                <p className="text-sm text-slate-600">Keep last 10 versions (older versions auto-deleted)</p>
              </div>
              <Button variant="outline" size="sm">
                Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Version Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Version Preview: {selectedVersion?.id}</DialogTitle>
            <DialogDescription>
              Preview of portfolio data from{" "}
              {selectedVersion ? new Date(selectedVersion.timestamp).toLocaleString() : ""}
            </DialogDescription>
          </DialogHeader>

          {selectedVersion && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>Name:</strong> {selectedVersion.data.personalInfo?.name}
                    </p>
                    <p>
                      <strong>Title:</strong> {selectedVersion.data.personalInfo?.title}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedVersion.data.personalInfo?.email}
                    </p>
                    <p>
                      <strong>Location:</strong> {selectedVersion.data.personalInfo?.location}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{selectedVersion.data.experience?.length || 0} positions</p>
                    {selectedVersion.data.experience?.slice(0, 2).map((exp: any, index: number) => (
                      <div key={index} className="mt-2 p-2 bg-slate-50 rounded">
                        <p className="font-medium text-sm">{exp.position}</p>
                        <p className="text-xs text-slate-600">{exp.company}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowPreview(false)}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    restoreVersion(selectedVersion)
                    setShowPreview(false)
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restore This Version
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
