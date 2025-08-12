"use client"
import { useState } from "react"
import { useAccount, useWriteContract } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FaucetPage() {
  const { address, isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const { writeContract } = useWriteContract()

  const handleClaimTokens = async () => {
    if (!isConnected) {
      setMessage("Please connect your wallet first")
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      // This would typically call a faucet contract or API
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call
      setMessage("Test tokens claimed successfully!")
    } catch (error) {
      setMessage("Failed to claim tokens. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto pt-20 px-4">
        <h1 className="text-3xl font-bold mb-8">Token Faucet</h1>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Claim Test Tokens</CardTitle>
            <CardDescription className="text-gray-400">
              Get free test tokens for development and testing purposes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {message && (
              <Alert className={message.includes("success") ? "border-green-500" : "border-red-500"}>
                <AlertDescription className={message.includes("success") ? "text-green-400" : "text-red-400"}>
                  {message}
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <p className="text-sm text-gray-400">Connected Address:</p>
              <p className="font-mono text-sm bg-gray-800 p-2 rounded">{isConnected ? address : "Not connected"}</p>
            </div>

            <Button
              onClick={handleClaimTokens}
              disabled={!isConnected || isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? "Claiming..." : "Claim Test Tokens"}
            </Button>

            <p className="text-xs text-gray-500 text-center">You can claim test tokens once every 24 hours</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
