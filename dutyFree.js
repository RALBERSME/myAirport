const spans = document.querySelectorAll(".greet span");

spans.forEach((span, idx) => {
  span.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  span.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add("active");
  }, 750 * (idx + 1));
});

//sixthChild

const letters = document.querySelectorAll(".sixth");

setTimeout(() => {
  for (let letter of letters) {
    letter.innerHTML = "E";
  }
}, 7000);
