// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#search-button").click(function(){
    var userInput = $("input").val();
 var request_url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=dc6zaTOxFJmzC";
 $.ajax({
  url: request_url,
  method: "GET",
  success: function(response) {
    $(".text-center").html("<img src='"+ response.data[0].images.fixed_height_still.url +"'/>");
    

    console.log(response);
  },
});

  
  
});

