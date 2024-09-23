const donationBtn = document.getElementById("donation_btn");
const historyBtn = document.getElementById("history_btn");
const modal = document.getElementById("my_modal_1");
const closeButton = document.getElementById("close-btn");
const donateNowBtn = document.querySelectorAll("#donate_btn");
const donateInput = document.querySelectorAll("#donate_input");
const myTotalAccount = document.querySelector("#main_account");
const myTotalDonateAccount = document.querySelectorAll("#donate_amount");
const blog = document.getElementById("blog");
const historyTab = document.getElementById("history_tab");
const donateTitle = document.querySelectorAll("#donate_title");

donationBtn.addEventListener("click", () => {
  donationBtn.classList.add("bg-primary");
  donationBtn.classList.remove("border");
  historyBtn.classList.remove("bg-primary");
  historyBtn.classList.add("border");
  blog.classList.remove("hidden");
  historyTab.classList.add("hidden");
});

historyBtn.addEventListener("click", () => {
  historyBtn.classList.add("bg-primary");
  historyBtn.classList.remove("border");
  donationBtn.classList.remove("bg-primary");
  donationBtn.classList.add("border");
  historyTab.classList.remove("hidden");
  blog.classList.add("hidden");
});

for (let i = 0; i < donateNowBtn.length; i++) {
  donateNowBtn[i].addEventListener("click", function () {
    const donateInputValue = donateInput[i].value;
    const donateAmount = Number(donateInputValue);
    let totalAccountBalance = Number(myTotalAccount.textContent);
    let totalDonateAmount = Number(myTotalDonateAccount[i].textContent);

    if (isNaN(donateAmount) || donateAmount <= 0) {
      alert("Invalid number. Please enter a positive number.");
    } else if (donateAmount > totalAccountBalance) {
      alert("Insufficient balance in your account.");
    } else {
      totalAccountBalance -= donateAmount;
      myTotalAccount.textContent = totalAccountBalance.toFixed(2); // Update the displayed balance

      totalDonateAmount += donateAmount;
      myTotalDonateAccount[i].textContent = totalDonateAmount.toFixed(2); // Update the donation account balance

      const historyCard = `
            <div class="card border p-8">
              <div class="card-body">
                <h2 class="card-title">
                  ${totalDonateAmount.toFixed(2)} Taka ${
        donateTitle[i].textContent
      }
                </h2>
                <p class="font-light text-dark-secondary">
                  ${new Date().toString()}
                </p>
              </div>
          </div>`;

      console.log(historyCard);

      historyTab.innerHTML += historyCard;

      // function for modal
      modal.showModal();
      closeButton.addEventListener("click", () => {
        modal.close();
      });

      donateInput[i].value = "";

      console.log(`Donate Button Clicked. Amount: ${donateAmount}`);
    }
  });
}
