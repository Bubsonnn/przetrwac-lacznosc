'use client'

import React from 'react'

export default function CompendiumPage() {
	const sections = [
		{ id: 'ubior', label: 'Ubiór' },
		{ id: 'budynek', label: 'Budynek szkoły' },
		{ id: 'kierunki', label: 'Kierunki' },
		{ id: 'grono', label: 'Grono nauczycieli' },
		{ id: 'dyrekcja', label: 'Dyrekcja' },
		{ id: 'zachowania', label: 'Zachowania' },
		{ id: 'ciekawostki', label: 'Ciekawostki' },
	]

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<main className='max-w-5xl mx-auto p-8 space-y-12 scroll-smooth'>
			{/* 🔹 Tytuł strony */}
			<h1 className='text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white'>
				Encyklopedia wiedzy o ZSŁ
			</h1>

			{/* 🔹 Spis treści */}
			<section className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md'>
				<h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>Spis treści</h2>
				<ul className='list-disc list-inside space-y-2 text-lg'>
					{sections.map(({ id, label }) => (
						<li
							key={id}
							onClick={() => scrollToSection(id)}
							className='cursor-pointer text-gray-700 dark:text-gray-200 transition-all duration-200 hover:text-indigo-500 hover:pl-1'>
							{label}
						</li>
					))}
				</ul>
			</section>

			{/* 🔹 Sekcje */}
			<section id='mundur' className='prose dark:prose-invert max-w-none'>
				<h2 className='text-3xl font-bold mb-4'>MUNDUR</h2>
				<p className='text-lg text-gray-800 dark:text-gray-200'>Mundury w Łączności 👔</p>

				<div className='space-y-4 mt-6'>
					<h3 className='text-2xl font-semibold text-indigo-500'>🕰️ Trochę historii</h3>
					<p>
						Kiedyś, jeszcze w dawnych latach, uczniowie Łączności faktycznie nosili szkolne mundury. Były to eleganckie
						marynarki i koszule, często z naszywką albo znaczkiem szkoły. Pomysł był prosty: każdy wygląda tak samo,
						jest schludnie, profesjonalnie i wiadomo, że to „ekipa z Łączności”. Dawało to też poczucie, że szkoła to
						coś więcej niż zwykłe lekcje – trochę jak drużyna albo formacja.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🎖️ Dlaczego mundury?</h3>
					<p>
						Łączność zawsze była związana z technologią, telekomunikacją i powagą zawodu. Mundury miały pokazać, że
						uczniowie to przyszli fachowcy, którzy już w szkole uczą się odpowiedzialności, dyscypliny i elegancji.
						Trochę jak wojskowy dryl, tylko w wersji szkolnej.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>😎 Jak to odbierali uczniowie?</h3>
					<p>
						Dla niektórych mundur był symbolem dumy – wyróżniał ich spośród innych szkół, sprawiał, że od razu było
						wiadomo: „O, to ktoś z Łączności”.
					</p>
					<p>
						Inni traktowali to jako przymus, bo wiadomo – młodzież zawsze chce trochę luzu, a nie chodzić codziennie w
						garniturze.
					</p>
					<p>
						Byli też tacy, którzy „modyfikowali” swoje mundury – własny styl, przypinki, zmiana koszuli pod spodem,
						trochę kreatywności i już mundur wyglądał bardziej „po swojemu”.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>📸 Mundur w pamięci absolwentów</h3>
					<p>
						Dziś mundury są jednym z najbardziej charakterystycznych elementów wspominanych przez starsze roczniki.
						Wielu absolwentów z sentymentem opowiada o czasach, gdy codziennie rano trzeba było dopinać guziki i
						zakładać krawat. To taki znak dawnych lat, który mocno wyróżnia Łączność na tle innych szkół.
					</p>
				</div>
			</section>

			<section id='budynek' className='prose dark:prose-invert max-w-none'>
				<h2 className='text-3xl font-bold mb-4'>BUDYNEK</h2>
				<p className='text-lg text-gray-800 dark:text-gray-200'>
					Budynki szkoły – czyli gdzie to całe życie się dzieje
				</p>
				<p>
					Łączność to nie tylko kierunki i lekcje, ale też konkretna przestrzeń. Kto nie zna szkolnych murów, ten nie
					zrozumie do końca, o co chodzi z klimatem tej szkoły. A że każdy zakamarek ma swoją historię, to warto je
					opisać.
				</p>

				<div className='space-y-4 mt-6'>
					<h3 className='text-2xl font-semibold text-indigo-500'>🏢 Budynek główny – serce Łączności</h3>
					<p>
						Tutaj zaczyna się cała akcja. Wysokie, charakterystyczne mury, które od razu rzucają się w oczy. W środku –
						labirynt korytarzy, klas i pracowni. To tu odbywa się większość zajęć, to tu codziennie przewijają się setki
						uczniów. Można powiedzieć, że budynek główny to taki „hub” – bez niego nie byłoby życia szkoły. Zawsze pełen
						ludzi, zawsze coś się dzieje.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🔧 Pracownie i warsztaty</h3>
					<p>
						Tutaj elektronicy i informatycy czują się jak w domu. Sala pełna komputerów, laboratoria z nowoczesnym
						sprzętem, warsztaty, gdzie można polutować układy czy sprawdzić działanie urządzeń. To miejsce, gdzie teoria
						zamienia się w praktykę – i gdzie często rodzą się najlepsze szkolne projekty. No i wiadomo: niektóre
						pracownie mają swój „specjalny klimat”, który pamięta każdy rocznik.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>📚 Biblioteka</h3>
					<p>
						Niektórzy mówią, że to ciche królestwo Łączności. Miejsce, gdzie można nie tylko znaleźć książki i
						podręczniki, ale też chwilę odsapnąć od zgiełku korytarzy. A czasem – miejsce ratunku przed klasówką, bo to
						tu szuka się ostatnich informacji „na szybko”.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🏋️ Sala gimnastyczna i boisko</h3>
					<p>
						Łączność to nie tylko nauka – tu też można się wyszaleć sportowo. Duża sala gimnastyczna daje sporo
						możliwości: kosz, siatkówka, piłka nożna halowa. A jak tylko pogoda pozwala, życie przenosi się na boisko –
						klasyczne miejsce integracji, meczów i wydarzeń sportowych.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🍴 Stołówka</h3>
					<p>
						Miejsce, które jedni kochają, a inni wspominają różnie – ale każdy tam zaglądał. To tam padały najlepsze
						szkolne rozmowy przy talerzu pierogów albo schabowym. Bez stołówki nie ma prawdziwej szkolnej codzienności.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🛋️ Korytarze i „legendy” szkoły</h3>
					<p>
						Nie da się ukryć – korytarze w Łączności mają swój charakter. To nie tylko przejścia między salami, ale też
						miejsce spotkań, rozmów, śmiechu, szybkich powtórek przed kartkówką i planowania „strategii” na przerwach.
						Każdy rocznik miał swoje ulubione miejsca – czy to schody, czy parapety, czy ławki, które z czasem stały się
						prawdziwymi legendami.
					</p>
				</div>
			</section>

			<section id='kierunki' className='prose dark:prose-invert max-w-none'>
				<h2 className='text-3xl font-bold mb-4'>KIERUNKI</h2>
				<p className='text-lg text-gray-800 dark:text-gray-200'>
					<strong>Kierunki w Zespole Szkół Łączności – co tu można ogarnąć?</strong>
				</p>
				<p>
					Łączność to szkoła techniczna, więc nie ma nudy – tu się uczy konkretów. Ale spokojnie, to nie tylko wkuwanie
					książek i siedzenie w ławce. Każdy kierunek ma swój klimat i daje inne możliwości. Zobacz, co możesz wybrać:
				</p>

				<div className='space-y-6 mt-6'>
					{/* 🔌 Technik elektronik */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>🔌 Technik elektronik</h3>
						<p>
							Tu zaczyna się magia kabli, obwodów i układów scalonych. Jeśli kiedykolwiek rozkręcałeś radio, komputer
							czy konsolę, żeby „zobaczyć, jak to działa” – to miejsce jest dla Ciebie. Nauczysz się projektować i
							naprawiać urządzenia elektroniczne, poznasz zasady działania sprzętu, który nas otacza, a przy okazji
							ogarniesz podstawy nowoczesnej automatyki i robotyki. Potem możesz iść na studia, albo od razu do pracy –
							bo elektroników zawsze brakuje.
						</p>
					</div>

					{/* 🌐 Technik informatyk */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>🌐 Technik informatyk</h3>
						<p>
							Najbardziej rozchwytywany kierunek w Łączności. Tu rodzą się przyszli programiści, administratorzy sieci i
							specjaliści od komputerów. Nauczysz się składania pecetów, konfiguracji systemów, ogarniania serwerów, a
							także podstaw programowania. To świetny start, jeśli marzysz o karierze w IT – bo umiejętności, które tu
							zdobędziesz, są konkretne i od razu można je wykorzystać.
						</p>
					</div>

					{/* 📡 Technik teleinformatyk */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>📡 Technik teleinformatyk</h3>
						<p>
							To taki miks elektroniki i informatyki. Jeśli brzmi jak „wszystko na raz” – to dobrze, bo właśnie o to
							chodzi. Poznasz tajniki sieci komputerowych, systemów telekomunikacyjnych, światłowodów i internetu, który
							łączy cały świat. Teleinformatycy to ludzie, którzy potrafią nie tylko złożyć komputer, ale też sprawić,
							żeby działał w sieci bez żadnych przerw. To zawód przyszłości – bo bez specjalistów od sieci, świat po
							prostu stoi.
						</p>
					</div>

					{/* 📱 Technik telekomunikacji */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>📱 Technik telekomunikacji</h3>
						<p>
							Brzmi oldschoolowo? Nic bardziej mylnego. To kierunek dla tych, którzy chcą ogarnąć, jak działa cały świat
							komunikacji: od klasycznych sieci telefonicznych po nowoczesne systemy bezprzewodowe. Dowiesz się, jak
							działa internet mobilny, jak przesyła się dane i jak wygląda zaplecze wielkich operatorów. A potem możesz
							pracować w firmach telekomunikacyjnych albo rozwijać się w kierunku inżynierii sieciowej.
						</p>
					</div>

					{/* 💻 Nowe specjalizacje */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>💻 Nowe specjalizacje i kierunki IT</h3>
						<p>
							Łączność idzie z duchem czasu – więc program nauczania cały czas się rozwija. Co chwilę pojawiają się nowe
							przedmioty i ścieżki, które pasują do obecnych trendów. Cyberbezpieczeństwo, grafika komputerowa,
							programowanie aplikacji czy projektowanie stron – to nie jest science fiction, to realne możliwości, które
							można ogarnąć w tej szkole.
						</p>
					</div>
				</div>
			</section>

			<section id='grono-nauczycieli' className='prose dark:prose-invert max-w-none'>
				<h2 className='text-3xl font-bold mb-4'>GRONO NAUCZYCIELI</h2>
				<p className='text-lg text-gray-800 dark:text-gray-200'>
					<strong>Grono nauczycieli – czyli ekipa, bez której Łączność by nie działała</strong>
				</p>
				<p>
					Każda szkoła ma swoich nauczycieli, ale w Łączności to oni tworzą naprawdę wyjątkowy klimat. To miks
					doświadczenia, pasji, charakterów i stylów prowadzenia lekcji. Jedni uczą mega konkretnie, inni sypią
					anegdotami, jeszcze inni słyną z żelaznej dyscypliny. Ale razem tworzą zespół, który sprawia, że uczniowie nie
					tylko zdają egzaminy, ale też wynoszą ze szkoły coś więcej – wiedzę, wspomnienia i… często sporo anegdot.
				</p>

				<div className='space-y-6 mt-6'>
					{/* 👓 Ci od ścisłych */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>👓 Ci od ścisłych</h3>
						<p>
							Matematycy, fizycy, informatycy – bez nich ani rusz. Jedni prowadzą zajęcia tak, że wszystko staje się
							proste jak 2+2, inni potrafią zaskoczyć zadaniami, które wyglądają jak zagadka z innej planety. Ale koniec
							końców, każdy maturzysta wie, że to właśnie oni przygotowali go do najtrudniejszych egzaminów.
						</p>
					</div>

					{/* ⚡ Elektronicy i teleinformatycy */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>⚡ Elektronicy i teleinformatycy</h3>
						<p>
							To oni pokazują, jak lutownica zamienia się w magiczne narzędzie, a światłowód w paszport do przyszłości.
							Niby wymagający, ale zawsze z pasją. Czasem trzeba się trochę napocić, żeby zdobyć pozytywną ocenę, ale
							satysfakcja z ogarnięcia tematu – bezcenna.
						</p>
					</div>

					{/* 🌍 Humaniści i językowcy */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>🌍 Humaniści i językowcy</h3>
						<p>
							Bo Łączność to nie tylko kable i komputery. To też języki obce, historia, geografia czy WOS. Dzięki nim
							można ogarnąć świat nie tylko od strony technologii, ale też kultury i komunikacji. Wielu uczniów odkrywa
							właśnie tu, że angielski czy niemiecki wcale nie musi być nudny, a polski to nie tylko lektury do
							„odklepania”.
						</p>
					</div>

					{/* 💪 WF-iści */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>💪 WF-iści</h3>
						<p>
							Bez nich szkoła byłaby tylko siedzeniem w ławkach. To oni wyciągają uczniów na boisko, zachęcają do grania
							w kosza, siatkówkę czy piłkę nożną. Jedni stawiają na sportową rywalizację, inni na luz i zabawę. Ale
							każdy absolwent pamięta przynajmniej jeden mecz albo turniej, który przeszedł do szkolnej legendy.
						</p>
					</div>

					{/* 🎭 Artyści i pasjonaci */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>🎭 Artyści i pasjonaci</h3>
						<p>
							W gronie nauczycieli zawsze znajdzie się ktoś, kto potrafi zarazić swoją pasją – muzyką, teatrem,
							fotografią czy działalnością społeczną. To dzięki nim uczniowie biorą udział w konkursach artystycznych,
							angażują się w akcje charytatywne albo rozwijają swoje talenty poza typowo „techniczną” wiedzą.
						</p>
					</div>
				</div>
			</section>

			<section id='dyrekcja' className='prose dark:prose-invert max-w-none'>
				<h2 className='text-3xl font-bold mb-4'>DYREKCJA</h2>
				<p className='text-lg text-gray-800 dark:text-gray-200'>
					<strong>Dyrekcja – czyli kapitanowie statku „Łączność” ⚓</strong>
				</p>
				<p>
					Każda szkoła potrzebuje kogoś, kto trzyma ster i pilnuje, żeby cała machina działała jak należy. W Łączności
					tę rolę pełni dyrekcja – zespół ludzi, którzy ogarniają nie tylko dokumenty, plany lekcji i papierologię, ale
					też dbają o to, żeby szkoła rozwijała się w dobrym kierunku. To oni decydują o nowych kierunkach,
					modernizacjach, projektach i współpracach.
				</p>

				<div className='space-y-6 mt-6'>
					{/* 👨‍💼 Dyrektor */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>👨‍💼 Dyrektor</h3>
						<p>
							Najważniejsza osoba w szkole – trochę jak prezes firmy, trochę jak kapitan drużyny. To on reprezentuje
							szkołę na zewnątrz, dba o jej wizerunek, ale też o to, żeby uczniowie i nauczyciele mieli dobre warunki do
							pracy. Dyrektor to ktoś, kto musi łączyć spokój z asertywnością, bo codziennie ogarnia dziesiątki spraw –
							od poważnych decyzji po drobne problemy dnia codziennego.
						</p>
					</div>

					{/* 👩‍💼 Wicedyrektorzy */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>👩‍💼 Wicedyrektorzy</h3>
						<p>
							Bez nich dyrektor byłby zasypany papierami po sufit. To oni czuwają nad organizacją zajęć, planami lekcji,
							egzaminami i wszystkim tym, co sprawia, że szkoła nie tonie w chaosie. Każdy wicedyrektor ma swoje
							„rejony” – jedni ogarniają sprawy dydaktyczne, inni wychowawcze czy techniczne. Dla uczniów często to
							właśnie z nimi jest najwięcej kontaktu – bo to oni podpisują zwolnienia, pilnują dyscypliny i… czasem
							wzywają na rozmowę, gdy coś poszło nie tak. 😉
						</p>
					</div>

					{/* 🧭 Rada pedagogiczna i wsparcie */}
					<div>
						<h3 className='text-2xl font-semibold text-indigo-500'>🧭 Rada pedagogiczna i wsparcie</h3>
						<p>
							Dyrekcja nie działa sama – wspiera się całą kadrą. Ale to właśnie dyrektor i wicedyrektorzy nadają
							kierunek rozwoju szkoły. Dzięki nim Łączność to nie skansen, tylko nowoczesna placówka, która stale się
							rozwija i idzie z duchem czasu.
						</p>
					</div>
				</div>
			</section>

			<section id='zachowania' className='prose dark:prose-invert max-w-none'>
				<h2 className='text-3xl font-bold mb-4'>ZACHOWANIA</h2>
				<p className='text-lg text-gray-800 dark:text-gray-200'>
					<strong>Jak uczniowie mają się zachowywać – czyli zasady gry w Łączności</strong>
				</p>
				<p>
					Każda szkoła ma swój regulamin, ale umówmy się – suchy tekst w dzienniku elektronicznym nie mówi za dużo.
					Dlatego tutaj wersja „dla ludzi”: jak funkcjonować w Łączności tak, żeby dobrze się czuć, ogarniać naukę i nie
					zaliczać niepotrzebnych przypałów.
				</p>

				<div className='space-y-4 mt-6'>
					<h3 className='text-2xl font-semibold text-indigo-500'>🎓 Szacunek ponad wszystko</h3>
					<p>
						Nieważne, czy gadasz z nauczycielem, kolegą z klasy czy panią woźną – podstawą jest szacunek. To działa w
						dwie strony: Ty okazujesz kulturę, a inni traktują Cię poważnie. To właśnie ten vibe, dzięki któremu w
						szkole da się normalnie funkcjonować.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>📚 Nauka – serio ma znaczenie</h3>
					<p>
						Nie chodzi o to, żeby wkuwać 24/7. Ale skoro już wybrałeś technikum, to warto coś wynieść – zwłaszcza, że
						tutaj uczysz się rzeczy, które realnie mogą Ci się przydać w przyszłości. Ogarniasz materiał? Super. Masz
						problem? Pytaj. Olewasz totalnie? No cóż, wtedy trudniej będzie przejść dalej.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>⏰ Punktualność i obecność</h3>
					<p>
						Każdy wie, że czasem autobus ucieknie, a budzik nie zadzwoni. Ale ogólnie – lepiej być punktualnym.
						Nauczyciele to doceniają, a Ty masz mniej stresu. I pamiętaj – obecność na lekcjach to połowa sukcesu, bo
						jak Cię nie ma, to nawet najlepsze ściągi nie uratują.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🖥️ Sprzęt i sale to nie Twój plac zabaw</h3>
					<p>
						Komputery, projektory, lutownice – to wszystko jest dla Ciebie, ale musisz dbać. Serio, nic tak nie psuje
						klimatu, jak rozwalony sprzęt albo bazgroły na ławkach. Dbając o to, dbasz o szkołę, a przy okazji – o
						przyszłych uczniów.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>📵 Telefon na lekcji? To zależy</h3>
					<p>
						Jasne, każdy ma smartfona. Czasem nauczyciel sam każe coś sprawdzić w sieci albo zrobić zdjęcie notatek. Ale
						jak zaczniesz grać w trakcie lekcji, to raczej nie skończy się to miło.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>👫 Relacje i atmosfera</h3>
					<p>
						Szkoła to przede wszystkim ludzie. Dlatego wspieraj innych, nie hejtuj, pomagaj młodszym rocznikom, a
						starszym okaż szacunek. To właśnie dzięki takiemu podejściu Łączność od lat ma swoją wyjątkową atmosferę.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🚭 Zero używek</h3>
					<p>
						Wiadomo – szkoła to nie miejsce na fajki, alkohol czy inne akcje. Na terenie szkoły obowiązuje zasada
						„czysto i legalnie”. Warto tego przestrzegać, bo konsekwencje potrafią być naprawdę bolesne.
					</p>
				</div>
			</section>

			<section id='ciekawostki' className='prose dark:prose-invert max-w-none'>
				<h2 className='text-3xl font-bold mb-4'>CIEKAWOSTKI</h2>
				<p className='text-lg text-gray-800 dark:text-gray-200'>
					<strong>Ciekawostki o Zespole Szkół Łączności 🎉</strong>
				</p>

				<div className='space-y-4 mt-6'>
					<h3 className='text-2xl font-semibold text-indigo-500'>🏫 Szkoła z tradycją</h3>
					<p>
						Łączność to jedna z najstarszych technicznych szkół w Gdańsku. Powstała, kiedy elektronika i telekomunikacja
						dopiero się rozwijały – a dziś kształci uczniów w najnowszych technologiach. Historia + nowoczesność =
						unikalne połączenie.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>📡 Łączność naprawdę „łączy”</h3>
					<p>
						Nazwa szkoły nie jest przypadkowa. Od lat kształci specjalistów od komunikacji – od dawnych central
						telefonicznych, przez internet, aż po współczesne sieci i cyberbezpieczeństwo. Można powiedzieć, że to
						szkoła, która dosłownie i w przenośni „łączy ludzi”.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🎓 Absolwenci na całym świecie</h3>
					<p>
						Wielu absolwentów Łączności pracuje dziś w dużych firmach IT, telekomunikacyjnych i elektronicznych –
						zarówno w Polsce, jak i za granicą. Często można usłyszeć historię, że ktoś w Londynie, Berlinie czy w
						Dolinie Krzemowej spotkał byłego ucznia Łączności.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🖥️ Legendarny kierunek – informatyk</h3>
					<p>
						W czasach, kiedy komputery dopiero zaczynały pojawiać się w domach, Łączność już uczyła przyszłych
						informatyków. Dzisiaj to jeden z najbardziej obleganych kierunków, a konkurencja o miejsce jest naprawdę
						duża.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🏀 Szkoła sportu i pasji</h3>
					<p>
						Łączność to nie tylko technika – to też zawody sportowe, turnieje i drużyny, które od lat bronią honoru
						szkoły. Od koszykówki i siatkówki po piłkę nożną i biegi przełajowe – uczniowie często zdobywali medale w
						zawodach międzyszkolnych.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🎭 Życie kulturalne</h3>
					<p>
						Od zawsze działały tu różne koła zainteresowań – od teatralnych po fotograficzne. Niektórzy uczniowie
						wspominają, że więcej nauczyli się podczas projektów i konkursów niż na tradycyjnych lekcjach.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🏆 Konkursy i olimpiady</h3>
					<p>
						Łączność regularnie bierze udział w olimpiadach i konkursach technicznych. Uczniowie często wracają z
						nagrodami – nie tylko z województwa, ale też z ogólnopolskich zawodów.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🍴 Stołówkowe legendy</h3>
					<p>
						Każdy absolwent ma swoją historię o stołówce. Dla jednych najlepszy bigos na świecie, dla innych „zagadka
						kulinarna”. Ale wszyscy pamiętają wspólne posiłki i rozmowy – bo to tam działo się pół szkolnego życia.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>🚪 Korytarzowe „miejscówki”</h3>
					<p>
						Każdy rocznik miał swoje ulubione zakątki – schody, ławki, parapety, gdzie spotykała się ekipa. Do dziś
						starsi uczniowie wspominają te „bazy” z sentymentem.
					</p>

					<h3 className='text-2xl font-semibold text-indigo-500'>📖 Biblioteka jako azyl</h3>
					<p>
						Dla niektórych uczniów biblioteka była jedynym miejscem, gdzie można było w spokoju odpocząć. Inni nazywali
						ją „ostatnią deską ratunku” przed klasówką. Ale jedno jest pewne – każdy przynajmniej raz próbował tam
						uratować się przed jedynką.
					</p>
				</div>
			</section>
		</main>
	)
}
