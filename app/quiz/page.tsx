'use client'

import { useState } from 'react'

const quiz = [
	{
		category: 'Historia i tradycja Łączności',
		questions: [
			{
				q: 'W którym mieście znajduje się Zespół Szkół Łączności?',
				answers: ['Gdynia', 'Gdańsk', 'Sopot', 'Hel'],
				correct: 1,
			},
			{
				q: 'Łączność powstała, żeby kształcić specjalistów w dziedzinie:',
				answers: ['rolnictwa', 'telekomunikacji', 'gastronomii', 'muzyki'],
				correct: 1,
			},
			{
				q: 'Co symbolizuje nazwa „Łączność”?',
				answers: [
					'Szybki internet',
					'Komunikację i technologię',
					'Przyjaźń między uczniami',
					'Wszystkie odpowiedzi są poprawne 😎',
				],
				correct: 3,
			},
			{
				q: 'W dawnych latach uczniowie nosili:',
				answers: [
					'garnitury z naszywką szkoły',
					'bluzy z logo Marvela',
					'mundury w stylu marynarskim',
					'kurtki z kapturem i łańcuchy',
				],
				correct: 0,
			},
			{
				q: 'Jak nazywa się budynek, w którym dzieje się najwięcej?',
				answers: ['Główniak', 'Laboratorium', 'Centrala', 'Budynek główny'],
				correct: 3,
			},
		],
	},
	{
		category: 'Kierunki i technologia',
		questions: [
			{
				q: 'Gdy komputer nie działa, Ty:',
				answers: [
					'resetujesz go trzy razy – na pewno ruszy',
					'rozbierasz i diagnozujesz problem',
					'wzywasz informatyka (czyli siebie 😎)',
					'udajesz, że nie widzisz problemu',
				],
				correct: null, // brak złych odpowiedzi, każdy wybór pasuje
			},
			{
				q: 'Co najbardziej Cię kręci?',
				answers: ['Programowanie', 'Lutowanie i majsterkowanie', 'Sieci i routery', 'Projektowanie stron i aplikacji'],
				correct: null,
			},
			{
				q: 'Co wolisz?',
				answers: ['Kable', 'Kod', 'Internet', 'Wszystko naraz'],
				correct: null,
			},
			{
				q: 'Twoje motto to:',
				answers: [
					'„Zrób backup zanim będzie za późno”',
					'„Nie działa? To pewnie zasilanie.”',
					'„Ctrl + S to styl życia.”',
					'„Nie panikuj, to tylko błąd w sieci.”',
				],
				correct: null,
			},
		],
	},
	{
		category: 'Nauczyciele i lekcje',
		questions: [
			{
				q: 'Wchodzi do klasy i mówi: „Dzisiaj miało być spokojnie, ale zmieniłem zdanie.”',
				answers: ['Matematyk', 'Fizyk', 'Elektronik'],
				correct: 1,
			},
			{
				q: 'Zawsze zaczyna lekcję słowami: „Kto pamięta, co było ostatnio?”',
				answers: ['Humanista', 'Informatyk', 'Historyk'],
				correct: 0,
			},
			{
				q: 'Potrafi wyłapać telefon z drugiego końca klasy jak snajper.',
				answers: ['WF-ista', 'Wicedyrektor', 'Polonistka'],
				correct: 1,
			},
			{
				q: 'Uczy trudnego przedmiotu, ale zawsze da się z nim pogadać po lekcji.',
				answers: ['Systemy operacyjne', 'Angielski', 'Oba'],
				correct: 2,
			},
		],
	},
	{
		category: 'Szkolne życie',
		questions: [
			{
				q: 'Na przerwie:',
				answers: [
					'Siedzisz przy laptopie i kończysz projekt',
					'Stoisz na korytarzu i dyskutujesz o nowym sprzęcie',
					'Biegniesz do sklepiku',
					'Szukasz sali, bo znowu zmienili plan',
				],
				correct: null,
			},
			{
				q: 'Kiedy nauczyciel mówi „za tydzień sprawdzian”:',
				answers: [
					'Notujesz dokładną datę',
					'Mówisz „spoko” i zapominasz',
					'Wchodzisz na grupę klasową – niech ktoś Ci przypomni',
					'Zmieniasz temat',
				],
				correct: null,
			},
			{
				q: 'Co robisz, gdy padnie Wi-Fi w szkole?',
				answers: [
					'Panikujesz',
					'Próbujesz to naprawić',
					'Śmiejesz się, że to ironia losu',
					'Idziesz do biblioteki, bo tam jeszcze działa',
				],
				correct: null,
			},
			{
				q: 'Twój ulubiony moment dnia:',
				answers: ['Ostatni dzwonek', 'Przerwa obiadowa', 'Zajęcia praktyczne', 'Wystawienie ocen'],
				correct: null,
			},
		],
	},
	{
		category: 'Ciekawostki i legendy szkoły',
		questions: [
			{
				q: 'Czy to prawda, że w szkole są sale, do których nikt nie wchodzi?',
				answers: [
					'Tak – tylko nauczyciele wiedzą, co tam jest',
					'Nie – to legendy starszych roczników',
					'Może… ale lepiej nie pytać',
				],
				correct: 0,
			},
			{
				q: 'Które miejsce w szkole ma status „kultowego”?',
				answers: ['Stołówka', 'Korytarz przy sali komputerowej', 'Ławka pod schodami'],
				correct: 1,
			},
			{
				q: 'Czy to prawda, że niektóre komputery „żyją własnym życiem”?',
				answers: ['Oczywiście – duch poprzednich uczniów', 'To tylko Windows', 'Zależy, kto konfigurował sieć'],
				correct: 1,
			},
			{
				q: 'Które wydarzenie w roku szkolnym cieszy się największym hype’em?',
				answers: ['Dzień otwarty', 'Wigilia szkolna', 'Zakończenie roku', 'Ostatni dzwonek'],
				correct: 2,
			},
		],
	},
]

export default function QuizPage() {
	const [selected, setSelected] = useState({})
	const [checked, setChecked] = useState(false)

	const handleSelect = (catI, qI, aI) => {
		if (checked) return
		setSelected({ ...selected, [`${catI}-${qI}`]: aI })
	}

	const totalQuestions = quiz.reduce((acc, cat) => acc + cat.questions.length, 0)

	const score = quiz.reduce((sum, category, catI) => {
		return (
			sum +
			category.questions.filter((q, qI) => {
				const key = `${catI}-${qI}`
				return q.correct !== null && selected[key] === q.correct
			}).length
		)
	}, 0)

	return (
		<div className='max-w-4xl mx-auto py-16 px-4'>
			<h1 className='text-5xl font-extrabold text-center mb-16'>🎮 Quiz Łączności</h1>

			{quiz.map((cat, catI) => (
				<div key={catI} className='mb-20'>
					<div className='flex items-center gap-4 mb-10'>
						<div className='text-5xl font-bold text-indigo-600'>{catI + 1}.</div>
						<h2 className='text-4xl font-semibold'>{cat.category}</h2>
					</div>

					{cat.questions.map((q, qI) => {
						const key = `${catI}-${qI}`
						const userAnswer = selected[key]

						return (
							<div
								key={qI}
								className='p-6 mb-8 border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm'>
								<p className='font-semibold text-lg mb-5'>{q.q}</p>

								<div className='space-y-3'>
									{q.answers.map((answer, aI) => {
										const isCorrect = q.correct === aI
										const isSelected = userAnswer === aI

										return (
											<button
												key={aI}
												onClick={() => handleSelect(catI, qI, aI)}
												className={`
                          block w-full text-left p-4 rounded-xl border transition-all
                          cursor-pointer
                          ${
														checked
															? isCorrect
																? 'bg-green-600 text-white border-green-700'
																: isSelected
																? 'bg-red-600 text-white border-red-700'
																: 'bg-white dark:bg-gray-800'
															: isSelected
															? 'bg-indigo-600 text-white border-indigo-700'
															: 'bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700'
													}
                        `}>
												{answer}
											</button>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>
			))}

			{!checked && (
				<div className='text-center mt-10'>
					<button
						onClick={() => setChecked(true)}
						className='px-12 py-5 text-2xl rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition'>
						✔️ Sprawdź wynik
					</button>
				</div>
			)}

			{checked && (
				<div className='text-center mt-16 p-10 bg-indigo-600 text-white rounded-3xl shadow-xl'>
					<h2 className='text-4xl font-bold mb-4'>Twój wynik:</h2>
					<p className='text-6xl font-extrabold mb-2'>
						{score} / {totalQuestions}
					</p>

					{/* Obliczamy procent poprawnych */}
					{(() => {
						const percent = Math.round((score / totalQuestions) * 100)
						let message = ''

						if (percent < 50) message = 'Musisz się douczyć 📚'
						else if (percent < 75) message = 'Całkiem niezle 👍'
						else if (percent < 85) message = 'Świetna robota 🌟'
						else message = 'Geniusz Łączności 🤯'

						return <p className='text-xl opacity-90'>{message}</p>
					})()}
				</div>
			)}
		</div>
	)
}
