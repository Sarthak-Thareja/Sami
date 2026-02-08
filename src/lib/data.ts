export interface Photo {
  id: string;
  src: string;
  date: string;
  location: string;
  caption: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  category: "Soumi's Favs" | "Sarthak's Favs" | "Our Favs";
  spotifyUrl: string;
  coverImg: string;
}

export interface Place {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  date: string;
}

// Replace with your images in public/photos/ (e.g. /photos/photo-1.jpg) or use placeholder URLs
const photoBase = (n: number) => `https://picsum.photos/400/300?random=${n}`;
export const photos: Photo[] = [
  {
    id: "1",
    src: photoBase(1),
    date: "2024-12-25T18:00:00.000Z",
    location: "Café Downtown",
    caption: "Our first coffee together",
  },
  {
    id: "2",
    src: photoBase(2),
    date: "2025-01-14T12:00:00.000Z",
    location: "Sunset Beach",
    caption: "Golden hour with you",
  },
  {
    id: "3",
    src: photoBase(3),
    date: "2025-02-01T20:00:00.000Z",
    location: "Home",
    caption: "Cozy night in",
  },
  {
    id: "4",
    src: photoBase(4),
    date: "2024-11-20T14:00:00.000Z",
    location: "Café Downtown",
    caption: "Fall vibes",
  },
  {
    id: "5",
    src: photoBase(5),
    date: "2025-01-01T00:00:00.000Z",
    location: "Sunset Beach",
    caption: "New Year's Eve",
  },
];

// Use /music-covers/name.jpg for your own art in public/music-covers/
const coverBase = (n: number) => `https://picsum.photos/300/300?random=${n + 10}`;
export const music: MusicTrack[] = [
  {
    id: "m1",
    title: "Perfect",
    artist: "Ed Sheeran",
    category: "Our Favs",
    spotifyUrl: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    coverImg: coverBase(1),
  },
  {
    id: "m2",
    title: "All of Me",
    artist: "John Legend",
    category: "Soumi's Favs",
    spotifyUrl: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
    coverImg: coverBase(2),
  },
  {
    id: "m3",
    title: "Shape of You",
    artist: "Ed Sheeran",
    category: "Sarthak's Favs",
    spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
    coverImg: coverBase(3),
  },
  {
    id: "m4",
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    category: "Our Favs",
    spotifyUrl: "https://open.spotify.com/track/43gmRA63x6bF5h4f2Z0k4x",
    coverImg: coverBase(4),
  },
  {
    id: "m5",
    title: "A Thousand Years",
    artist: "Christina Perri",
    category: "Soumi's Favs",
    spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl",
    coverImg: coverBase(5),
  },
  {
    id: "m6",
    title: "Blinding Lights",
    artist: "The Weeknd",
    category: "Sarthak's Favs",
    spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
    coverImg: coverBase(6),
  },
];

export const places: Place[] = [
  {
    id: "p1",
    name: "Café Downtown",
    location: "Downtown",
    description: "Where we had our first date",
    imageUrl: photoBase(1),
    date: "2024-11-20",
  },
  {
    id: "p2",
    name: "Sunset Beach",
    location: "Beach",
    description: "Our favorite spot for golden hour",
    imageUrl: photoBase(2),
    date: "2025-01-14",
  },
  {
    id: "p3",
    name: "Home",
    location: "Our Place",
    description: "Where we feel most ourselves",
    imageUrl: photoBase(3),
    date: "2025-02-01",
  },
];
