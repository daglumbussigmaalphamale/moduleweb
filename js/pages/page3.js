// Toutes citations
const quotes = [
  "Mr. Trump is unfit for our nation's highest office",
  "Donald Trump is frankly dangerous.",
  "I don't really care what happens to Ukraine one way or another.",
  "President Trump has done more than anyone in my lifetime to earn the trust of the movement he leads. I am proud to stand beside him.",
  
];

const quoteElement = document.getElementById("quote");//cherche l'élement
const quoteBtn = document.getElementById("quote-btn");

function add_txt() {
  const randomIndex = Math.floor(Math.random() * quotes.length);//donne un nombre random qui corr à quote
  quoteElement.textContent = quotes[randomIndex];
}

// on relie le bouton à la fonction
quoteBtn.addEventListener("click", add_txt); //click active la fonction de random quote
//toutes images même chose que txt
const images = [
  "media/page1/vancecutout.png",  
  "media/page3/vance1.png",
  "media/page3/vance2.png",
  "media/page3/vance3.png"
];
const imgElement = document.getElementById("vance-img");
const imgBtn = document.getElementById("img-btn");

function changeImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  imgElement.src = images[randomIndex];
}

imgBtn.addEventListener("click", changeImage);