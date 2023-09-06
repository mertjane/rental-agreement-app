function saveData(index) {
  // Get the input value
  var inputValue = document.getElementById("input" + index).value;

  // Update the English and Turkish table cells with the input value
  var englishTableCell = document.getElementById("englishTableCell" + index);
  var turkishTableCell = document.getElementById("turkishTableCell" + index);

  if (englishTableCell) {
    englishTableCell.textContent = inputValue;
  }
  if (turkishTableCell) {
    turkishTableCell.textContent = inputValue;
  }

  // Update the <span> element for the Turkish section with the correct ID
  var turkishSpanElement = document.getElementById("turkishSpan" + index);
  var englishSpanElement = document.getElementById("englishSpan" + index);

  if (turkishSpanElement) {
    turkishSpanElement.textContent = inputValue;
  }
  if (englishSpanElement) {
    englishSpanElement.textContent = inputValue;
  }
}

function saveTr(index) {
  var textValue = document.getElementById("textAreaTr" + index).value;

  var turkishTexts = document.getElementById("turkishTexts" + index);

  if (turkishTexts) {
    turkishTexts.textContent = textValue;
  }
}

function saveEng(index) {
  var textValue = document.getElementById("textAreaEng" + index).value;

  var englishTexts = document.getElementById("englishTexts" + index);

  if (englishTexts) {
    englishTexts.textContent = textValue;
  }
}
