const loadingScreen = document.querySelector("#loadingScreen");
const nonLoadingContent = document.querySelector("#nonLoadingContent");
const circles = document.querySelectorAll(".bi-circle-fill circle");
const tertiaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--tertiary-color");

function loadingAnimation() {
  let currentCircle = 0;
  let intervalId; // To store the interval ID

  intervalId = setInterval(() => {
    // Assign interval ID
    circles.forEach((circle, index) => {
      if (index === currentCircle) {
        circle.style.fill = tertiaryColor;
      } else {
        circle.style.fill = "gray";
      }
    });
    currentCircle = (currentCircle + 1) % circles.length;
  }, 300);

  const loadingTime = Math.floor(Math.random() * 1200) + 1000;

  setTimeout(() => {
    clearInterval(intervalId); // Clear the interval to stop the animation
    loadingScreen.style.display = "none"; // Hide the loading screen

    loadingScreen.classList.remove("d-flex");

    nonLoadingContent.style.display = "block"; // Show the non-loading content
    nonLoadingContent.style.opacity = "1"; // Fade in the content
  }, loadingTime);
}

window.addEventListener("load", loadingAnimation);

document.querySelectorAll(".mybutton").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  });
});

const navBtn = document.getElementById("navButton");
const navMenu = document.getElementById("navMenu");

// Toggle the menu visibility on button click
navBtn.addEventListener("click", function () {
  // Toggle menu display by adding or removing the "open" class
  navMenu.classList.toggle("open");

  // Rotate the button by 90 degrees if the menu is open, or reset it if closed
  if (navMenu.classList.contains("open")) {
    navBtn.style.transform = "rotate(90deg)";
  } else {
    navBtn.style.transform = "rotate(0deg)";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const formContainer = form.parentElement;
  const heading = formContainer.querySelector("h1");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Remove form and heading
    form.remove();
    heading.remove();

    // Create thank you message
    const thankYouMessage = document.createElement("h3");
    thankYouMessage.classList.add("p-text", "text-center");
    thankYouMessage.innerText =
      "Thank you for contacting me! I'll get back to you asap~";

    // Center message inside the container
    formContainer.className =
      "d-flex flex-row justify-content-center align-items-center thank-message";
    formContainer.appendChild(thankYouMessage);
  });
});
