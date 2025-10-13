window.addEventListener("scroll", function() {
  const mainNav = document.getElementById("mainNav");
  const stickyNav = document.getElementById("stickyNav");

  if (window.scrollY > mainNav.offsetHeight) {
    stickyNav.classList.remove("d-none");
  } else {
    stickyNav.classList.add("d-none");
  }
});
