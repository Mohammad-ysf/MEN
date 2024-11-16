const relativeButton = document.getElementById("sort-by-relative");
const sellerButton = document.getElementById("sort-by-seller");
const cheapButton = document.getElementById("sort-by-cheap");
const expensiveButton = document.getElementById("sort-by-expensive");
const bestButton = document.getElementById("sort-by-best");

relativeButton.addEventListener("click", function () {
  relativeButton.classList.add("active");
  sellerButton.classList.remove("active");
  cheapButton.classList.remove("active");
  expensiveButton.classList.remove("active");
  bestButton.classList.remove("active");
});
sellerButton.addEventListener("click", function () {
  relativeButton.classList.remove("active");
  sellerButton.classList.add("active");
  cheapButton.classList.remove("active");
  expensiveButton.classList.remove("active");
  bestButton.classList.remove("active");
});
cheapButton.addEventListener("click", function () {
  relativeButton.classList.remove("active");
  sellerButton.classList.remove("active");
  cheapButton.classList.add("active");
  expensiveButton.classList.remove("active");
  bestButton.classList.remove("active");
});
expensiveButton.addEventListener("click", function () {
  relativeButton.classList.remove("active");
  sellerButton.classList.remove("active");
  cheapButton.classList.remove("active");
  expensiveButton.classList.add("active");
  bestButton.classList.remove("active");
});
bestButton.addEventListener("click", function () {
  relativeButton.classList.remove("active");
  sellerButton.classList.remove("active");
  cheapButton.classList.remove("active");
  expensiveButton.classList.remove("active");
  bestButton.classList.add("active");
});
