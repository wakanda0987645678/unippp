"use client"
import { useParams } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ProfileSkeleton } from "@/components/ui/page-skeleton"

const ProfilePage = () => {
  const params = useParams()
  const username = params?.username as string
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState("created")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Mock profile data - in real app, fetch based on username
  const profileData = {
    avatar: "/diverse-profile-avatars.png",
    username: username || "user",
    walletAddress: "0x3bE5...C722",
    bio: "the world is starting to realize that the future of social will be onchain.",
    followers: 3,
    following: 12,
    tokens: [
      {
        symbol: "RYNNN",
        price: "$0.09",
        status: "Available in the Creator Pool",
        gradient: "from-green-400 to-purple-500",
      },
    ],
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  if (isLoading) {
    return <ProfileSkeleton />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900">
        <div className="text-center pt-4 pb-3 px-4">
          <div className="relative inline-block mb-3">
            <Image
              src={profileData.avatar || "/placeholder.svg"}
              alt={profileData.username}
              width={80}
              height={80}
              className="rounded-lg mx-auto"
            />
          </div>

          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{profileData.username}</h1>

          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1">
              <svg className="w-3 h-3 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-xs text-gray-600 dark:text-gray-400">{profileData.walletAddress}</span>
            </div>
            <button
              onClick={handleFollow}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                isFollowing
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  : "bg-black dark:bg-white text-white dark:text-black"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 px-2 leading-relaxed">{profileData.bio}</p>

          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className="flex -space-x-1">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={`/social-media-follower.png?height=16&width=16&query=follower ${i}`}
                  alt={`Follower ${i}`}
                  width={16}
                  height={16}
                  className="rounded-full border border-white dark:border-gray-900"
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">{profileData.followers} followers</span>
          </div>
        </div>

        <div className="px-4 mb-4">
          {profileData.tokens.map((token, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <div
                  className={`bg-gradient-to-r ${token.gradient} text-white px-2 py-1 rounded-full text-xs font-medium`}
                >
                  ${token.symbol}
                </div>
                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{token.price}</div>
              <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                {token.status}
              </div>
            </div>
          ))}
        </div>

        <div className="px-4">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab("created")}
                className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "created"
                    ? "border-black dark:border-white text-black dark:text-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Created <sup className="text-xs">2</sup>
              </button>
              <button
                onClick={() => setActiveTab("owned")}
                className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "owned"
                    ? "border-black dark:border-white text-black dark:text-white"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Owned <sup className="text-xs">3</sup>
              </button>
            </div>
            <div className="flex space-x-1">
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="text-2xl mb-2">🎨</div>
            <p className="text-xs">No {activeTab} tokens yet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
