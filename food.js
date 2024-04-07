const fruit1 = document.getElementById("fruit1");

function clickFruit1() {
  fruit1.classList.remove("fruit1");
  fruit1.classList.add("product1");
}
// next element
const fruit2 = document.getElementById("fruit2");

function clickFruit2() {
  fruit2.classList.remove("fruit2");
  fruit2.classList.add("product2");
}
// next element
const fruit3 = document.getElementById("fruit3");

function clickFruit3() {
  fruit3.classList.remove("fruit3");
  fruit3.classList.add("product3");
}
// next element
const fruit4 = document.getElementById("fruit4");

function clickFruit4() {
  fruit4.classList.remove("fruit4");
  fruit4.classList.add("product4");
}
// next element
const nuts1 = document.getElementById("nuts1");

function clickNuts1() {
  nuts1.classList.remove("nuts1");
  nuts1.classList.add("product4");
}
// next element
const nuts2 = document.getElementById("nuts2");

function clickNuts2() {
  nuts2.classList.remove("nuts2");
  nuts2.classList.add("product2");
}
// next element
const nuts3 = document.getElementById("nuts3");

function clickNuts3() {
  nuts3.classList.remove("nuts3");
  nuts3.classList.add("product6");
}
// next element
const nuts4 = document.getElementById("nuts4");

function clickNuts4() {
  nuts4.classList.remove("nuts4");
  nuts4.classList.add("product4");
}
// next element
const nuts5 = document.getElementById("nuts5");

function clickNuts5() {
  nuts5.classList.remove("nuts5");
  nuts5.classList.add("product5");
}
// next element
const worm1 = document.getElementById("worm1");

function clickWorm1() {
  worm1.classList.remove("worm1");
  worm1.classList.add("product1");
}
// next element
const worm2 = document.getElementById("worm2");

function clickWorm2() {
  worm2.classList.remove("worm2");
  worm2.classList.add("product2");
}
// next element
const beetle1 = document.getElementById("beetle1");

function clickBeetle1() {
  beetle1.classList.remove("beetle1");
  beetle1.classList.add("product3");
}
// next element
const beetle2 = document.getElementById("beetle2");

function clickBeetle2() {
  beetle2.classList.remove("beetle2");
  beetle2.classList.add("product8");
}
// next element
const beetle3 = document.getElementById("beetle3");

function clickBeetle3() {
  beetle3.classList.remove("beetle3");
  beetle3.classList.add("product6");
}
//////////

function leavePage() {
  document.querySelector(".leave").innerHTML =
    "Thank you. Enjoy the food. Bye! ";
  setTimeout(function () {
    const leave = document.querySelector(".leave");
    window.location.href = "shopping.html";
  }, 1500);
}
