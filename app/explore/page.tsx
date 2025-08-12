"use client"
import useGetAllSales from "@/hooks/useGetAllSales"
import { ExploreSkeleton } from "@/components/ui/page-skeleton"
import Image from "next/image"
import { Link } from "wouter"
import { useMemo, useState } from "react"

const ExplorePage = () => {
  const { data, isLoading, isPending } = useGetAllSales()
  const [isGridView, setIsGridView] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  const enhancedData = useMemo(() => {
    if (!data) return null

    const prices = [128, 241, 89, 157, 67, 45, 313, 79, 189, 135, 268, 204]
    const changes = [8, 15, -2, 13, -5, 4, 25, -1, 10, 7, 14, 19]
    const marketCaps = ["13K", "24K", "9K", "16K", "7K", "5K", "31K", "8K", "19K", "13K", "27K", "20K"]
    const times = ["2m", "2m", "4m", "8m", "12m", "18m", "22m", "25m", "30m", "35m", "40m", "15m"]
    const holders = [2, 2, 3, 1, 4, 2, 5, 2, 3, 4, 6, 3]
    const comments = [5, 12, 3, 8, 15, 7, 22, 4, 11, 9, 18, 6]
    const usernames = [
      "travy",
      "shitposts",
      "saudade",
      "ismo",
      "ilovemolly4ever",
      "jaykimvalentine",
      "cryptoking",
      "moonshot",
      "degenerate",
      "hodler",
      "diamondhands",
      "rocketman",
    ]

    return data.map((item: any, index: number) => ({
      ...item,
      price: prices[index % prices.length],
      change: changes[index % changes.length],
      marketCap: marketCaps[index % marketCaps.length],
      time: times[index % times.length],
      holders: holders[index % holders.length],
      comments: comments[index % comments.length],
      username: usernames[index % usernames.length],
    }))
  }, [data])

  if (isLoading || isPending) {
    return <ExploreSkeleton />
  }

  return (
    <div className="max-w-6xl mx-auto px-0 md:px-4 py-0 md:py-8">
      <div className="md:hidden px-4 pt-4 pb-2">
        {/* Search Bar */}
        <div className="relative mb-4">
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Category Tabs with Grid/List Toggle */}
        <div className="flex items-center space-x-3 mb-4">
          {/* Grid/List Toggle */}
          <button onClick={() => setIsGridView(!isGridView)} className="p-2 bg-gray-800 rounded-lg flex-shrink-0">
            {isGridView ? (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Category Tabs */}
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            <button className="px-4 py-2 bg-white text-black rounded-full font-medium flex-shrink-0 text-sm">
              ⭐ Featured
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full font-medium flex-shrink-0 text-sm">
              👑 Top Creators
            </button>
            <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full font-medium flex-shrink-0 text-sm">
              👥 Friends
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-8 px-4 md:px-0 hidden md:block">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">Explore</h1>
        <div className="flex space-x-3 md:space-x-6 border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide">
          <button className="pb-2 md:pb-3 px-1 border-b-2 border-purple-500 text-purple-600 font-medium flex-shrink-0 text-sm md:text-base">
            ⭐ Featured
            <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-500">1847</span>
            <span className="ml-1 text-green-500">📈</span>
          </button>
          <button className="pb-2 md:pb-3 px-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 flex-shrink-0 text-sm md:text-base">
            📈 Trending
            <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-500">2847</span>
            <span className="ml-1 text-green-500">📈</span>
          </button>
          <button className="pb-2 md:pb-3 px-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 flex-shrink-0 text-sm md:text-base">
            🎵 Music
            <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-500">1523</span>
            <span className="ml-1 text-green-500">📈</span>
          </button>
          <button className="pb-2 md:pb-3 px-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 flex-shrink-0 text-sm md:text-base">
            🎥 Videos
            <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-500">3291</span>
            <span className="ml-1 text-green-500">📈</span>
          </button>
          <button className="pb-2 md:pb-3 px-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 flex-shrink-0 text-sm md:text-base">
            More →
          </button>
        </div>
      </div>

      <div className="space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0 px-0 md:px-0">
        {enhancedData &&
          enhancedData.map((item: any, index: number) => {
            const isPositive = item.change > 0

            return (
              <div key={item.memeTokenAddress} className="relative">
                {/* Instagram-style header */}
                <div className="bg-white dark:bg-gray-800 rounded-none md:rounded-2xl border-0 md:border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 md:hover:-translate-y-1 border-b border-gray-100 dark:border-gray-700 md:border-b-0">
                  <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src={item.imageUri || "/placeholder.svg"}
                          alt={item.username}
                          width={32}
                          height={32}
                          className="rounded-full"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.username}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{item.time}</span>
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropdown(openDropdown === index ? null : index)
                          }}
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                        >
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === index && (
                          <div className="absolute right-0 top-8 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                            <div className="py-2">
                              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  />
                                </svg>
                                <span>Copy address</span>
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                <span>Download</span>
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3">
                                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">B</span>
                                </div>
                                <span>Basescan</span>
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3">
                                <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">G</span>
                                </div>
                                <span>GeckoTerminal</span>
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3">
                                <div className="w-4 h-4 bg-black rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">D</span>
                                </div>
                                <span>DEX Screener</span>
                              </button>
                              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3">
                                <div className="w-4 h-4 bg-blue-400 rounded flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">T</span>
                                </div>
                                <span>TokenChat</span>
                              </button>
                              <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                              <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                  />
                                </svg>
                                <span>Report</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Link href={`/token?address=${item.memeTokenAddress}`}>
                    <div className="p-4 cursor-pointer">
                      {/* Token Image */}
                      <div className="aspect-square mb-3 relative overflow-hidden rounded-xl">
                        <Image
                          src={item.imageUri || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Token Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">{item.name}</h3>
                          <span className="text-xs text-gray-500">${item.symbol?.toLowerCase() || "token"}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}>
                              ${item.price}
                            </span>
                            <span
                              className={`text-xs flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}
                            >
                              {isPositive ? "▲" : "▼"} {Math.abs(item.change)}%
                            </span>
                          </div>
                          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            MC ${item.marketCap}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                              </svg>
                              <span>{item.comments}</span>
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
                              <span>{item.holders}</span>
                            </div>
                          </div>
                          {index < 3 && (
                            <span className="bg-green-500 text-white px-1.5 py-0.5 rounded text-xs font-medium">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>

      {/* Load More */}
      <div className="text-center mt-8 md:mt-12 px-4 md:px-0">
        <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-colors text-sm md:text-base">
          Load more tokens
        </button>
      </div>
    </div>
  )
}

export default ExplorePage
