//newsapi.org
//Key - bfd8e94bf24a4cb1913e5901ae61c46d
//https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=bfd8e94bf24a4cb1913e5901ae61c46d
var urlAP = 'https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=';
var apiKey = /*Your API Key*/;
function getAP() {
  $.getJSON(urlAP + apiKey, function(data) {
    var i = 0;
    while(i < 5) {
      article = data.articles[i].title;
      $('#ap'+ i).html(article);
      i++;
    }
    console.log(data);
  });
}
