"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TokenHeaderProps {
  name: string
  symbol: string
  imageUri: string
  description?: string
  marketCap?: string
  holders?: number
  verified?: boolean
}

export function TokenHeader({
  name,
  symbol,
  imageUri,
  description,
  marketCap,
  holders,
  verified = false,
}: TokenHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <Image src={imageUri || "/placeholder.svg"} alt={name} width={80} height={80} className="rounded-full" />
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <Badge variant="secondary">${symbol}</Badge>
          </div>

          {description && <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>}

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            {marketCap && (
              <div>
                <span className="font-medium">Market Cap:</span> ${marketCap}
              </div>
            )}
            {holders && (
              <div>
                <span className="font-medium">Holders:</span> {holders.toLocaleString()}
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Share
          </Button>
          <Button size="sm">Follow</Button>
        </div>
      </div>
    </div>
  )
}
