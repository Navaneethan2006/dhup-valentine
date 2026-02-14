document.addEventListener("DOMContentLoaded", function() {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const happyBaby = document.getElementById("happyBaby");
    const sadBaby = document.getElementById("sadBaby");

    /* Initial State */
    happyBaby.style.opacity = "0";
    sadBaby.style.opacity = "1";

    /* YES hover */
    yesBtn.addEventListener("mouseenter", function() {
        happyBaby.style.opacity = "1";
        happyBaby.style.transform = "scale(1)";
        sadBaby.style.opacity = "0";
    });

    yesBtn.addEventListener("mouseleave", function() {
        happyBaby.style.opacity = "0";
        sadBaby.style.opacity = "1";
    });

    /* YES click → Redirect */
    yesBtn.addEventListener("click", function() {
        window.location.href = "memory.html";
    });

    /* NO hover */
    noBtn.addEventListener("mouseenter", function() {

        sadBaby.style.transform = "scale(1.2)";

        noBtn.style.position = "fixed";

        const padding = 20;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });

    noBtn.addEventListener("mouseleave", function() {
        sadBaby.style.transform = "scale(1)";
    });

});
