'use client'

import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-8 flex items-center justify-between border-t border-gray-700">
      {/* Lewa strona */}
      <p className="text-sm">
        © 2025 <span className="font-semibold text-white">Ambitersi, Inc.</span> — Wszystkie prawa zastrzeżone.
      </p>

      {/* Prawa strona - Social media */}
      <div className="flex gap-4 text-xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-colors duration-200"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/Bubsonnn/przetrwac-lacznosc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
