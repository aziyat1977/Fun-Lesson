import { QuizItem, SimpleQuestion, TruthLieItem, BinaryChoiceItem, WYRItem, ConnectionItem, SynonymItem } from './types';

export const MOVIE_ITEMS: QuizItem[] = [
  { id: 1, emoji: '⚡👓🪄', hint: 'Classic Magic Movie', answer: 'Harry Potter' },
  { id: 2, emoji: '👧🏻🖐️🎻', hint: 'Viral Netflix Dance', answer: 'Wednesday' },
  { id: 3, emoji: '😱🏠❄️', hint: 'Every New Year on TV', answer: 'Home Alone' },
  { id: 4, emoji: '🦑🚥🔫', hint: 'Season 2 is coming...', answer: 'Squid Game' },
  { id: 5, emoji: '🕷️🕸️🔴', hint: 'Peter Parker', answer: 'Spider-Man' },
  { id: 6, emoji: '🚢🧊💔', hint: 'Jack and Rose', answer: 'Titanic' },
  { id: 7, emoji: '🦁👑🐗', hint: 'Hakuna Matata', answer: 'The Lion King' },
  { id: 8, emoji: '❄️☃️👸🏼', hint: 'Let it Go', answer: 'Frozen' },
  { id: 9, emoji: '💊🕶️🟢', hint: 'Red pill or Blue pill?', answer: 'The Matrix' },
  { id: 10, emoji: '👽🚲🌕', hint: 'Phone Home', answer: 'E.T.' },
];

export const MUSIC_ITEMS: QuizItem[] = [
  { id: 11, emoji: '⚽💃🇿🇦', hint: 'Shakira (Football)', answer: 'Waka Waka' },
  { id: 12, emoji: '🇰🇷🕶️🐎', hint: 'Oppa Gangnam Style', answer: 'Gangnam Style' },
  { id: 13, emoji: '🥊🐲💥', hint: 'Imagine Dragons', answer: 'Believer' },
  { id: 14, emoji: '🇵🇷🎸🐌', hint: 'Luis Fonsi (Spanish)', answer: 'Despacito' },
  { id: 15, emoji: '💎☔️🎤', hint: 'Rihanna', answer: 'Diamonds' },
  { id: 16, emoji: '👑🎤🎸', hint: 'Bohemian Rhapsody', answer: 'Queen' },
  { id: 17, emoji: '🧟‍♂️🕺🌕', hint: 'King of Pop', answer: 'Thriller (MJ)' },
  { id: 18, emoji: '👱‍♀️🧣💔', hint: 'Swifties love her', answer: 'Taylor Swift' },
  { id: 19, emoji: '🧨💜🇰🇷', hint: 'K-Pop Kings', answer: 'BTS (Dynamite)' },
  { id: 20, emoji: '🍝🧔‍♂️🍝', hint: 'Eminem', answer: 'Lose Yourself' },
];

export const GAME_ITEMS: QuizItem[] = [
  { id: 21, emoji: '🪂🔫🐔', hint: 'Winner Winner...', answer: 'PUBG Mobile' },
  { id: 22, emoji: '✈️🔵💬', hint: 'Best Messenger App', answer: 'Telegram' },
  { id: 23, emoji: '📸❤️🤳', hint: 'Likes & Reels', answer: 'Instagram' },
  { id: 24, emoji: '🚀🔴🔪', hint: 'Who is the Impostor?', answer: 'Among Us' },
  { id: 25, emoji: '🟩⛏️🧟', hint: 'Blocks & Creepers', answer: 'Minecraft' },
  { id: 26, emoji: '🚗⚽️🚀', hint: 'Car Soccer', answer: 'Rocket League' },
  { id: 27, emoji: '🍬🔨🍭', hint: 'Mobile Puzzle', answer: 'Candy Crush' },
  { id: 28, emoji: '🍄🏎️🍌', hint: 'Nintendo Racing', answer: 'Mario Kart' },
  { id: 29, emoji: '🧱👷‍♂️🎮', hint: 'Oof!', answer: 'Roblox' },
  { id: 30, emoji: '⚔️🛡️🐲', hint: 'Skyrim / Elden Ring', answer: 'RPG Games' },
];

export const LEGEND_ITEMS: QuizItem[] = [
  { id: 31, emoji: '⚽🇵🇹7️⃣', hint: 'The G.O.A.T?', answer: 'Cristiano Ronaldo' },
  { id: 32, emoji: '💰🐯🎥', hint: 'Money & Challenges', answer: 'MrBeast' },
  { id: 33, emoji: '🚽👨🎶', hint: 'Very weird YouTube trend', answer: 'Skibidi Toilet' },
  { id: 34, emoji: '🦇🌑🌃', hint: 'Dark Knight', answer: 'Batman' },
  { id: 35, emoji: '👱‍♀️👠🩷', hint: 'Pink & Plastic', answer: 'Barbie' },
  { id: 36, emoji: '🚀🚗🐦', hint: 'Tesla / SpaceX', answer: 'Elon Musk' },
  { id: 37, emoji: '🍏📱🐢', hint: 'iPhone Creator', answer: 'Steve Jobs' },
  { id: 38, emoji: '🤨💪🎬', hint: 'The Rock', answer: 'Dwayne Johnson' },
  { id: 39, emoji: '🐐🇦🇷⚽', hint: 'Inter Miami', answer: 'Messi' },
  { id: 40, emoji: '🕵️‍♂️🍸🔫', hint: '007', answer: 'James Bond' },
];

export const MANDELA_QUESTIONS = [
    { title: "Pikachu's Tail", optionA: "Black Tip", optionB: "All Yellow", hint: "Think carefully...", correct: 'B' },
    { title: "KitKat Logo", optionA: "Kit-Kat", optionB: "KitKat", hint: "Is there a dash?", correct: 'B' },
    { title: "Mickey Mouse", optionA: "Has Suspenders", optionB: "No Suspenders", hint: "Just shorts?", correct: 'B' },
    { title: "Monopoly Man", optionA: "Has Monocle", optionB: "No Monocle", hint: "Look at his eye.", correct: 'B' },
    { title: "Froot Loops", optionA: "Fruit Loops", optionB: "Froot Loops", hint: "Cereal spelling.", correct: 'B' },
    { title: "Curious George", optionA: "Has a Tail", optionB: "No Tail", hint: "Is he a monkey or an ape?", correct: 'B' },
];

export const ROBOT_LYRICS = [
    { text: "I am in love with the geometry of your body.", answer: "Shape of You (Ed Sheeran)" },
    { text: "Do you desire to construct a frozen human?", answer: "Do You Want to Build a Snowman? (Frozen)" },
    { text: "I arrived inside like a construction sphere.", answer: "Wrecking Ball (Miley Cyrus)" },
    { text: "Is this the actual life? Is this just imaginary land?", answer: "Bohemian Rhapsody (Queen)" },
    { text: "I'm going to take my equine to the historic path.", answer: "Old Town Road (Lil Nas X)" },
    { text: "Baby, you are a firework show.", answer: "Firework (Katy Perry)" },
];

export const EMOJI_IDIOMS = [
  { emojis: "📚🐛", answer: "Bookworm" },
  { emojis: "🥶🦶", answer: "Cold Feet" },
  { emojis: "🕒💰", answer: "Time is Money" },
  { emojis: "🍰🚶", answer: "Piece of Cake" },
  { emojis: "🌧️🐱🐶", answer: "Raining Cats & Dogs" },
  { emojis: "🥔🛋️", answer: "Couch Potato" },
  { emojis: "🦵🦴", answer: "Break a Leg" },
  { emojis: "🤐🫘", answer: "Spill the Beans" }
];

export const ODD_ONE_OUT = [
    { items: ["TikTok", "Instagram", "Netflix", "Snapchat"], answer: "Netflix", reason: "It's for movies, not messaging/social." },
    { items: ["Batman", "Superman", "Spiderman", "Joker"], answer: "Joker", reason: "He is a villain (bad guy)." },
    { items: ["Piano", "Guitar", "Violin", "Flute"], answer: "Flute", reason: "It has no strings (Wind instrument)." },
    { items: ["Football", "Tennis", "Basketball", "Swimming"], answer: "Swimming", reason: "You don't use a ball." },
    { items: ["Pizza", "Burger", "Sushi", "Coke"], answer: "Coke", reason: "It is a drink, the others are food." },
    { items: ["Summer", "Winter", "Tuesday", "Spring"], answer: "Tuesday", reason: "It is a day, the others are seasons." }
];

export const SLANG_SCRAMBLE = [
    { scrambled: "Z I R R", answer: "RIZZ" },
    { scrambled: "Y A L S", answer: "SLAY" },
    { scrambled: "O G A T", answer: "G.O.A.T." },
    { scrambled: "P A C O N", answer: "NO CAP" },
    { scrambled: "S U S Y", answer: "SUS" },
    { scrambled: "E E Y T", answer: "YEET" },
    { scrambled: "T B E", answer: "BET" },
    { scrambled: "O H T S G", answer: "GHOST" }
];

export const PRICE_IS_RIGHT = [
    { item: "PlayStation 5 Pro", price: "$699" },
    { item: "iPhone 15 Pro Max (1TB)", price: "$1,599" },
    { item: "Lamborghini Urus", price: "$230,000" },
    { item: "Rolex Submariner", price: "$10,250" },
    { item: "Air Jordan 1 (1985)", price: "$25,000" },
    { item: "Gulfstream Jet", price: "$65,000,000" }
];

export const FORBIDDEN_WORD_ITEMS = [
    { 
        team: "Team A", color: "sky", target: "TIKTOK", 
        forbidden: ["Video", "Dance", "Phone", "App"] 
    },
    { 
        team: "Team B", color: "purple", target: "SCHOOL", 
        forbidden: ["Teacher", "Lesson", "Book", "Study"] 
    }
];

export const DISCUSSION_ITEMS = [
    { left: "PUBG Mobile", leftIcon: "gamepad", right: "Free Fire", rightIcon: "fire" },
    { left: "iPhone", leftIcon: "apple", right: "Samsung", rightIcon: "phone" },
];

// --- NEW GAMES DATA ---

export const CATEGORIES_ITEMS: SimpleQuestion[] = [
    { question: "Fruits that are Red", answer: "Apple, Strawberry, Cherry, Watermelon..." },
    { question: "Things with Wheels", answer: "Car, Bike, Bus, Skateboard..." },
    { question: "Animals that lay eggs", answer: "Chicken, Snake, Lizard, Penguin..." },
    { question: "Sports played with a ball", answer: "Football, Tennis, Basketball, Golf..." },
    { question: "Things in a bathroom", answer: "Toothbrush, Soap, Towel, Mirror..." },
    { question: "Cold foods", answer: "Ice Cream, Salad, Yogurt, Sushi..." },
    { question: "Musical Instruments", answer: "Guitar, Piano, Drums, Violin..." },
    { question: "Countries in Europe", answer: "France, Spain, Germany, Italy..." },
    { question: "Things that fly", answer: "Bird, Plane, Bee, Helicopter..." },
    { question: "Pizza Toppings", answer: "Cheese, Pepperoni, Mushroom, Olive..." },
];

export const TRUTH_LIE_ITEMS: TruthLieItem[] = [
    { topic: "Bananas", options: [{ text: "Grow on trees", isLie: true }, { text: "Are curved due to sun", isLie: false }, { text: "Are technically berries", isLie: false }], explanation: "Bananas grow on giant herbs, not trees!" },
    { topic: "Octopus", options: [{ text: "Has 3 hearts", isLie: false }, { text: "Has blue blood", isLie: false }, { text: "Has 6 arms", isLie: true }], explanation: "They have 8 arms (tentacles)." },
    { topic: "Venus", options: [{ text: "Hottest planet", isLie: false }, { text: "Spins backwards", isLie: false }, { text: "Has 2 moons", isLie: true }], explanation: "Venus has 0 moons." },
    { topic: "Humans", options: [{ text: "Share 50% DNA with bananas", isLie: false }, { text: "Shed 40lbs skin in life", isLie: false }, { text: "Smallest bone is in nose", isLie: true }], explanation: "Smallest bone (stapes) is in the ear." },
    { topic: "Honey", options: [{ text: "Never spoils", isLie: false }, { text: "Is bee vomit", isLie: false }, { text: "Made from pollen", isLie: true }], explanation: "It's made from nectar, not pollen." },
    { topic: "Bulls", options: [{ text: "Hate the color red", isLie: true }, { text: "Have 4 stomachs", isLie: false }, { text: "Eat grass", isLie: false }], explanation: "Bulls are colorblind! They hate the movement." },
    { topic: "Strawberries", options: [{ text: "Are not berries", isLie: false }, { text: "Seeds are on outside", isLie: false }, { text: "Grow on bushes", isLie: true }], explanation: "They grow on small plants (runners), not bushes." },
    { topic: "Space", options: [{ text: "Space is silent", isLie: false }, { text: "Space is cold", isLie: false }, { text: "Sun is yellow", isLie: true }], explanation: "The sun is actually white." },
    { topic: "Water", options: [{ text: "Expands when frozen", isLie: false }, { text: "70% of earth surface", isLie: false }, { text: "Is completely colorless", isLie: true }], explanation: "Water has a very slight blue tint." },
    { topic: "Everest", options: [{ text: "Tallest mountain", isLie: false }, { text: "Grows 4mm/year", isLie: false }, { text: "Located in Europe", isLie: true }], explanation: "It is in Asia (Nepal/China)." },
];

export const QUOTES_ITEMS: SimpleQuestion[] = [
    { question: "To be or not to be", answer: "William Shakespeare" },
    { question: "I have a dream", answer: "Martin Luther King Jr." },
    { question: "May the Force be with you", answer: "Star Wars (Han Solo/Obi-Wan)" },
    { question: "Just Do It", answer: "Nike" },
    { question: "Winter is Coming", answer: "Game of Thrones" },
    { question: "You're fired!", answer: "Donald Trump (The Apprentice)" },
    { question: "E=mc²", answer: "Albert Einstein" },
    { question: "Stay Hungry, Stay Foolish", answer: "Steve Jobs" },
    { question: "Float like a butterfly, sting like a bee", answer: "Muhammad Ali" },
    { question: "I'm the king of the world!", answer: "Titanic (Jack)" },
];

export const FACT_FICTION_ITEMS: BinaryChoiceItem[] = [
    { statement: "Goldfish have a 3-second memory.", isTrue: false, fact: "They can remember things for months." },
    { statement: "Bulls get angry when they see red.", isTrue: false, fact: "They are colorblind." },
    { statement: "The Great Wall of China is visible from space.", isTrue: false, fact: "It is too narrow to see without aid." },
    { statement: "Bananas are berries.", isTrue: true, fact: "Botanically, they are berries!" },
    { statement: "Humans share 50% of DNA with bananas.", isTrue: true, fact: "Life shares much common DNA." },
    { statement: "Napoleon was very short.", isTrue: false, fact: "He was average height for his time." },
    { statement: "Vikings wore horned helmets.", isTrue: false, fact: "Opera costumes created that myth." },
    { statement: "You swallow 8 spiders a year in your sleep.", isTrue: false, fact: "Spiders avoid breathing humans." },
    { statement: "An ostrich's eye is bigger than its brain.", isTrue: true, fact: "Their eyes are huge." },
    { statement: "Water makes up 60% of the adult human body.", isTrue: true, fact: "We are mostly water." },
];

export const RIDDLE_ITEMS: SimpleQuestion[] = [
    { question: "What has to be broken before you can use it?", answer: "An Egg" },
    { question: "I’m tall when I’m young, and I’m short when I’m old.", answer: "A Candle" },
    { question: "What is full of holes but still holds water?", answer: "A Sponge" },
    { question: "What is always in front of you but can’t be seen?", answer: "The Future" },
    { question: "What goes up but never comes down?", answer: "Your Age" },
    { question: "The more of this there is, the less you see.", answer: "Darkness" },
    { question: "What has one eye, but can’t see?", answer: "A Needle" },
    { question: "What has many keys but can’t open a single lock?", answer: "A Piano" },
    { question: "What gets wet while drying?", answer: "A Towel" },
    { question: "I possess cities but no houses, mountains but no trees. What am I?", answer: "A Map" },
];

export const WYR_ITEMS: WYRItem[] = [
    { optionA: "Be Rich & Unknown", optionB: "Be Poor & Famous" },
    { optionA: "Fight 1 horse-sized duck", optionB: "Fight 100 duck-sized horses" },
    { optionA: "Say everything on your mind", optionB: "Never be able to speak again" },
    { optionA: "Live in the past (1900s)", optionB: "Live in the future (3000s)" },
    { optionA: "Have a Pause button", optionB: "Have a Rewind button" },
    { optionA: "Be able to Fly", optionB: "Be Invisible" },
    { optionA: "Give up your Phone", optionB: "Give up Sugar/Candy" },
    { optionA: "Be hairy all over", optionB: "Have no hair anywhere" },
    { optionA: "Live in the Ocean", optionB: "Live in Space" },
    { optionA: "Be a Wizard", optionB: "Be a Superhero" },
];

export const CONNECTION_ITEMS: ConnectionItem[] = [
    { words: ["Rain", "Bow", "Tie"], answer: "Bow" },
    { words: ["Tooth", "Hair", "Paint"], answer: "Brush" },
    { words: ["Sun", "Flower", "Shine"], answer: "Sun" },
    { words: ["Fire", "Work", "Place"], answer: "Fire" },
    { words: ["Book", "Shelf", "Mark"], answer: "Book" },
    { words: ["Snow", "Ball", "Man"], answer: "Snow" },
    { words: ["Butter", "Fly", "Cup"], answer: "Butter" },
    { words: ["Sea", "Shell", "Weed"], answer: "Sea" },
    { words: ["Pan", "Cake", "Handle"], answer: "Pan" },
    { words: ["Apple", "Pine", "Juice"], answer: "Apple" },
];

export const SCRAMBLE_ITEMS: SimpleQuestion[] = [
    { question: "is / name / My / Bond / James", answer: "My name is James Bond." },
    { question: "like / I / playing / football", answer: "I like playing football." },
    { question: "are / How / you / today?", answer: "How are you today?" },
    { question: "went / yesterday / I / school / to", answer: "I went to school yesterday." },
    { question: "favorite / is / What / color / your?", answer: "What is your favorite color?" },
    { question: "English / learning / fun / is", answer: "Learning English is fun." },
    { question: "cat / The / mat / on / sat / the", answer: "The cat sat on the mat." },
    { question: "pizza / want / dinner / for / I", answer: "I want pizza for dinner." },
    { question: "time / What / it / is?", answer: "What time is it?" },
    { question: "see / Can / the / you / stars?", answer: "Can you see the stars?" },
];

export const SYNONYM_ITEMS: SynonymItem[] = [
    { word: "HAPPY", options: ["Joyful", "Sad", "Angry"], correctIndex: 0 },
    { word: "BIG", options: ["Tiny", "Huge", "Soft"], correctIndex: 1 },
    { word: "FAST", options: ["Slow", "Quick", "Heavy"], correctIndex: 1 },
    { word: "SMART", options: ["Clever", "Silly", "Tall"], correctIndex: 0 },
    { word: "RICH", options: ["Poor", "Kind", "Wealthy"], correctIndex: 2 },
    { word: "HARD", options: ["Easy", "Difficult", "Soft"], correctIndex: 1 },
    { word: "START", options: ["End", "Begin", "Stop"], correctIndex: 1 },
    { word: "SCARE", options: ["Frighten", "Laugh", "Sleep"], correctIndex: 0 },
    { word: "BEAUTIFUL", options: ["Ugly", "Pretty", "Old"], correctIndex: 1 },
    { word: "QUIET", options: ["Loud", "Busy", "Silent"], correctIndex: 2 },
];

export const FLAG_ITEMS: SimpleQuestion[] = [
    { question: "🇺🇸", answer: "USA" },
    { question: "🇬🇧", answer: "UK" },
    { question: "🇨🇦", answer: "Canada" },
    { question: "🇯🇵", answer: "Japan" },
    { question: "🇧🇷", answer: "Brazil" },
    { question: "🇫🇷", answer: "France" },
    { question: "🇩🇪", answer: "Germany" },
    { question: "🇮🇹", answer: "Italy" },
    { question: "🇪🇸", answer: "Spain" },
    { question: "🇦🇺", answer: "Australia" },
];
