"use client"
import useGetAllSales from "@/hooks/useGetAllSales"
import { TokenCardSkeleton } from "@/components/ui/token-card-skeleton"
import Image from "next/image"
import { Link } from "wouter"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

const HomePage = () => {
  const { data, isLoading, isPending, error } = useGetAllSales()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (tokenAddress: string) => {
    setOpenDropdown(openDropdown === tokenAddress ? null : tokenAddress)
  }

  const formatPrice = (price: number) => {
    if (price < 0.01) return `$${price.toFixed(6)}`
    if (price < 1) return `$${price.toFixed(4)}`
    return `$${price.toFixed(2)}`
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(1)}B`
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(1)}M`
    if (marketCap >= 1e3) return `$${(marketCap / 1e3).toFixed(1)}K`
    return `$${marketCap.toFixed(0)}`
  }

  const formatTimeAgo = (dateString: string) => {
    const now = new Date()
    const created = new Date(dateString)
    const diffInHours = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return `${Math.floor(diffInHours * 60)}m`
    if (diffInHours < 24) return `${diffInHours}h`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d`
    return `${Math.floor(diffInDays / 7)}w`
  }

  const PromotionalCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-none md:rounded-2xl border-0 md:border border-gray-200 dark:border-gray-700 overflow-hidden p-4 md:p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">$MRBEAST</h2>
            <div className="flex items-center space-x-1">
              {/* Twitter Icon */}
              <div className="w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              {/* Twitch Icon */}
              <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
              </div>
              {/* YouTube Icon */}
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">$8.9m</p>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-xs font-medium">
              PVT
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 14l5-5 5 5z" />
            </svg>
            <span className="text-green-500 font-semibold">5.12%</span>
          </div>
        </div>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="aspect-square rounded-lg overflow-hidden">
          <Image
            src="/cyberpunk-city-neon.png"
            alt="Promotional image 1"
            width={120}
            height={120}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <Image
            src="/neon-castle.png"
            alt="Promotional image 2"
            width={120}
            height={120}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-lg overflow-hidden">
          <Image
            src="/glowing-orbs-digital-space.png"
            alt="Promotional image 3"
            width={120}
            height={120}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-1">
              <Image
                src="/user-avatar-1.png"
                alt="Buyer 1"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-800"
              />
              <Image
                src="/diverse-user-avatar-set-2.png"
                alt="Buyer 2"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-800"
              />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Bought by <span className="font-medium">dockerzxbt</span> and{" "}
              <span className="font-medium">1182 others</span>
            </span>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          CLAIM
        </button>
      </div>
    </div>
  )

  if (isLoading || isPending) {
    return (
      <div className="space-y-0 md:space-y-6 px-0 md:px-0">
        <Toaster />
        {Array.from({ length: 6 }).map((_, i) => (
          <TokenCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-500 mb-2">Error loading tokens: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-0 md:space-y-6 px-0 md:px-0">
      <Toaster />
      <div className="space-y-0 md:space-y-6">
        {data?.map((item, index) => (
          <div key={item.memeTokenAddress}>
            <Link href={`/token?address=${item.memeTokenAddress}`}>
              <div className="bg-white dark:bg-gray-800 rounded-none md:rounded-2xl border-0 md:border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-200 md:hover:-translate-y-1 relative cursor-pointer">
                <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={item.creator.avatar || "/placeholder.svg"}
                        alt={item.creator.username}
                        width={32}
                        height={32}
                        className="rounded-lg"
                        loading="lazy"
                      />
                      {item.creator.verified && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center border border-white dark:border-gray-800">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.creator.username}</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{formatTimeAgo(item.createdAt)}</span>
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleDropdown(item.memeTokenAddress)
                        }}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </button>
                      {openDropdown === item.memeTokenAddress && (
                        <div className="absolute right-0 top-8 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
                          <div className="py-2">
                            <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              Copy address
                            </button>
                            <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              Download
                            </button>
                            <div className="border-t border-gray-100 dark:border-gray-600 my-1"></div>
                            <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">B</span>
                              </div>
                              Basescan
                            </button>
                            <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">G</span>
                              </div>
                              GeckoTerminal
                            </button>
                            <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                                <span className="text-white text-xs font-bold">D</span>
                              </div>
                              DEX Screener
                            </button>
                            <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div className="w-4 h-4 bg-blue-400 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">T</span>
                              </div>
                              TokenChat
                            </button>
                            <div className="border-t border-gray-100 dark:border-gray-600 my-1"></div>
                            <button className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                              </svg>
                              Report
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute top-16 right-3 z-10">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium shadow-lg text-white ${
                      item.priceChange24h >= 0 ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    MC {formatMarketCap(item.marketCap)}
                  </span>
                </div>

                <div className="aspect-square relative">
                  <Image
                    src={item.imageUri || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    priority={false}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-end p-4">
                    <div className="flex space-x-2 opacity-0 hover:opacity-100 transition-opacity">
                      <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base truncate">
                            {item.name}
                          </h3>
                          <span className="text-gray-500 text-xs md:text-sm flex-shrink-0">
                            ${item.symbol?.toLowerCase() || "token"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 md:space-x-4 text-xs text-gray-500 mt-1">
                          <div className="flex items-center space-x-1">
                            <span className="font-medium text-gray-900 dark:text-white">{formatPrice(item.price)}</span>
                            <span className={`${item.priceChange24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                              {item.priceChange24h >= 0 ? "+" : ""}
                              {item.priceChange24h.toFixed(2)}%
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                            <span>{item.holders?.toLocaleString() || "N/A"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors flex-shrink-0"
                    >
                      Buy
                    </button>
                  </div>

                  {item.bio && (
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {item.bio}
                    </p>
                  )}
                </div>
              </div>
            </Link>
            {(index + 1) % 3 === 0 && <PromotionalCard />}
          </div>
        ))}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Create Token</h2>
              <button onClick={() => setShowCreateModal(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">📁</div>
                <h3 className="font-semibold mb-2">Upload photos and videos</h3>
                <p className="text-gray-500 text-sm mb-4">Drag or select up to 15 files to create a token. Max 6GB.</p>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium">Browse files</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
