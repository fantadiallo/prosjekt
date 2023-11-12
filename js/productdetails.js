const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

async function fetGames() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    detailContainer.innerHTML = "";

    createHTML(details);
  } catch (error) {
    detailContainer.innerHTML = message("error", error);
  }
}

fetGames();

function createHTML(details) {
  detailContainer.innerHTML = `<h1>${details.title}</h1>
 <img src=${details.image} alt="image" class="images"></img>
  <div class="details-description">${details.description}</div>
  <time class="details-date">Releseased:${details.released}
  </time> 
  <div class="price">price:${details.price}</div>
  <div class="ageRating">ageRating:${details.ageRating}</div>
  <div class="cart"> <a href="cart.html"> <p> + add to cart</p></a></div>`;
}
