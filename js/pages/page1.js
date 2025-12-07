const preview = document.getElementById("preview");
const previewText = document.getElementById("preview-text");

const defaultText = "hover over character";

document.querySelectorAll(".small").forEach(img => {

    img.addEventListener("mouseover", () => {
        //image 
        if (img.dataset.large) {
            preview.src = img.dataset.large;
            preview.style.visibility = "visible";   // rendre visible
        }
        //text 
        if(img.dataset.text) {
            //à cause d'une maj mdr
            previewText.textContent = img.dataset.text;
        } else {
            previewText.textContent = defaultText;
        }
    });

    img.addEventListener("mouseout", () => {
        preview.style.visibility = "hidden";    // cacher mais garder la place

        previewText.textContent = defaultText;
    });

});