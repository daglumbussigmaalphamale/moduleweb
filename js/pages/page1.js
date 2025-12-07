const preview = document.getElementById("preview");
const previewText = document.getElementById("preview-text");

// Texte par défaut affiché quand aucun personnage n'est survolé
const defaultText = "Survolez un personnage pour voir un aperçu.";

document.querySelectorAll(".small").forEach(img => {

    img.addEventListener("mouseover", () => {
        // image
        preview.src = img.dataset.large;
        preview.style.visibility = "visible";

        // texte
        if (img.dataset.text) {
            previewText.textContent = img.dataset.text;
        } else {
            previewText.textContent = defaultText;
        }
    });

    img.addEventListener("mouseout", () => {
        // cacher visuellement l'image mais garder la place
        preview.style.visibility = "hidden";

        // remettre le texte par défaut
        previewText.textContent = defaultText;
    });

});