document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const name = document.getElementById("feedbackName").value;
      const email = document.getElementById("feedbackEmail").value;
      const phone = document.getElementById("feedbackPhone").value;
      const university = document.getElementById("feedbackUniversity").value;
      const message = document.getElementById("feedbackMessage").value;

      // Template parameters for EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        phone_number: phone,
        university_name: university,
        message: message,
      };

      emailjs.init("MlC9cHhwGC-K8Zz1a");// Replace with your EmailJS Public Key
      // Send email using EmailJS
      emailjs.send("service_26845mb", "template_p1xl56g", templateParams)
        .then(function (response) {
          alert("Feedback submitted successfully!");
        })
        .catch(function (error) {
          alert("Failed to submit feedback. Please try again later.");
          console.error("Error:", error);
        });
    });
  });