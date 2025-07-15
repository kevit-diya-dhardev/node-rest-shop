const quotes = [
  "Be yourself; everyone else is already taken.",
  "In the middle of difficulty lies opportunity.",
  "Happiness depends upon ourselves.",
  "Act as if what you do makes a difference. It does.",
  "Well done is better than well said.",
];
const authors = [
  "Oscar Wilde",
  "Oscar Wilde",
  "Aristotle",
  "William James",
  "Benjamin Franklin",
];
const button = document.getElementsByTagName("button").item(0);
const p = document.getElementsByTagName("p").item(0);
const author = document.getElementsByTagName("label").item(0);
button.addEventListener("click", () => {
  let idx = Math.floor(Math.random() * 5);
  console.log(idx);
  p.classList.add("");
  p.innerText = quotes[idx];
  author.innerText = authors[idx];
});

console.log(button);
