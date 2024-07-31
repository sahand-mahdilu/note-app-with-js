const input = document.querySelector(".form-control");

const color = document.querySelectorAll(".color-box"); //array

const addBtn = document.querySelector(".btn");

const deleteBtn = document.getElementById("btn-delete");

const noteBox = document.querySelector(".card");

const text = document.querySelector(".card-text");

const listDiv = document.getElementById("listed");

/////////////////////add///////////////////////////

addBtn.addEventListener("click", function () {
  let inputValue = input.value; //string

  let card = document.createElement("div");
  card.className = "card shadow-sm rounded";

  let inputBg = input.style.backgroundColor;
  card.style.backgroundColor = inputBg;

  let p = document.createElement("p");
  p.className = "card-text p-3";
  p.innerHTML = inputValue;

  card.append(p);
  listDiv.append(card);

  input.value = "";

  card.addEventListener("click", function () {
    card.remove();
  });
});

/////////////////////delete//////////////////////////

deleteBtn.addEventListener("click", function () {
  input.value = "";
  input.style.backgroundColor = "#fff";
});

/////////////////////////////////////////////////////

color.forEach((item) =>
  item.addEventListener("click", function (e) {
    let rgb = e.target.style.backgroundColor;
    input.style.backgroundColor = rgb;
  })
);
