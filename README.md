"# informationStation"

SHORT DESCRIPTION:
This project allows you to display the current time, date,
weather, news headlines and monthly calendar in an appealing format.

DESCRIPTION:
This project is meant to be transferable to a raspberry pi that
will display the information 24/7. Future versions will include different titles
to pick from for more information (thinking about stocks next). These tiles will
be selected from an outside source like a small touch screen with Bluetooth
capabilities.

BANNER:
Simple banner with time, greeting and date.

WEATHER:
Be sure to include the latitude and longitude for your location to get the most
accurate weather information. I used the DarkSkyApi from darksky.net which allows
up to 1000 free calls per day. The current settings only use 48 so there's a
little padding in case you have to refresh a lot (it's a new call every time you
refresh the page). I've also included some pictures I found and altered a little.
I have no ownership of them. They're only there to give you an idea of what yours
can look like. Also, I don't have a picture for fog, can't find one that matches
the theme.

NEWS:
I used newsapi.org to gather current headlines from CNN, BBC and the
Associated Press. Newsapi.org has numerous places to pull from, these are just
the ones I chose. I only displayed the top 5 headlines, but they also offer the
full articles, if you're so inclined. Future versions may cycle through more
sources and allow expansion to the article on touch/click/select. There is no
limit to the number of calls you're allowed to make through this site.

CALENDAR:
This is a standard calendar from jQuery. There's nothing special about it. I've
given a couple examples on how to make an event with it and did my own theming.
Fullcalendar.io/docs will show you how you can make further changes.
