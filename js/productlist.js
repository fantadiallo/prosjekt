const url = "https://api.noroff.dev/api/v1/gamehub";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    resultsContainer.innerHTML = "";

    results.forEach(function (game) {
      resultsContainer.innerHTML += `<a href="clickky.html?id=${game.id}"class="card">
        <h1 class="title">${game.title}</h1>
        <img src=${game.image} alt="image" class="images" />
        <p>${game.description}</p>
        <p class="category"${game.category}></p>
        <p class="price">${game.price} </p> </a>
       
      `;
    });
  } catch (error) {
    resultsContainer.innerHTML = message("error", error);
  }
}

makeApiCall();
