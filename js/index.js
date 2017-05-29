var i;
var time1;
var loadCount = 0;

function renderDate() {
  //Setting datetime variables
  var d = new Date();
  var day = d.getDate();
  var month = (d.getMonth() + 1);
  var year = d.getFullYear();
  //Clear timeout cache
  if (time1) {
    clearTimeout(time1);
  }
  if (day < 10) {
    day = "0" + day;
  }
  var date = month + '/' + day + '/' + year;
  if (i != 0) {
    getCalendar();
    loadCount++;
  } else if (d.getHours() == 0 && d.getMinutes() == 0 && d.getSeconds() == 0) {}
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
  if (time1) {
    clearTimeout(time1);
  }
  if (hours > 0 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  if (hours >= 12) {
    pm = true;
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (i === undefined) {
    i = 0;
  }
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
  var ToD = "am";
  if (pm) {
    ToD = "pm";
  }
  var time = hours + ':' + minutes + ToD;
  document.getElementById("time").innerHTML = time;
  document.getElementById("greet").innerHTML = greeting;
  time1 = setTimeout(renderDate, 500);
}

function getCalendar() {
  $(document).ready(function() {
    $('#calendar').fullCalendar({
      //console.log("Ping3");
      // put your options and callbacks here
      theme: false,
      header: {
        left: 'title',
        center: '',
        right: 'prev,next'
      },
      buttonIcons: {
        prev: 'left-double-arrow',
        next: 'right-double-arrow'
      },
      height: 650,
      fixedWeekCount: false,
      editable: true,

      events: [{
          title: 'Chelsie\'s Birthday',
          start: '2017-05-27',
          allDay: true
        },
        {
          title: 'Memorial Day Weekend',
          start: '2017-05-26',
          end: '2017-05-29'
        },
        {
          title: 'Mother\'s Day',
          start: '2017-05-14'
        }
      ],
      eventColor: '#FF0000',
      eventTextColor: '#0000FF',
      eventBackgroundColor: '#00FF00'
    })
  });
}
