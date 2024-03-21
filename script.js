const values = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
const pages = ["10K", "50K", "100K", "500K", "1M"];
const discount_value = ["6", "9", " 12", "18", "27"];
const input = document.getElementById("input"),
  output = document.getElementById("output"),
  pageoutput = document.getElementById("pageoutput");

input.oninput = function () {
  if (document.querySelector(".discount-rate").checked == true) {
    pageoutput.innerHTML = discount_value[this.value];
  } else {
    output.innerHTML = values[this.value];
    pageoutput.innerHTML = pages[this.value];
  }
};

// set the default value
input.oninput();
