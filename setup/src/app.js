// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click", function () {
  list.classList.toggle("hidden");
});
