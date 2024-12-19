document.addEventListener("DOMContentLoaded", function () {  
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  function showMap() {
    var map = document.getElementById("map");
    map.style.display = (map.style.display === "none" || map.style.display === "") ? "block" : "none";
  }
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };
  emailjs.init("MlC9cHhwGC-K8Zz1a");// Replace with your EmailJS Public Key

  emailjs
    .send("service_26845mb", "template_p1xl56g", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      },
      function (error) {
        console.error("FAILED...", error);
        alert("Failed to send message: " + error.text);
      }
    );
  });
});