const url =
  "https://api.noroff.dev/api/v1/gamehub/ded6041a-622f-4fb4-81e4-96fcfdad4dff";

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
    `;
}
