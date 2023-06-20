//-------- modal---------//
const $modal = document.querySelectorAll(".modal_contain > div");
const $modalBtn = document.querySelectorAll(".project button");
const $modalClose = document.querySelectorAll(".modal_close");

$modalBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    $modal.forEach((modal) => {
      modal.classList.remove("on");
    });
    $modal[index].classList.add("on");
  });
});
$modalClose.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    $modal[index].classList.remove("on");
  });
});
// tabs
const tabImgs = document.querySelectorAll(".tabImg");
tabImgs.forEach((tabImg) => {
  tabImg.addEventListener("click", () => {
    tabImgs.forEach((tab) => tab.classList.remove("active"));
    tabImg.classList.add("active");
  });
});
