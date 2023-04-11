---
title: Nightstand mode
layout: news
posted: 2023-03-28
post: true
thumbnails: nightstand
summary: The new Nightstand mode shows the state of a charging watch at a glance.
author: Ed Beroset (beroset)
---
When a watch is on the charger, it's useful to be able to see the state of charge at a glance.  We've implemented a new feature called **Nightstand mode** that helps with this.  It was originally requested in [this issue](https://github.com/AsteroidOS/asteroid/issues/151) and described like this:

># Scenario #

>A tired traveler arrives at a hotel late at night and finds there is no clock in the room.  Fortunately, this person has an AsteroidOS watch with nightstand mode.  She uses the settings to select the kind of display that she would like to use for this and enables the mode.  Then she puts the watch on its charging stand where it acts as sort of a bedside clock, prominently featuring the state of charge and the current time.  She wears glasses and does not want to have to put them on to see the time, so she chooses a watchface that is high contrast and features large numbers for the time.  Even with that, it's not always that easy to see the time, so it is configured so that at 3AM with no glasses, she can pick up the watch and bring it closer to note the time (ugh!  3AM!) and replace it on the stand within some configurable period of time with the watch not leaving nightstand mode.

# Features #
By default, when the Nightstand mode is enabled and the charger is connected, the watch changes to a nightstand version of the current watchface which typically adds a green charge indicator ring around the watchface.

To accommodate our glasses-wearing user as described in the scenario above, one can also select a custom watchface that will be used just when Nightstand mode is active.  This allows users to choose a complex and information-filled watchface during the day, but an easier-to-read version for nightstand mode.

Finally, when removed from the charger and after a configurable delay (from 0 to 30 seconds), the watch reverts to "daytime mode."

This mode is most useful when paired with Always-on display so the Nightstand mode display can be seen without unlocking the watch.

# Your ideas are welcome! #
Many of the features that are now implemented in AsteroidOS come from suggestions from users.  If you have ideas for a new feature or comments or questions on this one, drop by [Matrix chat](https://matrix.to/#/#Asteroid:matrix.org) and say hello.
