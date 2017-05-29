var globalCounter = 0;
var oneDayCounter;
var callLimit;
var summary;

function renderWeather() {
  //DarkSkyApi.weatherAPIKey() = '1393e36a6f0bf4724228852849b49ad9';
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
  if (oneDayCounter === undefined) {
    oneDayCounter = 0;
  }
  if (hours == 0 && minutes == 0 && seconds == 0) {
    oneDayCounter = 0;
    refresher();
  }

  document.getElementById("column1").innerHTML = title;
  if (counter >= 4) {
    counter = 0;
  }
  if (callLimit === undefined) {
    callLimit = true;
  } else if (!callLimit && seconds == 30) {
    callLimit = true;
  }
  //Call API's on load and every 30 minutes, but if the number of calls exceed 950 of the 1000 a day limit, stop
  if ((globalCounter == 0 || ((seconds == 1) && ((minutes % 30) == 0))) && oneDayCounter < 950 && callLimit) {
    b();
    getCNN();
    getAP();
    getBBC();
    globalCounter++;
    oneDayCounter++;
    callLimit = false;
  }
  //Summary is the computer readable (stable, non-varying in wording) version of the weather status
  if (summary == 'clear-day') {
    image = "pictures/clear.png";
  } else if (summary == 'partly-cloudy-day' || summary == 'fog') {
    image = "pictures/partlyCloudy.png";
  } else if (summary == 'rain') {
    image = "pictures/rain.png";
  } else if (summary == 'wind') {
    image = "pictures/windy.png";
  } else if (summary == 'cloudy') {
    image = "pictures/cloudy.png";
  } else if (summary == 'snow' || summary == 'sleet') {
    image = "pictures/snow.png";
  } else if (summary == 'clear-night') {
    image = "pictures/clearNight.png";
  } else if (summary == 'partly-cloudy-night') {
    image = "pictures/cloudyNight.png";
  } else {
    image = "pictures/clear.png";
  }
  $('#column1').html("<img id='weatherIcon' src='" + image + "'/>")
  setTimeout(weatherCycle, 500);
}

function b() {
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
  var url = 'https://api.forecast.io/forecast/';
  var data;

  $.getJSON(url + weatherAPIKey() + "/" + myLat() + "," + myLong() + "?callback=?", function(data) {
    console.log(data);
    summary = data.currently.icon;
    $('#weatherTest0').html(data.currently.temperature + "&deg;");
    $('#highLow').html("<font color='red'>" + data.daily.data[0].temperatureMax + "&deg; </font>/ " + "<font color='blue'>" + +data.daily.data[0].temperatureMin + "&deg; </font>");
    $('#weatherTest1').html(data.hourly.data[3].temperature + "&deg;");
    $('#weatherTest2').html(data.currently.summary);
    var i = 0;
    var mayRain = false;
    var rain = 0.0001;
    rain = data.daily.data[0].precipProbability;
    rain = rain * 100;


    $('#weatherTest3').html("Rain: " + parseInt(rain) + "%");
  });
}

function startCalendar() {

}

function weatherCycle() {
  renderWeather();
}
