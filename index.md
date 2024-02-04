---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: about
---
{% include map.html %}

# Project: Lodestar

**Chart a course and embark across the perilous ocean of Lodestar!** Augment your body and your ship with salvaged tech; become the most ruthless Vessel to ever live. Take big risks, earn big rewards. Amass hordes of wealth and bankroll a naval empire.

Codenamed "Project: Lodestar" is a video game/research space I'm using to teach myself:
1. game development
2. the godot game engine
3. rust by way of [godot-rust](rust)
4. Jerry Tessendorf's model for [real-time ocean surface simulation](sim)
5. GIS and GIS mapping tools (little showcase in the map window)
6. AIS and NMEA message broadcasts
   
I'm also looking into combining GIS mapping with NOAA satellite imagery, per the suggestion of a friend. I am currently making an antenna and want to start collecting weather imagery with my [rtl-sdr](https://www.rtl-sdr.com/). Right now, I'm using [qgis](gis) to create my maps and it requires a lot of my attention to get working properly. I made the map of Lodestar by chopping up a shapefile of Alaska, which was fun but I'd like to eventually make another one from data in the video game. Creating a map from the ground-up will also teach me about map projections, which was a big pain point when exporting the map to the website. If I had spent more time on the map draft I would probably use Leaflet instead of Openlayers.

[spy]: https://www.rtl-sdr.com/
[rust]: https://godot-rust.github.io/
[sim]: https://people.computing.clemson.edu/~jtessen/reports/papers_files/waterslides2001.pdf
[gis]: https://qgis.org/en/site/
