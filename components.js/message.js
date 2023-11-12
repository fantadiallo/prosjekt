function message(messageType = "sucess", message = "") {
  return `div class="alert"${messageType}">${message}</div>`;
}
