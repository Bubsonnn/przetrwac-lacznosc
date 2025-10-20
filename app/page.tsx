import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='min-h-screen flex flex-col'>
			{/* 🔹 Sekcja główna z tłem */}
			<section
				className='flex flex-col items-center justify-center flex-1 bg-cover bg-center relative'
				style={{ backgroundImage: "url('/tlomainpage.png')" }}>
				<div className='bg-black/40 w-full h-full absolute top-0 left-0'></div> {/* overlay */}
				<h1 className='text-white text-5xl sm:text-6xl font-bold text-center drop-shadow-lg relative z-10'>
					Jak przetrwać &quot;łączność&quot;?
				</h1>
			</section>

			<section className='flex flex-col items-center justify-center p-12 bg-gray-100 dark:bg-gray-800 text-center gap-6'>
				<p className='max-w-2xl text-gray-800 dark:text-gray-100 text-lg sm:text-xl'>
					Tutaj znajdziesz praktyczne porady i kompendium wiedzy dla uczniów technikum ZSŁ w Gdańsku, którzy chcą
					łatwiej poradzić sobie w klasie technik informatyk.
				</p>

				{/* 🔹 Dwa przyciski obok siebie */}
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
		</div>
	)
}