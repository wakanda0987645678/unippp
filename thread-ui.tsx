"use client"

interface Comment {
  id: string
  user: {
    name: string
    badge?: string
    avatar: string
  }
  timestamp: string
  likes: number
  text: string
  commentId: string
}

export function ThreadUi() {}
