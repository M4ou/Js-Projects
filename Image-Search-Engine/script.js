let Search = document.querySelector('#search');
let SearchBox = document.querySelector('#search-box');
let SearchResult = document.querySelector('#search-img');
let ShowMore = document.querySelector('#show-more-btn');

const apiKey = 'g-mOpyVwFwTDRFiEBPuzlfjFYApyr_tHTT0MDmEZfHk';


let keyword = "";
let page = 1;

async function getImages() {
    keyword = SearchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=10`;

    let response = await fetch(url);
    let data = await response.json();

    if (page === 1) {
        SearchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        let image = document.createElement('img');
        image.src = result.urls.small;
        let imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target = "_blank";
        imgLink.appendChild(image);
        SearchResult.appendChild(imgLink);
    })

    ShowMore.style.display = "block";

}

Search.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    getImages();
});

ShowMore.addEventListener("click", () => {
    page++;
    getImages();
})