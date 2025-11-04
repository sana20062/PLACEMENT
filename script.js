function scrollToRegister() {
  document.getElementById("student-form").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("registerForm").addEventListener("submit", function(event){
  event.preventDefault();

  // Show popup instead of printing output
  document.getElementById("popup").style.display = "flex";

  // Reset form
  document.getElementById("registerForm").reset();
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
