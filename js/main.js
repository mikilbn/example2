document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const navToggle = document.querySelector(".fa-bars");
  const allNavItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  function addShadow() {
    if (window.scrollY >= 100) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  function barsShadow() {
    nav.classList.toggle("shadow-bg");
  }

  allNavItems.forEach((item) =>
    item.addEventListener("click", () => navList.classList.remove("show"))
  );

  window.addEventListener("scroll", addShadow);
  navToggle.addEventListener("click", barsShadow);
});
