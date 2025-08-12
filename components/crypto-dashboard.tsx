"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CryptoDashboardProps {
  tokenData?: {
    price: number
    marketCap: string
    volume24h: string
    holders: number
  }
}

export function CryptoDashboard({ tokenData }: CryptoDashboardProps) {
  const defaultData = {
    price: 0.000001,
    marketCap: "1.2M",
    volume24h: "45K",
    holders: 1234,
  }

  const data = tokenData || defaultData

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.price.toFixed(8)}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Market Cap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.marketCap}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">24h Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.volume24h}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Holders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.holders.toLocaleString()}</div>
        </CardContent>
      </Card>
    </div>
  )
}
