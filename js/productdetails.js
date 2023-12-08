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
  detailContainer.innerHTML = `
 <img src=${details.image} alt="image" class="images"></img>
 <h1>${details.title}</h1>
 <div class"descontainer">
  <div class="details-description">${details.description}</div>
  <time class="details-date">Releseased:${details.released}
  </time> 
  <div class="price">price${details.price}</div>
  <div class="discountedPrice">${details.discountedPrice}</div>
  
  <div class="ageRating">ageRating${details.ageRating}</div>
  <div class="cart"> <a href="out.html"> <p> + add to cart</p></a></div></div>`;
}
