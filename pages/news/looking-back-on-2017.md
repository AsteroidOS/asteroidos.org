---
title: Looking back on the year 2017 for AsteroidOS
layout: news
posted: 2018-01-10
post: true
summary: 2017 has been a very busy year for the AsteroidOS community. Let's recap what happened in terms of development and events during the year and what's left for 2018.
thumbnails: looking-back-on-2017
author: Florent Revest
---

<p>One year ago, we closed 2016 with the <a href="http://florentrevest.github.io/2016/12/07/asteroidos-alpha">alpha 1.0 release of AsteroidOS</a>. This release brought a lot of media attention to AsteroidOS and grew the community. However, back then, the project was still very young and suffered from all sorts of bugs and limitations.</p>

<p>Since the initial alpha release, we have focused on improving the overall stability and usability of AsteroidOS with the ultimate goal of releasing a stable v1.0. While this major release didn't see the light of day in 2017, a lot of great progress has been made.</p>

<p>After nearly 1800 commits and 20000 IRC messages exchanged (bot excluded), it is now high time to highlight all the hard work that has been achieved by the AsteroidOS community in 2017 and what's remaining for 2018.</p>

<h1>What has been done in 2017...</h1>
<h3>January</h3>
<ul>
  <li>Support for sensors (accelerometer, gyroscope, compass) on the LG G Watch <a href="https://twitter.com/AsteroidOS/status/823153058200907776">(more...)</a></li>
  <li>Support for the Fast Charging variant of the Asus Zenwatch 2</li>
  <li>Support for the microphone on several watches</li>
</ul>

<h3>February</h3>
<ul>
  <li>Support for Low Power Mode Bluetooth on various watches (multiplied battery life by 7 on several watches)</li>
  <li>Integration of GitHub hooks to <i>AsteroidBot</i>, our beloved IRC bot</li>
  <li>Brussels Community Meeting - FOSDEM Dinner <a href="https://twitter.com/AsteroidOS/status/827788483334959108">(more...)</a></li>
  <li>Support for vibrations on notifications</li>
  <li>Support for the Samsung Gear Live <a href="https://twitter.com/AsteroidOS/status/835489604916629505">(more...)</a></li>
  <li>Support for the Asus Zenwatch 1 <a href="https://twitter.com/AsteroidOS/status/830778377611182080">(more...)</a></li>
  <li>Support for the Asus Zenwatch 3 <a href="https://twitter.com/AsteroidOS/status/832339934912593920">(more...)</a></li>
  <li>Upgrade to Qt 5.7 and then to Qt 5.8</li>
</ul>

<h3>March</h3>
<ul>
  <li>Various internationalization infrastructure improvements</li>
  <li>Screenshot Bluetooth Low Energy profile</li>
  <li>Handwriting recognition integration</li>
</ul>

<h3>April</h3>
<ul>
  <li>Bluetooth Low Energy encryption and authentication</li>
  <li>Time synchronization Bluetooth Low Energy profile</li>
  <li>Proof of concept of Asteroid app written in Go <a href="https://therecipe.github.io/qt/">(more...)</a></li>
  <li>Support for the LG G Watch R <a href="https://twitter.com/AsteroidOS/status/841269665150181380">(more...)</a></li>
  <li>Presentation at FOSS-North <a href="http://foss-north.se/2017/talks.html#revest">(more...)</a></li>
  <li>Nightlies build server <a href="https://release.asteroidos.org/nightlies/">(more...)</a></li>
</ul>

<h3>May</h3>
<ul>
  <li>Notification preferences in AsteroiOSSync</li>
  <li>Support for USB MTP</li>
  <li>Upgrade to Qt 5.9</li>
</ul>

<h3>June</h3>
<ul>
  <li>Radical code base simplification with AsteroidApp</li>
  <li>Suppression of the App Switcher</li>
  <li>Upgrade to OpenEmbedded pyro</li>
</ul>

<h3>July</h3>
<ul>
  <li>New notification center</li>
  <li>New website</li>
</ul>

<h3>August</h3>
<ul>
  <li>ConnectWatch's crowdfunding announcement <a href="https://twitter.com/AsteroidOS/status/900769388290289664">(more...)</a></li>
  <li>Today calendar & weather launcher panel</li>
  <li>Swipe indicators</li>
  <li>London meetup <a href="https://twitter.com/AsteroidOS/status/899195185405538305">(more...)</a></li>
</ul>

<h3>September</h3>
<ul>
  <li>ConnectWatch's crowdfunding campaign <a href="https://ulule.com/connect-watch/">(more...)</a></li>
  <li>Mediatek watches proof of concept</li>
  <li>Telephony stack integration</li>
  <li>Support for GPS</li>
  <li>Support for media playback & sound on notifications</li>
</ul>

<h3>October</h3>
<ul>
  <li>Some bugs solved by Hacktoberfest participants <a href="https://twitter.com/AsteroidOS/status/916346854387912704">(more...)</a></li>
  <li>12/24 time format and Fahrenheit</li>
  <li>Upgrade to OpenEmbedded Rocko</li>
  <li>Development of a Compass app <a href="https://github.com/AsteroidOS/asteroid-compass">(more...)</a></li>
  <li>Alarm Clock UX revamp</li>
  <li>QEMU support <a href="https://asteroidos.org/wiki/emulator/">(more...)</a></li>
</ul>

<h3>November</h3>
<ul>
  <li>Major refactoring with lots of new qml-asteroid components</li>
  <li>Support for Bluetooth on the Sony Smartwatch 3</li>
  <li>Presentation at Capitole du Libre <a href="https://2017.capitoledulibre.org/programme/#bidouiller-sa-montre-connectee-avec-asteroidos">(more...)</a></li>
  <li>QtQuickCompiler integration</li>
  <li>Various i18n improvements</li>
</ul>

<h3>December</h3>
<ul>
  <li>First run tutorial and configuration</li>
  <li>Dynamic locale switching</li>
  <li>Presentation at KubeCon <a href="https://kccncna17.sched.com/event/40f339bdf6c0a800dd2c291f37f0cc36">(more...)</a></li>
  <li>Notification snoozing</li>
  <li>System upgrade documentation <a href="https://asteroidos.org/wiki/update-asteroidos/">(more...)</a></li>
  <li>Upgrade to Qt 5.10</li>
</ul>

<h2>A word on the ConnectWatch</h2>
<p>Since a significant part of the work and communication done by the AsteroidOS project in 2017 was related to the announcement of <i>ConnectWatch</i>, it would be unfair not to mention this episode. ConnectWatch was a french company which tried to <a href="https://www.ulule.com/connect-watch/">crowdfund an AsteroidOS watch under the same name</a> during August and September 2017.</p>

<p>The project was only pushed by one person, Arunan Sathasivan, without any tech, funding or marketing experience. From the very begining of the collaboration, huge communication issues were made apparent on the side of ConnectWatch. Hence, the AsteroidOS project took great care to distinguish the announcements made by this company from the work done by the community.</p>

<p>Despite those precautions, the watch project managed to mobilize enough members of our community to reach a total funding of 16000€. We greatly appreciate this interest and are very grateful for the support shown by those who believed in an AsteroidOS watch!</p>

<p>Eventually, the project didn't reach its funding goal and every contributor got refunded. This is probably for the best since Mr Sathasivan disappeared without a single word.</p>

<p>Overall, this experience showed that AsteroidOS was capable of working with OEMs and mobilizing its community for a hardware project. The project carried on stronger than ever and we still believe that a serious AsteroidOS watch project would have all the chances of succeeding.</p>

<h1>... And what's left for 2018</h1>
The new year already started with several major developments including:
<ul>
  <li><a href="https://github.com/AsteroidOS/libasteroid"><b>Libasteroid</b></a>: a cross-platform BLE connectivity library for AsteroidOS interoperability</li>
  <li><a href="https://github.com/AsteroidOS/asteroid-ctrl"><b>Asteroid-ctrl</b></a>: a dummy test application demoing libasteroid</li>
  <li><a href="https://asteroidos.org/news"><b>This "News" section</b></a>: the project's communication has always lacked behind its development, let's improve this in 2018!</li>
</ul>

<br>
The next few months of development also promise exciting news with the following planned announcements:
<ul>
  <li><b>New FOSDEM community dinner</b>: let us know on Twitter if you'd be interested in joining us</li>
  <li><b>Starfish</b>: a SailfishOS app relying on libasteroid (already a work in progress)</li>
  <li><b>AsteroidOSSync stability improvements</b>: various AsteroidOSSync bug fixes to polish BLE's usability</li>
  <li><b>v1.0 release</b>: the stable release of Asteroid has never been closer, stay tuned!</li>
</ul>

<h1>Join us!</h1>
<p>As a final note, please note that you are very welcome to join the AsteroidOS project by attending community meetings, <a href="https://asteroidos.org/contact/">joining the IRC channel</a>, <a href="https://asteroidos.org/wiki/translating-asteroidos/">translating the project</a>, <a href="https://github.com/search?q=org%3AAsteroidOS+type%3Aissues&state=open&type=Issues">contributing to one of the various open GitHub issues</a> and <a href="https://asteroidos.org/community/">many other tasks</a>.</p>

<br>
<p>Happy new year!</p>
