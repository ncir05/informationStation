//newsapi.org
//Key - 21e7be9b29be4a4ea22154548bea123b
//https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=21e7be9b29be4a4ea22154548bea123b
var urlBBC = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=';
var apiKey = 'Your API Key';
function getBBC() {
  $.getJSON(urlBBC + apiKey, function(data) {
    var i = 0;
    while(i < 5) {
      article = data.articles[i].title;
      $('#bbc'+ i).html(article);
      i++;
    }
    //console.log(data);
  });
}
