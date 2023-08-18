function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  inputField.value = "";
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueId = element.innerText;
  const elementValue = parseFloat(elementValueId);

  return elementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
