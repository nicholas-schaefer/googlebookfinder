$(document).on("click", "#scrapearticles", function () {
  $.ajax({
    method: "GET",
    url: "/scrape/"
  })
    // With that done, add the note information to the page
    .then(function (data) {
      location.reload();
    });
});

