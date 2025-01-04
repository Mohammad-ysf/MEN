const nextButton = document.getElementById("next-information");
const sectionInformation = document.getElementById("section-information");
const sectionUpload = document.getElementById("section-upload");
const lastPage = document.getElementById("last-page");

nextButton.addEventListener("click", function () {
  // نمایش و مخفی کردن بخش‌ها
  sectionInformation.classList.toggle("d-none");
  sectionUpload.classList.toggle("d-none");
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
const nextButton2 = document.getElementById("next-upload");
nextButton2.addEventListener("click", function () {
  sectionUpload.classList.toggle("d-none");
  lastPage.classList.toggle("d-none");
});
