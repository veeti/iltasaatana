/* Satanifies a text string. */
function satanify(text) {
  text = text.trim();

  var satan = ' saatana';
  var insertAt = text.length - 1;
  var punctuation = "!?\"'”".split('');

  // Insert before punctuation
  while (punctuation.indexOf(text[insertAt]) > -1 && insertAt >= 0) {
    insertAt--;
  }

  // Give up if the text is all punctuation or empty
  if (text.length == 0 || insertAt < 0) {
    return '';
  }

  // Use the right case
  var caseTest = text[insertAt];
  if (caseTest == caseTest.toUpperCase() && isNaN(caseTest)) {
    satan = satan.toUpperCase();
  }

  var start = text.slice(0, insertAt + 1);
  var end = text.slice(insertAt + 1);
  return start + satan + end;
}

