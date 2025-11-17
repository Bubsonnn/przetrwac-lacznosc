'use client'

import Image from 'next/image'

export default function AboutPage() {
	return (
		<main className='max-w-6xl mx-auto px-6 py-16 space-y-20'>
			{/* Nagłówek */}
			<div className='text-center space-y-4'>
				<h1 className='text-4xl sm:text-5xl font-bold'>⭐ Ambitersi</h1>
				<p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
					Poznaj zespół, który stworzył tę stronę — uczniów Łączności z pasją, humorem i dużą dawką kreatywności.
				</p>
			</div>

			{/* Układ 2 kolumny */}
			<section className='grid md:grid-cols-2 gap-12 items-center'>
				{/* Zdjęcie */}
				<div className='flex justify-center'>
					<Image
						src='/lew o nas.jpg'
						width={550}
						height={550}
						alt='Zdjęcie zespołu – Lew Łączności'
						className='rounded-2xl shadow-xl object-cover transform transition hover:scale-[1.03]'
					/>
				</div>

				{/* Teksty – prawa kolumna */}
				<div className='space-y-10'>
					{/* Blok 1 */}
					<div
						className='
  p-6 rounded-xl shadow-md text-gray-900 dark:text-gray-200 
  bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 
  animate-gradient bg-[length:200%_200%]
  transition-all duration-300
  hover:scale-[1.03] 
  hover:bg-indigo-600 hover:bg-none
  hover:text-white
'>
						<h2 className='text-2xl font-semibold mb-3'>Kim jesteśmy?</h2>
						<p className='leading-relaxed'>
							Jesteśmy ekipą uczniów Zespołu Szkół Łączności, którzy połączyli siły, żeby stworzyć stronę nowoczesną,
							czytelną i pełną życia. Kochamy technologię, mamy głowy pełne pomysłów i zdecydowanie za dużo energii, by
							ją zmarnować.
						</p>
					</div>

					{/* Blok 2 */}
					<div
						className='
  p-6 rounded-xl shadow-md text-gray-900 dark:text-gray-200 
  bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500
  animate-gradient bg-[length:200%_200%]
  transition-all duration-300
  hover:scale-[1.03] 
  hover:bg-indigo-600 hover:bg-none
  hover:text-white
'>
						<h2 className='text-2xl font-semibold mb-3'>Co robimy?</h2>
						<ul className='list-disc list-inside space-y-1 text-[17px]'>
							<li>projektujemy wygląd strony,</li>
							<li>tworzymy treści i grafiki,</li>
							<li>dbamy o kod i technikalia,</li>
							<li>aktualizujemy informacje o szkole,</li>
							<li>dodajemy humor, żeby nie było sucho.</li>
						</ul>
					</div>

					{/* Blok 3 */}
					<div
						className='
  p-6 rounded-xl shadow-md text-gray-900 dark:text-gray-200 
  bg-gradient-to-br from-orange-500 via-yellow-500 to-lime-500
  animate-gradient bg-[length:200%_200%]
  transition-all duration-300
  hover:scale-[1.03] 
  hover:bg-indigo-600 hover:bg-none
  hover:text-white
'>
						<h2 className='text-2xl font-semibold mb-3'>Dlaczego to robimy?</h2>
						<p className='leading-relaxed'>
							Chcemy pokazać Łączność taką, jaką widzimy — nowoczesną, wyjątkową i pełną ludzi z pasją. Zależy nam, żeby
							każdy kto wejdzie na stronę, pomyślał:
							<br />
							<span className='italic text-gray-800 dark:text-gray-100'>„Okej, ta szkoła naprawdę ogarnia temat.”</span>
						</p>
					</div>
				</div>
			</section>

			{/* Sekcja: Jak pracujemy */}
			<section className='bg-gray-100 dark:bg-gray-800 p-10 rounded-2xl shadow-lg'>
				<h2 className='text-3xl font-bold mb-4'>🧩 Jak pracujemy?</h2>
				<p className='text-lg leading-relaxed'>
					Działamy jak mała agencja IT: trochę kodu, trochę grafiki, dużo pomysłów i jeszcze więcej satysfakcji, kiedy
					wszystko zaczyna działać. Wspieramy się nawzajem i każdy dokłada coś od siebie, żeby projekt wyglądał jak
					najlepiej.
				</p>
			</section>
		</main>
	)
}
