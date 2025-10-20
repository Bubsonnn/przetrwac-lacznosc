import './globals.css'
import type { Metadata } from 'next'
import RootNavbar from './RootNavbar'
import Footer from './Footer'

export const metadata: Metadata = {
  title: 'Przetrwać Łączność',
  description: 'Poradniki i kursy dla uczniów technikum ZSŁ w Gdańsku',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="antialiased min-h-screen flex flex-col">
        <RootNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
