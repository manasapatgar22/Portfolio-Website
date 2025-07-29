var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Designer", "FullStack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
