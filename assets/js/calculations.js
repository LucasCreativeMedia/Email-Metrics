//User Input fields Variables
const userEnteredRecipients = document.getElementById("Recipients");
const userEnteredDeliveries = document.getElementById("Deliveries");
const userEnteredUniqueOpens = document.getElementById("UniqueOpens");
const userEnteredUniqueClicks = document.getElementById("UniqueClicks");
const userEnteredUnsubscribes = document.getElementById("Unsubscribes");
const userEnteredClicks = document.getElementById("Clicks");

//Buttons Variables
const calculateButton = document.getElementById("calculateBtn");
const resetButton = document.getElementById("resetBtn");

//Output Variables
const totalOutput1 = document.getElementById("clicks");
const totalOutput2 = document.getElementById("uniqueClicks");
const totalOutput3 = document.getElementById("clickToOpen");
const totalOutput4 = document.getElementById("openRate");
const totalOutput5 = document.getElementById("bounces");
const totalOutput6 = document.getElementById("bounceRate");
const totalOutput7 = document.getElementById("unsubscribeRate");

//Input Fields Reset Variable
let userInputs = document.querySelectorAll("input");

//Function to calculate user entered values
function calculateEntries() {
  //All Clicks
  const finalclickThroughRate =
    (Number(userEnteredClicks.value) / Number(userEnteredDeliveries.value)) *
    100;
  totalOutput1.innerText = finalclickThroughRate.toFixed(2);

  //Unique Clicks
  const finalUniqueClickThroughRate =
    (Number(userEnteredUniqueClicks.value) /
      Number(userEnteredDeliveries.value)) *
    100;
  totalOutput2.innerText = finalUniqueClickThroughRate.toFixed(2);

  //Click To Open Rate
  const finalClickToOpenRate =
    (Number(userEnteredUniqueClicks.value) /
      Number(userEnteredUniqueOpens.value)) *
    100;
  totalOutput3.innerText = finalClickToOpenRate.toFixed(2);

  //Open Rate
  const finalOpenRate =
    Number(userEnteredUniqueOpens.value) / Number(userEnteredDeliveries.value);
  totalOutput4.innerText = finalOpenRate.toFixed(2);

  //Bounces
  const finalBounces =
    Number(userEnteredRecipients.value) - Number(userEnteredDeliveries.value);
  totalOutput5.innerText = finalBounces.toFixed(2);

  //Bounce Rate
  const finalBounceRate =
    (Number(finalBounces) / Number(userEnteredRecipients.value)) * 100;
  totalOutput6.innerText = finalBounceRate.toFixed(2);

  //Unsubscribe Rate
  const finalUnsubscribeRate =
    (Number(userEnteredUnsubscribes.value) /
      Number(userEnteredDeliveries.value)) *
    100;
  totalOutput7.innerText = finalUnsubscribeRate.toFixed(2);
}
calculateButton.addEventListener("click", calculateEntries);

//Reset Button Event Listener
resetButton.addEventListener("click", () => {
  userInputs.forEach((input) => (input.value = ""));
});

