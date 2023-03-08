let button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let birthDate = document.getElementById("birthDate").value;

  let cardName = document.getElementById("cardName");
  let cardDate = document.getElementById("cardDate");

  cardName.innerHTML = name;
  cardDate.innerHTML = birthDate;
});
