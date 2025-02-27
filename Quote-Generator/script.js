let Api = "https://api.quotable.io/random";
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

async function getQuote(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(Api);

function x() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "   --- by " + author.innerHTML , "x window", "width=600,height=400");
}