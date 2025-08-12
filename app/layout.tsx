import type React from "react"
import localFont from "next/font/local"
import "./globals.css"
import { Providers } from "@/providers"
import Navbar from "@/components/layout/Navbar"
import CreateToken from "@/components/CreateToken"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Router, Route, Link } from "wouter"
import HomePage from "./page"
import ExplorePage from "./explore/page"
import ProfilePage from "../profile/page"
import TokenPage from "../token/page"
import NotificationsPage from "../notifications/page"
import SettingsPage from "../settings/page"
import FaucetPage from "../faucet/page"
import { Compass, Search, Plus, Bell } from "lucide-react"
import { Suspense } from "react"
import { SplashScreen } from "@/components/ui/splash-screen"

const poppinsRounded = localFont({
  src: "./fonts/PoppinsRounded-Rounded.ttf",
  variable: "--font-poppins-rounded",
  weight: "100 900",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppinsRounded.variable}>
      <body className={`antialiased`}>
        <Providers>
          <SplashScreen />
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <div className="min-h-screen bg-white dark:bg-gray-900">
                {/* Left Sidebar - Desktop Only */}
                <div className="hidden md:flex fixed left-0 top-0 h-full w-20 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 flex-col items-center py-6">
                  {/* Logo */}
                  <div className="mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">U</span>
                    </div>
                  </div>
                  {/* Navigation Icons */}
                  <nav className="flex flex-col space-y-6">
                    <Link
                      href="/"
                      className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <Compass className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white" />
                    </Link>
                    <Link
                      href="/explore"
                      className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <Search className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white" />
                    </Link>
                    <CreateToken>
                      <button className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
                        <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white" />
                      </button>
                    </CreateToken>
                    <Link
                      href="/notifications"
                      className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group relative"
                    >
                      <Bell className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white" />
                      {/* Red notification badge */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    </Link>
                    <Link
                      href="/profile"
                      className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </Link>
                  </nav>
                  <div className="mt-auto flex flex-col space-y-4">
                    <ThemeToggle />
                    <Navbar />
                  </div>
                </div>
                {/* Mobile Top Header */}
                <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
                  {/* Logo */}
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ThemeToggle />
                    <Link href="/notifications">
                      <button className="p-2 relative">
                        <Bell className="w-6 h-6 text-gray-700 dark:text-white" />
                        {/* Red notification badge */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                      </button>
                    </Link>
                    <div className="scale-75 origin-right">
                      <Navbar />
                    </div>
                  </div>
                </div>
                {/* Desktop Top Header */}
                <div className="hidden md:flex fixed top-0 left-20 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-30 items-center justify-center">
                  <div className="max-w-md w-full mx-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
                {/* Mobile Bottom Navigation */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 z-50">
                  <nav className="flex items-center justify-around py-2">
                    <Link href="/" className="flex flex-col items-center py-2 px-3">
                      <Compass className="w-6 h-6 text-gray-700 dark:text-white mb-1" />
                    </Link>
                    <Link href="/explore" className="flex flex-col items-center py-2 px-3">
                      <Search className="w-6 h-6 text-gray-500 dark:text-gray-400 mb-1" />
                    </Link>
                    <CreateToken>
                      <button className="flex flex-col items-center py-2 px-3 bg-gray-200 dark:bg-gray-800 rounded-xl">
                        <Plus className="w-6 h-6 text-gray-700 dark:text-white mb-1" />
                      </button>
                    </CreateToken>
                    <Link href="/profile" className="flex flex-col items-center py-2 px-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full mb-1"></div>
                    </Link>
                  </nav>
                </div>
                {/* Main Content Area with Wouter Routes */}
                <div className="md:ml-20 pt-16 md:pt-16 pb-20 md:pb-0 min-h-screen">
                  <main className="max-w-2xl mx-auto px-0 md:px-4 py-0 md:py-8">
                    <Route path="/" component={HomePage} />
                    <Route path="/explore" component={ExplorePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/token" component={TokenPage} />
                    <Route path="/notifications" component={NotificationsPage} />
                    <Route path="/settings" component={SettingsPage} />
                    <Route path="/faucet" component={FaucetPage} />
                  </main>
                </div>
              </div>
            </Router>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
