"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
  avatar?: string
}

interface ThreadUiProps {
  comments?: Comment[]
}

export function ThreadUi({ comments = [] }: ThreadUiProps) {
  const [newComment, setNewComment] = useState("")
  const [allComments, setAllComments] = useState<Comment[]>(comments)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Anonymous",
      content: newComment,
      timestamp: new Date().toLocaleTimeString(),
    }

    setAllComments((prev) => [comment, ...prev])
    setNewComment("")
  }

  return (
    <div className="space-y-6">
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
        />
        <Button type="submit" disabled={!newComment.trim()}>
          Post Comment
        </Button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {allComments.map((comment) => (
          <div key={comment.id} className="flex space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <Avatar className="h-8 w-8">
              <AvatarImage src={comment.avatar || "/placeholder.svg"} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-sm">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.timestamp}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{comment.content}</p>
            </div>
          </div>
        ))}

        {allComments.length === 0 && (
          <div className="text-center py-8 text-gray-500">No comments yet. Be the first to share your thoughts!</div>
        )}
      </div>
    </div>
  )
}
