/* Portfolio configuration: add a professional email here when ready. */
const PORTFOLIO_CONFIG = {
  email: "" // Example: "hello@example.com" — replace with your own address.
};

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const closeMenu = () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  const emailLink = document.getElementById("email-link");
  if (PORTFOLIO_CONFIG.email.trim()) {
    emailLink.href = `mailto:${PORTFOLIO_CONFIG.email.trim()}`;
    emailLink.innerHTML = 'Email me <span aria-hidden="true">↗</span>';
  } else {
    emailLink.addEventListener("click", event => {
      event.preventDefault();
      emailLink.textContent = "Email not configured yet";
    });
  }

  const roles = ["Mathematics Student", "AI & Automation Enthusiast", "Full-Stack Web Developer"];
  const roleElement = document.querySelector(".typed-role");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    let roleIndex = 0;
    window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleElement.textContent = roles[roleIndex];
    }, 2600);
  } else {
    roleElement.textContent = roles[0];
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(anchor => {
            anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }
});