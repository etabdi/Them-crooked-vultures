// Pixaby API
// api key = 14031716-ee5fc1d1564bb90e3420570a5
// https://pixabay.com/api/?key=14031716-ee5fc1d1564bb90e3420570a5&q=paris&image_type=photo&safesearch=true&order=popular&category=places&totalHits=1&fullHDURL

$(document).ready(function() {
  $(document).on("click", ".btn", function() {
    // This needs to pull the destination
    var destination = $("#destination")
      .val()
      .trim();
    console.log(destination);

    var queryURL =
      "https://pixabay.com/api/?key=14031716-ee5fc1d1564bb90e3420570a5&q=" +
      destination +
      "&image_type=photo&safesearch=true&order=popular&category=places&totalHits=1&fullHDURL";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var photo = response.hits[0].largeImageURL;



      var destinationImage = $("#destination-image");
      destinationImage.attr("src", photo);
    });
  });
});
