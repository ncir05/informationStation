//newsapi.org
//Key - bfd8e94bf24a4cb1913e5901ae61c46d
//https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bfd8e94bf24a4cb1913e5901ae61c46d
var urlBBC = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=';
var apiKey = 'bfd8e94bf24a4cb1913e5901ae61c46d';
function getBBC() {
  $.getJSON(urlBBC + apiKey, function(data) {
    var i = 0;
    while(i < 5) {
      article = data.articles[i].title;
      $('#bbc'+ i).html(article);
      i++;
    }
    console.log(data);
  });
}
