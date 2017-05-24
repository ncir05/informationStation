var time1;
function renderWeather() {
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
  }
  document.getElementById("column1").innerHTML = title;
  if(counter >= 4) {
    counter = 0;
  }
  time1 = setTimeout(weatherCycle,500);
}

function weatherCycle() {
  renderWeather();
}
