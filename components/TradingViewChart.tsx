"use client"
import { useEffect, useRef } from "react"

interface TradingViewChartMainProps {
  symbol?: string
  height?: number
}

export function TradingViewChartMain({ symbol = "BTCUSD", height = 400 }: TradingViewChartMainProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create a simple placeholder chart since TradingView library is not available
    const chartContainer = containerRef.current
    chartContainer.innerHTML = `
      <div style="
        width: 100%;
        height: ${height}px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
        font-weight: bold;
      ">
        ${symbol} Chart
        <br>
        <small style="font-size: 14px; opacity: 0.8;">TradingView integration required</small>
      </div>
    `
  }, [symbol, height])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
      <div ref={containerRef} />
    </div>
  )
}
