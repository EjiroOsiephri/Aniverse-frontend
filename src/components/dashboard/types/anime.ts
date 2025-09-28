// components/types/anime.ts
export interface AnimeSlide {
  id: string;
  title: string;
  season: string;
  episodes: number;
  image: string;
  description: string;
}

export interface AnimeCard {
  id: string;
  title: string;
  episodes: number;
  rating: number;
  image: string;
}
