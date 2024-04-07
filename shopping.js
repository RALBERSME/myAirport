const el1 = document.getElementById("protection1");
const el2 = document.getElementById("protection2");
const el3 = document.getElementById("protection3");
const el4 = document.getElementById("protection4");
const el5 = document.getElementById("protection5");
const allEl = document.querySelectorAll(".protection");
function runElements() {
  setTimeout(
    () => ((el1.style.color = "#FF004D"), (el1.style.fontWeight = "bold")),

    3500
  );

  setTimeout(
    () => ((el2.style.color = "#FF004D"), (el2.style.fontWeight = "bold")),

    4500
  );

  setTimeout(
    () => ((el3.style.color = "#FF004D"), (el3.style.fontWeight = "bold")),

    5500
  );

  setTimeout(
    () => ((el4.style.color = "#FF004D"), (el4.style.fontWeight = "bold")),

    6500
  );

  setTimeout(
    () => ((el5.style.color = "#FF004D"), (el5.style.fontWeight = "bold")),

    7500
  );
}

runElements();
