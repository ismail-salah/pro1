function validateForm() {
    // Reset error messages
    document.getElementById("name-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
  
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    // Validate name
    if (name === "") {
      document.getElementById("name-error").style.display = "block";
      return; // Prevent form submission
    }
  
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      document.getElementById("email-error").style.display = "block";
      return; // Prevent form submission
    }
  
    // If validation passes, you can proceed with form submission here
  }
  
