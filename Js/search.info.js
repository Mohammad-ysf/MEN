document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("btn-search");
  const sectionTable = document.getElementById("table-info");
  const loading = document.getElementById("loading");

  searchButton.addEventListener("click", function () {
    console.log("جستجو کلیک شد");
    loading.classList.toggle("d-none");
    loading.classList.add("d-flex");

    setTimeout(function () {
      loading.classList.toggle("d-none");
      sectionTable.classList.toggle("d-none");
    }, 3000);
  });
});
