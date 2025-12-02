document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".food-card");

    const featuredImage = document.getElementById("featuredImage");
    const featuredTitle = document.getElementById("featuredTitle");
    const featuredDesc = document.getElementById("featuredDesc");
    const featuredSection = document.getElementById("featuredSection");

    cards.forEach(card => {
        card.addEventListener("click", () => {

            // Update featured data
            const image = card.getAttribute("data-image");
            const name = card.getAttribute("data-name");
            const desc = card.getAttribute("data-desc");

            featuredImage.src = image;
            featuredTitle.textContent = name;
            featuredDesc.textContent = desc;

            // Smooth scroll to featured section
            featuredSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

});
