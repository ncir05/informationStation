//newsapi.org
//Key - 21e7be9b29be4a4ea22154548bea123b
//https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=21e7be9b29be4a4ea22154548bea123b
var urlCNN = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=';
var apiKey = 'Your API Key';
var article;
function getCNN() {
  $.getJSON(urlCNN + apiKey, function(data) {
    var i = 0;
    while(i < 5) {
      article = data.articles[i].title;
      $('#cnn'+ i).html(article);
      i++;
    }
    //console.log(data);
  });
}
