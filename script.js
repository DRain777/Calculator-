const display = document.getElementById("display");
let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  display.value = "";
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    display.value = displayValue;
  } catch (error) {
    display.value = "Ошибка";
    displayValue = "";
  }
}

// Конвертер часов и миллисекунд
function convertToMilliseconds() {
  const hours = document.getElementById("hoursInput").value;
  if (hours) {
    const milliseconds = hours * 3600000;
    saveConversion(hours + " ч = " + milliseconds + " мс");
    document.getElementById("millisecondsInput").value = milliseconds;
  }
}

function convertToHours() {
  const milliseconds = document.getElementById("millisecondsInput").value;
  if (milliseconds) {
    const hours = milliseconds / 3600000;
    saveConversion(milliseconds + " мс = " + hours + " ч");
    document.getElementById("hoursInput").value = hours;
  }
}

function saveConversion(conversion) {
  let history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
  history.push(conversion);
  localStorage.setItem("conversionHistory", JSON.stringify(history));
  updateConversionHistory();
}

function updateConversionHistory() {
  const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
  const historyList = document.getElementById("conversionHistory");
  historyList.innerHTML = "";
  history.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    historyList.appendChild(listItem);
  });
}

function clearConversionData() {
  localStorage.removeItem("conversionHistory");
  updateConversionHistory();
}

// Инициализация
updateConversionHistory();
