//newsapi.org
var urlAP = 'https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=';

function getAP() {
  $.getJSON(urlAP + newsAPIKey(), function(data) {
    var i = 0;
    while (i < 3) {
      article = data.articles[i].title;
      $('#ap' + i).html(article);
      i++;
    }
    //console.log(data);
  });
}
