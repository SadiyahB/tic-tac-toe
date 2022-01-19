function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("dumbass can you read? Put the player names in");
    return;
  }
  gameAreaElement.style.display = "block";
}
