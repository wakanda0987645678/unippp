"'use client'"

import { Button } from "@/components/ui/button"
import useGetAllSales from "@/hooks/useGetAllSales"
import Image from "next/image"
import { useLocation } from "wouter"
import { erc20Abi, formatUnits } from "viem"
import { useAccount, useReadContract } from "wagmi"

export function CryptoPortfolio({ heldOnly, createdOnly }: { heldOnly?: boolean; createdOnly?: boolean }) {
  const { data } = useGetAllSales()
  const { address } = useAccount()
  // Props to control filtering
  // heldOnly: show only tokens with nonzero balance
  // createdOnly: show only tokens created by the user
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <div className="max-w-2xl mx-auto space-y-4">
        {data &&
          data.map((token) => (
            <TokenComp
              token={token}
              key={token.memeTokenAddress}
              userAddress={address}
              heldOnly={!!(typeof heldOnly !== "undefined" && heldOnly)}
              createdOnly={!!(typeof createdOnly !== "undefined" && createdOnly)}
            />
          ))}
      </div>
    </div>
  )
}

const TokenComp = ({
  token,
  userAddress,
  heldOnly,
  createdOnly,
}: { token: any; userAddress: string; heldOnly?: boolean; createdOnly?: boolean }) => {
  const { data } = useReadContract({
    abi: erc20Abi,
    address: token.memeTokenAddress,
    functionName: "balanceOf",
    args: [userAddress as `0x${string}`],
    query: {
      select(data) {
        return formatUnits(data, 18)
      },
    },
  })
  const [location, setLocation] = useLocation()
  // Filtering logic
  if (heldOnly && (!data || Number.parseFloat(data) === 0)) return null
  if (createdOnly && token.createdBy?.toLowerCase() !== userAddress?.toLowerCase()) return null
  return (
    <div key={token.memeTokenAddress} className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={token.imageUri || "/placeholder.svg"}
          alt={`${token.name} icon`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span>{token.symbol}</span>
          </div>
          <div className="text-emerald-400 font-medium">
            {data ? data : "0"} {token.symbol}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLocation(`/token?address=${token.memeTokenAddress}`)}
          className="text-zinc-400 hover:text-white"
        >
          view coin
        </Button>
      </div>
    </div>
  )
}

export default TokenComp
