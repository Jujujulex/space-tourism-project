const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when the hamburger is clicked

navToggle.addEventListener("click", () => {
  // let's open the nav if it's closed
  const visibility = nav.getAttribute("data-visible");
  console.log(visibility);

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
