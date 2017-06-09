// Initial Array of Characters
var characters = ["Homer Simpson", "Marge Simpson", "Lisa Simpson", "Bart Simpson", "Maggie Simpson"];

function renderButtons () {
	// find buttons view id and replace existing content
	$("#buttons-view").empty();
	// Create for loop to iterate through contents of array
	for (var i = 0; i < characters.length; i++) {
	// Create button element and store it in a variable
	var x = $("<button>");
	// Add class to button
	x.addClass("character");
	// Add data-attribute
	x.attr("data-name", characters[i]);
	// Add text to button
	x.text(characters[i]);
	// Append to buttons-view div
	$("#buttons-view").append(x);
	}
}
