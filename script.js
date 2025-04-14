// Scroll to Top Button Logic
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Greeting in Console
const hour = new Date().getHours();
let greeting = "Hello";

if (hour < 12) greeting = "Good Morning 🌞";
else if (hour < 18) greeting = "Good Afternoon ☀️";
else greeting = "Good Evening 🌙";

console.log(`%c${greeting}, welcome to Samarth's Portfolio!`, "color: teal; font-size: 18px; font-weight: bold;");
