/* Satanifies a text string. */
function satanify(text) {
	text = text.trim();
	var words = text.split(" ");
	var last = words[words.length - 1];
	var satan = "saatana";

	// uppercase
	if (last == last.toUpperCase() && !/^[0-9]*$/.test(last))
		satan = satan.toUpperCase();

	// ends with a quote, exclamation or question
	if (text.match(/.*[!?"']$/)) {
		return text.slice(0, text.length - 1) + " " + satan + text.slice(text.length - 1, text.length);
	}

	return text + " " + satan;
}
