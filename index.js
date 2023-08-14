const quotes = [
  "I'm not here to be perfect, I'm here to be real.",
  "I'm not interested in money. I just want to be wonderful.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "If you can dream it, you can do it.",
  "The best way to find out if you can trust somebody is to trust them.",
  "The only Limit to our realization of tomorrow will be our doubts of today.",
  "The most important thing is to enjoy your life - to be happy - it's all that matters.",
  "The best way to find out what you want in life is to try a lot of things.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "In this world nothing can be said to be certain, except death and taxes.",
  "Do, or do not. There is no “try”.",
  "You’re strong. But I could snap my fingers, and you’d all cease to exist.",
  "It is not our abilities that show what we truly are… it is our choices.",
  "Oh yes, the past can hurt. But you can either run from it, or learn from it.",
  "Chaos is not a pit. Chaos is a ladder.",
  "I am no man!",
  "I'm gonna make him an offer he can't refuse.",
  "It's Not About Money. It's About Sending A Message.",
  "I find your lack of faith disturbing.",
];

const authors = [
  "Lady Gaga",
  "Marilyn Monroe",
  "Winston Churchill",
  "Walt Disney",
  "Ernest Hemingway",
  "Franklin D. Roosevelt",
  "Steve Jobs",
  "Oprah Winfrey",
  "Albert Einstein",
  "Benjamin Franklin",
  "Leonardo da Vinci",
  "Yoda",
  "Thanos",
  "Dumbledore",
  "Rafiki",
  "Petyr 'Littlefinger' Baelish",
  "Éowyn",
  "Don Vito Corleone",
  "The Joker",
  "Darth Vader",
];

const roles = [
  "American singer and songwriter",
  "American actress and model",
  "Prime Minister of the United Kingdom",
  "American animator, film producer and entrepreneur",
  "American novelist, short-story writer, and journalist",
  "32nd president of the United States",
  "American business magnate, inventor, and investor",
  "American talk show host, television producer, actress, author, and media proprietor",
  "German-born theoretical physicist",
  "American printer and publisher, author, inventor and scientist, and diplomat",
  "Star Wars: Episode V – The Empire Strikes Back",
  "Avengers: Infinity War",
  "Harry Potter and the Chamber of Secrets",
  "The Lion King",
  "Game of Thrones",
  "The Lord of the Rings: The Return of the King",
  "The Godfather",
  "The Dark Knight",
  "Star Wars: Episode IV – A New Hope",
];

/////////////////// FUNCTION ////////////////////////////

const randomQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const author = authors[Math.floor(Math.random() * authors.length)];
  const role = roles[Math.floor(Math.random() * roles.length)];

  console.log("Enjoy your 100% accurate quote:");
  console.log(`"${quote}" - ${author} (${role})`);
};

randomQuote();
