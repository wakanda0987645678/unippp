"use client"
import { useState } from "react"
import Image from "next/image"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const notifications = [
    {
      id: 1,
      type: "follow",
      user: "saramillon",
      action: "Followed you",
      time: "2h",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      type: "trade",
      user: "thrurahseyes",
      action: "Activated their creator coin",
      time: "1d",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      type: "milestone",
      user: "Your profile",
      action: "is heating up",
      detail: "You reached $2.5k market cap",
      time: "3d",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-full p-1 mb-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "all" ? "bg-black text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("trades")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "trades" ? "bg-black text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Trades
          </button>
          <button
            onClick={() => setActiveTab("comments")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "comments" ? "bg-black text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Comments
          </button>
          <button
            onClick={() => setActiveTab("follows")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "follows" ? "bg-black text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Follows
          </button>
        </div>

        {/* Time Sections */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Week</h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src={notification.avatar || "/placeholder.svg"}
                      alt={notification.user}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-gray-900">{notification.user}</span>
                        {notification.type === "follow" && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <div className="text-gray-600">{notification.action}</div>
                      {notification.detail && <div className="text-sm text-gray-500">{notification.detail}</div>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {notification.type === "follow" && (
                      <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                        Follow back
                      </button>
                    )}
                    {notification.type === "trade" && (
                      <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors">
                        Buy
                      </button>
                    )}
                    {notification.type === "milestone" && (
                      <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                        Share
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
