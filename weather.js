//import DarkSkyApi from '/node_modules/dark-sky-api/src/dark-sky-api';
var time1;
function renderWeather() {
  //DarkSkyApi.apiKey = 'f03fd58a03d74bb2965c7d04439d8687';
  //DarkSkyApi.loadCurrent()
  //  .then(result => console.log(result));
  var t = new Date();
  var hours = t.getHours();
  var minutes = t.getMinutes();
  var seconds = t.getSeconds();
  var title = "Weather";
  var testing = "Pass" + hours + ":" + minutes + ":" + seconds;
  var counter = 0;
  if(time1) {
    clearTimeout(time1);
  }
  if((seconds == 1) && ((minutes % 15) == 0)) {
    document.getElementById("weatherTest" + counter).innerHTML = testing;
    counter++;
    //alert("I'm working sorta");
  }
  document.getElementById("column1").innerHTML = title;
  if(counter >= 4) {
    counter = 0;
  }
  //getWeather();
  time1 = setTimeout(weatherCycle,500);
}

function weatherCycle() {
  renderWeather();
}
