//import DarkSkyApi from '/node_modules/dark-sky-api/src/dark-sky-api';
var globalCounter = 0;
var oneDayCounter;
var callLimit;
var summary;
function renderWeather() {
  //DarkSkyApi.apiKey = 'f03fd58a03d74bb2965c7d04439d8687';
  //DarkSkyApi.latAndLong = '29.533185,-98.585747';
  //DarkSkyApi.loadCurrent()
  //  .then(result => console.log(result));
  var t = new Date();
  var hours = t.getHours();
  var minutes = t.getMinutes();
  var seconds = t.getSeconds();
  var title = "Weather";
  var testing = "Pass" + hours + ":" + minutes + ":" + seconds;
  var counter = 0;
  var image = '';
  if(oneDayCounter === undefined) {
    oneDayCounter = 0;
  }
  if(hours == 0 && minutes == 0 && seconds == 0) {
    oneDayCounter = 0;
  }

  /*if((seconds == 1) && ((minutes % 15) == 0)) {
    document.getElementById("weatherTest" + counter).innerHTML = testing;
    counter++;
    //alert("I'm working sorta");
  }*/
  document.getElementById("column1").innerHTML = title;
  if(counter >= 4) {
    counter = 0;
  }
  //getWeather();
  if(callLimit === undefined){
    callLimit = true;
  } else if (!callLimit && seconds == 30) {
    callLimit = true;
  }
  if((globalCounter == 0 || ((seconds == 1) && ((minutes % 30) == 0))) && oneDayCounter < 950 && callLimit) {
    b();
    getCNN();
    getAP();
    getBBC();
    globalCounter++;
    oneDayCounter++;
    callLimit = false;
  }
  if(summary == 'clear-day') {
    image = "pictures/clear.png";
  } else if(summary == 'partly-cloudy-day' || summary == 'fog') {
    image = "pictures/partlyCloudy.png";
  } else if(summary == 'rain') {
    image = "pictures/rain.png";
  } else if(summary == 'wind') {
    image = "pictures/windy.png";
  } else if(summary == 'cloudy') {
    image = "pictures/cloudy.png";
  } else if(summary == 'snow' || summary == 'sleet') {
    image = "pictures/snow.png";
  } else if(summary == 'clear-night') {
    image = "pictures/clearNight.png";
  } else if(summary == 'partly-cloudy-night') {
    image = "pictures/cloudyNight.png";
  } else {
    image = "pictures/clear.png";
  }
  $('#column1').html("<img id='weatherIcon' src='" + image + "'/>")
  setTimeout(weatherCycle,500);
}

function b(){
    /*Possible icon options
     snow,
     sleet,
     fog,
     clear-night,
     partly-cloudy-night,
     clear-day,
     cloudy,
     partly-cloudy-day,
     wind,
     rain,
     */
    var apiKey = 'f03fd58a03d74bb2965c7d04439d8687';
    var url = 'https://api.forecast.io/forecast/';
    var lati = 29.533185;
    var longi = -98.585747;
    var data;

    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
      //console.log(data);
      summary = data. currently.icon;
      $('#weatherTest0').html(data.currently.temperature + "&deg;");
      $('#weatherTest1').html(data.currently.summary);
      var i = 0;
      var mayRain = false;
      var rain = 0.0001;
      //precipProbability
      for(r in data.hourly.data) {
        if(data.hourly.data[i].precipProbability > 0.0001) {
          if(data.hourly.data[i].precipProbability > rain) {
            rain = data.hourly.data[i].precipProbability;
          } else {
            rain = 0;
          }
          i++;
        }
        //rain = rain * 100;

      }
      $('#weatherTest2').html("Rain: " + parseInt(rain) + "%");
    });
}

function startCalendar() {

}

function weatherCycle() {
  renderWeather();
}
