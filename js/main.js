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
    if(window.scrollY <=100){
    nav.classList.toggle("shadow-bg");
  } else {
    nav.classList.add("shadow-bg")
  }}

  allNavItems.forEach((item) =>
    item.addEventListener("click", () => navList.classList.remove("show"))
  );

  window.addEventListener("scroll", addShadow);
  navToggle.addEventListener("click", barsShadow);
});

// slickjs - używany w oddzielnym setting

// $(".team-carousel").slick({
//   arrows: false,
//   autoplaySpeed: 1200,
//   autoplay: true,
//   mobileFirst: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: { slidesToShow: 2 },
//     },
//     {
//       breakpoint: 992,
//       settings: { slidesToShow: 3 },
//     },
//   ],
// });
