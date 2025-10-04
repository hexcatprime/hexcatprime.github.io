---
layout: post
filename: 2024-02-14-clock-puzzle.md
title: clock puzzle
author: dubsbol
date: 2024-02-14 05:08:26
---
I showed my website to my parents some time back. They seemed superficially interested, but there wasn't anything here to grab their curiosity. The projects tab is nice for technical people that know what github is, but I think they would have liked to see something tangible from the code I've written (or a description, because some of the names are apocryphal).

### Enter the Clock Puzzle

I'll revisit the clock puzzle for this purpose and see if I can embed a web assembly clock puzzle onto the website itself.

---
### 2024-02-16
Web assembly isn't really suited for the clock puzzle project. I could have probably implemented it in javascript with much less effort. That's aside the point, this is a learning experience for learning web assembly.

The Yew framework for Rust-Wasm appears pretty intimidating, so I may revert to some simpler approach in this paradigm. I am most certainly doing something wrong; the current implementation loops infinitely and grabs the local time, updating the clock afterwards. This approach causes the page to refresh endlessly and eventually stall out. Ideally, the loop would run once per second and edit the clock "LEDs" in-place (i.e without a page refresh). 

My attempts to export the compiled .wasm file to this website have also been unsuccessful.