const donateButton = document.getElementById("donate-button");
donateButton.addEventListener("click", function () {
  const firstDonate = getValueById("first-input");
  const donateNoakhali = parseFloat(
    document.getElementById("donate-amount-noakhali").innerText
  );
  const mainBalance = parseFloat(document.getElementById("balance").innerText);

  if (firstDonate <= 0 || firstDonate > mainBalance || isNaN(firstDonate)) {
    let donationInput = document.getElementById("first-input");
    donationInput.value = "";
    alert("Invalid Input");
    return false;
  } else {
    const sum = firstDonate + donateNoakhali;
    const donation = document.getElementById("donate-amount-noakhali");
    donation.innerText = sum;

    const remainBalance = mainBalance - firstDonate;
    const remaining = document.getElementById("balance");
    remaining.innerText = remainBalance;

    document.getElementById("first-input").value = "";

    my_modal_1.showModal();
    const div = document.createElement("div");
    div.innerHTML = `
    <p class="text-xl py-3 border text-gray-500">${firstDonate} Taka is Donated for Flood Relief in Noakhali, Bangladesh </br>${new Date().toLocaleDateString()}</p>
  `;
    const historyContainer = document.getElementById("history-show");
    historyContainer.appendChild(div);
  }
});
