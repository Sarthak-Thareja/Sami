export interface Photo {
  id: string;
  src: string;
  date: string;
  location: string;
  caption: string;
  group?: string;
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
  // VIPS Ethnic Day
  {
    id: "photo-vips-ethnic-1",
    src: "/photos/VIPS Ethnic Day/Ethnic_Day_1.jpeg",
    date: "2023-05-26T11:00:00.000Z",
    location: "Vips Ethnic Day",
    caption: "Ethnic day with you ❤️",
    group: "Home-Page",
  },
  {
    id: "photo-vips-ethnic-2",
    src: "/photos/VIPS Ethnic Day/Ethnic_Day_2.jpeg",
    date: "2023-05-26T11:10:00.000Z",
    location: "Vips Ethnic Day",
    caption: "Ethnic day with you ❤️",
    group: "vips-ethnic-day",
  },
  {
    id: "photo-vips-ethnic-3",
    src: "/photos/VIPS Ethnic Day/Ethnic_Day_3.jpeg",
    date: "2023-05-26T11:15:00.000Z",
    location: "Vips Ethnic Day",
    caption: "Ethnic day with you ❤️",
    group: "vips-ethnic-day",
  },
  {
    id: "photo-vips-ethnic-4",
    src: "/photos/VIPS Ethnic Day/Ethnic_Day_4.jpeg",
    date: "2023-05-26T11:20:00.000Z",
    location: "Vips Ethnic Day",
    caption: "Ethnic day with you ❤️",
    group: "vips-ethnic-day",
  },
  {
    id: "photo-vips-ethnic-5",
    src: "/photos/VIPS Ethnic Day/Ethnic_Day_5.jpeg",
    date: "2023-05-26T11:25:00.000Z",
    location: "Vips Ethnic Day",
    caption: "Ethnic day with you ❤️",
    group: "vips-ethnic-day",
  },
  {
    id: "photo-vips-ethnic-6",
    src: "/photos/VIPS Ethnic Day/Ethnic_Day_6.jpeg",
    date: "2023-05-26T11:30:00.000Z",
    location: "Vips Ethnic Day",
    caption: "Ethnic day with you ❤️",
    group: "vips-ethnic-day",
  },

  // VIPS Farewell
  {
    id: "photo-vips-farewell-1",
    src: "/photos/VIPS Farewell/Vips_Farewell_1.jpeg",
    date: "2023-06-01T11:10:00.000Z",
    location: "VIPS Farewell",
    caption: "The Day of farewell 🫶",
    group: "vips-farewell",
  },
  {
    id: "photo-vips-farewell-2",
    src: "/photos/VIPS Farewell/Vips_Farewell_2.jpeg",
    date: "2023-06-01T11:15:00.000Z",
    location: "VIPS Farewell",
    caption: "The Day of farewell 🫶",
    group: "Home-Page",
  },
  {
    id: "photo-vips-farewell-3",
    src: "/photos/VIPS Farewell/Vips_Farewell_3.jpeg",
    date: "2023-06-01T11:20:00.000Z",
    location: "VIPS Farewell",
    caption: "The Day of farewell 🫶",
    group: "vips-farewell",
  },
  {
    id: "photo-vips-farewell-4",
    src: "/photos/VIPS Farewell/Vips_Farewell_4.jpeg",
    date: "2023-06-01T11:25:00.000Z",
    location: "VIPS Farewell",
    caption: "The Day of farewell 🫶",
    group: "vips-farewell",
  },
  {
    id: "photo-vips-farewell-5",
    src: "/photos/VIPS Farewell/Vips_Farewell_5.jpeg",
    date: "2023-06-01T11:30:00.000Z",
    location: "VIPS Farewell",
    caption: "The Day of farewell 🫶",
    group: "vips-farewell",
  },
  {
    id: "photo-vips-farewell-6",
    src: "/photos/VIPS Farewell/Vips_Farewell_6.jpeg",
    date: "2023-06-01T11:35:00.000Z",
    location: "VIPS Farewell",
    caption: "The Day of farewell 🫶",
    group: "vips-farewell",
  },

  //Sanjay Van
  {
    id: "photo-sanjay-van-1",
    src: "/photos/Sanjay Van/Sanjay_Van_1.jpeg",
    date: "2023-09-15T11:00:00.000Z",
    location: "Sanjay Van",
    caption: "Beautiful sunsets with you ❤️",
    group: "sanjay-van",
  },
  {
    id: "photo-sanjay-van-2",
    src: "/photos/Sanjay Van/Sanjay_Van_2.jpeg",
    date: "2023-09-15T11:10:00.000Z",
    location: "Sanjay Van",
    caption: "Beautiful sunsets with you ❤️",
    group: "sanjay-van",
  },
  {
    id: "photo-sanjay-van-3",
    src: "/photos/Sanjay Van/Sanjay_Van_3.jpeg",
    date: "2023-09-15T11:15:00.000Z",
    location: "Sanjay Van",
    caption: "Beautiful sunsets with you ❤️",
    group: "sanjay-van",
  },
  {
    id: "photo-sanjay-van-4",
    src: "/photos/Sanjay Van/Sanjay_Van_4.jpeg",
    date: "2023-09-15T11:20:00.000Z",
    location: "Sanjay Van",
    caption: "Beautiful sunsets with you ❤️",
    group: "sanjay-van",
  },

  //Humayun's Tomb
  {
    id: "photo-humayun-tomb-1",
    src: "/photos/Humayun Tomb/Humayun_Tomb_1.jpeg",
    date: "2023-10-03T11:00:00.000Z",
    location: "Humayun's Tomb",
    caption: "Embracing the beauty of history with you ❤️",
    group: "humayun-tomb",
  },
  {
    id: "photo-humayun-tomb-2",
    src: "/photos/Humayun Tomb/Humayun_Tomb_2.jpeg",
    date: "2023-10-03T11:10:00.000Z",
    location: "Humayun's Tomb",
    caption: "Embracing the beauty of history with you ❤️",
    group: "humayun-tomb",
  },
  {
    id: "photo-humayun-tomb-3",
    src: "/photos/Humayun Tomb/Humayun_Tomb_3.jpeg",
    date: "2023-10-03T11:15:00.000Z",
    location: "Humayun's Tomb",
    caption: "Embracing the beauty of history with you ❤️",
    group: "humayun-tomb",
  },
  {
    id: "photo-humayun-tomb-4",
    src: "/photos/Humayun Tomb/Humayun_Tomb_4.jpeg",
    date: "2023-10-03T11:20:00.000Z",
    location: "Humayun's Tomb",
    caption: "Embracing the beauty of history with you ❤️",
    group: "humayun-tomb",
  },
  {
    id: "photo-humayun-tomb-5",
    src: "/photos/Humayun Tomb/Humayun_Tomb_5.jpeg",
    date: "2023-10-03T11:25:00.000Z",
    location: "Humayun's Tomb",
    caption: "Embracing the beauty of history with you ❤️",
    group: "humayun-tomb",
  },

  //Humayun's Tomb
  {
    id: "photo-vizag-1",
    src: "/photos/Vizag/Vizag_1.jpeg",
    date: "2024-04-11T11:00:00.000Z",
    location: "Vizag",
    caption: "Vizag with you ❤️",
    group: "vizag",
  },
  {
    id: "photo-vizag-2",
    src: "/photos/Vizag/Vizag_2.jpeg",
    date: "2024-04-12T11:10:00.000Z",
    location: "Vizag",
    caption: "Vizag with you ❤️",
    group: "Home-Page",
  },
  {
    id: "photo-vizag-3",
    src: "/photos/Vizag/Vizag_3.jpeg",
    date: "2024-04-13T11:15:00.000Z",
    location: "Vizag",
    caption: "Vizag with you ❤️",
    group: "vizag",
  },
  {
    id: "photo-vizag-4",
    src: "/photos/Vizag/Vizag_4.jpeg",
    date: "2024-04-14T11:20:00.000Z",
    location: "Vizag",
    caption: "Vizag with you ❤️",
    group: "vizag",
  },
  {
    id: "photo-vizag-5",
    src: "/photos/Vizag/Vizag_5.jpeg",
    date: "2024-04-15T11:25:00.000Z",
    location: "Vizag",
    caption: "Vizag with you ❤️",
    group: "vizag",
  },
  {
    id: "photo-vizag-6",
    src: "/photos/Vizag/Vizag_6.jpeg",
    date: "2024-04-16T11:30:00.000Z",
    location: "Vizag",
    caption: "Vizag with you ❤️",
    group: "vizag",
  },

  //Lodhi Garden  
  {
    id: "photo-lodhi-garden-1",
    src: "/photos/Lodhi garden/Lodhi_1.jpeg",
    date: "2025-04-27T11:00:00.000Z",
    location: "Lodhi Garden",
    caption: "Lodhi Garden with you ❤️",
    group: "lodhi-garden",
  },
  {
    id: "photo-lodhi-garden-2",
    src: "/photos/Lodhi garden/Lodhi_2.jpeg",
    date: "2025-04-27T11:10:00.000Z",
    location: "Lodhi Garden",
    caption: "Lodhi Garden with you ❤️",
    group: "lodhi-garden",
  },
  {
    id: "photo-lodhi-garden-3",
    src: "/photos/Lodhi garden/Lodhi_3.jpeg",
    date: "2025-04-27T11:15:00.000Z",
    location: "Lodhi Garden",
    caption: "Lodhi Garden with you ❤️",
    group: "lodhi-garden",
  },
  {
    id: "photo-lodhi-garden-4",
    src: "/photos/Lodhi garden/Lodhi_4.jpeg",
    date: "2025-04-27T11:20:00.000Z",
    location: "Lodhi Garden",
    caption: "Lodhi Garden with you ❤️",
    group: "lodhi-garden",
  },
  {
    id: "photo-lodhi-garden-5",
    src: "/photos/Lodhi garden/Lodhi_5.jpeg",
    date: "2025-04-27T11:25:00.000Z",
    location: "Lodhi Garden",
    caption: "Lodhi Garden with you ❤️",
    group: "lodhi-garden",
  },
  {
    id: "photo-lodhi-garden-6",
    src: "/photos/Lodhi garden/Lodhi_6.jpeg",
    date: "2025-04-27T11:30:00.000Z",
    location: "Lodhi Garden",
    caption: "Lodhi Garden with you ❤️",
    group: "lodhi-garden",
  },

  //Gk2 
  {
    id: "photo-gk2-1",
    src: "/photos/GK2/Gk_1.jpeg",
    date: "2025-08-23T11:00:00.000Z",
    location: "Greater Kailash",
    caption: "Greater Kailash with you ❤️",
    group: "gk2",
  },
  {
    id: "photo-gk2-2",
    src: "/photos/GK2/Gk_2.jpeg",
    date: "2025-08-23T11:10:00.000Z",
    location: "Greater Kailash",
    caption: "Greater Kailash with you ❤️",
    group: "gk2",
  },
  {
    id: "photo-gk2-3",
    src: "/photos/GK2/Gk_3.jpeg",
    date: "2025-08-23T11:15:00.000Z",
    location: "Greater Kailash",
    caption: "Greater Kailash with you ❤️",
    group: "gk2",
  },
  {
    id: "photo-gk2-4",
    src: "/photos/GK2/Gk_4.jpeg",
    date: "2025-08-23T11:20:00.000Z",
    location: "Greater Kailash",
    caption: "Greater Kailash with you ❤️",
    group: "gk2",
  },
  {
    id: "photo-gk2-5",
    src: "/photos/GK2/Gk_5.jpeg",
    date: "2025-08-23T11:25:00.000Z",
    location: "Greater Kailash",
    caption: "Greater Kailash with you ❤️",
    group: "gk2",
  },
  {
    id: "photo-gk2-6",
    src: "/photos/GK2/Gk_6.jpeg",
    date: "2025-08-23T11:30:00.000Z",
    location: "Greater Kailash",
    caption: "Greater Kailash with you ❤️",
    group: "gk2",
  },

  // Majnu Ka Tila
  {
    id: "photo-mkt-1",
    src: "/photos/Majnu Ka Tila/MKT 1.jpeg",
    date: "2026-01-31T14:00:00.000Z",
    location: "Majnu Ka Tila",
    caption: "Sagar's Birthday",
    group: "majnu-ka-tila",
  },
  {
    id: "photo-mkt-2",
    src: "/photos/Majnu Ka Tila/MKT 2.jpeg",
    date: "2026-01-31T14:10:00.000Z",
    location: "Majnu Ka Tila",
    caption: "Sagar's Birthday",
    group: "majnu-ka-tila",
  },
  {
    id: "photo-mkt-3",
    src: "/photos/Majnu Ka Tila/MKT3.jpeg",
    date: "2026-01-31T14:15:00.000Z",
    location: "Majnu Ka Tila",
    caption: "Sagar's Birthday",
    group: "majnu-ka-tila",
  },
  {
    id: "photo-mkt-4",
    src: "/photos/Majnu Ka Tila/MKT4.jpeg",
    date: "2026-01-31T14:20:00.000Z",
    location: "Majnu Ka Tila",
    caption: "Sagar's Birthday",
    group: "majnu-ka-tila",
  },
  {
    id: "photo-mkt-5",
    src: "/photos/Majnu Ka Tila/MKT5.jpeg",
    date: "2026-01-31T14:30:00.000Z",
    location: "Majnu Ka Tila",
    caption: "Sagar's Birthday",
    group: "majnu-ka-tila",
  },
  {
    id: "photo-mkt-6",
    src: "/photos/Majnu Ka Tila/MKT6.jpeg",
    date: "2026-01-31T14:40:00.000Z",
    location: "Majnu Ka Tila",
    caption: "Sagar's Birthday",
    group: "majnu-ka-tila",
  },
  {
    id: "photo-mkt-7",
    src: "/photos/Majnu Ka Tila/MKT7.jpeg",
    date: "2026-01-31T14:50:00.000Z",
    location: "Majnu Ka Tila",
    caption: "Sagar's Birthday",
    group: "majnu-ka-tila",
  },
];

// Use /music-covers/name.jpg for your own art in public/music-covers/
const coverBase = (n: number) => `https://picsum.photos/300/300?random=${n + 10}`;
export const music: MusicTrack[] = [
  {
    id: "m1",
    title: "Saanun Nahar Wale Pool",
    artist: "Noor Jehan",
    category: "Soumi's Favs",
    spotifyUrl: "https://open.spotify.com/track/2roEIoENigdcmj8AEiPhfv?si=161125b389864470",
    coverImg: "/music-covers/Soumi's favs/Saanu_Neher.png",
  },
  {
    id: "m2",
    title: "Ham Tere Pyar Mein",
    artist: "Lata Mangeshkar",
    category: "Soumi's Favs",
    spotifyUrl: "https://open.spotify.com/track/2rHxwYzdn66nDMmDmmio6W?si=479bc37a54914b42",
    coverImg: "/music-covers/Soumi's favs/Hum_tere_pyaar_mein.png",
  },
  {
    id: "m3",
    title: "Lag Ja Gale Se Phir",
    artist: "Lata Mangeshkar",
    category: "Soumi's Favs",
    spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
    coverImg: "/music-covers/Soumi's favs/Lag_jaa_Gale.png",
  },
  {
    id: "m4",
    title: "Alvida",
    artist: "Pritam, KK",
    category: "Sarthak's Favs",
    spotifyUrl: "https://open.spotify.com/track/7EjatvVN2Y2GjpvKSyWJR4?si=d88544bd8ec144c2",
    coverImg: "/music-covers/Sarthak's fav/alvida.png",
  },
  {
    id: "m5",
    title: "In The End",
    artist: "Linkin Parks",
    category: "Sarthak's Favs",
    spotifyUrl: "https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq?si=95aea9ed810d4bb5",
    coverImg: "/music-covers/Sarthak's fav/In_the_end.png",
  },
  {
    id: "m6",
    title: "Phoolon Ke Rang Se",
    artist: "Kishore Kumar",
    category: "Sarthak's Favs",
    spotifyUrl: "https://open.spotify.com/track/5XDngPrHgHqf7eWBxe2D5L?si=64cfaae4b40f4757",
    coverImg: "/music-covers/Sarthak's fav/Phoolon_Ke_Rang.png",
  },
  {
    id: "m7",
    title: "Saanun Nahar Wale Pool",
    artist: "Noor Jehan",
    category: "Our Favs",
    spotifyUrl: "https://open.spotify.com/track/2roEIoENigdcmj8AEiPhfv?si=161125b389864470",
    coverImg: "/music-covers/Soumi's favs/Saanu_Neher.png",
  },
  {
    id: "m8",
    title: "Ham Tere Pyar Mein",
    artist: "Lata Mangeshkar",
    category: "Our Favs",
    spotifyUrl: "https://open.spotify.com/track/2rHxwYzdn66nDMmDmmio6W?si=479bc37a54914b42",
    coverImg: "/music-covers/Soumi's favs/Hum_tere_pyaar_mein.png",
  },
  {
    id: "m9",
    title: "Lag Ja Gale Se Phir",
    artist: "Lata Mangeshkar",
    category: "Our Favs",
    spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3",
    coverImg: "/music-covers/Soumi's favs/Lag_jaa_Gale.png",
  },
];

export const places: Place[] = [
  {
    id: "p1",
    name: "Vips Ethnic Day",
    location: "New Delhi",
    description: "Our favorite spot for golden hour",
    imageUrl: "/photos/VIPS Ethnic Day/Ethnic_Day_1.jpeg",
    date: "2023-05-26",
  },
  {
    id: "p2",
    name: "VIPS Farewell",
    location: "New Delhi",
    description: "The Day of farewell 🫶",
    imageUrl: "/photos/VIPS Farewell/Vips_Farewell_1.jpeg",
    date: "2025-02-01",
  },
  {
    id: "p3",
    name: "Sanjay Van",
    location: "New Delhi",
    description: "Beautiful sunsets with you ❤️",
    imageUrl: "/photos/Sanjay Van/Sanjay_Van_1.jpeg",
    date: "2023-09-15",
  },
  {
    id: "p4",
    name: "Humayun's Tomb",
    location: "New Delhi",
    description: "Embracing the beauty of history with you ❤️",
    imageUrl: "/photos/Humayun Tomb/Humayun_Tomb_1.jpeg",
    date: "2023-10-03",
  },
  {
    id: "p5",
    name: "Vizag",
    location: "Vishakapatanam",
    description: "Vizag with you ❤️",
    imageUrl: "/photos/Vizag/Vizag_1.jpeg",
    date: "2024-04-11",
  },
  {
    id: "p6",
    name: "Lodhi Garden",
    location: "New Delhi",
    description: "Lodhi Garden with you ❤️",
    imageUrl: "/photos/Lodhi garden/Lodhi_1.jpeg",
    date: "2025-04-27",
  },
  {
    id: "p7",
    name: "Greater Kailash",
    location: "New Delhi",
    description: "Greater Kailash with you ❤️",
    imageUrl: "/photos/GK2/Gk_1.jpeg",
    date: "2025-08-23",
  },
  {
    id: "p8", // Keep this unique ID
    name: "Majnu Ka Tila", // This MUST match the 'location' in your photos array
    location: "New Delhi",
    description: "Celebrating Sagar's Birthday with some amazing food and vibes!",
    imageUrl: "/photos/Majnu Ka Tila/MKT 1.jpeg", // This is the cover photo for the card
    date: "2026-01-31",
  },

];
