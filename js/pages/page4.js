// Toutes citations
const quotes = [
  "If women can make it, excellent. If not, it is what it is",
  "No more climate-change worship, no more division, distraction or gender delusions, no more debris.[...] we are done with that shit",
  "I realized that perhaps my planetary purpose was to proactively, politically, and then militarily destroy Islamist radicals",
  "Islam itself is not compatible with Western forms of government.",
  "Feeding a well-oiled killing machine, now that’s my jam."
];

const quoteElement = document.getElementById("quote");//cherche l'élement
const quoteBtn = document.getElementById("quote-btn");

function add_txt() {
  const randomIndex = Math.floor(Math.random() * quotes.length);//donne un nombre random qui corr à quote
  quoteElement.textContent = quotes[randomIndex];
}

// on relie le bouton à la fonction
quoteBtn.addEventListener("click", add_txt); //click active la fonction de random quote