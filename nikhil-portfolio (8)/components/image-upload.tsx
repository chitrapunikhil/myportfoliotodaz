"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Camera, Trash2, Download, Crop, Palette, Brain } from "lucide-react"

interface ImageUploadProps {
  currentImage: string
  onImageUpdate: (newImageUrl: string) => void
}

export function ImageUpload({ currentImage, onImageUpdate }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file")
      return
    }

    setUploading(true)

    try {
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)

      // Simulate upload process (in real app, upload to cloud storage)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For demo, we'll use the preview as the final image
      const imageUrl = URL.createObjectURL(file)
      onImageUpdate(imageUrl)
    } catch (error) {
      console.error("Upload failed:", error)
      alert("Upload failed. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Profile Image Management
          </CardTitle>
          <CardDescription>Upload and manage your professional profile image</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Image Display */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h4 className="font-semibold mb-3">Current Profile Image</h4>
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <img
                  src={currentImage || "/placeholder.svg"}
                  alt="Current profile"
                  className="w-full h-full object-cover rounded-full border-4 border-slate-200 shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"></div>
              </div>
            </div>

            {previewImage && (
              <div className="flex-1">
                <h4 className="font-semibold mb-3">Preview</h4>
                <div className="relative w-48 h-48 mx-auto md:mx-0">
                  <img
                    src={previewImage || "/placeholder.svg"}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-full border-4 border-green-200 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full"></div>
                </div>
              </div>
            )}
          </div>

          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : uploading
                  ? "border-green-500 bg-green-50"
                  : "border-slate-300 hover:border-slate-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <Upload className={`w-6 h-6 ${uploading ? "text-green-600" : "text-slate-600"}`} />
              </div>

              <div>
                <p className="text-lg font-medium text-slate-700">
                  {uploading ? "Uploading..." : "Drop your image here, or click to browse"}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Supports JPG, PNG, WebP up to 10MB. Recommended: 400x400px square image
                </p>
              </div>

              <Button onClick={openFileDialog} disabled={uploading} className="mt-4">
                <Upload className="w-4 h-4 mr-2" />
                {uploading ? "Uploading..." : "Choose File"}
              </Button>
            </div>
          </div>

          {/* Image Tools */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="flex items-center justify-center bg-transparent">
              <Crop className="w-4 h-4 mr-2" />
              Crop Image
            </Button>
            <Button variant="outline" className="flex items-center justify-center bg-transparent">
              <Palette className="w-4 h-4 mr-2" />
              Enhance
            </Button>
            <Button variant="outline" className="flex items-center justify-center bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="flex items-center justify-center text-red-600 bg-transparent">
              <Trash2 className="w-4 h-4 mr-2" />
              Remove
            </Button>
          </div>

          {/* Image Guidelines */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Professional Image Guidelines</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Use a high-quality, well-lit professional headshot</li>
              <li>• Maintain eye contact with the camera</li>
              <li>• Wear professional attire appropriate for your industry</li>
              <li>• Use a clean, neutral background</li>
              <li>• Ensure your face takes up 60-70% of the frame</li>
              <li>• Smile naturally and appear approachable</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* AI-Generated Alternatives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            AI-Generated Professional Photos
          </CardTitle>
          <CardDescription>Generate professional headshots using AI (Coming Soon)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                <div className="w-full aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-slate-400" />
                </div>
                <Button size="sm" className="w-full mt-2 bg-transparent" variant="outline" disabled>
                  Generate Style {i}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-4">
            AI photo generation will be available soon. Upload your own professional photo for now.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
