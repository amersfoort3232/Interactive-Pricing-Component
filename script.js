const values = [8.0, 12.0, 16.0, 24.0, 36.0];
const pages = ["10K", "50K", "100K", "500K", "1M"];
const input = document.getElementById("input"),
  output = document.getElementById("output"),
  pageoutput = document.getElementById("pageoutput");

input.oninput = function () {
  if (document.getElementById("yearly").checked == true) {
    output.innerHTML = values[this.value] * 0.75;
  } else {
    output.innerHTML = values[this.value];
  }
  pageoutput.innerHTML = pages[this.value];
};

// set the default value
input.oninput();
