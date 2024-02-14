---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: about
---
{% include map.html %}

# Project: Lodestar

**Chart a course and embark across the perilous ocean of Lodestar!** Augment your body and your ship with salvaged tech; become the most ruthless Vessel to ever live. Take big risks, earn big rewards. Amass hordes of wealth and bankroll a naval empire.

The Project codenamed "Lodestar" is a video game/research space I'm using to teach myself:
1. Game development
2. The Godot game engine
3. Rust by way of [godot-rust][rust]
4. Jerry Tessendorf's model for [real-time ocean surface simulation][sim]
5. GIS and GIS mapping tools (little showcase in the map window)
6. AIS and NMEA message broadcasts
   
I'm also looking into combining GIS mapping with NOAA satellite imagery, per the suggestion of a friend. I am currently making an antenna and want to start collecting weather imagery with my [RTL-SDR][spy]. Right now, I'm using [QGIS][gis] to create my maps and it requires a lot of my attention to get working properly. I made the map of Lodestar by chopping up a shapefile of Alaska, which was fun but I'd like to eventually make another one from data in the video game. Creating a map from the ground-up will also teach me about map projections, which was a big pain point when exporting the map to the website. If I had spent more time on the map draft I would probably use Leaflet instead of Openlayers.

## Updates
---
### 2024-02-13
I got my environment setup and created a shader using a tutorial from [StayAtHomeDev][dev]. The first image is just a mix of two noise maps, each of which is being scrolled through in their own directions. This occurs in the fragment shader portion of the code and effects the texture of the ocean surface. 

![shader][shader0]

The second image is an implementation with a vertex shader, meaning the vertices in the ocean mesh are being tranformed. The vertex shader makes the height differences similar to that of a wave. This would be best suited for some kind of static cloth simulation, since this shader only displaces the vertex along one axis. More sophisticated fluid simulations account for turbulent waves displacing a water droplet across all three axes.

![shader][shader1]

This should be a good starting point for Tessendorf's model.


**Other findings:**
- godot-rust may not be as useful as originally anticipated. A lot of the engine works off scripts, which doesn't appear to have a rust substitute.
- I have yet to find another game that mimics globe behavior using flat planes. Closest I got was [manifold garden][garden] with 3d world wrapping.
- I like the idea of chunking the world into pentagons and stiching them together. I think it would be trivial to instance a chunk one-after-another, but eventually we'd need to teleport the player close to the origin. Even though they're traversing the same chunks, the player is getting further away from the origin and this will introduce floating point errors. I'm not really sure how to implement this teleportation, especially in a multiplayer context because my intuition tells me that this approach will create drift, where absolute coordinates could translate to different places for two different players. 

[spy]: https://www.rtl-sdr.com/
[rust]: https://godot-rust.github.io/
[sim]: https://people.computing.clemson.edu/~jtessen/reports/papers_files/waterslides2001.pdf
[gis]: https://qgis.org/en/site/
[dev]: https://www.youtube.com/watch?v=7L6ZUYj1hs8&t=614s
[shader0]: /assets/images/20240213-ocean-0.gif
[shader1]: /assets/images/20240213-ocean-1.gif
[garden]: https://www.youtube.com/watch?v=ed2zmmcEryw