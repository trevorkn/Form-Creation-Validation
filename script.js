document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("registration-form");
 const feedbackDiv = document.getElementById("form-feedback");

   form.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;
    let messages = [];

    const usernameInput =document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    //✅Username validation
    if (username.length < 3){
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }
    
    //✅Email validation
    if(email.includes("@") && email.includes('.')){
    }
    else{
      isValid = false;
      messages.push("Email must include both '@' and '.' characters.");
    }

    //✅Password validation
    if (password.length < 8){
        isValid = false;
        messages.push("Invalid. Password must be atleast 8characters long!")
    }
    else{}
     //Feedback display
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