// Initial Array of Characters
var characters = ["Homer Simpson", "Marge Simpson", "Lisa Simpson", "Bart Simpson", "Maggie Simpson"];

function displaySimpsonsCharacters() {
    var character = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=dc6zaTOxFJmzC&limit=5"
        // Creates AJAX Call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // console.log callback
        // console.log(response);
        // Create div to hold the character
        var characterDiv = $("<div class='character'>");
        // Pull embedded image
        var rating = response.rating;
        // Create element to have gif displayed
        var pOne = $("<p>").text("rating: " + rating);
        // Append the image
        characterDiv.append(pOne);
        // Prepend to container
        $("#character-view").prepend(characterDiv)
;
    })
}

function renderButtons() {
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

// function handles when "add a character" button is clicked
$("#add-character").on("click", function (event) {
	event.preventDefault();
	// Line grabs code from input value
	var character = $("#simpsons-input").val().trim();
	// Push new data in our characters array
	characters.push(character);
	// Call renderButtons function
	renderButtons();

});

        $(document).on("click", ".character", displaySimpsonsCharacters);

        renderButtons();



