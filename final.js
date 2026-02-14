const tamilMessage = `
உன் விழியோடு எனது மனம் பேசினது,
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
புரிந்துக்கொண்டபின் உன்னை தவிர எதையும் ரசிக்க முடியவில்லை.
`;

const englishMessage = `
I don't know how to write big poetry.
But when I think about my future… I see you.

Life feels calm with you.
Everything feels right with you.

You are not just someone I love.
You are my peace.
You are my comfort.
You are my home.
`;

const tamilText = document.getElementById("tamilText");
const englishText = document.getElementById("englishText");
const lastLine = document.getElementById("lastLine");

function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            if (callback) callback();
        }
    }

    typing();
}

typeWriter(tamilText, tamilMessage, 60, () => {
    setTimeout(() => {
        typeWriter(englishText, englishMessage, 55, () => {
            setTimeout(() => {
                lastLine.style.opacity = "1";
            }, 2000);
        });
    }, 2000);
});
