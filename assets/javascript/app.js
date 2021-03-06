// Initial Array of Characters
var characters = ["Homer Simpson", "Marge Simpson", "Lisa Simpson", "Bart Simpson", "Maggie Simpson"];

function displaySimpsonsCharacters() {
    var character = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=dc6zaTOxFJmzC&limit=10"
        // Creates AJAX Call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // Variable to store number results returned
        var numberResults = 10;
        // Variable to store results of AJAX call
        var results = response.data;
        // Empty character-view div whenever new character button is clicked
        $("#character-view").empty();
        // forLoop to iterate through functions 10 times
        for (var i = 0; i < numberResults; i++) {

            // // console.log callback
            console.log(response);
            // Create div to hold the character
            var characterDiv = $("<div>");
            // // // Grab img from API (Static and Dynamic)
            var gifStatic = results[i].images.downsized_still.url;
            var gifDynamic = results[i].images.downsized.url;
            console.log(gifStatic);
            // // // Create img element for gifStatic
            var image = $("<img>").attr("src", gifStatic);
            image.attr("data-still", gifStatic);
            image.attr("data-animate", gifDynamic);
            image.attr("data-state", "still");
            image.attr("class", "gif");
            // // Append to CharacterDiv
            characterDiv.append(image);
            // Grab rating from API
            var rating = results[i].rating;
            console.log(rating);
            // Create element to have gif displayed
            var pOne = $("<p>").text("rating: " + rating);
            // Append the image
            characterDiv.append(pOne);
            // // Prepend to container
            $("#character-view").prepend(characterDiv);
        }
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
        x.addClass("button");
        // Add data-attribute
        x.attr("data-name", characters[i]);
        // Add text to button
        x.text(characters[i]);
        // Append to buttons-view div
        $("#buttons-view").append(x);
    }
}

// function handles when "add a character" button is clicked
$("#add-character").on("click", function(event) {
    event.preventDefault();
    // Line grabs code from input value
    var character = $("#simpsons-input").val().trim();
    // Push new data in our characters array
    characters.push(character);
    // Call renderButtons function
    renderButtons();

});

$(document).on("click", ".button", displaySimpsonsCharacters);


$(document).on("click", ".gif", function() {
    console.log('register click');
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        console.log('state is equal to ' + state);
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    }); 

renderButtons();

