// ===== Responsive Menu =====
const togle = document.getElementById("togle");
const navLinks = document.getElementById("navLinks");

togle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Form Validation =====
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
  } else if (!email.includes("@")) {
    alert("Please enter a valid email!");
  } else {
    alert("Message sent successfully!");
    this.reset();
  }
});
