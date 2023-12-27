---
layout: post
title: Blog
permalink: /blog/
order: 2
---

{% for post in site.posts %}
{{ post.title }}
{% endfor %} 
