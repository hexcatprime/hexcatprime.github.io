---
layout: post
title:  "5 levels of minecraft server"
author: dubsbol
date:   2023-12-27 02:08:59 -0500
categories: tech
---
I've played minecraft for 10 years and always needed to host minecraft servers for my friends. At first, the servers were kind of primitive. Now, they are more sophisticated.

I believe that hosting servers was influential in guiding me towards my studies in system adminstration and cybersecurity. Minecraft was a practical, approachable, subject I could work on as an inexperienced teenager.

---

1. **Share on LAN & Private Tunnel**
   
   Before we knew how to make a server, my friends and I would use a VPN service like LogMeIn Hamachi to access eachothers' networks. One of us would open our Minecraft game to LAN, allowing everyone else to join.

   One issue with this approach is that the remote players could only log in if the world owner was also online. This was enough of an issue we needed to search for other solutions.
2. **Server & Private Tunnel**

    Changing as little as possible, I downloaded the Minecraft server binaries and would run it on the same laptop I played the game. Now the server could run 24/7 even when my character logs off, just as long as I kept my laptop lid open.

    Aside from performance issues, the amount of players on the server increased beyond the number of connections allowed on a free license of Hamachi.
3. **Dedicated Server & Port Forwarding**
   
   This step is where I began familiarizing myself with Debian and using the terminal. I remember experiencing some growing pains, but seeing everything work after my efforts was satisfactory. Port forwarding meant I could serve more than 5 players at a time and they didn't need to install any additional software, which was really nice. I made a dedicated server and was able to remote into it using SSH. 

   I would remote into the server a lot to fix it; I didn't have any helper scripts and the server was susceptible to crashes when it had long uptime. The Minecraft server binaries were still run under my user account and the system would occasionally stop the process if my account was inactive after a certain period of time.
4. **System + Chron Daemon Delegation**

    Before getting to Systemd, the Minecraft server was still a process of my Debian user. I would use tmux or the screen command to detach the Minecraft server process and shunt it into the background, allowing me to continue working from the terminal.I was even able to send commands to the process and change the state of the game world. From the bash terminal I could change the weather... or strike my friends with lightning.

    My experiences with the screen command were a little finicky, so I found a better solution in Systemd.
    *UNDER CONSTRUCTION*
5. **Socket Communication**
   *UNDER CONSTRUCTION*