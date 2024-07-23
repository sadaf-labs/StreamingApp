export const labels = {
  LOADING: "Loading...",
  FAILED_TO_FETCH_ITEMS: 'Failed to fetch items'
}

const publicUrl = process.env.PUBLIC_URL;

export const HOME_BANNER_URL = `${publicUrl}/home-banner.jpg`;

export const COMPANY_LOGO_URL = `${publicUrl}/company-logo.png`;

export const VIDEO_URLS = [
  "https://www.youtube.com/embed/gCNeDWCI0vo",
  "https://www.youtube.com/embed/ru0K8uYEZWw"
];

export const MEDIA_API = 'http://localhost:4000/collection';

export const DUMMY_DATA_PATH = "./src/service/data/dummyData.json"
