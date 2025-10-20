'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RootNavbar() {
  const [user, setUser] = useState<string | null>(null)

  const handleLogin = () => {
    setUser('Jan Kowalski')
    alert('Zalogowano!')
  }

  const handleRegister = () => {
    alert('Przekierowanie do rejestracji...')
  }

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 🔹 Linki wyśrodkowane */}
        <div className="flex-1 flex justify-center gap-6 text-lg font-medium">
          <Link href="/">Strona główna</Link>
          <Link href="/about">ℹ O nas</Link>
          <Link href="/courses">Kursy</Link>
          <Link href="/tutorials">Poradniki</Link>
          <Link href="/compendium">Kompendium</Link>
        </div>

        {/* 🔹 Przycisk po prawej */}
        <div className="flex gap-2">
          {!user ? (
            <>
              <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded transition-colors"
              >
                Zaloguj się
              </button>
              <button
                onClick={handleRegister}
                className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded transition-colors"
              >
                Zarejestruj się
              </button>
            </>
          ) : (
            <span>Witaj, {user}</span>
          )}
        </div>
      </div>
    </nav>
  )
}
