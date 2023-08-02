let num = 0;
const type = document.getElementById("type");


function convertMeters() {
  const meters = (num * 0.3048).toFixed(2);
  const feet = (num * 3.2808).toFixed(2);
  document.getElementById("length").textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
}

function convertLiters() {
  const liters = (num * 0.264172).toFixed(2);
  const gallons = (num * 3.78541).toFixed(2);
  document.getElementById("volume").textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`;
}

function convertKilo() {
  const kilos = (num * 2.20462).toFixed(2);
  const pounds = (num * 0.453592).toFixed(2);
  document.getElementById("mass").textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
}



function pEnter() {
  num = type.value;
  convertMeters();
  convertLiters();
  convertKilo();
}
