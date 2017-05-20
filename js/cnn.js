//newsapi.org
//Key - bfd8e94bf24a4cb1913e5901ae61c46d
//https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=bfd8e94bf24a4cb1913e5901ae61c46d
var urlCNN = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=';
var apiKey = 'bfd8e94bf24a4cb1913e5901ae61c46d';
var article;
function getCNN() {
  $.getJSON(urlCNN + apiKey, function(data) {
    var i = 0;
    while(i < 5) {
      article = data.articles[i].title;
      $('#cnn'+ i).html(article);
      i++;
    }
    console.log(data);
  });
}
