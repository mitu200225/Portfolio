document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msgElement = document.getElementById("formMsg");

  if(name === "" || email === "" || message === "") {
    msgElement.style.color = "red";
    msgElement.textContent = "Please fill in all fields!";
    return;
  }

  if(!email.includes("@") || !email.includes(".")) {
    msgElement.style.color = "red";
    msgElement.textContent = "Please enter a valid email!";
    return;
  }

  msgElement.style.color = "green";
  msgElement.textContent = "Message sent successfully!";
  document.getElementById("contactForm").reset();
});
