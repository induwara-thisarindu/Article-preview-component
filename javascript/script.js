const shareButton = document.getElementById('share-btn');
const links = document.getElementById('links');

shareButton.addEventListener("click", () => {
    if (links.classList.contains("show")) {
        links.classList.remove("show");
        links.style.animation = "fadeOut 0.5s";
        shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
        setTimeout(() => {
            links.style.display = "none";
        }, 500)
    } else {
        links.classList.add("show");
        links.style.animation = "fadeIn 0.5s";
        links.style.display = "flex";
        shareButton.style.backgroundColor = "hsl(217, 19%, 35%)";
    }
});