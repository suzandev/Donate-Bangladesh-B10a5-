const donationBtn = document.getElementById("donation_btn");
const historyBtn = document.getElementById("history_btn");
const modal = document.getElementById("my_modal_1");
const closeButton = document.getElementById("close-btn");

donationBtn.addEventListener("click", () => {
  donationBtn.classList.add("bg-primary");
  donationBtn.classList.remove("border");
  historyBtn.classList.remove("bg-primary");
  historyBtn.classList.add("border");
});

historyBtn.addEventListener("click", () => {
  historyBtn.classList.add("bg-primary");
  historyBtn.classList.remove("border");
  donationBtn.classList.remove("bg-primary");
  donationBtn.classList.add("border");
});

//===========  modal function
// modal.showModal();

// closeButton.addEventListener("click", () => {
//   modal.close();
// });
