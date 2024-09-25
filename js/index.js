/****************************Navbar***************************************/
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function makeNavbarSticky() {
  if (window.scrollY > sticky) {
    navbar.classList.add("fixed", "w-full", "z-50");
  } else {
    navbar.classList.remove("fixed", "w-full", "z-50");
  }
}
window.addEventListener("scroll", makeNavbarSticky);

/****************************Blog Page Redirect***************************************/
const blogPage = document.getElementById("blogPage");
blogPage.addEventListener("click", function () {
  window.location.href = "./blog.html";
});
/****************************Reusable Function***************************************/
function currentBalance(id) {
  let balance = document.getElementById(id).innerHTML;
  let convertBalance = parseFloat(balance);
  return convertBalance;
}

function allInputValue(id) {
  let input = document.getElementById(id).value;
  let convertInput = parseFloat(input);
  return convertInput;
}

function donationBalnce(id) {
  let donation = document.getElementById(id).innerText;
  let convertDonation = parseFloat(donation);
  return convertDonation;
}

/**************************** Reusable Card ***************************************/
function handleDonationCard(
  donationId,
  donationBalanceId,
  donationInputId,
  donationTitle,
  donationPlaces
) {
  const donateFeni = document.getElementById(donationId);
  donateFeni.addEventListener("click", function () {
    let mainBalance = currentBalance("mainBalance");
    let donationBalance = donationBalnce(donationBalanceId);
    let donationAmount = allInputValue(donationInputId);
    let donationInput = document.getElementById(donationInputId);

    if (
      Math.sign(donationAmount) === -1 ||
      isNaN(donationAmount) ||
      donationInput.value.match(/[^\d.]/)
    ) {
      let donationInput = document.getElementById(donationInputId);
      donationInput.value = "";
      alert("INVALID INPUT");
      return;
    } else if (donationAmount > mainBalance) {
      alert("Not have enough balance");
    } else {
      let donationPlace = document.getElementById(donationPlaces).innerHTML;
      let availableBalance = document.getElementById("mainBalance");
      let avalibleDonation = document.getElementById(donationBalanceId);
      let donationInput = document.getElementById(donationInputId);
      let titleDonation = document.getElementById(donationTitle).innerText;

      let modalAmount = document.getElementById("amount");
      let transitionHistory = document.getElementById("tansitionHistory");
      let minusDonation = mainBalance - donationAmount;
      let currentDonation = donationBalance + donationAmount;
      availableBalance.innerHTML = minusDonation.toFixed(2);
      avalibleDonation.innerText = currentDonation.toFixed(2);
      donationInput.value = "";
      modalAmount.innerHTML = `${donationPlace} BDT ${donationAmount} `;

      /************* Date *******************/
      const currentTime = new Date();
      const date = currentTime.getDate();
      const month = currentTime.getMonth() + 1;
      const year = currentTime.getFullYear();
      /************* Time *******************/
      const time = new Date().toLocaleTimeString();

      const formateDateTime = `
      Date: ${date}/${month}/${year} Time: ${time}
      `;

      my_modal_1.showModal();

      transitionHistory.innerHTML += `
      <div class=" border  border-gray-400 p-3 rounded-2xl shadow-lg mb-2">
        <p class=" font-bold py-1">${donationAmount} taka is ${titleDonation}</p>
        <p>${formateDateTime}</p>
      </div>
      `;
    }
  });
}

/*******************************************************************/
// 1st card
handleDonationCard(
  "FristDonate",
  "donation-balnce-one",
  "donation-one",
  "title1",
  "place1"
);
// 2nd card
handleDonationCard(
  "secoundDonate",
  "donation-balnce-two",
  "donation-two",
  "title2",
  "place2"
);
// 3rd card
handleDonationCard(
  "thirdDonate",
  "donation-balnce-three",
  "donation-three",
  "title3",
  "place3"
);
// 4th card
handleDonationCard(
  "fourthDonate",
  "donation-balnce-fourth",
  "donation-fourth",
  "title4",
  "place4"
);

let history = document.getElementById("historyBtn");
let donation = document.getElementById("donationBtn");
let historySection = document.getElementById("historySection");
let donationSection = document.getElementById("donationSection");

history.addEventListener("click", function () {
  donation.classList.remove("bg-greenTransparent");
  history.classList.add("bg-greenTransparent");
  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});

donation.addEventListener("click", function () {
  donation.classList.add("bg-greenTransparent");
  history.classList.remove("bg-greenTransparent");
  historySection.classList.add("hidden");
  donationSection.classList.remove("hidden");
});
