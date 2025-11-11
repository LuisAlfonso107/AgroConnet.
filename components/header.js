// js/header.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-wrapper");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const links = document.querySelectorAll(".nav-link");

  // Cambiar color al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });

  // Menú hamburguesa
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  links.forEach(link =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    })
  );

  // Marcar enlace activo
  const current = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
