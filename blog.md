---
layout: page
title: Blogg
permalink: /blog/
---

<div class="home">

  <h1 class="page-heading">Blogginlägg</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.github.url }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">Prenumerera <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
