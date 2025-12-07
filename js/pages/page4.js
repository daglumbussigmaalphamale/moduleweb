// Toutes citations
const quotes = [
  "I have the best words.",
  "Nobody knows the system better than me.",
  "I’m very highly educated. I know words, I have the best words.",
  
];

const quoteElement = document.getElementById("quote");//cherche l'élement
const quoteBtn = document.getElementById("quote-btn");

function add_txt() {
  const randomIndex = Math.floor(Math.random() * quotes.length);//donne un nombre random qui corr à quote
  quoteElement.textContent = quotes[randomIndex];
}

// on relie le bouton à la fonction
quoteBtn.addEventListener("click", add_txt); //click active la fonction de random quote