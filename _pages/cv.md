---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
excerpt: "Academic Curriculum Vitae"
---

<div class="cv-download-block">
  <p>{{ site.data.cv.basics.summary }}</p>
  <p><a href="{{ site.author.cv | relative_url }}" class="btn btn--primary btn--large"><i class="fas fa-fw fa-file-pdf" aria-hidden="true"></i> Download CV (PDF)</a> <a href="{{ '/cv-json/' | relative_url }}" class="btn btn--inverse">Read CV online</a></p>
</div>

<style>
.cv-download-block {
  margin: 2em 0;
  padding: 1.5em;
  background: var(--global-code-background-color, var(--global-bg-color));
  border-radius: 8px;
  max-width: 36em;
}
.cv-download-block p:first-child {
  margin-bottom: 1em;
  line-height: 1.6;
}
</style>
