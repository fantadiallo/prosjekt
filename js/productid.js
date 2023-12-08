const url = "https://api.noroff.dev/api/v1/gamehub";

const Container = document.querySelector(".doucument");

async function makeApiCall() {
  const response = await fetch(url);

  const Container = await response.json();
}

