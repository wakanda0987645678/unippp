"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BuySellProps {
  tokenAddress?: string
  tokenSymbol?: string
}

export function BuySell({ tokenAddress, tokenSymbol = "TOKEN" }: BuySellProps) {
  const [buyAmount, setBuyAmount] = useState("")
  const [sellAmount, setSellAmount] = useState("")

  const handleBuy = () => {
    console.log("Buying", buyAmount, tokenSymbol)
    // Implement buy logic
  }

  const handleSell = () => {
    console.log("Selling", sellAmount, tokenSymbol)
    // Implement sell logic
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="buy-amount">Amount (ETH)</Label>
            <Input
              id="buy-amount"
              type="number"
              placeholder="0.0"
              value={buyAmount}
              onChange={(e) => setBuyAmount(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-500">
            You will receive: ~{buyAmount ? (Number.parseFloat(buyAmount) * 1000000).toLocaleString() : "0"}{" "}
            {tokenSymbol}
          </div>
          <Button onClick={handleBuy} className="w-full bg-green-500 hover:bg-green-600">
            Buy {tokenSymbol}
          </Button>
        </TabsContent>

        <TabsContent value="sell" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sell-amount">Amount ({tokenSymbol})</Label>
            <Input
              id="sell-amount"
              type="number"
              placeholder="0"
              value={sellAmount}
              onChange={(e) => setSellAmount(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-500">
            You will receive: ~{sellAmount ? (Number.parseFloat(sellAmount) / 1000000).toFixed(6) : "0"} ETH
          </div>
          <Button onClick={handleSell} className="w-full bg-red-500 hover:bg-red-600">
            Sell {tokenSymbol}
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
