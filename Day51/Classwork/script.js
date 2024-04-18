function sigma() {
    var paymentCheckbox = document.getElementById("paymentCheckbox");
  
    if (paymentCheckbox.checked) {
      alert("Payment successful!");
    } else {
      alert("Please check the box to proceed with payment.");
    }
  }