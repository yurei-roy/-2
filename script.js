const slider = document.getElementById("co2Slider");
const output = document.getElementById("co2Output");
const circle = document.getElementById("co2Circle");

slider.oninput = function () {
  output.textContent = this.value;
  // 圓形大小隨減碳進度改變
  const scale = 1 + this.value / 100;
  circle.style.transform = `scale(${scale})`;
};
