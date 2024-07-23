import { VIDEO_URLS } from "../../utils/constant";

export const IsNewMedia = (release_year: number): boolean => {
  return release_year === new Date().getFullYear()
}

function generateRandomMediaURL(urls: string[]): string {
  const randomIndex = Math.floor(Math.random() * urls.length);
  return urls[randomIndex];
}

export const mediaURL = generateRandomMediaURL(VIDEO_URLS);