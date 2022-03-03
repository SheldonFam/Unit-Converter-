let num = 0;
let type = document.getElementById("type");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

function pEnter() {
  num = type.value;
  calculate();
}

function calculate() {
  let meters = (num * 0.3048).toFixed(3);
  let feet = (num * 3.2808).toFixed(3);
  length.textContent = `${num} meters = ${feet} feet | ${num} feet= ${meters} meters`;
  let liters = (num * 0.264172).toFixed(3);
  let gallons = (num * 3.78541).toFixed(3);
  volume.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`;
  let kilos = (num * 2.20462).toFixed(3);
  let pounds = (num * 0.453592).toFixed(3);
  mass.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
}

calculate();
