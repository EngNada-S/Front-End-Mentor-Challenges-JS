const shareBtn = document.getElementById("share-btn");
const links = document.querySelector(".links");

shareBtn.addEventListener("click", function () {
  links.classList.toggle("show");
});

document.addEventListener("click", function (e) {
  if (!links.contains(e.target) && !shareBtn.contains(e.target)) {
    links.classList.remove("show");
  }
});
