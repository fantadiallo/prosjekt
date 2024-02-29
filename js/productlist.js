const url = "https://freeminds.no/wp-json/wc/store/products";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    resultsContainer.innerHTML = "";

    results.forEach(function (game) {
      resultsContainer.innerHTML += `<a href="clickky.html?id=${game.id}"class="card">
       <h2 class="title">${game.name}</h2>
        <p>${game.description}</p>
        <p class="price">${game.price_html} </p>
        </a>
       
      `;
    });
  } catch (error) {
    resultsContainer.innerHTML = message("error", error);
  }
}

makeApiCall();
