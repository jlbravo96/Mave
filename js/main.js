const $menuBtn = document.getElementById("menuBtn"),
  $menuList = document.getElementById("menuList");

$menuBtn.addEventListener("click", (e) => {
  $menuList.classList.toggle("menuActive");
  $menuBtn.firstElementChild.classList.toggle("show");
  $menuBtn.lastElementChild.classList.toggle("show");
});
