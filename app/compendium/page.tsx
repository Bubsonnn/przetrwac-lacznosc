'use client'

import React from 'react'

export default function CompendiumPage() {
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-12">
      {/* Tytuł */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
        Encyklopedia wiedzy o ZSŁ
      </h1>

      {/* Spis treści */}
      <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Spis treści</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Ubiór</li>
          <li>Budynek szkoły</li>
          <li>Kierunki</li>
          <li>Grono nauczycieli</li>
          <li>Dyrekcja</li>
          <li>Zachowania</li>
          <li>Ciekawostki</li>
        </ul>
      </section>

      {/* Wstęp */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>WSTĘP</h2>
        <p>
          Zespół Szkół Łączności w Gdańsku to miejsce, które dla wielu osób jest dużo więcej niż tylko szkołą.
          To historia, tradycja, klimat i przede wszystkim ludzie – uczniowie, nauczyciele, absolwenci. Od lat
          mówi się, że „Łączność” to marka sama w sobie...
        </p>
        <p>
          Nie ma co ukrywać – wybór tej szkoły to trochę jak wejście do innego świata. Już od pierwszego dnia
          można poczuć, że to miejsce tętni życiem...
        </p>
      </section>

      {/* Budynek */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>BUDYNEK</h2>
        <p>Budynki szkoły – czyli gdzie to całe życie się dzieje</p>
        <p>🏢 <strong>Budynek główny:</strong> Wysokie, charakterystyczne mury...</p>
        <p>🔧 <strong>Pracownie i warsztaty:</strong> Laboratoria i sale komputerowe...</p>
        <p>📚 <strong>Biblioteka:</strong> Ciche królestwo Łączności...</p>
        <p>🏋️ <strong>Sala gimnastyczna i boisko:</strong> Sport i rekreacja...</p>
        <p>🍴 <strong>Stołówka:</strong> Spotkania, posiłki i rozmowy...</p>
      </section>

      {/* Kierunki */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>KIERUNKI</h2>
        <p>Łączność to szkoła techniczna, więc każdy kierunek ma swój klimat:</p>
        <ul className="list-disc list-inside">
          <li>🔌 Technik elektronik</li>
          <li>🌐 Technik informatyk</li>
          <li>📡 Technik teleinformatyk</li>
          <li>📱 Technik telekomunikacji</li>
          <li>💻 Nowe specjalizacje IT</li>
        </ul>
      </section>

      {/* Grono nauczycieli */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>GRONO NAUCZYCIELI</h2>
        <p>Każda szkoła ma swoich nauczycieli, ale w Łączności tworzą wyjątkowy klimat...</p>
      </section>

      {/* Dyrekcja */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>DYREKCJA</h2>
        <p>Dyrekcja – czyli kapitanowie statku „Łączność” ⚓...</p>
      </section>

      {/* Zachowania */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>ZACHOWANIA</h2>
        <p>Jak uczniowie mają się zachowywać – zasady gry w Łączności...</p>
      </section>

      {/* Ciekawostki */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>CIEKAWOSTKI</h2>
        <p>Łączność to nie tylko szkoła – to cały świat ciekawostek i historii...</p>
      </section>

      {/* Mundur */}
      <section className="prose dark:prose-invert max-w-none">
        <h2>MUNDUR</h2>
        <p>Mundury w Łączności były symbolem tradycji, dyscypliny i wspólnoty...</p>
      </section>
    </main>
  )
}
