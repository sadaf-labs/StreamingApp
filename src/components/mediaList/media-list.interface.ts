export interface IMedia {
  id: number;
  director: string;
  cast: { name: string, role: string }[];
  title: string;
  thumbnail_horizontal: string;
  synopsis: string;
  release_year: number;
  rating: number;
  duration_minutes: number;
  genre: string[];
  thumbnail_vertical: string;
}