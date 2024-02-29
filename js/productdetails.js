const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://freeminds.no/wp-json/wc/store/products/" + id;

async function fetchGames() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    detailContainer.innerHTML = "";

    createHTML(details);
  } catch (error) {
    detailContainer.innerHTML = message("error", error);
  }
}

fetchGames();

function createHTML(details) {
  detailContainer.innerHTML = `
    <img src="${details.images[0].src}" alt="${details.name}" class="images">
    <h2>${details.name}</h2>
    <div class="descontainer">
      <div class="images">${details.description}</div>
      <div class="price">${details.price_html}</div>
      <div class="newprice">120$</div>
      <div class="cart"><a href="out.html"><p>+ add to cart</p></a></div>
    </div>`;
}
