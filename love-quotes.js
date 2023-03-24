const loveQuotes = [
    "You had me at hello.",
    "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
    "I would rather spend one lifetime with you, than face all the ages of this world alone.",
    "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
    "I am yours, don't give myself back to me.",
    "I loved her not for the way she danced with my angels, but for the way the sound of her name could silence my demons.",
    "I love you, not only for what you are, but for what I am when I am with you."
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
        alert("Sorry, no matching quotes found. Please try again.");
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