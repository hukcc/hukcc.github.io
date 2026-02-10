---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
excerpt: "Academic Curriculum Vitae"
---

{% include base_path %}

<div class="cv-download-block">
  <p>For a detailed academic CV including education, research experience, publications, and more, please download the PDF below.</p>
  <p><a href="{{ site.author.cv | prepend: site.baseurl }}" class="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer"><i class="fas fa-fw fa-file-pdf" aria-hidden="true"></i> Download CV (PDF)</a></p>
</div>

<style>
.cv-download-block {
  margin: 2em 0;
  padding: 1.5em;
  background: var(--global-bg-color-2, #f6f8fc);
  border-radius: 8px;
  max-width: 36em;
}
.cv-download-block p:first-child {
  margin-bottom: 1em;
  line-height: 1.6;
}
</style>
