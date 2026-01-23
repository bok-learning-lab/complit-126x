import { PlayerCard } from "./components/PlayerCard";
import type { PlayerCard as PlayerCardType } from "./types";
import cardsData from "../data/cards.json";

export default function Home() {
  const cards = cardsData as PlayerCardType[];

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Creation Myths
          </h1>
          <p className="mt-3 text-lg text-zinc-400">
            Player cards from ancient creation narratives
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <PlayerCard key={card.id} card={card} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-zinc-600">
          Generated with AI from literary passages
        </footer>
      </div>
    </div>
  );
}
