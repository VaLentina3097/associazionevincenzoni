document.addEventListener("DOMContentLoaded", () => {
  /* Select relevant elements */
  const navbar = document.querySelector("#site-header");
  const websiteLogo = navbar.querySelector("#logo-image img");
  const mobileMenuToggler = document.querySelector("#menu-toggler i");
  const dropdownLinks = navbar.querySelectorAll(".menu-item.has-dropdown");

  // Toggle the "active-dropdown" class when the link is clicked
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.toggle("active-dropdown");
    });
  });

  /* Event listener for opening/closing mobile menu */
  mobileMenuToggler.addEventListener("click", () => {
    document.body.classList.toggle("active-mobile-menu");
    if (document.body.classList.contains("active-mobile-menu")) {
      mobileMenuToggler.classList.replace("bx-menu", "bx-x");
    } else {
      mobileMenuToggler.classList.replace("bx-x", "bx-menu");
    }
  });

  /* Event listener for scroll */
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;

    /* Change navbar appearance based on scroll position */
    if (scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
