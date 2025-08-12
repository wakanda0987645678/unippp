"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface CreateTokenProps {
  children: React.ReactNode
}

const CreateToken = ({ children }: CreateTokenProps) => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    description: "",
    image: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle token creation logic here
    console.log("Creating token:", formData)
    setOpen(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[95vw] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="space-y-1 sm:space-y-2">
          <DialogTitle className="text-lg sm:text-xl">Create New Token</DialogTitle>
          <DialogDescription className="text-sm">
            Create your own meme token and launch it to the community.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="name" className="text-sm">
              Token Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Enter token name"
              className="h-9 sm:h-10"
              required
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="symbol" className="text-sm">
              Token Symbol
            </Label>
            <Input
              id="symbol"
              value={formData.symbol}
              onChange={(e) => setFormData((prev) => ({ ...prev, symbol: e.target.value.toUpperCase() }))}
              placeholder="Enter token symbol"
              className="h-9 sm:h-10"
              required
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="description" className="text-sm">
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your token"
              rows={2}
              className="sm:rows-3 resize-none"
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="image" className="text-sm">
              Token Image
            </Label>
            <Input id="image" type="file" accept="image/*" onChange={handleImageChange} className="h-9 sm:h-10" />
          </div>
          <Button type="submit" className="w-full h-9 sm:h-10">
            Create Token
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateToken
