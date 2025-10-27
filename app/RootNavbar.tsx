'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function RootNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState<string | null>(null)

  const handleLogin = () => {
    setUser('Jan Kowalski')
    alert('Zalogowano!')
  }

  const handleRegister = () => {
    alert('Przekierowanie do rejestracji...')
  }

  return (
    <nav className="relative bg-gray-800/70 backdrop-blur-md border-b border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 🔹 Lewa strona (logo) */}
          <div className="flex items-center">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* 🔹 Linki (desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition">
              Strona główna
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition">
              O nas
            </Link>
            <Link href="/courses" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition">
              Kursy
            </Link>
            <Link href="/tutorials" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition">
              Poradniki
            </Link>
            <Link href="/compendium" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-md px-3 py-2 transition">
              Kompendium
            </Link>
          </div>

          {/* 🔹 Prawa strona (przyciski logowania) */}
          <div className="flex items-center gap-2">
            {!user ? (
              <>
                <button
                  onClick={handleLogin}
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Zaloguj się
                </button>
                <button
                  onClick={handleRegister}
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Zarejestruj się
                </button>
              </>
            ) : (
              <span className="text-sm text-gray-300">Witaj, {user}</span>
            )}

            {/* 🔹 Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-2 md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-white/10"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800/90 border-t border-white/10 px-4 py-3 space-y-2">
          <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">Strona główna</Link>
          <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">O nas</Link>
          <Link href="/courses" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">Kursy</Link>
          <Link href="/tutorials" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">Poradniki</Link>
          <Link href="/compendium" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">Kompendium</Link>
        </div>
      )}
    </nav>
  )
}
