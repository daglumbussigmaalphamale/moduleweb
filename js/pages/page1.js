const preview = document.getElementById("preview");

document.querySelectorAll(".small").forEach(img => {

    img.addEventListener("mouseover", () => {
        preview.src = img.dataset.large;
        preview.style.visibility = "visible";   // rendre visible
    });

    img.addEventListener("mouseout", () => {
        preview.style.visibility = "hidden";    // cacher mais garder la place
    });

});