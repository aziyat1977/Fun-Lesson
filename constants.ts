import { QuizItem } from './types';

export const MOVIE_ITEMS: QuizItem[] = [
  { id: 1, emoji: '⚡👓🪄', hint: 'Classic Magic Movie', answer: 'Harry Potter' },
  { id: 2, emoji: '👧🏻🖐️🎻', hint: 'Viral Netflix Dance', answer: 'Wednesday' },
  { id: 3, emoji: '😱🏠❄️', hint: 'Every New Year on TV', answer: 'Home Alone' },
  { id: 4, emoji: '🦑🚥🔫', hint: 'Season 2 is coming...', answer: 'Squid Game' },
  { id: 5, emoji: '🕷️🕸️🔴', hint: 'Peter Parker', answer: 'Spider-Man' },
];

export const MUSIC_ITEMS: QuizItem[] = [
  { id: 6, emoji: '⚽💃🇿🇦', hint: 'Shakira (Football)', answer: 'Waka Waka' },
  { id: 7, emoji: '🇰🇷🕶️🐎', hint: 'Oppa Gangnam Style', answer: 'Gangnam Style' },
  { id: 8, emoji: '🥊🐲💥', hint: 'Imagine Dragons', answer: 'Believer' },
  { id: 9, emoji: '🇵🇷🎸🐌', hint: 'Luis Fonsi (Spanish)', answer: 'Despacito' },
  { id: 10, emoji: '💎☔️🎤', hint: 'Rihanna', answer: 'Diamonds' },
];

export const GAME_ITEMS: QuizItem[] = [
  { id: 11, emoji: '🪂🔫🐔', hint: 'Winner Winner...', answer: 'PUBG Mobile' },
  { id: 12, emoji: '✈️🔵💬', hint: 'Best Messenger App', answer: 'Telegram' },
  { id: 13, emoji: '📸❤️🤳', hint: 'Likes & Reels', answer: 'Instagram' },
  { id: 14, emoji: '🚀🔴🔪', hint: 'Who is the Impostor?', answer: 'Among Us' },
  { id: 15, emoji: '🟩⛏️🧟', hint: 'Blocks & Creepers', answer: 'Minecraft' },
];

export const LEGEND_ITEMS: QuizItem[] = [
  { id: 16, emoji: '⚽🇵🇹7️⃣', hint: 'The G.O.A.T?', answer: 'Cristiano Ronaldo' },
  { id: 17, emoji: '💰🐯🎥', hint: 'Money & Challenges', answer: 'MrBeast' },
  { id: 18, emoji: '🚽👨🎶', hint: 'Very weird YouTube trend', answer: 'Skibidi Toilet' },
  { id: 19, emoji: '🦇🌑🌃', hint: 'Dark Knight', answer: 'Batman' },
  { id: 20, emoji: '👱‍♀️👠🩷', hint: 'Pink & Plastic', answer: 'Barbie' },
];

export const MANDELA_QUESTIONS = [
    { title: "Pikachu's Tail", optionA: "Black Tip", optionB: "All Yellow", hint: "Think carefully...", correct: 'B' },
    { title: "KitKat Logo", optionA: "Kit-Kat", optionB: "KitKat", hint: "Is there a dash?", correct: 'B' },
    { title: "Mickey Mouse", optionA: "Has Suspenders", optionB: "No Suspenders", hint: "Just shorts?", correct: 'B' },
];

export const ROBOT_LYRICS = [
    { text: "I am in love with the geometry of your body.", answer: "Shape of You (Ed Sheeran)" },
    { text: "Do you desire to construct a frozen human?", answer: "Do You Want to Build a Snowman? (Frozen)" },
    { text: "I arrived inside like a construction sphere.", answer: "Wrecking Ball (Miley Cyrus)" },
];

// NEW GAMES CONSTANTS

export const EMOJI_IDIOMS = [
  { emojis: "📚🐛", answer: "Bookworm" },
  { emojis: "🥶🦶", answer: "Cold Feet" },
  { emojis: "🕒💰", answer: "Time is Money" },
  { emojis: "🍰🚶", answer: "Piece of Cake" }
];

export const ODD_ONE_OUT = [
    { items: ["TikTok", "Instagram", "Netflix", "Snapchat"], answer: "Netflix", reason: "It's for movies, not messaging/social." },
    { items: ["Batman", "Superman", "Spiderman", "Joker"], answer: "Joker", reason: "He is a villain (bad guy)." },
    { items: ["Piano", "Guitar", "Violin", "Flute"], answer: "Flute", reason: "It has no strings." }
];

export const SLANG_SCRAMBLE = [
    { scrambled: "Z I R R", answer: "RIZZ" },
    { scrambled: "Y A L S", answer: "SLAY" },
    { scrambled: "O G A T", answer: "G.O.A.T." },
    { scrambled: "P A C O N", answer: "NO CAP" }
];

export const PRICE_IS_RIGHT = [
    { item: "PlayStation 5 Pro", price: "$699" },
    { item: "iPhone 15 Pro Max (1TB)", price: "$1,599" },
    { item: "Lamborghini Urus", price: "$230,000" }
];