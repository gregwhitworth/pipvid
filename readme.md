![PIPvid](https://github.com/gregwhitworth/pipvid/blob/master/300.png "PIPvid")

## Overview

PIPvid effectively adds a little icon to the top HTML video elements after you click the extension icon. This icon allows you to put the videos into PIP mode.

This leverages the standardized PIP API. I created this since so many websites haven't updated their sites, for one reason or another, to leverage the API. Ultimately this forces users to hack around it by making small browser windows and leveraging OS controls to keep the browser window on top.

## Sites where it works

While this works with a lot of websites that have a fairly common HTML 5 video setup. Sites that I have successfully tested PIPvid on are:

* ESPN
* Youtube
* Mixer.com
* Twitch.com
* CNN
* Netflix
* NFL GamePass
* Disney Plus

### ...and where it doesn't

Sites that manipulate the DOM a lot or adjust the styles upon playing in such a manner that it breaks the location of the control makes it so that some sites don't work. Here are some that I've tested that don't currently work:

* Hulu
* Hotstar
* NBA.com
* Polygon.com

## Feedback

Please feel free to file bugs but also understand that this is pretty much a side project. PRs are definately welcome.