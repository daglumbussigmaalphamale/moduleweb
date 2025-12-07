// Toutes citations
const quotes = [
  "And did you notice that everybody is saying merry Christmas again? Did you notice?",
  "You know I had a lot of union labor. Vote for me, tremendous amount of labor.",
  "I am much better looking than Kamala Harris.",
  "If Hillary Clinton can't satisfy her husband, what makes her think she can satisfy America?",
  "She's actually always been very voluptuous.(about Ivanka Trump)",
  "She does have a very nice figure ... if [she] weren't my daughter, perhaps I'd be dating her.",
  "J.D. is kissing my ass he wants my support so bad",
  "we should use some of these dangerous cities as training grounds for our military"
];

const quoteElement = document.getElementById("quote");//cherche l'élement
const quoteBtn = document.getElementById("quote-btn");

function add_txt() {
  const randomIndex = Math.floor(Math.random() * quotes.length);//donne un nombre random qui corr à quote
  quoteElement.textContent = quotes[randomIndex];
}

// on relie le bouton à la fonction
quoteBtn.addEventListener("click", add_txt); //click active la fonction de random quote