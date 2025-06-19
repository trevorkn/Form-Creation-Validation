document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("registration-form");
 const feedbackDiv = document.getElementById("form-feedback");

   form.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];

    const usernameInput =document.getElementById("username");
    
    if (usernameInput.value.length < 3){
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }
    
    const emailInput = document.getElementById("email");

    if(emailInput.value.includes("@") && emailInput.value.includes('.')){
    }
    else{
      isValid = false;
      messages.push("Email must include both '@' and '.' characters.");
    }

    const passwordInput = document.getElementById("password");
    if (passwordInput.value.length < 8){
        isValid = false;
        messages.push("Invalid. Password must be atleast 8characters long!")
    }
    else{}

    feedbackDiv.style.display = "block"; // Show the feedback div

if (isValid) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.style.color = "#28a745"; // Green color for success
} else {
  feedbackDiv.innerHTML = messages.join("<br>"); // Join error messages with line breaks
  feedbackDiv.style.color = "#dc3545"; // Red color for errors
}

});

});