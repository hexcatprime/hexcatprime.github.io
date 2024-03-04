---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: about
---
{% include map.html %}

# Project: Polestar

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
- I like the idea of chunking the world into pentagons and stitching them together. I think it would be trivial to instance a chunk one-after-another, but eventually we'd need to teleport the player close to the origin. Even though they're traversing the same chunks, the player is getting further away from the origin and this will introduce floating point precision errors. I'm not really sure how to implement this teleportation, especially in a multiplayer context because my intuition tells me that this approach will create drift, where absolute coordinates could translate to different places for two different players. 
  
---
### 2024-02-14 <3
One of my first ideas about game map chunking was making the world similar to a deconstructed soccer ball. The player would be teleported between the disconnected edges and this logic would imitate the traversal around a globe. I would be able to preserve the typical physics and wouldn't have to worry about creating islands/buildings with respect to spherical geometry.

![poly][poly]

Soccer world has its cons. I imagine the teleportation between disjointed edges will be troublesome, I may need to find some other projection where all the other edges mate nicely. If I were to simulate the sun and moon this map wouldn't realistically depict them towards the poles. This shortcoming is probably true for all projections so I'll need to jury-rig some solution for the skybox. 

To the player, the sun could appear to travel across a linear path, but we could program it to move in an arc, rising in the north and setting in the north. Something like this would occur if we built a game world around the [Waterman][waterman] projection. Notice how the equator forms a U shape. 

I still don't know for certain what would be the best way to create this type of game world. 

![waterman][watproj]
---
### 2024-03-04
I took a break from working on the ocean compute shader. Learning GLSL has proved challenging and graphics card programming is a new paradigm for me. I shifted my attention to using rust in godot to replace some classes and alleviate scripting overhead. My previous worries about godot-rust were unfounded.

I made a planet class and staged a scene with Jupiter and the Gallilean moons. I'm going to attempt to make a 3d skybox, which will be visually impressive when fully implemented. Europa is tidally locked with Jupiter, meaning half of the sky will have Jupiter hanging overhead and the other half will be in darkness. 

I also created a splashscreen video (below) in blender. I put this together in a couple of hours and I taught myself shapekeys, material shaders, and how to use animation keyframes. The animations were looking a little rigid so I made sure to put easing functions on the transition between keyframes.

I had some difficulty animating the local rotation of the jaw, since I was able to rotate it as desired in the viewport but not in the animation. The animator doesn't respect local transformations so I needed to switch from XYZ Euler's rotations to Quaternions in order to properly animate the jaw rotating. Aside from that, it was relatively smooth sailing. There's still a lot to learn about the compositor and render pipeline, which was avoided since this was rendered straight from the viewport.
![splash][splash]
![icon][icon]


[spy]: https://www.rtl-sdr.com/
[rust]: https://godot-rust.github.io/
[sim]: https://people.computing.clemson.edu/~jtessen/reports/papers_files/waterslides2001.pdf
[gis]: https://qgis.org/en/site/
[dev]: https://www.youtube.com/watch?v=7L6ZUYj1hs8&t
[shader0]: /assets/images/20240213-ocean-0.gif
[shader1]: /assets/images/20240213-ocean-1.gif
[garden]: https://www.youtube.com/watch?v=ed2zmmcEryw
[poly]: /assets/images/polyhedron.png
[waterman]: https://en.wikipedia.org/wiki/Waterman_butterfly_projection
[watproj]: /assets/images/waterman.png
[splash]: /assets/images/splashscreen.gif
[icon]: /assets/images/icon.svg