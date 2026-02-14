const photos = [
"assets/photos/1.jpeg",
"assets/photos/2.jpeg",
"assets/photos/3.jpeg",
"assets/photos/4.jpeg",
"assets/photos/5.jpeg",
"assets/photos/6.jpeg",
"assets/photos/7.jpeg",
"assets/photos/8.jpeg",
"assets/photos/9.jpeg",
"assets/photos/10.jpeg",
"assets/photos/11.jpeg",
"assets/photos/12.jpeg",
"assets/photos/13.jpeg",
"assets/photos/14.jpeg"
];

const texts = [
"Before I even existed in your world… you were already shining.",
"That tiny smile… was destiny’s first masterpiece.",
"Two little souls… growing in different worlds.",
"You were growing stronger… more beautiful each year.",
"Life was shaping you… gently and perfectly.",
"That innocence… that glow… it never left you.",
"Somewhere… time was preparing us.",
"You became someone the world would admire…",
"But I saw something more… I saw my future.",
"You were walking your own path… building your dreams with quiet strength.",
"That was the first day our story stopped being separate.",
"From there… it was never just me anymore.",
"Every moment with you started feeling like home.",
"And now… that little girl… is my forever."
];

let index = 0;

const image = document.getElementById("memoryImage");
const text = document.getElementById("memoryText");
const bg = document.getElementById("bg");
const nextBtn = document.getElementById("nextBtn");

const memorySection = document.getElementById("memorySection");
const finalSection = document.getElementById("finalSection");

const tamilText = document.getElementById("tamilText");
const englishText = document.getElementById("englishText");
const finalBtn = document.getElementById("finalBtn");
const lastLine = document.getElementById("lastLine");

/* SLOW TYPEWRITER */
function typeWriter(element, content, speed, callback) {
    element.innerHTML = "";
    let i = 0;

    function typing() {
        if (i < content.length) {
            element.innerHTML += content.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) callback();
    }

    typing();
}

/* SAFE IMAGE LOADER */
function loadSlide() {

    nextBtn.style.display = "none";

    const imgLoader = new Image();
    imgLoader.src = photos[index];

    imgLoader.onload = function () {

        image.src = photos[index];
        bg.style.backgroundImage = `url(${photos[index]})`;

        typeWriter(text, texts[index], 90, () => {
            nextBtn.style.display = "inline-block";
        });

    };

    imgLoader.onerror = function () {
        console.error("Image failed to load:", photos[index]);
    };
}

/* NEXT BUTTON */
nextBtn.addEventListener("click", () => {

    index++;

    if (index < photos.length) {
        loadSlide();
    } else {
        showFinal();
    }

});

/* FINAL SECTION */
function showFinal() {

    memorySection.style.display = "none";
    finalSection.style.display = "block";

    window.scrollTo(0, 0);

    const tamilMessage = `உன் விழியோடு எனது மனம் பேசினது,
ஒரு பார்வையில் என் உயிர் நிலைத்தது.
ஓரமாய் நின்றாய் நீ, என் உலகமாய் மாறினாய்.

கண்ணின் வழி வந்த காதல்,
மொழியில்லாமல் செதுக்கிய கவிதை.
நாள் முழுதும் நினைவோடு,
என் கண்கள் உன்னையே தேடுகின்றன.

மௌனத்தில் கூட நாம் பேசிக்கொள்கிறோம்,
அமைதியே நம் காதலின் மொழி.
ஒரு பார்வை போதும் புரிந்துகொள்வதற்கு,
மனங்கள் ஒன்றாக இசைகிறது.

புரிந்துக்கொள்ளும் வரை எதையும் ரசிக்கவில்லை…
புரிந்துக்கொண்டபின் உன்னை தவிர எதையும் ரசிக்க முடியவில்லை.`;

    const englishMessage = `I don't know how to write big poetry.
But when I think about my future… I see you.

Life feels calm with you.
Everything feels right with you.

You are my peace.
You are my comfort.
You are my home.`;

    typeWriter(tamilText, tamilMessage, 95, () => {
        setTimeout(() => {
            typeWriter(englishText, englishMessage, 90, () => {
                finalBtn.style.display = "inline-block";
            });
        }, 2000);
    });
}

/* FINAL BUTTON */
finalBtn.addEventListener("click", () => {
    lastLine.style.opacity = "1";
});

/* LOAD FIRST SLIDE IMMEDIATELY */
loadSlide();

