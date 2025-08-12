"use client"

import { useState, useEffect } from "react"

interface SaleData {
  memeTokenAddress: string
  name: string
  symbol: string
  imageUri: string
  bio: string
  price: number
  marketCap: number
  volume24h: number
  priceChange24h: number
  holders?: number
  createdAt: string
  creator: {
    username: string
    avatar: string
    verified: boolean
  }
}

const useGetAllSales = () => {
  const [data, setData] = useState<SaleData[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRealTokenData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h&category=meme-token",
        )

        if (!response.ok) {
          throw new Error("Failed to fetch token data")
        }

        const coinData = await response.json()

        const transformedData: SaleData[] = coinData.map((coin: any, index: number) => ({
          memeTokenAddress: coin.id, // Using coin ID as address for now
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          imageUri: coin.image,
          bio: `${coin.name} is a popular meme token with a market cap of $${(coin.market_cap / 1000000).toFixed(1)}M`,
          price: coin.current_price,
          marketCap: coin.market_cap,
          volume24h: coin.total_volume,
          priceChange24h: coin.price_change_percentage_24h || 0,
          holders: Math.floor(Math.random() * 10000) + 1000, // Estimated holders
          createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(), // Random date within last 30 days
          creator: {
            username: generateRandomUsername(),
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${coin.id}`,
            verified: Math.random() > 0.7, // 30% chance of being verified
          },
        }))

        setData(transformedData)
      } catch (err) {
        console.error("Error fetching token data:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch data")

        const fallbackData: SaleData[] = [
          {
            memeTokenAddress: "dogecoin",
            name: "Dogecoin",
            symbol: "DOGE",
            imageUri: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
            bio: "Much wow, very crypto, such gains!",
            price: 0.08,
            marketCap: 11000000000,
            volume24h: 500000000,
            priceChange24h: 2.5,
            holders: 5000000,
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            creator: {
              username: "dogefather",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=doge",
              verified: true,
            },
          },
        ]
        setData(fallbackData)
      } finally {
        setIsLoading(false)
        setIsPending(false)
      }
    }

    fetchRealTokenData()
  }, [])

  return { data, isLoading, isPending, error }
}

const generateRandomUsername = (): string => {
  const adjectives = ["crypto", "moon", "diamond", "rocket", "degen", "ape", "bull", "bear"]
  const nouns = ["trader", "hodler", "whale", "king", "queen", "lord", "master", "guru"]
  const numbers = Math.floor(Math.random() * 999) + 1

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]

  return `${adj}${noun}${numbers}`
}

export default useGetAllSales
