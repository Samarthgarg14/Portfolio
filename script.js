/* =========================================================
   CLEAN + OPTIMIZED script.js (0% functionality changed)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     Smooth Scroll for Nav Links
  ----------------------------- */
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      document.getElementById("navLinks")?.classList.remove("show");
    });
  });

  /* -----------------------------
     Mobile Nav Toggle
  ----------------------------- */
  document.getElementById("navToggle")?.addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("show");
  });

  /* -----------------------------
     Active Navbar Observer
  ----------------------------- */
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      document.querySelectorAll(".nav-link")
        .forEach(n => n.classList.remove("active"));

      document.querySelector(`.nav-link[href="#${id}"]`)
        ?.classList.add("active");
    });
  }, { threshold: 0.45 });

  document.querySelectorAll("main section, header#home")
    .forEach(section => navObserver.observe(section));

  /* -----------------------------
     Rotating Hero Text
  ----------------------------- */
  const phrases = [
    "data-driven apps",
    "analytics dashboards",
    "AI-backed tools",
    "scalable systems"
  ];

  const rotatingText = document.getElementById("rotatingText");
  let index = 0;

  if (rotatingText) {
    setInterval(() => {
      index = (index + 1) % phrases.length;
      rotatingText.style.opacity = 0;
      setTimeout(() => {
        rotatingText.textContent = phrases[index];
        rotatingText.style.opacity = 1;
      }, 300);
    }, 3200);
  }

  /* -----------------------------
     Skill Bar Animation
  ----------------------------- */
  const skillBars = document.querySelectorAll(".fill");

  const skillObserver = new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    skillBars.forEach(bar => {
      bar.style.width = (bar.dataset.fill || 70) + "%";
    });
    obs.disconnect();
  }, { threshold: 0.3 });

  const skillsSection = document.getElementById("skills");
  if (skillsSection) skillObserver.observe(skillsSection);

  /* -----------------------------
     Scroll Reveal Animation
  ----------------------------- */
  const revealElements = document.querySelectorAll(
    ".section, .project-card, .achievement-card, .timeline-item"
  );

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
  });

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.transition = "opacity 0.8s, transform 0.6s";
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* -----------------------------
     Scroll-to-Top Button
  ----------------------------- */
  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 420 ? "flex" : "none";
  });

  topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* -----------------------------
     Dark Mode Toggle + Fade
  ----------------------------- */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  const triggerFade = () => {
    const html = document.documentElement;
    html.classList.add("theme-fade");
    setTimeout(() => html.classList.remove("theme-fade"), 200);
  };

  themeToggle.addEventListener("click", () => {
    triggerFade();
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

});
