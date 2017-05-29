//newsapi.org
var urlBBC = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=';

function getBBC() {
  $.getJSON(urlBBC + newsAPIKey(), function(data) {
    var i = 0;
    while (i < 3) {
      article = data.articles[i].title;
      $('#bbc' + i).html(article);
      i++;
    }
    //console.log(data);
  });
}
