"use client"
import { Address, Avatar, EthBalance, Identity, Name } from "@coinbase/onchainkit/identity"
import {
  ConnectWallet,
  ConnectWalletText,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet"
import { PersonStanding, Settings, Bell } from "lucide-react"
import { Link } from "wouter"
import { useState } from "react"
import { useAccountEffect } from "wagmi"
import ProfileModal from "../profile/ProfileModal"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useAccountEffect({
    onConnect: () => {
      console.log("connected")
      setOpen(true)
    },
  })

  return (
    <>
      <ProfileModal open={open} setOpen={setOpen} />

      {/* Zora-style Wallet Connection */}
      <div className="w-full">
        <Wallet>
          <ConnectWallet
            withWalletAggregator
            className="w-full bg-gray-100 hover:bg-gray-200 rounded-xl p-3 text-sm font-medium transition-colors"
          >
            <ConnectWalletText className="text-gray-900">Connect</ConnectWalletText>
            <Avatar className="h-5 w-5" />
          </ConnectWallet>
          <WalletDropdown className="border border-gray-200 bg-white rounded-xl shadow-lg mt-2">
            <Identity className="px-4 pt-3 pb-2 text-gray-900" hasCopyAddressOnClick>
              <Avatar />
              <Name />
              <Address className="text-gray-500" />
              <EthBalance />
            </Identity>

            <div className="border-t border-gray-100">
              <Link href="/profile">
                <a className="p-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition-colors">
                  <PersonStanding className="w-4 h-4" />
                  <span className="text-sm">Profile</span>
                </a>
              </Link>
              <Link href="/notifications">
                <a className="p-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition-colors">
                  <Bell className="w-4 h-4" />
                  <span className="text-sm">Notifications</span>
                </a>
              </Link>
              <Link href="/settings">
                <a className="p-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Settings</span>
                </a>
              </Link>
            </div>

            <div className="border-t border-gray-100">
              <WalletDropdownLink
                className="text-gray-700 hover:bg-gray-50 p-3"
                icon="wallet"
                href="https://keys.coinbase.com"
              >
                <span className="text-sm">Wallet</span>
              </WalletDropdownLink>
              <WalletDropdownDisconnect className="text-red-600 hover:bg-red-50 p-3 text-sm" />
            </div>
          </WalletDropdown>
        </Wallet>
      </div>
    </>
  )
}

export default Navbar
