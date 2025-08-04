"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Trash2, Save, X } from "lucide-react"

interface ContentEditorProps {
  isOpen: boolean
  onClose: () => void
  section: string
  data: any
  onSave: (data: any) => void
}

export function ContentEditor({ isOpen, onClose, section, data, onSave }: ContentEditorProps) {
  const [editData, setEditData] = useState(data)

  const handleSave = () => {
    onSave(editData)
    onClose()
  }

  const renderPersonalInfoEditor = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={editData.name || ""}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="title">Professional Title</Label>
          <Input
            id="title"
            value={editData.title || ""}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="tagline">Tagline</Label>
        <Textarea
          id="tagline"
          value={editData.tagline || ""}
          onChange={(e) => setEditData({ ...editData, tagline: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={editData.email || ""}
            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={editData.phone || ""}
            onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
          />
        </div>
      </div>
    </div>
  )

  const renderSkillEditor = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Technical Skills</h4>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Add Skill
        </Button>
      </div>
      {editData.technical?.map((skill: any, index: number) => (
        <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
          <div className="flex items-center space-x-2">
            <Switch
              checked={skill.enabled}
              onCheckedChange={(checked) => {
                const newSkills = [...editData.technical]
                newSkills[index].enabled = checked
                setEditData({ ...editData, technical: newSkills })
              }}
            />
            <Label>Enabled</Label>
          </div>
          <Input
            value={skill.name}
            onChange={(e) => {
              const newSkills = [...editData.technical]
              newSkills[index].name = e.target.value
              setEditData({ ...editData, technical: newSkills })
            }}
            className="flex-1"
          />
          <Input
            type="number"
            min="0"
            max="100"
            value={skill.proficiency}
            onChange={(e) => {
              const newSkills = [...editData.technical]
              newSkills[index].proficiency = Number.parseInt(e.target.value)
              setEditData({ ...editData, technical: newSkills })
            }}
            className="w-20"
          />
          <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  )

  const renderExperienceEditor = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Experience Entries</h4>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Add Experience
        </Button>
      </div>
      {editData.entries?.map((job: any, index: number) => (
        <Card key={job.id} className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Switch
                checked={job.enabled}
                onCheckedChange={(checked) => {
                  const newEntries = [...editData.entries]
                  newEntries[index].enabled = checked
                  setEditData({ ...editData, entries: newEntries })
                }}
              />
              <Label>Enabled</Label>
            </div>
            <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Company"
              value={job.company}
              onChange={(e) => {
                const newEntries = [...editData.entries]
                newEntries[index].company = e.target.value
                setEditData({ ...editData, entries: newEntries })
              }}
            />
            <Input
              placeholder="Position"
              value={job.position}
              onChange={(e) => {
                const newEntries = [...editData.entries]
                newEntries[index].position = e.target.value
                setEditData({ ...editData, entries: newEntries })
              }}
            />
          </div>
        </Card>
      ))}
    </div>
  )

  const renderSectionToggle = () => (
    <div className="space-y-4">
      <h4 className="font-semibold">Section Visibility</h4>
      {Object.entries(editData).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between">
          <Label htmlFor={key} className="capitalize">
            {key} Section
          </Label>
          <Switch
            id={key}
            checked={value as boolean}
            onCheckedChange={(checked) => setEditData({ ...editData, [key]: checked })}
          />
        </div>
      ))}
    </div>
  )

  const renderEditor = () => {
    switch (section) {
      case "personal":
        return renderPersonalInfoEditor()
      case "skills":
        return renderSkillEditor()
      case "experience":
        return renderExperienceEditor()
      case "sections":
        return renderSectionToggle()
      default:
        return <div>Editor for {section} coming soon...</div>
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="capitalize">Edit {section}</DialogTitle>
          <DialogDescription>Make changes to your {section} information</DialogDescription>
        </DialogHeader>
        <div className="py-4">{renderEditor()}</div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4 mr-1" />
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-1" />
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
