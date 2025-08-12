"use client"
import { useState } from "react"
import Image from "next/image"
import { Settings, Share, MoreHorizontal } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("created")
  const [showHoldersModal, setShowHoldersModal] = useState(false)

  // Mock data - replace with real data
  const profileData = {
    name: "UniPump Creator",
    username: "unipump",
    bio: "Creating the future of meme tokens",
    followers: 1234,
    following: 567,
    marketCap: "$56,647",
    avatar: "/placeholder.svg?height=120&width=120",
    verified: true,
  }

  const tokens = [
    { id: 1, image: "/placeholder.svg?height=200&width=200", name: "WOJAK" },
    { id: 2, image: "/placeholder.svg?height=200&width=200", name: "PEPE" },
    { id: 3, image: "/placeholder.svg?height=200&width=200", name: "DOGE" },
    { id: 4, image: "/placeholder.svg?height=200&width=200", name: "SHIB" },
    { id: 5, image: "/placeholder.svg?height=200&width=200", name: "FLOKI" },
    { id: 6, image: "/placeholder.svg?height=200&width=200", name: "BONK" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={profileData.avatar || "/placeholder.svg"}
                alt={profileData.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              {profileData.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
              <p className="text-gray-500">@{profileData.username}</p>
              <p className="text-gray-700 mt-2">{profileData.bio}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Share className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 mb-8">
          <div>
            <span className="font-semibold text-gray-900">{profileData.followers}</span>
            <span className="text-gray-500 ml-1">followers</span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">{profileData.following}</span>
            <span className="text-gray-500 ml-1">following</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Market cap</span>
            <span className="font-semibold text-green-600">{profileData.marketCap}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-8">
          <button
            onClick={() => setShowHoldersModal(true)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full font-medium transition-colors"
          >
            Buy
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-4 rounded-full font-medium transition-colors">
            Follow
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("created")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "created"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Created
          </button>
          <button
            onClick={() => setActiveTab("collected")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "collected"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Collected
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "activity"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Activity
          </button>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-3 gap-1">
          {tokens.map((token) => (
            <div key={token.id} className="aspect-square relative group cursor-pointer">
              <Image
                src={token.image || "/placeholder.svg"}
                alt={token.name}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg" />
            </div>
          ))}
        </div>

        {/* Holders Modal */}
        {showHoldersModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveTab("holders")}
                    className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "holders" ? "border-black text-black" : "border-transparent text-gray-500"
                    }`}
                  >
                    Holders
                  </button>
                  <button
                    onClick={() => setActiveTab("activity")}
                    className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "activity" ? "border-black text-black" : "border-transparent text-gray-500"
                    }`}
                  >
                    Activity
                  </button>
                </div>
                <button onClick={() => setShowHoldersModal(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <div>
                      <div className="font-medium">Market</div>
                      <div className="text-sm text-gray-500">50%</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">50%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">unipump (you)</div>
                      <div className="text-sm text-gray-500">50%</div>
                    </div>
                  </div>
                  <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">&lt;0.001%</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
