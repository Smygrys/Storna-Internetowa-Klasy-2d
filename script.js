// Particles
(function () {
  const container = document.getElementById("particles");
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    const size = Math.random() * 200 + 50;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = Math.random() * 20 + 15 + "s";
    p.style.animationDelay = Math.random() * 10 + "s";
    container.appendChild(p);
  }
})();

// Typing Animation
(function () {
  const phrases = [
    "Beginner Developer",
    "Building Websites",
    "Building Apps",
    "Building Games",
    "Learning Every Day",
    "Future AI Explorer",
  ];
  const el = document.getElementById("typingText");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      speed = 50;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      speed = 100;
    }

    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }
  type();
})();

// Navbar scroll
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }

  // Active nav link
  const sections = document.querySelectorAll("section[id]");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  const icon = themeToggle.querySelector("i");
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  if (current === "dark") {
    const confirmed = confirm("Don't be gay. Don't click this.");
    if (confirmed) {
      setTheme("light");
    }
  } else {
    setTheme("dark");
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.getAttribute("data-delay") || 0;
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, parseInt(delay));

      // Animate skill bars
      const skillBars = entry.target.querySelectorAll(".skill-progress");
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        setTimeout(
          () => {
            bar.style.width = width + "%";
          },
          parseInt(delay) + 300,
        );
      });

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document
  .querySelectorAll(".fade-in, .fade-in-left, .fade-in-right")
  .forEach((el) => {
    observer.observe(el);
  });

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  this.reset();
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
});
