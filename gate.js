const jsonData = [
  { text: "LE_____CAPE-TOWN_____AUG_______A12" } /*Weißstorch*/,
  { text: "LW_____KINSHASA______AUG_______A15" } /*Mauersegler*/,
  { text: "KD_____MURCIA________SEP_______C03" } /*Mönchsgrasmücke*/,
  { text: "MD_____ALGIER________OKT_______B34" } /*Star*/,
  { text: "SD_____MERIDA________OKT_______C03" } /*Kranich*/,
  { text: "MD_____LISSABON______OKT_______B34" } /*Wildgans*/,
  { text: "LW_____DURBAN________AUG_______A15" } /*Rachschwalbe*/,
  { text: "LW_____BRAZZAVILLE___JUL_______A15" } /*Pirol*/,
  { text: "LE_____LUSAKA________SEP_______A12" } /*Adler*/,
];

jsonData.forEach((item) => {
  const li = document.createElement("li");
  li.setAttribute("data-original", item.text);
  li.textContent = item.text;
  document.querySelector("#locations").appendChild(li);
});

animateLocations();

function randomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function convertToSpans(text) {
  return [...text].map((char) => `<span>${char}</span>`).join("");
}

function animateLocations() {
  const locations = document.querySelectorAll("#locations li");

  locations.forEach((location) => {
    location.innerHTML = convertToSpans(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".slice(
        0,
        location.getAttribute("data-original").length
      )
    );
  });

  let indices = [...Array(locations.length).keys()];
  indices.sort(() => Math.random() - 0.5);

  indices.forEach((locationIndex, index) => {
    const location = locations[locationIndex];
    setTimeout(() => {
      const originalText = location.getAttribute("data-original");
      location.innerHTML = convertToSpans(originalText);

      const spans = location.querySelectorAll("span");
      let timer = setInterval(() => {
        spans.forEach((span) => {
          span.textContent = randomString(1);
        });
      }, 100);

      setTimeout(() => {
        clearInterval(timer);
        let counter = spans.length - 1;
        const buildText = setInterval(() => {
          if (counter >= 0) {
            spans[counter].textContent = originalText[counter];
            counter--;
          } else {
            clearInterval(buildText);
          }
        }, 100);
      }, 1500);
    }, 500 * index);
  });
}
/*message to traveller */
var btn = document.getElementById("storch");
btn.addEventListener("click", func1);

function func1() {
  const firstText =
    "White Stork Traditional Airline welcomes you on your long eastern distance fleit from Frankfurt to Cape Town in South Africa. We will be leaving on fifth of August at ten o`clock in the morning. We will travel at a speed of fifty kilometres per hour and make up to five handred kilometres per day. Please proceed to gate A twelve.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("mauer");
btn.addEventListener("click", func2);

function func2() {
  const firstText =
    "Mauersegler Pro Airline welcomes you on your long eastern distance fleit from Frankfurt to Kinshasa in the Demokratic Republic Kongo. We will be leaving on sixteenth of August at two o`clock in the afternoon. We will travel at a speed of fourty kilometres per hour. Please proceed to gate A fifteen.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("mönch");
btn.addEventListener("click", func3);

function func3() {
  const firstText =
    "Mönchsgrasmücken Flights welcomes you on your short distance fleit from Frankfurt to Murcia in Spain. We will be leaving on third September at four o`clock in the afternoon. We travel in a swarm of 50 planes. Please proceed to gate C three.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("star");
btn.addEventListener("click", func4);

function func4() {
  const firstText =
    "Chummy Star Alliance welcomes you on your middle distance fleit from Frankfurt to Algier in Algeria. We will be leaving on Oktober tenth at six o`clock in the morning. We travel at a speed of sixty kilometres per hour. Please proceed to gate B thirty four.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("kranich");
btn.addEventListener("click", func5);

function func5() {
  const firstText =
    "Kranich Flyaways  welcomes you on your short distance fleit from Frankfurt to Merida in Spain. We will be leaving on Oktober elven at nine o`clock in the morning. We travel at a speed of fifty kilometres per hour. Please proceed to gate C three.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("wild");
btn.addEventListener("click", func6);

function func6() {
  const firstText =
    "Wild Goose Air Taxis welcomes you on your middle distance fleit from Frankfurt to Lissabon in Portugal. We will be leaving on Oktober eight at half past three in the morning. We travel at a speed of fifty kilometres per hour. Please proceed to gate B thirty four.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("rauch");
btn.addEventListener("click", func7);

function func7() {
  const firstText =
    "Mehl- & Rauchswalben Combi-Airline welcomes you on your long western distance fleit from Frankfurt to Durban in South Africa. We will be leaving on second August at half past five in the morning. We travel at a speed of eighty kilometres per hour. Please proceed to gate A fifteen.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("pirol");
btn.addEventListener("click", func8);

function func8() {
  const firstText =
    "Pirol Shuttle welcomes you on your long western distance fleit from Frankfurt to Brazzaville in the Republic Congo. We will be leaving on twenty fourth of July at a quarter to ten in the morning. Please proceed to gate A fifteen.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
// next
var btn = document.getElementById("adler");
btn.addEventListener("click", func9);

function func9() {
  const firstText =
    "Adler Agile Airline welcomes you on your long eastern distance fleit from Frankfurt to Lusaka in Sambia. We will be leaving on eleventh of September at noon. We travel at a speed of one hundred sixty kilometres per hour. Please proceed to gate A twelve.";
  const secondText =
    "We wish you a pleasant travel and look forward to your return in six months.";
  var msg = new SpeechSynthesisUtterance();
  msg.text = firstText + secondText;
  window.speechSynthesis.speak(msg);
}
