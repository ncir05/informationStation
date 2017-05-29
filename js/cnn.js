//newsapi.org
var urlCNN = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=';
var article;

function getCNN() {
  $.getJSON(urlCNN + newsAPIKey(), function(data) {
    var i = 0;
    while (i < 3) {
      article = data.articles[i].title;
      $('#cnn' + i).html(article);
      i++;
    }
    //console.log(data);
  });
}
