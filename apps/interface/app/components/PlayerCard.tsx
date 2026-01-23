import Image from "next/image";
import type { PlayerCard as PlayerCardType } from "../types";

interface PlayerCardProps {
  card: PlayerCardType;
}

export function PlayerCard({ card }: PlayerCardProps) {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl transition-transform hover:scale-[1.02]">
      {/* Card Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={card.image_path}
          alt={card.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {/* Power Rating Badge */}
        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 font-bold text-zinc-900 shadow-lg">
          {card.power_rating}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title & Source */}
        <h2 className="text-xl font-bold text-white">{card.title}</h2>
        <p className="mt-1 text-sm text-zinc-400">
          {card.source} · {card.era}
        </p>

        {/* Mood */}
        <div className="mt-3">
          <span className="inline-block rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-300">
            {card.mood}
          </span>
        </div>

        {/* Themes */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {card.themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-zinc-700 px-2.5 py-0.5 text-xs text-zinc-300"
            >
              {theme}
            </span>
          ))}
        </div>

        {/* Flavor Quote */}
        <blockquote className="mt-4 border-l-2 border-amber-500/50 pl-3 text-sm italic text-zinc-400">
          "{card.flavor_quote}"
        </blockquote>
      </div>
    </div>
  );
}
