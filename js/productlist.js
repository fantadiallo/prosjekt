const url = "https://api.noroff.dev/api/v1/gamehub";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    resultsContainer.innerHTML = "";

    results.forEach(function (game) {
      resultsContainer.innerHTML += `<a href="clickky.html?id=${game.id}"class="card">
        <img src=${game.image} class="images" alt="image" />
        <h2 class="title">${game.title}</h2>
        <p>${game.description}</p>
        <p class="category"${game.category}></p>
        <p class="price">${game.price} </p>
        <p class="discountedPrice">${game.discountedPrice}</p>
        </a>
       
      `;
    });
  } catch (error) {
    resultsContainer.innerHTML = message("error", error);
  }
}

makeApiCall();
