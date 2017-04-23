
var i;


function renderDate() {

  var d = new Date();
  var day = d.getDate();
  var month = (d.getMonth() + 1);
  var year = d.getFullYear();
  if(day < 10) {
    day = "0" + day;
  }
  var date = day + '/' + month + '/' + year;
  renderTime();
  document.getElementById("date").innerHTML = date;
  setTimeout(renderTime, 500);
}

function renderTime() {
  var t = new Date();
  var hours = t.getHours();
  var minutes = t.getMinutes();
  var seconds = t.getSeconds();
  var pm = false;
  var greeting = "Good Morning";

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
  if((seconds == 0 || seconds == 1) /*&& (minutes % 2) == 0*/) {
    //alert("PING!");
    document.getElementById("weatherTest1").innerHTML = i;
    i++;
  }
//  }
  if (hours < 10) {
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
  document.getElementById("time").innerHTML = time;
  document.getElementById("greet").innerHTML = greeting;
  setTimeout(renderDate, 500);
}
