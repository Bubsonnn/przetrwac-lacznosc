"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const quotes = [
	{ text: "Maszyna może robić wszystko, co potrafimy jasno opisać.", author: "Alan Turing" },
	{ text: "Programy pisze się dla ludzi, którzy będą je czytać, a dopiero przy okazji dla maszyn.", author: "Harold Abelson" },
	{ text: "Najlepszy kod to ten, którego nie trzeba pisać.", author: "Jeff Atwood" },
	{ text: "Każda wystarczająco zaawansowana technologia jest nieodróżnialna od magii.", author: "Arthur C. Clarke" },
	{ text: "Nie bój się błędów – to one są najlepszymi nauczycielami programisty.", author: "Anonim" },
]

export default function Home() {
	const [index, setIndex] = useState(0)
	const [fade, setFade] = useState(true)
	const [displayIndex, setDisplayIndex] = useState(0) // do animacji fade-in

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false) // fade-out
			setTimeout(() => {
				const nextIndex = (displayIndex + 1) % quotes.length
				setDisplayIndex(nextIndex)
				setFade(true) // fade-in
			}, 500) // czas fade-out
		}, 6000)

		return () => clearInterval(interval)
	}, [displayIndex])

	return (
		<div className='min-h-screen flex flex-col'>
			{/* 🔹 Sekcja główna z tłem */}
			<section
				className='flex flex-col items-center justify-center flex-1 bg-cover bg-center relative'
				style={{ backgroundImage: "url('/tlomainpage.png')" }}>
				<div className='bg-black/40 w-full h-full absolute top-0 left-0'></div>
				<h1 className='text-white text-5xl sm:text-6xl font-bold text-center drop-shadow-lg relative z-10'>
					Jak przetrwać &quot;łączność&quot;?
				</h1>
			</section>

			<section className='flex flex-col items-center justify-center p-12 bg-gray-100 dark:bg-gray-800 text-center gap-6'>
				<p className='max-w-2xl text-gray-800 dark:text-gray-100 text-lg sm:text-xl'>
					Tutaj znajdziesz praktyczne porady i kompendium wiedzy dla uczniów technikum ZSŁ w Gdańsku, którzy chcą
					łatwiej poradzić sobie w klasie technik informatyk.
				</p>

				<div className='flex gap-4'>
					<Link
						href='/compendium'
						className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors'>
						Przejdź do kompendium wiedzy
					</Link>

					<Link
						href='/courses'
						className='bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors'>
						Kursy
					</Link>
				</div>
			</section>

			{/* 🔹 KARUZELA CYTATÓW */}
			<section className='w-full py-16 bg-white dark:bg-gray-900 flex justify-center px-6'>
				<div className='max-w-3xl text-center relative'>
					<div
						className={`transition-opacity duration-700 ease-in-out ${
							fade ? "opacity-100" : "opacity-0"
						}`}
					>
						<p className='text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 leading-snug'>
							❝ {quotes[displayIndex].text} ❞
						</p>
						<p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
							— {quotes[displayIndex].author}
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
