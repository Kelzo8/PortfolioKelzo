const QUOTES = [
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "Programs must be written for people to read. — Harold Abelson",
  "First, solve the problem. Then, write the code. — John Johnson",
  "The only way to learn a new programming language is by writing programs. — Dennis Ritchie",
  "Code is like humor. When you have to explain it, it’s bad. — Cory House",
  "Make it work, make it right, make it fast. — Kent Beck",
];

export function getQuoteOfTheDay() {
  const idx = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[idx];
} 