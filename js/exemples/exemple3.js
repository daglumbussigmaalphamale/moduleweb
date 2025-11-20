console.log("bonjour");
const statut = document.getElementById("statut");
const ctx_statut = statut.getContext("2d");

ctx_statut.fillStyle = "green";
ctx_statut.fillRect(0, 0, 300, 300);

const dessin = document.getElementById("dessin");
const context = dessin.getContext("2d");

context.beginPath()
context.strokeStyle = "aqua";
context.moveTo(250, 100);
context.lineTo(100, 250);
context.lineTo(250, 400);
context.lineTo(400, 250);
context.closePath();
// context.fillStyle = "aqua";
// context.fill();
context.stroke();




context.beginPath();
context.arc(250, 250, 30, 0, 2 * Math.PI)
context.stroke();


// commande majuscule 7 pour tout mettre en vert
// context.fillStyle = "black" ;
// context.fillRect(0, 0, 100, 100);
// context.fillRect(200, 200, 100, 100);
// context.fillRect(400, 400, 100, 100);

// for(var i = 0; i < 5;i++) {
//     for(var j= 0; j < 5; j++){
//         if((i + j) % 2 == 0) {
//             context.fillStyle = "black";
//         } else {
//             context.fillStyle = "white";
//         }
//         context.fillRect(100 * i, 100 * j, 100, 100);
//     }
// }