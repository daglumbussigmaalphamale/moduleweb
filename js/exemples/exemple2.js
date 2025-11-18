var gooner = {
    nom: 'gooner',
    classe: 'sigma',
    niveau: 1,
    passer_niveau: function(){
        this.niveau++;
    }
};
console.log(gooner);

console.log(gooner.niveau);
gooner.passer_niveau();
console.log(gooner.niveau);

function creer_personnage(nom,classe,niveau) {
    var nouveau_personnage = {
        nom: nom,
        classe: classe,
        niveau: niveau,
        passer_niveau: function(){
            this.niveau++;
        },
        creer_li: function(){
            var li_personnage = document.createElement('li');
            var text_personnage = document.createTextNode(
                this.nom + ' ('+ this.classe +', niveau' + this.niveau + ')'
            );
            li_personnage.appendChild(text_personnage);
            li_personnage.setAttribute('classe',this.classe)
            return li_personnage;

        }
    }
    return nouveau_personnage;
}

    

var niclaos = creer_personnage('niclaos','lolgamer', 3);

console.log(niclaos)

var troupe = [
    creer_personnage('niclaos','lolgamer', 3),
    creer_personnage('gojo_satoru','toomuchaura', 99),
    creer_personnage('luffy','cantswim', 70)
]
console.log(troupe);
console.log(troupe[0])

for (var i = 0; i < troupe.length;i ++){
    var perso = troupe[i];
    li_personnage = perso.creer_li();

    var liste_perso = document.getElementById("liste_de_perso");
    liste_perso.appendChild(li_personnage);
    console.log(li_personnage)


};

