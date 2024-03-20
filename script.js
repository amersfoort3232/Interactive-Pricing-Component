const values = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
const pages = ["10K", "50K", "100K", "500K", "1M"];
const input = document.getElementById("input"),
  output = document.getElementById("output"),
  pageoutput = document.getElementById("pageoutput");

input.oninput = function () {
  output.innerHTML = values[this.value];
  pageoutput.innerHTML = pages[this.value];
  console.log(values[this.value]);
  console.log(pages[this.value]);
};

// set the default value
input.oninput();
