
var i;
var time1;


function renderDate() {
  //Setting datetime variables
  var d = new Date();
  var day = d.getDate();
  var month = (d.getMonth() + 1);
  var year = d.getFullYear();
  //Clear timeout cache
  if(time1) {
    clearTimeout(time1);
  }
  if(day < 10) {
    day = "0" + day;
  }
  var date = month + '/' + day + '/' + year;
  renderTime();
  document.getElementById("date").innerHTML = date;
  time1 = setTimeout(renderTime, 500);

}

function renderTime() {
  var t = new Date();
  var hours = t.getHours();
  var minutes = t.getMinutes();
  var seconds = t.getSeconds();
  var pm = false;
  var greeting = "Good Morning";
  if(time1) {
    clearTimeout(time1);
  }
  if(hours > 0 && hours < 12) {
    greeting = "Good Morning";
  } else if(hours >= 12 && hours < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  if(hours >= 12) {
    pm = true;
    hours -= 12;
  }

  if(i === undefined) {
    i = 0;
  }
//  if(seconds == 0 && (minutes == 0 || minutes == 30)) {
//  if((seconds == 0 || seconds == 1) /*&& (minutes % 2) == 0*/) {
    //alert("PING!");
  //  document.getElementById("weatherTest1").innerHTML = i;
  //  i++;
//  }
//  }
  if (hours < 10 && hours <= 12) {
    hours = "0" + hours;
  } else {
    hours = hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }
  //alert(hours + "--" + minutes + "--" + seconds);
  var ToD = "am";
  if (pm) {
    ToD = "pm";
  }
  var time = hours + ':' + minutes + ToD;
  $("tile2").append("TEST TEXT");
  document.getElementById("time").innerHTML = time;
  document.getElementById("greet").innerHTML = greeting;
  time1 = setTimeout(renderDate, 500);
}
