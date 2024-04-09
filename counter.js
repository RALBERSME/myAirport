// show elements
function getForm() {
  document.getElementById("mobile").className = "grow";
  showHideInput();
  makeIntroInvisible();
  setTimeout(() => showHide(), 2000);
  setTimeout(() => makeVisible(), 2000);
  takeCareOfLuggage();
}
/*message to traveller */
function takeCareOfLuggage() {
  const text = "Passenger Warning Do not leave your luggage unattended";
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
function showHide() {
  const hiddeninput = document.getElementById("myForm");
  hiddeninput.classList.remove("hidden");
}
function makeVisible() {
  const hiddenDetails = document.getElementById("details");
  hiddenDetails.style.visibility = "visible";
  const hiddenLink = document.getElementById("nextPage");
  hiddenLink.style.visibility = "visible";
}
function showHideInput() {
  const inputField = document.getElementById("inputField");
  inputField.style.display = "none";
}
function makeIntroInvisible() {
  const introduction = document.getElementById("introduction");
  introduction.style.visibility = "hidden";
}

//
function evaluation() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let requirements = false;
  checkboxes.forEach(function (checkbox) {
    //check travel requirements
    let checkRequirement = document.getElementById("check5");
    if (checkRequirement.checked) {
      requirements = true;
    } else {
      const warning = document.getElementById("warning");
      warning.innerHTML = "Click Requirements!";
      setTimeout(function () {
        warning.innerHTML = "";
      }, 1000);
    }
    //check destination
    let longEast = document.getElementById("check1");
    let longWest = document.getElementById("check2");
    let middle = document.getElementById("check3");
    let short = document.getElementById("check4");
    let destination = document.getElementById("destination");
    let gate = document.getElementById("gate");
    if (requirements === true && longEast.checked) {
      destination.innerHTML = "  LongEast";
      gate.innerHTML = "  A12";
    } else if (requirements === true && longWest.checked) {
      destination.innerHTML = "  LongWest";
      gate.innerHTML = "  A15";
    } else if (requirements === true && middle.checked) {
      destination.innerHTML = "    Middle";
      gate.innerHTML = "  B34";
    } else if (requirements === true && short.checked) {
      destination.innerHTML = "    Short";
      gate.innerHTML = "  C03";
    } else if (requirements === true) {
      destination.innerHTML = " SET HOOK!!";
    }
  });
}

// reset Data (Hooks):
function resetData() {
  const allcheckboxes = document.querySelectorAll('input[type="checkbox"]');
  let destination = document.getElementById("destination");
  let gate = document.getElementById("gate");
  for (box of allcheckboxes) {
    box.checked = false;
    destination.innerHTML = "";
    gate.innerHTML = "";
  }
}
