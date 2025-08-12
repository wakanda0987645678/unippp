"use client"
import { BuySell } from "@/components/BuySell"
import { CryptoDashboard } from "@/components/crypto-dashboard"
import { ThreadUi } from "@/components/thread-ui"
import { TokenHeader } from "@/components/token-header"
import { TradingViewChartMain } from "@/components/TradingViewChart"
import useGetAllSales from "@/hooks/useGetAllSales"
import type { ChartingLibraryWidgetOptions, ResolutionString } from "@/public/static/charting_library/charting_library"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import Script from "next/script"
import { useMemo, useState, useEffect } from "react"

const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  symbol: "METH",
  interval: "60" as ResolutionString,
  library_path: "/static/charting_library/",
  locale: "en",
  charts_storage_api_version: "1.1",
  client_id: "methlab.xyz",
  user_id: "public_user_id",
  fullscreen: false,
  autosize: true,
}

export default function TokenPage() {
  const [isScriptReady, setIsScriptReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [tokenAddress, setTokenAddress] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const { data, isLoading } = useGetAllSales()

  useEffect(() => {
    setMounted(true)
    if (searchParams) {
      setTokenAddress(searchParams.get("address"))
    }
  }, [searchParams])

  const tokenData = useMemo(() => {
    if (!data || !tokenAddress) return null
    return data.find((token: any) => token.memeTokenAddress === tokenAddress)
  }, [data, tokenAddress])

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!tokenData && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Token not found</h2>
          <p className="text-gray-600 dark:text-gray-400">The requested token could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="lazyOnload"
        onReady={() => {
          setIsScriptReady(true)
        }}
      />
      <div className="max-w-7xl relative z-50 pt-40 mx-auto">
        <div className="flex items-start space-x-4 justify-between">
          <div className="w-[70%] ">
            <TokenHeader tokenData={tokenData} />
            {tokenAddress === "dogecoin" ? (
              <div className="h-[350px] relative w-full">
                <Image src={"/images/tv.jpeg"} alt="pump" layout="fill" />
              </div>
            ) : (
              isScriptReady && <TradingViewChartMain {...defaultWidgetProps} symbol={tokenData?.symbol} />
            )}
            <ThreadUi />
          </div>
          <div className="w-[30%] min-w-[400px]">
            <BuySell tokenData={tokenData} />
            <CryptoDashboard tokenData={tokenData} />
          </div>
        </div>
      </div>
    </div>
  )
}
