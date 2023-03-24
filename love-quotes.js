const loveQuotes = [
    "You had me at hello, vedu .",
    "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
    "I would rather spend one lifetime with you, than face all the ages of this world alone.",
    "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
    "I am yours, don't give myself back to me.",
    "I loved her not for the way she danced with my angels, but for the way the sound of her name could silence my demons.",
    "I love you vedanshi, not only for what you are, but for what I am when I am with you.",
    "I've fallen in love many times... but always with you.",
    "I love you not because of who you are, but because of who I am when I am with you.",
    "I love you, not just for what you are, but for what I am when I am with you.",
    "The greatest thing you'll ever learn is just to love, and be loved in return.",
    "When I say I love you more, I don't mean I love you more than you love me. I mean I love you more than the bad days ahead of us, I love you more than any fight we will ever have. I love you more than the distance between us, I love you more than any obstacle that could try and come between us. I love you the most.",
    "I want to be with you until the sun falls from the sky.",
    "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    "To be your friend was all I ever wanted; to be your lover was all I ever dreamed.",
    "I love you, not only for what you are, but for what I am when I am with you.",
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
];

const loveForm = document.getElementById("love-form");
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const newBtn = document.getElementById("new-btn");

loveForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputMsg = document.getElementById("message-input").value;
    const matchingQuotes = loveQuotes.filter(function(quote) {
        return quote.toLowerCase().includes(inputMsg.toLowerCase());
    });
    if (matchingQuotes.length > 0) {
        const randomQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
        quoteText.innerText = randomQuote;
        quoteContainer.classList.remove("hidden");
    } else {
        alert("Sorry, ask these kind of question on whatsapp :) ");
    }
});

newBtn.addEventListener("click", function() {
    const inputMsg = document.getElementById("message-input").value;
    const matchingQuotes = loveQuotes.filter(function(quote) {
        return quote.toLowerCase().includes(inputMsg.toLowerCase());
    });
    const randomQuote = matchingQuotes[Math.floor(Math.random() * matchingQuotes.length)];
    quoteText.innerText = randomQuote;
});
