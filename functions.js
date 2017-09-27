function retrieveQuote() {
  var getQuote = "";
  var getAuthor = "";
  
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
    headers: {
      "X-Mashape-Key" : "CmtrWsVeWtmshgRd0ZQioglJkQ65p1YaekhjsnE583KUQBLIhr",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    success: function(data) {
    // console.log(data[0].quote);
      // data.forEach(function(val){
        getQuote = data.quote;
        getAuthor = data.author;
        console.log(getQuote);
        generateQuote(getQuote, getAuthor);
        // console.log(getQuote);
      // });
    }
   });
};

function generateQuote(quote, author) {
  // console.log(quote);
  var message = document.getElementById('messages');
  var spanTag = document.createElement('span');
  // spanTag.className += "positionSpan";
  var breakTag = document.createElement("br")
  var quoteText = document.createTextNode('"' + quote + '"');
  var authorText = document.createTextNode(" - " + author);
  // console.log(quote);
  // console.log(spanTag);
  message.appendChild(quoteText);
  message.appendChild(breakTag);
  spanTag.appendChild(authorText);
  message.appendChild(spanTag);
}

$(document).ready(function(){
//   $("#getMessage").on("click", function(){
   retrieveQuote();
//   });
});
